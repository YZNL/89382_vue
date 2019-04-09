<template>
  <div id="foot">
    <hr>
    <div class="ft_place">
      <router-link to="/">
        <i class="el-icon-setting size"
          @click="classChange()"
          v-bind:class= "{ 'active': this.$route.path === '/'}">
        </i>
      </router-link>
      <router-link to="/order">
        <i class="el-icon-time size"
         @click="classChangeB()"
         v-bind:class= "{ 'active': this.$route.path === '/order'
                           || this.$route.path === '/order/data'
                           || this.$route.path === '/order/dataHalf'
                           || this.$route.path === '/order/dataNo'
                           }"></i>
      </router-link>
      <router-link to="/home">
      <i class="el-icon-service size"
         @click="classChangeC()"
         v-bind:class= "{ 'active': this.$route.path === '/home'}"></i>
      </router-link>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      mesg: '',
      isA: false,
      isB: false,
      isC: false
    }
  },
  mounted: function () {
    this.ClientH()
  },
  created: function () {
  },
  methods: {
    classChange () {
      this.isA = true
      this.isC = false
      this.isB = false
    },
    classChangeB () {
      this.isB = true
      this.isA = false
      this.isC = false
    },
    classChangeC () {
      this.isB = false
      this.isA = false
      this.isC = true
    },
    ClientH () {
      var Height = 6 + 'em'
      Height = Height / 2 - 10 + 'px'
      var fot = document.getElementById('foot')
      fot.style.top = Height
    }
  }
}
</script>

<style lang="stylus" scoped>
.size {
    font-size:3.5em;
}
.active {
  color: blue;
}
#foot {
  position: absolute;
  width: 90%;
}
i {
  float: left;
  padding-left: 5%;
}
.ft_place {
  width: 90%;
  margin-left:10%;
}
</style>
