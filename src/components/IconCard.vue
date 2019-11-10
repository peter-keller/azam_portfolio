<template>
  <div class="card">
    <div class="icon">
      <component :is="getIcon" w="100px" h="100px" />
    </div>
    <div class="title">
      <h5>{{ title }}</h5>
    </div>
    <div class="description">
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    color: {
      type: String,
      required: true,
      default: '#0078FF'
    },

    title: {
      type: String,
      required: true,
      default: 'Title'
    },

    description: {
      type: String,
      required: true,
      default: 'Some shit'
    },

    icon: {
      type: String,
      required: true,
      default: 'ios-alert'
    }
  },

  computed: {
    getIcon () {
      return () => import(`vue-ionicons/dist/${this.icon}`)
    }
  }
}

</script>

<style lang="scss" scoped>
.card {
  height: 350px;
  width: 350px;
  border: 1px solid red;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;



  .title {
    font-size: 34px
  }

  .description {
    font-size: 16px
  }

  .icon {
    box-shadow: $color-blue 0px 0px 0px 10px;
    border-radius: 50%;
    transition: 0.2s ease-in-out;

    &:hover {
      box-shadow: rgba($color-blue, 0.4) 0px 0px 0px 10px;
    }

    ::v-deep div {
      border-radius: 50%;
      transition: 0.2s ease-in-out;


      &:hover {
        background-color: $color-blue;
      }

      svg {
        fill: $color-black;
        transition: 0.2s ease-in-out;

        &:hover {
          fill: $color-white;
        }
      }
    }
  }
}





</style>
