<template>
	<vcertifition></vcertifition>
	<vcertifition></vcertifition>
  <vcomplete></vcomplete>
</template>

<script>
import vcertifition from '../../components/certifition/Certifition'
import vcomplete from '../../components/certifition/Complete'
export default {
	components: {
      // 可以以key-value的形式注册组件, 此时挂载点的名字就是key
      // 否则挂载点和组件名字一致, 即vhead
      vcertifition,
      vcomplete
    }
}
</script>

<style>

</style>
