<template>
  <div id="app" class="aling-text-center justify-content-md-center">
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {

  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-image: url('./assets/sky.jpg');
  background-repeat:no-repeat ;
  background-size: cover;
  background-attachment: fixed
  
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.title {
  font-size: 80px;
  font-weight: bold;
  font-family: 'Creepster', cursive;
  color: #42b983;
}

</style>
