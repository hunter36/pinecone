<template>
  <vcredit></vcredit>
</template>

<script>
import vcredit from '../../components/credit/CreditRecord'
export default {
	components: {
      // 可以以key-value的形式注册组件, 此时挂载点的名字就是key
      // 否则挂载点和组件名字一致, 即vhead
      vcredit
    }
}
</script>

<style>

</style>
