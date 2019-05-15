<template>
     <div id="register">
                <div class="headTitle">
                    <img @click="back" src="../assets/register/back.png">
                    <span>注册</span>
                </div>
                <div class="contain">
                    <div class="phone">
                        <img src="../assets/register/icon_shouji.png">
                        <input class="pnoneNumber" type="text" placeholder="请输入手机号" ref="phone"/>
                    </div>
                    <div class="code">
                        <img src="../assets/register/icon_yanzhengma.png">
                        <input class="authCode" type="text" placeholder="请输入验证码" ref="SMSCode"/>
                        <img @click="getAuthCode" src="../assets/register/getCode.png">
                    </div>
                    <div class="password">
                        <img src="../assets/register/icon_mima.png">
                        <input class="psw" type="text" placeholder="请设置登录密码" ref="psw"/>
                
                    </div>
                    <div class="inviteCode">
                        <img src="../assets/register/icon_yaoqingma.png">
                        <input class="int_code" type="text" placeholder="请输入邀请码" ref="referee"/>
                
                    </div>
                    <div class="register" v-on:click="reg">
                        <img class="reg" src="../assets/register/btn_zhuce.png">
                    </div>
                    <div class="viewAgree"> 
                         <input class="check" type="checkbox" v-model="state" @change="alocked"/>
                         <a href="#">我已阅读并同意《爱攒攒APP协议》</a>    
                    </div>
                </div>
            </div>
</template>

<script>
 import api  from "@/api/kind.js"
export default {
    data(){
        return {
            state:false
        }
    },
    methods:{
            getAuthCode(){
                 api.getCode({phone:this.$refs.phone.value,}).then(function(data){
                     if(data.code==1){
                        alert(data.data.msg_cn)
                      
                    }else{
                        alert(data.data.msg_cn)
                    }
                 })
            },
 
         reg(){
            if(this.state) {
                var params={ 
                    phone:this.$refs.phone.value,
                    password:this.$refs.psw.value,
                    SMSCode:this.$refs.SMSCode.value,
                    referee:this.$refs.referee.value}

                api.reg(params).then(function(data){
                     if (1 == res.code) {
                     alert("注册成功");
                     this.$router.push({path:"/login"})
                } else {
                    alert(res.msg_cn);
                }
                 })
             
            }else{
                alert("请查看并同意协议")
            }
        },
        alocked(){
            
        
        },
        back(){
             this.$router.go(-1);//返回上一层
        }
    }
}
</script>

<style scoped>
     img{
    display:block;
    border:none;
    width:0.3rem;
    height:70%;
    margin-right:0.15rem;
}

input{
    font-size: 0.3rem;
    border:none;
    height:100%;
    outline: none;
    flex-grow:1;
    line-height: 100%;
}

#register{
     display:flex;
     flex-direction: column;
     height:100%;
     align-items: center;
    
     width:100%;
}


#register .headTitle img{
    width:.4rem;
    height:.4rem;
    position: absolute;
    left:.5rem;
}
#register .headTitle span{
    font-size: .4rem;
    color:white;
}
#register .headTitle{
    position: relative;
    justify-content: center;
    align-items: center;
    background-image: linear-gradient(90deg, 
		#ffad51 0%, 
        #ff367c 100%);
        height:1rem;
        width:100%;
     display:flex;
}
#register .contain{
    display: flex;
    margin-top:1.3rem;
    width:80%;
    flex-direction: column;
  
}
.contain .phone,.password,.code,.inviteCode{
    display:flex;
    height:0.8rem;
    padding:0.2rem 0 0.1rem;
    align-items: center;
    border-bottom: 1px solid gray;
}


.password img:nth-of-type(2){
    height: 0.3rem;
  }
.register img{
    height:.9rem;
    margin:.6rem 0 0 10%;
    width:80%;
}

.code img:nth-of-type(2){
    width:30%;
    height:.6rem;
}
.viewAgree{
    display: flex;
    margin-top:.3rem;
    justify-content: center;
    align-items: center;
}
.viewAgree input {
    width:.3rem;
    height:.3rem;
   
    flex-grow:0 ;
}
.viewAgree a{
    
    color: #999999;
    font-size: 0.24rem;
    text-decoration: none;
}
</style>


