<template>
  <div class="text-white">
    <h1>{{message}}</h1>
    <br>
    <h4>TuFactoring Inmortal</h4>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  </div> <!--Fin del div-->
</template>

<script>
export default {
  data() {
    return {
      message : "Bienvenido"
    };
  },
  mounted: function() {
    wails.Events.On("cpu_usage", cpu_usage => {
        this.message = cpu_usage.avg
    });
  }
};
</script>