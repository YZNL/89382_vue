<template>
    <div class="head">
        <span style="color:white;">{{title}}</span>
    </div>
</template>

<script>
export default {
  props: {
    title: String
  }
}
</script>

<style lang="stylus" scoped>
.head{
  display :table-cell;
  background-color :#409EFF;
  height :2.5em;
  text-align :center;
  vertical-align :middle;
}
</style>
