<template>
    <ul class="list">
        <li class="item"
            v-for="item of letters"
            :key="item"
            :ref="item"
            @touchstart.prevent="handleTouchStart"
            @touchmove="handleTouchMove"
            @touchend="handleTouchEnd"
            @click="handleLetterClick">
            {{item}}
        </li>
    </ul>
</template>

<script>
  export default {
      name: 'CityAlphabet',
      props: {
        cities: Object
      },
      computed: {
        letters () {
          const letters = []
          for (let i in this.cities ){
            letters.push(i)
          }
          return letters
        }
      },
      data () {
        return {
          touchStatus: false,
          startY: 0,
          timer: null
        }
      },
      updated () {
        this.startY = this.$refs['A'][0].offsetTop
      },
      methods: {
        handleLetterClick (e) {
          // 这句话点哪个字母就会输出哪个字母
          this.$emit('change',e.target.innerText)
          // console.log(e.target.innerText)
        },
        handleTouchStart () {
          this.touchStatus = true
        },
        handleTouchMove (e) {
          if (this.touchStatus) {
            if (this.timer){
              clearTimeout(this.timer)
            }
            // 函数节流
            this.timer = setTimeout(() => {
              // 下面这个计算方法性能较低，startY值不变但每次都要重新算
              // const startY = this.$refs['A'][0].offsetTop
              const touchY = e.touches[0].clientY - 79
              // 获取对应字母下标
              const index = Math.floor((touchY - this.startY) / 20)
              if (index >=0 && index < this.letters.length){
                this.$emit('change',this.letters[index])
              }
              // console.log(index)
            },16)       
          }
        },
        handleTouchEnd () {
          this.touchStatus = false
        }
      }
  }
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .list
    display: flex
    flex-direction: column
    justify-content: center
    position: absolute
    top: 1.58rem
    right: 0
    bottom: 0
    width: .4rem
    .item
      line-height: .4rem
      text-align: center
      color: $bgColor
</style>