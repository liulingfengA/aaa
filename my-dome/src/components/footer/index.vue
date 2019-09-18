<template>
  <van-tabbar route v-model="active" active-color="#1989fa" inactive-color="#7d7e80">
    <van-tabbar-item v-for="(item,index) in foots" :key="index" :to="item.path">
      <i class="iconfont" v-html="item.icon" slot="icon"></i>
      {{item.txt}}
    </van-tabbar-item>
  </van-tabbar>
</template>

<script>
export default {
  data() {
    return {
      foots: [
        { txt: "比赛", path: "/home", name: "home", icon: "&#xe610;" },
        { txt: "新闻", path: "/news", name: "news", icon: "&#xe6fc;" },
        { txt: "我的", path: "/mine", name: "mine", icon: "&#xe6e1;" },
    
      ],
      active: 0
    };
  }
};
</script>
<style scoped>
#app .van-cell{
  /* background: transparent url(../assets/images/foot_bg.png) no-repeat center center; */
}
.iconfont{
	font-size: 20px;
}
</style>