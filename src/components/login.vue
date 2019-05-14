<template>
    <div id="login">
        <div class="logo">
            <img src="../assets/login/img_logo.png">
        </div>
        <div class="contain">
            <div class="phone">
                <img src="../assets/login/icon_shouji.png">
                <input class="phoneNumber" type="text" placeholder="请输入手机号" ref="phone"/>
            </div>
            <div class="password">
                <img src="../assets/login/icon_mima.png">
                <input  class="psw" :type="changetype" placeholder="请输入密码" ref="psw"/>
                <img class="view_psw" src="../assets/login/icon_hide.png" @click="viewPsw">
            </div>
            <div class="loginIn" @click="loginIn">
            
                <img src="../assets/login/btn_denglu.png">
        
            </div>
            <div class="skipOther">
            
                <router-link to="/register">手机注册</router-link>
               
                <!-- <router-link to="/forgetPsw">忘记密码</router-link> -->
            </div>
            <div class="partLine">
                <span></span>
                <span>或</span>
                <span></span>
            </div>
            <div class="weixin">
                <img src="../assets/login/icon_weixin.png">
                <span>微信</span>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios"

	// const myaxios = axios// 不跨域的axios
  	//    // 如果要跨域的话, 对axios进行一些设置,当前使用的是跨域的
  	// const axiosInstance = axios.create({
  	//     headers: {'Content-Type': 'application/json;charset=utf-8'},// 设置传输内容的类型和编码
  	//     withCredentials: true,// 指定某个请求应该发送凭据。允许客户端携带跨域cookie，也需要此配置
  	// });

export default {
    data(){
        return{
             changetype:"password"
        }
        
    },
    methods:{
        loginIn(){
             axios.post("/login",{
               
                phone:this.$refs.phone.value,
                password:this.$refs.psw.value,
                }).then(function(data){
                   
                  console.log(this.$refs.phone.value)

                    if(data.code==1){
                        alert(data.msg_cn)
                      
                    }else{
                        alert(data.msg_cn)
                    }
                })
        },
        viewPsw(){
             this.changetype = this.changetype=='password'?'text':'password';
            
        }
    }
}
</script>

<style scoped>

input{
    font-size: 0.3rem;
    border:none;
    height:100%;
    outline: none;
    flex-grow:1;
}
#login{
     display:flex;
     flex-direction: column;
     height:100%;
     align-items: center;
     padding-top:1.8rem;
     width:100%;
}


#login .logo img{
    width:1.5rem;
    height:1.5rem;

}
#login .contain{
    display: flex;
    margin-top:1.3rem;
    width:80%;
    flex-direction: column;
  
}
.contain .phone,.password{
    display:flex;
    height:0.7rem;
    padding:0.1rem;
    align-items: center;
    border-bottom: 1px solid gray;
}
.phone img{
    width:0.3rem;
    height:70%;
    margin-right:0.15rem;
}
.password img{
    width:0.3rem;
    height:70%;
    margin-right:0.15rem;
}
.password img:nth-of-type(2){
    height: 0.3rem;
  }
.loginIn img{
    height:.8rem;
    margin:.6rem 0 0 10%;
    width:80%;
}
#login .skipOther{
    display:flex;
    justify-content: space-between;
    font-size: .28rem;
    margin-top:.3rem;
}
.skipOther a{
    color:#ff4079;
    text-decoration: none;
}
#login .partLine{
    display:flex;
    align-items: center;
    justify-content: space-between;
    margin-top:1.1rem;
}
.partLine span{
    width:45%;
    border-bottom:1px solid gray;/* no */
}
.partLine span:nth-child(2){
    width:10%;
    font-size: .25rem;
    color:gray;
    border-bottom:none;
    text-align: center
}

#login .weixin{
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top:.5rem;
}
.weixin img{
    width:1.2rem;
    height:1.2rem;

}
.weixin span{
    font-size: .3rem;
    color:gray;
}
</style>


