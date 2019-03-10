<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide">Slide 1</div>
      <div class="swiper-slide">Slide 2</div>
      <div class="swiper-slide">Slide 3</div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
    <!-- 如果需要滚动条 -->
    <div class="swiper-scrollbar"></div>
  </div>
</template>

<script>
import Swiper from 'swiper'

export default {
  name: 'HelloBody',
  data () {
    return {
      message: 'hello swiper'
    }
  },
  mounted () {
    /* eslint-disable no-new */
    new Swiper('.swiper-container', {
      loop: true, // 设置知否需要分页器
      pagination: '.swiper-button-next', // 设置前进后退按钮
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      scrollbar: '.swiper-scrollbar', // 设置是否需要滚动条
    })
  }
}
</script>

<style>
</style>
