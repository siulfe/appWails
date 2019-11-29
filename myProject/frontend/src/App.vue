<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import "./assets/css/main.css";


export default {
  name: "app",
  data(){
  	return {
  		img:"background-principal"
  	}
  },
  created:function () {
  }
};
</script>
