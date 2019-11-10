<template>
  <div id="app">
    <landing-block headline="asshole" />
    <icon-card />
  </div>
</template>

<script>
import LandingBlock from './components/LandingBlock'
import IconCard from './components/IconCard'

export default {
  name: 'app',
  components: {
    LandingBlock,
    IconCard
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
