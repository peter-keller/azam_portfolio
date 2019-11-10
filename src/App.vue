<template>
  <div id="app">
    <landing-block />
  </div>
</template>

<script>
import LandingBlock from './components/LandingBlock'

export default {
  name: 'app',
  components: {
    LandingBlock
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  margin: 0;
}
</style>
