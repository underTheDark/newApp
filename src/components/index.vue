<template>
  <div id="index">
    <div class="searchArea">
      <div class="searchBox">
        <input type="text" placeholder="春装上新">
        <img src="../assets/index/icon_search.png">
      </div>
      <img src="../assets/index/icon_kefu.png">
      <img src="../assets/index/icon_defult_msg.png">
    </div>
    <div class="main_content">
      <div class="part_top">
        <div class="user_message">
          <span>{{dayTime}}</span>
          <img src="../assets/index/img_touxiang.png">
          <span>{{userName}}</span>
        </div>
        <div class="banner">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(item,index) in arr" :key="index">
               
                  <img :src="item.imgUrl">
              </div>
              <!-- <div class="swiper-slide" >
               
                  <img src="../assets/index/img_02.png">
              </div>
              <div class="swiper-slide" >
               
                  <img src="../assets/index/img_03.png">
              </div>
              <div class="swiper-slide" >
              
                  <img src="../assets/index/img_04.png">
              </div> -->
            </div>
            <div class="swiper-pagination swiper-pagination-bullets"></div>
          </div>
         
        </div>
        <div class="display_img"></div>
      </div>
      <div class="part_bottom"></div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import api from "@/api/kind";
export default {
  data() {
    return {
      userName: "用户",
      dayTime: "早上好",
      arr:null,
    };
  },
  methods: {
      getDateTime(){
      var  date = new Date();
      var $Datetime=date.getHours()
        if($Datetime >= 0 && $Datetime < 7){
            this.dayTime="早上好"
        }else if($Datetime >= 7 && $Datetime < 11){
            this.dayTime="上午好"
        }else if($Datetime >= 11 && $Datetime < 14){
            this.dayTime="中午好" 
        }else if($Datetime >= 14 && $Datetime < 18){
             this.dayTime="下午好"
        }else if($Datetime >= 18 && $Datetime <0){
              this.dayTime="晚上好"
        }
        
    }
  },
  mounted() {
    var _this=this;
    //获取用户名
   var username= window.localStorage.getItem("username")
   this.userName=username
    //当天时间
   this.getDateTime()
   //请求轮播数据
    api.getIndex().then(function(res){
       console.log(res);
      
      if (res.data.code == 1) {
        console.log(res.data.data.banners)
        _this.arr = res.data.data.banners;
      } else {
        alert(res.data.msg_cn);
      }
    })
     var abcSwiper = new Swiper(".swiper-container", {
        direction : 'horizontal',   //设置slider容器能够同时显示的slides数量
        centeredSlides: true,    //设定为true时，活动块会居中，而不是默认状态下的居左。
        loop: true,
        autoplay:true,
        slidesPerView: 'auto',      //设置为true时禁止切换
        spaceBetween:18,
        loopAdditionalSlides : 3,
        height: 300,
        pagination : { el:'.swiper-pagination'}
      
    });
  },

};
</script>

<style  scoped>
#index {
  display: flex;
  flex-direction: column;
}
#index .searchArea {
  position: fixed;
  top: 40px;
  left: 0;
  display: flex;
  justify-content: space-around;
  width: 100%;
  align-items: center;
  height: 70px;
}
.searchArea .searchBox {
  position: relative;
  width: 500px;
  height: 70px;
}
.searchBox input {
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  outline: none;
  background-color: #ffffff;
  border-radius: 35px;
  text-indent: 1em;
  height: 100%;
}
.searchArea img {
  width: 45px;
  height: 45px;
  background-color: #161010;
}
.searchBox img {
  position: absolute;
  right: 30px;
  top: 13px;
}
/* 主要内容的展示 */
.main_content {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  flex-grow: 1;
  overflow: hidden;
}
.main_content .part_top {
  padding-top: 160px;
  display: flex;
  flex-direction: column;
}
.part_top .user_message {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 40px;
}
.user_message img {
  width: 60px;
  height: 60px;
  margin: 0 10px;
}
.user_message span {
  /* font-family: PingFang-SC-Bold; */
  font-size: 32px;
  font-weight: normal;
}
/* 轮播 */
.banner {
  margin-top: 75px;
  
}


.swiper-container {
margin-top: 0.2rem;
width:100%;

height:390px;

overflow: visible !important;

position: relative;

}

.swiper-container .swiper-wrapper .swiper-slide {

width:80%;
 border-radius: 0.12rem;

}

.swiper-container .swiper-wrapper .swiper-slide img {
width: 100%;
height: 400px;
border-radius: 0.12rem;

}

.swiper-container .swiper-wrapper .swiper-slide-prev {
margin-top: 0.18rem;
height: 3.5rem !important;

}

.swiper-container .swiper-wrapper .swiper-slide-prev img { height: 360px !important;

}

.swiper-container .swiper-wrapper .swiper-slide-next {
margin-top: 0.18rem;
height: 2.5rem !important;

}

.swiper-container .swiper-wrapper .swiper-slide-next img {
height: 360px !important;

}

.swiper-container .swiper-wrapper .swiper-slide-active {
width: 605px;

}

.swiper-pagination {
bottom: 0.1rem !important;

}

</style>
