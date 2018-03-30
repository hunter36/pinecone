<template>
  <div id="storeBox">
      <TitleBar/>
      <div class="card">

      </div>
      <div class="store">
          <img src="../assets/门店1图@2x.png" alt="加载中...">
          <section>DIBA 东邦皮肤管理中心</section>
          <p>
              <span>万象城店</span>
              <span> <230m </span>
          </p>
      </div>
  </div>
</template>
<script>
    import TitleBar from '@/components/TitleBar'
    export default {
        name:'search',
        components:{
            TitleBar
        },
        data() {
            return{
                
            }
        }
    }
</script>
<style scoped>
    #storeBox{
        width: 100%;
        height: 14.375rem;
    }
    .store{
        width: 50%;
        height: 13.125rem;
        padding: 5.5px 5px 10px 5px;
        border-radius: 5px;
        border: 1px solid #ECECEC;
    }
    .store img{
        width: 100%;
    }
    
</style>

