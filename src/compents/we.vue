<!--  -->
<template>
  <div>
    {{title}}
    <button @click="send()" class="aa">aaa</button>
    <button @click="buttonyear()">bbb</button>
    <router-link to="/cre">wq</router-link>
    <button v-for="list in dock" :key='list.id' >{{list}}~{{1}}</button>
    <router-view />
    <foot></foot>
  </div>
</template>

<script>
import foot from '../compents/footer.vue'

export default {

  data () {
    return {
      title: 'Home',
      lists: [
        { a: 0, },
        { b: 1, }
      ],
      dock: [],
      year: 2017,
    }
  },
  components: {
    foot
  },
  methods: {
    send () {
      console.log(1)
      // this.$axios.get('http://39.108.152.84:8080/repair_war/userinfo').then((res) => {
      this.$axios.get('https://api.apiopen.top/recommendPoetry').then((res) => {
        console.log(res.data.result.title)
        this.dock = res.data
      }).catch((res) => {
        console.log(res)
      })
    },
    buttonyear () {
      this.lists.a = this.year
      console.log(this.lists.a)
    },
    adddata () {
      this.dock.push('a')
      console.log(this.dock)
    }
  },
  // 只在页面加载是执行一次
  created: function () {
    this.buttonyear()
  },
  // 每次代码发生变化都会执行一次
  mounted: function () {
    this.adddata()
    this.buttonyear()
  }
}
</script>

<style lang="stylus" scope>
</style>

