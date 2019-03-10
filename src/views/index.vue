<!--  -->
<template>
  <div>
    <div>hello,Vue-CLi</div>
    <div>{{title}}</div>
    <header-place title="yes"></header-place>
    <span slot="left">666</span>
  </div>
</template>

<script>
import headerPlace from './header.vue'

export default {
  data () {
    return {
      title: 'welcome'
    }
  },
  components: {
    headerPlace
  }
}
</script>
<style lang="stylus">
</style>
