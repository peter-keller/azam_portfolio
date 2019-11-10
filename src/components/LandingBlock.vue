<template>
  <div class='landing-block' :style="`background-image: url(${image})`">
    <div class="headline">
      <h1>{{ headline }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      required: true,
      default: 'https://wallpaperaccess.com/full/405435.jpg'
    },

    headline: {
      type: String,
      required: false,
      default: 'I am Azam Khan'
    }
  }
}
</script>

<style lang="scss" scoped>

  .landing-block {
    width: 100vw;
    height: 100vh;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    background-position: center center;
    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
      font-size: 64px;
      margin: 0;
      color: $color-white;
    }
  }

</style>
