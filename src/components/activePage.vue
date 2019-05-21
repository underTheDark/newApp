<template>
     <div id="activePage">
        <div class="active_part1">
            <img src="../assets/active/img_01.png" />
        </div>
        <div class="active_part2">
            <img src="../assets/active/img_02.png" />
        </div>
        <div class="active_part3">

        </div>
        <div class="active_part4">
             <div>
                 <img src="../assets/active/img_03.png" />
             </div>
             <div>
                 <img src="../assets/active/quanyi1.png" />
             </div>
             <div>
                 <img src="../assets/active/quanyi2.png" />
             </div>
             <div>

             </div>
             <div>
                 <img src="../assets/active/quanyi4.png" />
             </div>
             <div>
                 <img src="../assets/active/quanyi5.png" />
             </div>
             <div>
                 <img src="../assets/active/quanyi6.png" />
             </div>
        </div>
        <div  class="active_part5">
             <img src="../assets/active/btn_rzxjts.png" alt="">
        </div>
     </div>
</template>
<script>
export default {
    
}
</script>


<style scoped>
img{
    display:block;
    border: none;
    width:500px;
    height:400px;
}
     #activePage{
         display:flex;
         flex-direction: column;
         align-items: center;
         width:100%;
         background: #eeeeee;
     }
     .active_part1 img{
         height:460px;
         width:100%;
     }
     .active_part2 {
         margin:0 auto;
         display: flex;
         justify-content: center
     }
     .active_part2 img{
         height:360px;
         width:80%;
         margin-top:-7%;
     }


      .active_part4{
         display:flex;
         flex-direction: column;
         justify-content: center;
         width:90%;
     }
      .active_part4 div{
          display:flex;
          justify-content: center;
          padding-top:35px;
      }
     .active_part4 img{
         height:450px;
         width:100%;
         
     }
     .active_part4 div:nth-child(1) img{
        height:80px;
        width:90%;
     }
     .active_part5 img{
         height: 72px;
         margin-top:30px;
     }
</style>

