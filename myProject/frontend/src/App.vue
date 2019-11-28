<template>
  <div id="app">
    <index />
  </div>
</template>

<script>
import index from "./components/index.vue";
import "./assets/css/main.css";


export default {
  name: "app",
  data(){
  	return {
  		img:"background-principal"
  	}
  },
  components: {
  	index
  }	
};
</script>
