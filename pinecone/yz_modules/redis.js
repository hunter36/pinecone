/**
 * Created by yz on 2018-1-07.
 */
const redis = require('redis');
var config = require('../config');

const redisObj = {
    client: null,
    connect: function () {
        this.client = redis.createClient({port:config.redisPort,host:config.redisHost,password:config.redisPass,retry_strategy: function (options) {
            if (options.error && options.error.code === 'ECONNREFUSED') {
                // End reconnecting on a specific error and flush all commands with
                // a individual error
                return new Error('The server refused the connection');
            }
            if (options.total_retry_time > 1000 * 60 * 60) {
                // End reconnecting after a specific timeout and flush all commands
                // with a individual error
                return new Error('Retry time exhausted');
            }
            if (options.attempt > 10) {
                // End reconnecting with built in error
                return undefined;
            }
            // reconnect after
            return Math.min(options.attempt * 100, 3000);
        }});
        this.client.on('error', function (err) {
            console.log('redisCache Error ' + err);
        });
        this.client.on('ready', function () {
            console.log('redisCache connection succeed');
        });
        // this.client.auth(config.redisPass, function () {
        //     console.log('通过认证');
        // });
    },
    init: function () {
        this.connect(); // 创建连接
        const instance = this.client;

        // 主要重写了一下三个方法。可以根据需要定义。
        const get = instance.get;
        const set = instance.set;
        const hmset = instance.hmset;
        const hgetall = instance.hgetall;
        instance.set = function (key, value, callback) {
            if (value !== undefined) {
                set.call(instance, key, JSON.stringify(value), callback);
            }
        };

        instance.get = function (key, callback) {

            get.call(instance, key, (err, val) => {
                if (err) {
                    console.log('redis.get: ', key, err);
                }
                callback(null, JSON.parse(val));
            });

        };
        instance.hmset = function (key, value, callback) {
            if (value !== undefined) {
                hmset.call(instance, key, value, callback);
            }
        };

        instance.hgetall = function (key, callback) {

            hgetall.call(instance, key, (err, val) => {
                if (err) {
                    console.log('redis.get: ', key, err);
                }
                callback(err, val);
            });

        };
        return instance;

    }
};

// 返回的是一个redis.client的实例
module.exports = redisObj.init();

