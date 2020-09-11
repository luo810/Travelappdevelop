<template>
  <div class="wrapper">
    <swiper :options="swiperOption"
            v-if="showSwiper">
          <!-- slides -->
        <swiper-slide v-for="item of list" :key="item.id">
            <img  class="swiper-img" :src="item.imgUrl" />
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
        <!-- 下面控制的是左右箭头 -->
        <!-- <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div> -->
        <!-- 下面是灰色滚动条 -->
        <!-- <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
    </swiper>
  </div>
</template>

<script>
  export default {
    name: 'HomeSwiper',
    props: {
      list: Array
    },
    data: function () {
      return {
        swiperOption: {
          pagination: '.swiper-pagination',
          loop: true
        }
      }
    },
    //这里是轮播图一开始没有内容，接收到ajax内容后才开始渲染出来，会默认显示最后一张图
    //配合上面的v-if，有内容了才开始渲染，而不是从空内容开始渲染
    computed: {
      showSwiper () {
        return this.list.length
      }
    }
  }
  // overflow: hidden
  //     width: 100%
  //     height: 0
  //     padding-bottom: 30.47%
  //     等价于 但有兼容性问题
  //     width: 100%
  //     height: 30.47vw
  // >>>是样式穿透
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background: #fff
  .wrapper
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 30.47%
    background: #ccc
    .swiper-img
      width: 100%
</style>
