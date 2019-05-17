<template>
    <div id="main">
        <div class="main_top"><router-view></router-view></div>
        
        <div class="main_bottom">
             <div  class="main_bottom_common" @click="changeColor($event)">
                  <img :src='"../assets/main/icon_shouye_"+defult1+".png"' />
                  <span>首页</span>
             </div>
             <div class="main_bottom_common"   @click="changeColor">
                  <img :src='"../assets/main/icon_aizanyinhang_"+defult2+".png"' />
                  <span>爱攒银行</span>
             </div>
             <div class="main_bottom_common teshu"  @click="changeColor">
                  <img :src='"../assets/main/icon_lianmengzhongxin_"+defult3+".png"' />
                  
             </div >
             <div class="main_bottom_common" @click="changeColor">
                  <img :src='"../assets/main/icon_shouye_"+defult4+".png"' />
                  <span>攒圈</span>
             </div>
             <div class="main_bottom_common" @click="changeColor">
                  <img :src='"../assets/main/icon_wode_"+defult5+".png"' />
                  <span>我的</span>
             </div>
        </div>
    </div>
</template>

<script>

export default {
    data(){
         return{
              defult1:'defult',
              defult2:'defult',
              defult3:'defult',
              defult4:'defult',
              defult5:'defult'
         }
    },
    methods:{
         changeColor(event){
              console.log(event)
          this.defult='selected'
         }
    }
}
</script>

<style scoped>

     #main{
         display:flex;
         flex-direction: column;
         height: 100vh;
     }
     #main .main_top{
        overflow:auto;
         flex: 1;
     }
     #main .main_bottom{
      flex-shrink: 0;
	  height: 98px;
	  display:flex;
      justify-content: space-around;
     }
     .main_bottom img{
         width: 40px;
	     height: 42px;
     }
     .main_bottom .main_bottom_common{
         display:flex;
         flex-direction: column;
         justify-content: center;
         align-items: center
     }
     .main_bottom .teshu img{
          width: 91px;
	     height: 91px;
          padding-bottom: 40px;
     }
</style>


