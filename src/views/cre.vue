<!-- -->
<template>
  <div id="place">
    <button>aaaa</button>
    <p>{{reverv}}</p>
    <p>{{newName}}</p>
    <button @click="setName">设置set属性</button>
    <button @click="commethod">修改message值</button>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      a: 1,
      message: 2,
      name: 'Hi'
    }
  },

  methods: {
    conStore () {
      console.log(this.$store.state.count)
      console.log(this.message)
    },
    setName () {
      this.newName = 'Hello'
    },
    commethod () {
      this.message = 3
    }
  },
  mounted: function () {
    this.conStore()
  },
  computed: {
    ...mapState({
      count: stage => stage.count
    }),
    reverv: function () {
      return this.message * 2 // 在这使用自加会报错
    },
    newName: {
      get: function () {
        return this.name
      },
      set: function (newVale) {
        this.name = newVale
      }
    //   计算属性reverv和reverv（）
    // 不同的是，计算属性是基于它们的依赖进行缓存的。计算属性
    // 只有在它的相关依赖发生改变时才会重新求值
    // 只要在title还没有发生改变时，对此访问reverv计算属性会立即
    // 返回之前的计算结果
    }
  }
}
</script>
