<template>
  <div id="mymoney">
    <div class="headTitle">
      <img @click="back" src="../assets/register/back.png">
      <span>我的攒池</span>
    </div>
    <div class="add_bj"></div>
    <div class="contain">
      <div class="mymoney_partone">
        <div class="mymoney">
          <div>
            <span>余额</span>
            <span>0</span>
          </div>
          <div>提现</div>
        </div>
        <div class="myday">
          <div class="pool_contribute">
            <span>攒池贡献（天）</span>
            <span>0.0</span>
          </div>
          <div class="pool_contribute">
            <span>荐点</span>
            <span>0.0</span>
          </div>
        </div>
      </div>
      <div class="mymoney_parttwo">
            <mt-navbar v-model="selected">
                <mt-tab-item id="1">全部</mt-tab-item>
                <mt-tab-item id="2">订单</mt-tab-item>
                <mt-tab-item id="3">攒池</mt-tab-item>
                <mt-tab-item id="4">荐点</mt-tab-item>
            </mt-navbar>

            <!-- tab-container -->
            <mt-tab-container v-model="selected">
                    <mt-tab-container-item id="1">
                        11
                    </mt-tab-container-item>
                    <mt-tab-container-item id="2">
                        22
                    </mt-tab-container-item>
                    <mt-tab-container-item id="3">
                        33
                    </mt-tab-container-item>
                    <mt-tab-container-item id="4">
                        44
                    </mt-tab-container-item>
            </mt-tab-container>
      </div>
    </div>
  </div>
</template>
<script>

import api from "@/api/kind";
export default {
    data(){
        return{
             selected:'1'
        }
    },
    mounted(){
    //    api.getEarn().then(function(res){
    //       console.log(res)
    //    })
    },
    methods:{
          back(){
              this.$router.go(-1)
          }
    }
};
</script>
<style scoped>
#mymoney {
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;

  width: 100%;
  height:100vh;
}

#mymoney .headTitle img {
  width: 0.4rem;
  height: 0.4rem;
  position: absolute;
  left: 0.5rem;
}
#mymoney .headTitle span {
  font-size: 0.4rem;
  color: white;
}
#mymoney .headTitle {
  position: relative;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(90deg, #ffad51 0%, #ff367c 100%);
  height: 1rem;
  width: 100%;
  display: flex;
  flex-shrink: 0
}

.contain {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  background: #eeeeee;
  width: 100%;
  flex-grow: 1;

}
.contain:after {
  content: ".";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
  overflow: hidden;
}
.add_bj {
  background-image: linear-gradient(90deg, #ffad51 0%, #ff367c 100%);
  height: 2rem;
  width: 100%;
  flex-shrink: 0;
}
.mymoney_partone {
  width: 90%;
  background-color: #ffffff;
  box-shadow: 0px 3px 7px 0px rgba(0, 0, 0, 0.11);
  border-radius: 17px;
  position: absolute;
  left: 50%;
  top: 0%;
  -webkit-transform: translate(-50%, -30%);
  -moz-transform: translate(-50%, -30%);
  transform: translate(-50%, -30%);
  padding-top: 30px;
}
.mymoney_partone .mymoney {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #333333;
}
.mymoney div:nth-child(1) {
  display: flex;
  flex-direction: column;
  /* align-items: center; */
}
.mymoney div:nth-child(1) span:nth-child(1) {
  font-size: 28px;
}
.mymoney div:nth-child(1) span:nth-child(2) {
  font-size: 32px;
  display: inline-block;
  padding: 10px;
}
.mymoney div:nth-child(2) {
  width: 70px;
  height: 32px;
  background-color: #ff9759;
  border-radius: 9px;
}
.myday {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 40px;
  color: #333333;
  font-size: 28px;
  margin: 40px 0;
}
.pool_contribute {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.mymoney_parttwo{
    box-sizing: border-box;
    width:100%;
    position:absolute;
    top:30%;
    padding:30px;
}

/* navbar 修改背景颜色 */
.mint-navbar{
   height: 104px;
	background-image: linear-gradient(90deg, 
		#ffad51 0%, 
		#ff367c 100%);
        display: flex;
        align-items: center;
        justify-content: space-around;
     
  
}
.mint-tab-item{flex:none}
.mint-navbar .mint-tab-item.is-selected{
    color:#ffffff;
    border-bottom-color:white;
    
}
.mint-navbar .mint-tab-item-label{
    font-size: 38px;
}
</style>

