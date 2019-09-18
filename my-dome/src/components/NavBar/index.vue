<template>
    <div>
        <van-nav-bar :title="title" left-text="返回" :left-arrow="show"  @click-left="goback">
        <van-icon  class="iconfont NavBarIcon" class-prefix='icon' name="caidan" slot="right" @click="gosearch"/>
        </van-nav-bar>
    </div>
</template>

<script>
    export default {
        props:{
        title:String,
        show:Boolean
        },
        methods:{
            goback(){
                this.$router.go(-1)
            },
            gosearch(){
                // this.$router.push({name:"search"})
            }
        }
    }
</script>
<style lang="less">
    .NavBarIcon{
        font-size: 20px;
        color: #1989fa;
    }
 
</style>