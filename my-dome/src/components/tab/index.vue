<template >
  <div class="tab">
    <van-tabs
      v-model="activeName"
      animated
      :duration="num"
      swipeable
      lazy-render
      color="#1989fa"
      title-active-color="#1989fa"
    >
      <van-tab class="saishi" title="赛事" name="a">
        <div class="swiper-container">
       
            <swiper :options="swiperOption">
            <swiper-slide v-for='item of imgList' :key="item.id" >
                <img class="swiper-img" :src="item  " />
                <p>{{item}}</p>
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
            </swiper>
          <!-- 分页器 -->
          <div class="swiper-pagination"></div>

          <!-- 导航按钮 -->
          <!-- <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div> -->
        </div>
      </van-tab>
      <van-tab title="赛程" name="b">赛程 2</van-tab>
      <van-tab title="赛果" name="c">赛果 3</van-tab>
      <van-tab title="即时" name="d">即时 1</van-tab>
      <van-tab title="关注" name="e">关注 2</van-tab>
    </van-tabs>
  </div>
</template>



<script>
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';
import $axios from "../../common/api"
export default {
  data() {
    return {
      activeName: "a",
      num: 0.8,
      imgList:[
          "https://www.baidu.com/img/baidu_jgylogo3.gif",
            "https://www.baidu.com/img/baidu_jgylogo3.gif",
            "https://www.baidu.com/img/baidu_jgylogo3.gif",
            "https://www.baidu.com/img/baidu_jgylogo3.gif",
            "https://www.baidu.com/img/baidu_jgylogo3.gif"
      ],
       swiperOption: {
            pagination: {
            el: '.swiper-pagination'
            },
        
            autoplay: {
            delay: 3000,
                disableOnInteraction: false,//用户点击之后是否自动轮播 , 默认为true 不轮播, 改为false 轮播
            },
            //  navigation: {
            //     nextEl: '.swiper-button-next',
            //     prevEl: '.swiper-button-prev',
            //     },
            loop: true,
            slidesPerView: 3,//设置slider容器能够同时显示的slides数量(carousel模式)
            speed:900,//自动滑动开始到结束的时间（单位ms）
            spaceBetween: 30, //在slide之间设置距离（单位px）。
            centeredSlides: true, //设定为true时，active sslide会居中，而不是默认状态下的居左。
            effect:'coverflow',//可以实现3D效果的轮播,
            coverflow:{
            rotate:100,//slide做3d旋转时Y轴的旋转角度。默认50。
            stretch:0,//每个slide之间的拉伸值，越大slide靠得越紧。 默认0。
            depth:0,//slide的位置深度。值越大z轴距离越远，看起来越小。 默认100。
            modifier:1,//depth和rotate和stretch的倍率，相当于depth*modifier、rotate*modifier、stretch*modifier，值越大这三个参数的效果越明显。默认1。
            slideShadows:false,//开启slide阴影。默认 true。
	        },
      }
    };
  },
  props: {
    childData: {}
  },
  methods: {
    
    },
    mounted() {
  
    },
    created() {
    }, 
  }
 
</script>

<style lang="less">
.tab {
  margin-top: 10px;
}
.saishi {
    width: 100%;
    height:50%;
    background-color: #f0f;
    .swiper-slide{
        // width: 100px;
        height: 300px;
    }
    .swiper-img{
        width: 100%;
        height: 100%;
    }
}

</style>