<!--  -->
import { error } from 'util';
<template>
  <div>
    {{title}}
    <button @click="send()" class="aa">aaa</button>
    <button @click="buttonyear()">bbb</button>
    <router-link to="/">wq</router-link>
    <button v-for="list in dock" :key='list'>{{list}}~{{1}}</button>
    <router-view></router-view>
  </div>
</template>

<script>
// import api from './api/api.js'

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

  methods: {
    send () {
      this.$axios.get('https://api.apiopen.top/EmailSearch?number=1012002').then(resp => {
        this.dock = resp.data.result.data
      }).catch(resp => {
        console.log('loss')
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
    // api.GetData(data).then(res => {
    //   console.log('请求成功')
    // })
  },
  // 每次代码发生变化都会执行一次
  mounted: function () {
    this.adddata()
    this.buttonyear()
  }
}
</script>

<style lang="stylus" scope="this api replaced by slot-scope in 2.5.0+">
  .aa{
    color : red;
    border-radius : 10%;
    position :relative;
    margin-left :100px;
    margin-top :100px;
    }
</style>
