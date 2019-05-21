<template>
    <div id="main">
        <div class="main_top"><router-view></router-view></div>
        
        <div class="main_bottom">
             <router-link to="/index" class="main_bottom_common" >
                  <img ref="index" :src="'/index' === $route.path ? tabBarImgArr[0].selected : tabBarImgArr[0].normal" @click="changeIndex("/index")"/>
                  <span>首页</span>
             </router-link>
             <router-link to="/bank" class="main_bottom_common"   >
                  <img ref="bank" :src="'/bank' === $route.path ? tabBarImgArr[1].selected : tabBarImgArr[1].normal" @click="changeBank("/bank")"/>
                  <span>爱攒银行</span>
             </router-link>
             <router-link to="/index" class="main_bottom_common teshu" >
                   <img :src="'/home' === $route.path ? tabBarImgArr[2].selected : tabBarImgArr[2].normal" @click="changeCenter($event)"/>
                  
             </router-link >
             <router-link to="/index" class="main_bottom_common" >
                   <img :src="'/home' === $route.path ? tabBarImgArr[3].selected : tabBarImgArr[3].normal" @click="changeCircle($event)"/>
                   <span>攒圈</span>
             </router-link>
             <router-link to="/my" class="main_bottom_common" >
                   <img :src="'/home' === $route.path ? tabBarImgArr[4].selected : tabBarImgArr[4].normal" @click="changeMy($event)"/>
                   <span>我的</span>
             </router-link>
        </div>
    </div>
</template>

<script>
import img1 from "../assets/main/icon_shouye_selected.png"
import img2 from "../assets/main/icon_aizanyinhang_setected.png"
import img3 from "../assets/main/icon_lianmengzhongxin_selected.png"
import img4 from "../assets/main/icon_shouye_selected.png"
import img5 from "../assets/main/icon_wode_selected.png"

export default {
    data(){
         return{
              defult:'defult',
              tabBarImgArr:[   //图片切换
        {normal: require('../assets/main/icon_shouye_defult.png'), selected: require('../assets/main/icon_shouye_selected.png')},
        {normal: require('../assets/main/icon_aizanyinhang_defult.png'), selected: require('../assets/main/icon_aizanyinhang_setected.png')},
        {normal: require('../assets/main/icon_lianmengzhongxin_defult.png'), selected: require('../assets/main/icon_lianmengzhongxin_selected.png')},
        {normal: require('../assets/main/icon_shouye_defult.png'), selected: require('../assets/main/icon_shouye_selected.png')},
        {normal: require('../assets/main/icon_wode_defult.png'), selected: require('../assets/main/icon_wode_selected.png')}
      ]
         }
    },
    methods:{
         changeIndex(event){
          console.log(event,this.$refs.index)
          this.defult="defult"
          this.$refs.index.src=img1
         },
         changeBank(){
          this.defult="defult"
          this.$refs.bank.src=img2
         }

    }
}
</script>

<style scoped>
     a{
          text-decoration: none;
     }
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
      align-items: center;
      position: relative;
     }
     .main_bottom img{
         width: 40px;
	     height: 42px;
     }
     .main_bottom .main_bottom_common{
         display:flex;
         flex-direction: column;
         justify-content: center;
         align-items: center;
         color:black;
     }
     .main_bottom .teshu img{
          width: 91px;
	     height: 91px;
     
          position: absolute;
          top:-20px;
          z-index: 1;
     }
     .main_bottom .router-link-active{
          color: #ed6160;
          font-family: PingFang-SC-Medium;
     }
</style>


