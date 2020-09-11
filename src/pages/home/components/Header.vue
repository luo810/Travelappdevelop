<template>
    <div class="header">
        <div class="header-left">
            <div class="iconfont back-icon">&#xe624;</div>
        </div>
        <div class="header-input">
            <span class="iconfont">&#xe632;</span>输入城市/景点/游玩主题
        </div>
        <router-link to='/city'>
            <div class="header-right">
                {{this.city}}
                <span class="iconfont arrow-icon">&#xe64a;</span>
            </div>
        </router-link>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        name: 'HomeHeader',
        computed: {
            ...mapState(['city'])
        }
    }
    // 下面是header部分注释
    // 后面这个参数表示，样式只对当前组件有效，对其他组件不会产生任何影响
    // 这里移动端用rem布局1rem = html font-size = 50px 设计师给的是二倍尺寸的图片
    // 给的是750,iphone6是375,所以是二倍图，量出来的尺寸要÷2然后÷50转化成rem，所以÷100
    // 下面flex是自动张开，background是背景色，color是内容颜色,line-height内容直接就居中
    // border-radius: .1rem这个边框圆角5像素
    // line-height是水平居中，上下间距一样，text-align:center是左右间距一样
    // 样式里面去引入样式要@import，要在css内部引回assets，记得@前加~
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    1rem = html font-size = 50px
    .header
        display: flex
        line-height: $headerHeight
        background: $bgColor
        color: #fff
        .header-left
            width: .64rem
            float: left
            .back-icon
                text-align: center
                font-size: .4rem
        .header-input
            flex: 1
            height: .64rem
            line-height: .64rem
            margin-top: .12rem
            margin-left: .2rem
            padding-left: .2rem
            background: #fff
            border-radius: .1rem
            color: #ccc
        .header-right
            min-width: 1.04rem
            padding: 0 .1rem
            float: right
            text-align: center
            color: #fff
            .arrow-icon
                margin-left: -.04rem
                font-size: .24rem
</style>
