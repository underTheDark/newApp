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
      <div class="part_top" ref="bgc">
        <div class="user_message">
          <span>{{dayTime}}</span>
          <img src="../assets/index/img_touxiang.png">
          <span>{{userName}}</span>
        </div>
        <div class="banner">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <!-- <img :src="banner"> -->
                <img :src="arr[0].imgUrl">
              </div>
              <div class="swiper-slide">
                <!-- <img :src="banner"> -->
                <img :src="arr[1].imgUrl">
              </div>
              <div class="swiper-slide">
                <!-- <img :src="banner"> -->
                <img :src="arr[2].imgUrl">
              </div>
              <div class="swiper-slide">
                <!-- <img :src="banner"> -->
                <img :src="arr[3].imgUrl">
              </div>
            </div>
            <div class="swiper-pagination swiper-pagination-bullets"></div>
          </div>
        </div>
        <div class="display_img">
          <img src="../assets/index/img_05.png">
        </div>
        <div class="background_line"></div>
      </div>
      <!--秒杀界面 -->
      <div class="part_bottom">
             <mt-navbar v-model="selected" style="color:black">
          <mt-tab-item  :id="index+1" v-for="(item,index) in dateArr" :key="index">
               <div>08:00</div>
               <div></div>
          </mt-tab-item>
          <!-- <mt-tab-item id="2">
            <div>12:00</div>
             <div></div>
          </mt-tab-item>
          <mt-tab-item id="3">
             <div>20:00</div>
             <div></div>
          </mt-tab-item>
            <mt-tab-item id="4">
            <div>24:00</div>
             <div></div>
          </mt-tab-item> -->
        </mt-navbar>
       
        <mt-tab-container v-model="selected">
          <mt-tab-container-item id="1" >
          
             <div>08:00</div>
             <div></div>
          </mt-tab-container-item>
          <mt-tab-container-item id="2">
           
          </mt-tab-container-item>
          <mt-tab-container-item id="3">
          
          </mt-tab-container-item>
        </mt-tab-container>-->
        <ul class="secKill_header">
          <li v-for="(item,index) in dateArr" :key="index" @click="changeSec(item)">
            <!-- <p>{{item<9 ?"0"+item+":00":item+":00"}}</p> -->
            <span>{{timestatus}}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import api from "@/api/kind";
import bg1 from "../assets/index/bj_01.png"
import bg2 from "../assets/index/bj_02.png"
import bg3 from "../assets/index/bj_03.png"
import bg4 from "../assets/index/bj_04.png"


export default {
  data() {
    return {
      userName: "用户",
      dayTime: "早上好",
      arr: null,
      selected: 2,
      dateArr: null,
      dateList: null,
      timestatus:[]
      
    };
  },
  methods: {
    myTime(date) {
      var arr = date.split("T");
      var d = arr[0];
      var darr = d.split("-");

      var t = arr[1];
      var tarr = t.split(".000");
      var marr = tarr[0].split(":");

      var dd =
        parseInt(darr[0]) +
        "/" +
        parseInt(darr[1]) +
        "/" +
        parseInt(darr[2]) +
        " " +
        parseInt(marr[0]) +
        ":" +
        parseInt(marr[1]) +
        ":" +
        parseInt(marr[2]);
      return dd;
    },

    //秒杀状态
    changeSec(target) {},
    //时间段
    getDateTime() {
      var date = new Date();
      var $Datetime = date.getHours();
      if ($Datetime >= 0 && $Datetime < 7) {
        this.dayTime = "早上好";
      } else if ($Datetime >= 7 && $Datetime < 11) {
        this.dayTime = "上午好";
      } else if ($Datetime >= 11 && $Datetime < 14) {
        this.dayTime = "中午好";
      } else if ($Datetime >= 14 && $Datetime < 18) {
        this.dayTime = "下午好";
      } else if ($Datetime >= 18 && $Datetime < 0) {
        this.dayTime = "晚上好";
      }
    },
    //秒杀时间段状态
      getTimeStatus(startT,endT){
              var startTime = startT
              var endTime = endT

              var nowTime = new Date().getTime();
              startTime = new Date(startTime).getTime();
              endTime = new Date(endTime).getTime();
              console.log(nowTime, startTime, endTime);
              if (startTime > nowTime) {
                console.log(1);
                 return "1";
              } else if (startTime < nowTime && endTime > nowTime) {
                 return "2";
              } else if (endTime < nowTime) {
                 return "3";
              }
     }

  },
  mounted() {
    var _this = this;

    //获取用户名
    var username = window.localStorage.getItem("username");
    this.userName = username;
    //当天时间段
    this.getDateTime();
    //请求轮播数据
    api.getIndex().then(function(res) {
       console.log(res);

      if (res.data.code == 1) {
        _this.arr = res.data.data.banners;
         for (var obj in _this.dateList) {
          let timeList = _this.dateList[obj];

          if (timeList) {
            if (timeList.length > 0) {
              var newarr={}
              var startTime = timeList[0].start_time;
              var endTime = timeList[0].end_time;
              _this.getTimeStatus(startTime,endTime)
              
            }
            }
        }

      } else {
        alert(res.data.msg_cn);
      }
    }).then(function(){
      //初始化swiper
       var abcSwiper = new Swiper(".swiper-container", {
      direction: "horizontal", //设置slider容器能够同时显示的slides数量
      centeredSlides: true, //设定为true时，活动块会居中，而不是默认状态下的居左。
      loop: true,
       autoplay: true,
      slidesPerView: "auto", //设置为true时禁止切换
      spaceBetween: 10,

      pagination: { el: ".swiper-pagination" },
      on: {
        slideChangeTransitionEnd: function() {
          // console.log(self.$refs.bgc)
          console.log(this.activeIndex);//切换结束时，告诉我现在是第几个slide
          switch (this.activeIndex) {
            case 5:
               _this.$refs.bgc.style.backgroundImage="url("+bg4+")";
               
              break;
            case 6:
               _this.$refs.bgc.style.backgroundImage ="url("+bg3+")";
              break;
            case 7:
               _this.$refs.bgc.style.backgroundImage = "url("+bg2+")";
              break;
           
             default:
               _this.$refs.bgc.style.backgroundImage ="url("+bg1+")";
          }
        }
      }
    });
    });
    //请求秒杀
    api
      .secKillList()
      .then(function(res) {
        console.log(res);

        if (res.data.code == 1) {
          _this.dateList = res.data.data.comList;
          _this.dateArr = res.data.data.array;
        } else {
          alert(res.data.data.msg_cn);
        }
      })
      .then(function() {
        //秒杀状态
        
        for (var obj in _this.dateList) {
          let timeList = _this.dateList[obj];

          if (timeList) {
            if (timeList.length > 0) {
              var startTime = timeList[0].start_time;
              var endTime = timeList[0].end_time;

              var nowTime = new Date().getTime();
              startTime = new Date(startTime).getTime();
              endTime = new Date(endTime).getTime();
              console.log(nowTime, startTime, endTime);
              if (startTime > nowTime) {
                console.log(1);
                 return "1";
              } else if (startTime < nowTime && endTime > nowTime) {
                
                 return "2";
              } else if (endTime < nowTime) {
                 return "3";
              }
            }
          }
        }
      });

   
  }
};
</script>

<style  scoped>
li {
  list-style: none;
}
#index {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
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
  background-size:100% 400px;
  background-repeat:no-repeat
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

.swiper-container {
   margin-top: 0.2rem;
   width: 100%;
   height: 3.72rem;
   overflow: visible !important;
   position: relative;
}
.swiper-container .swiper-wrapper .swiper-slide {
   width: 8.62rem;
   border-radius: 0.12rem;
}
.swiper-container .swiper-wrapper .swiper-slide img {
   width: 100%;
   height: 3.72rem;
   border-radius: 0.12rem;
}
.swiper-container .swiper-wrapper .swiper-slide-prev {
   margin-top: 0.18rem;
   height: 3.5rem !important;
}
.swiper-container .swiper-wrapper .swiper-slide-prev img {
   height: 3.4rem !important;
}
.swiper-container .swiper-wrapper .swiper-slide-next {
   margin-top: 0.18rem;
   height: 3.5rem !important;
}
.swiper-container .swiper-wrapper .swiper-slide-next img {
   height: 3.4rem !important;
}
.swiper-container .swiper-wrapper .swiper-slide-active {
   width: 8.62rem;
}
.swiper-pagination {
   bottom: 0.1rem !important;
}

.display_img {
  margin: 60px auto 0;
}
.display_img img {
  width: 689px;
  height: 171px;
}
.background_line {
  width: 100%;
  height: 11px;
  background-color: #f1f1f1;
}

.mint-navbar .mint-tab-item.is-selected {
  border-bottom: 0.04rem solid red;

  color: red;
}
/* 秒杀界面 */
.secKill_header {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.secKill_header li {
  width: 25%;
  text-align: center;
}
</style>
