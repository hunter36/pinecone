<template>
  <div id="title-bar">
      <span>{{message}}</span>
  </div>
</template>
<script>
    export default {
        props:['message'],
        data() {
            return {
                
            }
        }
    }
</script>
<style>
  #title-bar{
      height: 1.875rem;
      font-size: 14px;
      color: #666666;
      line-height: 1.875rem;
      background-image: url(../assets/标头线@2x.png);
      background-size: 100%;
      background-position: center;
      background-repeat: no-repeat;
  }
</style>
