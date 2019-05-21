<template>
  <div id="app">
    
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
    html,body{
    margin:0;
    padding:0;
    width:100%;
}
img{
    display:block;
    border:none;
}

 .mt-progress-content .mt-progress-runway{
     border-radius:10px;
 } 
 .mt-progress-content .mt-progress-progress{
        background-color:#ffa32c;
        border-radius: 10px;
       
    }
</style>
