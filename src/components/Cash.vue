<template>
  <div calss="cash">
    <div class="header">
      <img src="../assets/cash/icon_back.png" >
      <p>提现</p>
    </div>
    <div class="content">
      <div class="inputmoney">
        <div class="origin">
          <div class="icon"></div>
          <span class="title">输入提现金额</span>
        </div>
        <div class="num">
          <span>￥</span>
          <input type="text" v-model="number">
        </div>
      </div>
      <div class="type">
        <div class="origin">
          <div class="icon"></div>
          <span class="title">选择提现到</span>
        </div>
        <div class="weixin" @click="wdisplay">
          <img src="../assets/cash/icon_weixin.png" alt="">
          <span class="detail" >微信</span>
          <div></div>
          <div class="circle">
            <div :class="wjudge"></div>
          </div>
        </div>
        <div class="zhifubao" @click="zdisplay">
          <img src="../assets/cash/icon_zhifubao.png" alt="">
          <span class="detail">支付宝</span>
          <div></div>
          <div class="circle">
            <div :class="zjudge"></div>
          </div>
        </div>
      </div> 
      <img @click="btCash" class="btcash" src="../assets/cash/btn_lijitixian.png" alt="">
    </div>
    <div class="footer">
      <p>提现规则</p>
      <ol class="list">
        <li  v-for="(item,index) in ruls" :key="index">{{item}}</li>
      </ol>
    </div> 
  </div>
</template>
<script>
export default {
  data(){
    return {
      number:'',
      ruls:['新用户首次一元即可提现；','首次提现后，每次满10元可提现；','正常工作日提现T+1到账；','微信提现用户，请先关联微信账号。'],
      wjudge:'incircle',
      zjudge:''
    }
  },
  methods:{
    wdisplay(){
      this.wjudge='incircle';
      this.zjudge='';
    },
    zdisplay(){
      this.wjudge='';
      this.zjudge='incircle';
    },
    btCash(){
      api.getCash().then(function(res){
        console.log(res)
      })
    }
  }
}
</script>
<style scoped>
input {
  outline: none;
}
.Cash{
    display: flex;
    flex-direction: column;
    background-color: #f1f1f1;
}
.header{
  width: 100%;
  height: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(90deg, 
#ffad51 0%, 
#ff367c 100%);
}
.header p{
	font-size: 36px;
	color: #ffffff;
}
.header img{
    position: absolute;
    left:.5rem;
    width:20px;
    height:30px;
}
.content {
  margin-left: .5rem;
  margin-top: 1rem;
  text-align: left
}
.origin{
  display:flex;
  align-items: center;
}
.icon{
  width: 10px;
  height: 32px;
  background-color: #ff925b;
  display: inline-block;
}
.title{
  margin-left:6px;
  font-size: 32px;
}
.num span{
  font-size: 52px;
  margin-top: .6rem;
}  
.num input{
  height: 52px;
  border: none;
  margin-top: .6rem;
  font-size: 40px;
}
.type{
  margin-top: .5rem;
}
.weixin, .zhifubao{
  display: flex;
  margin-top: .6rem;
  margin-bottom: .6rem;
}
.weixin img, .zhifubao img{
  width: 40px;
  height: 40px;
  margin-left: .5rem;
  position: relative;
} 
.detail{
  font-size: 28px;
  margin-left: .2rem;
}
.circle{
  width: .4rem;
  height: .4rem;
  border: .05rem solid#1E9765;
  border-radius: .4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 85%;
}
.incircle{
  width: .26rem;
  height: .26rem;
  border-radius: .26rem;
  background-color: #1E9765;
  
}
.btcash{
  width:95%;
  height:1.3rem;
  margin-top: 1.5rem; 
}
.footer{
  text-align: left;
  margin-top: 1.5rem;
}
.footer p {
  margin-left: .5rem;
  font-size: 24px;
}
.footer li{
  margin-left: -0.2rem;
}
</style>


