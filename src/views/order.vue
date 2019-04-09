<template>
  <div>
    <headertitle title="历史订单"></headertitle>
    <div class="buttonPlace">
      <router-link to="/order/data">
        <el-button class="order">全部订单</el-button>
      </router-link>
      <router-link to="/order/dataHalf">
        <el-button class="order">已维修</el-button>
      </router-link>
      <router-link to="/order/dataNo">
        <el-button class="order">未维修</el-button>
      </router-link>
    </div>
    <router-view class="red"></router-view>
    <foot class="foot"></foot>
  </div>
</template>

<script>
import headertitle from '../compents/header.vue'
import foot from '../compents/footer.vue'

export default {
  components: {
    headertitle,
    foot
  }
}
</script>

<style lang="stylus" scoped>
.order {
  width: 30%;
}

.buttonPlace {
  margin-left: 5%;
  margin-top: 0.2em;
  padding-left: 2%;
}

.foot {
  margin-left: 5%;
}

.red {
  height: 24em;
  margin-top: 0.5em;
  background-color: red;
}
</style>
