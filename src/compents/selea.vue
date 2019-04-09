<template>
  <el-select v-model="value"
             placeholder="请选择"
             class="dorm_sel"
             @change="ShowId()">
    <el-option v-for="item in options"
               :key="item.value"
               :label="item.label"
               :value="item.value">
    </el-option>
  </el-select>
</template>

<script>
export default {
  data () {
    return {
      id: 0,
      options: [{
        value: '1',
        label: '电灯损坏'
      }, {
        value: '2',
        label: '地砖损坏'
      }, {
        value: '3',
        label: '风扇损坏'
      }, {
        value: '4',
        label: '窗子损坏'
      }, {
        value: '5',
        label: '其他'
      }],
      value: ''
    }
  },
  methods: {
    ShowId () {
      console.log(this.value)
    }
  }
}
</script>

<style lang="stylus" scoped>
.dorm_sel {
    position: relative;
    height :2em;
}
</style>
