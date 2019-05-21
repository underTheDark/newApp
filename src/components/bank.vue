<template>
     <div id="bank">
         <div class="bank_top">
             <span>&lt;</span>
             <span>爱攒银行</span>
             <span>规则说明</span>
         </div>
         <div class="bank_bottom">
             <div class="bank_total_money">
                 <div class="total_money">
                     <p>攒池金额(元)</p>
                     <p>1000</p>
                     <p>攒额：<span>0.5</span>/天
                     </p>
                 </div>
                 <div class="total_day">收益周期
                     <span>1</span>
                     <span>1</span> 天
                 </div>
                 <img  src="../assets/bank/btn_zan.png" />
             </div>
             <div class="bank_pro_money">
                 <div class="pro_title">提升攒额及周期</div>
                 <div class="pro_money">
                     <div class="pro_progress">
                         <span>攒额(0.1/天)</span>
                         <div>
                             <mt-progress :value="20" :bar-height="10"></mt-progress>
                         </div>
                     </div>
                     <img src="../assets/bank/btn_quyaoqing.png">
                 </div>
                 <div class="pro_day">
                      <div class="pro_progress">
                         <span>周期(30/90)</span>
                         <div>
                             <mt-progress :value="20" :bar-height="10"  ></mt-progress>
                         </div>
                     </div>
                     <img src="../assets/bank/btn_quyaoqing.png">
                 </div>
                 <div class="pro_addDay">
                        <div class="title">增加额外周期</div>
                        <div class="add_method">
                            <div>
                                <span>购买1件商品</span>
                                <span>购买1件商品就能获得额外周期一周</span>
                            </div>
                            <img src="../assets/bank/btn_quwancheng.png">
                        </div>
                 </div>
             </div>
             <div class="bank_invite_friend">
                 <div class="invite_num">
                    <p>累计获得攒粉 <span>(1000)</span></p> 
                    <p>认证推手可获得每人贡献0.1/天</p>
                    <ul>
                        <li>

                        </li>
                    </ul> 
                 </div>
                 <div class="invite_view">
                     <p>预计可获得贡献攒池<strong>50.00</strong>/天</p>
                    <img src="../assets/bank/btn_chakangongxian.png" > 
                 </div>
             </div>
         </div>
     </div>
</template>

<script>
import api from "@/api/kind";
export default {
    data(){
        return{

        }
    },
    methods:{
        
    },
    mounted(){
        api.getTotalInvite().then(function(res){
            console.log(res)
        })
    }
}
</script>

<style scoped>
p{
    margin:0;
    padding:0;
}
     #bank{
         display:flex;
         flex-direction: column;
         align-items: center;
         width:100%;
         background: url("../assets/bank/img_bj.png") no-repeat ;
         background-size:100% 100%;
     }
     #bank .bank_top{
         display:flex;
         justify-content: space-between;
         align-items: center;
         color:white;
         width:90%;
         
     }
     .bank_top span:nth-child(1){
         font-size: 60px;
     }
     .bank_top span:nth-child(2){
        font-size: 40px
     }
     .bank_top span:nth-child(3){
         font-size: 34px;
     }
     .bank_bottom{
         display:flex;
         flex-direction: column;
         align-items: center;
         margin-top:320px;
         width:100%
     }
     .bank_bottom .bank_total_money{
         width:90%;
         height:334px;
         background: url("../assets/bank/bj_zanchi.png") no-repeat;
         background-size: 100% 100%;
         position: relative;
     }
     .bank_total_money .total_money{
         position: absolute;
	width: 247px;
	height: 247px;
    left:50%;
    translate: (-50%,-50%);
    top:25%;
	border: solid 8px #fed43d;
     border-radius: 247px;
    -webkit-transform: translate(-50%,-50%);
    -moz-transform: translate(-50%,-50%);
    transform:translate(-50%,-50%);
    background: white;
    color: #ffa32c;
    font-size: 32px;
}
.total_money p:nth-child(1){
    margin-top:50px;
}
.total_money p:nth-child(2){
    font-size: 36px;
    margin:20px 0;
    font-weight: 700
}
.total_money p:nth-child(3){
    color:black;
    font-size: 28px;
}
.total_money p:nth-child(3) span{
    color:red;
}
.bank_total_money img{
    position: absolute;
    right:25px;
    bottom:32px;
    width: 155px;
	height: 155px;
} 
.bank_total_money .total_day{
    position: absolute;
    left:50%;
    translate: (-50%,0);
    bottom:67px;
	
    -webkit-transform: translate(-50%,0%);
    -moz-transform: translate(-50%,0%);
    transform:translate(-50%,0%);
    font-size: 30px;
}
.total_day span{
    display: inline-block;
    width: 31px;
	
     color: #ffa32c;
    background-color: #ffffff;
}
.bank_pro_money{
         display:flex;
         flex-direction: column;
        width:90%;
        background: #ffffff;
        margin:20px 0;
        border-radius: 20px;
        align-items: flex-start;
        padding:20px;
        box-sizing: border-box
}
.bank_pro_money .pro_title{
    font-size:36px;
    margin:38px 0 30px;
    font-weight: 700
}
.bank_pro_money .pro_money,.pro_day{
    display:flex;
    justify-content: space-between;
    width:100%;
    border-bottom:1px solid  #f2f2f2;
    padding-bottom:40px;
   
}
.pro_day{
    margin-top:20px;
}
.pro_day span{
    text-align: left;
    font-size: 26px;

	color: #ff9624;
}
.pro_progress span{
    text-align: left;
    font-size: 26px;
	
	color: #ff9624;
}
 .pro_progress{
    width:80%;
    height:60px;
    display:flex;
    flex-direction: column;
    
     } 

    .pro_money img{
        width:18%;
        height:56px;
    }
     .pro_day img{
        width:18%;
        height:56px;
    }

    .pro_addDay{
        display:flex;
        flex-direction: column;
        align-items: flex-start;
    }
    .pro_addDay .title{
     font-size: 26px;

	color: #ff9624;
    }
    .pro_addDay .add_method{
        display:flex;
        justify-content: space-between;
        align-items: center;
    }
    .add_method div{
        display:flex;
        flex-direction: column;
        width:80%;
        align-items: flex-start
    }
    .add_method span:nth-child(1){
       	font-size: 30px;
	    color: #333333;
        font-weight: 700;
        margin:5px 0;
        
    }
      .add_method span:nth-child(2){
       	font-size: 24px;
	  
        color: #666666;
    }
    .add_method img{
        width:18%;
        height:50px;
    }

  .bank_bottom  .bank_invite_friend{
        display:flex;
        flex-direction: column;
        width:90%;
  }
    .invite_num{
       background:#ffffff;
       display:flex;
       flex-direction: column;
       align-items: flex-start;
       border-radius: 12px 12px  0 0;
       padding:20px;
       min-height:500px;
    }
    .invite_num p:nth-child(1){
    font-size: 32px;
	font-weight: bolder;
	margin:30px 0 10px;
	color: #333333;
    }
     .invite_num p:nth-child(1) span{
         color:red;
     }
    .invite_view{
        display:flex;
        height:110px;
        padding:20px;
        justify-content: space-between;
        align-items: center;
    border-radius: 0 0 12px 12px;
        background-color: #f2943c;
    }
    .invite_view p{
        color: #fffefe;
        font-size: 24px;

    }
    .invite_view strong{
        font-size: 30px;
    }
    .invite_view img{
       width: 177px;
	  height: 55px;
    }
    </style>


