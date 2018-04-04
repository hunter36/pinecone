<template>
  <vconsumption></vconsumption>
</template>

<script>
import vconsumption from '../../components/consumption/Consumption'
export default {
	components: {
      // 可以以key-value的形式注册组件, 此时挂载点的名字就是key
      // 否则挂载点和组件名字一致, 即vhead
      vconsumption
    }
}
</script>

<style>

</style>
