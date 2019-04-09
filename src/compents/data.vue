<template>
  <div class="data">
    <div class="high">
      <span v-for="list in ord"
            :key="list.id">{{list.title}}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ord: []
    }
  },
  components: {
  },
  methods: {
    get() {
      this.$axios.get('https://api.apiopen.top/getSongPoetry?page=1&count=20').then((res) => {
        this.ord = res.data.result
        console.log(this.ord)
      })
    }
  },
  mounted: function () {
    this.get()
  },
}
</script>

<style lang="stylus" scoped>
.data {
  height: 24em;
  overflow: scroll;
}

.high {
  height: 5em;
}
</style>
