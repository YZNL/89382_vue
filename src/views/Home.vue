<template>
  <div>
    <headertitle title="我的"></headertitle>
    <div class="cent">
      <img :src="this.imagea">
      <span class="center">历史订单</span>
      <span class="right"><router-link to="/order">>></router-link></span>
      <hr>
      <img :src="this.imageb">
      <span></span>
      <span class="right">取消绑定</span>
      <hr>
      <img :src="this.imagec">
      <span class="center">联系我们</span>
      <hr>
    </div>
    <foot class="fot"></foot>
  </div>
</template>

<script>
import headertitle from '../compents/header.vue'
import foot from '../compents/footer.vue'
import a from '../../img/6.png'
import b from '../../img/7.png'
import c from '../../img/8.png'

export default {
  data () {
    return {
      imagea: a,
      imageb: b,
      imagec: c
    }
  },
  components: {
    foot,
    headertitle
  }
}
</script>

<style>
.fot {
  margin-left: 5%;
  margin-top:16.5em;
}
.cent {
  margin-top: 1em;
}
.right {
  float: right;
  margin-right: 0.5em;
}
.center {
  margin-left:3em;
}
</style>
