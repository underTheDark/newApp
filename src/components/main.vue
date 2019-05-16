<template>
    <div id="main">
        <div class="main_top"><router-view></router-view></div>
        
        <div class="main_bottom">
             <div  class="main_bottom_common">
                  <img src="../assets/main/icon_shouye_defult.png" />
                  <span>首页</span>
             </div>
             <div class="main_bottom_common">
                  <img src="../assets/main/icon_aizanyinhang_defult.png" />
                  <span>爱攒银行</span>
             </div>
             <div class="main_bottom_common">
                  <img src="../assets/main/icon_lianmengzhongxin_defult.png" />
                  
             </div >
             <div class="main_bottom_common">
                  <img src="../assets/main/icon_shouye_defult.png" />
                  <span>攒圈</span>
             </div>
             <div class="main_bottom_common">
                  <img src="../assets/main/icon_wode_defult.png" />
                  <span>我的</span>
             </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
     #main{
         display:flex;
         flex-direction: column;
         height: 100%;
     }
     #main .main_top{
        overflow:auto;
         flex-grow: 1;
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
</style>


