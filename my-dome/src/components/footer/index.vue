<template>
     <div>
        <van-tabbar v-model ="active" active-color="#1989fa">
            <van-tabbar-item to="/home" >
                <van-icon class="iconfont" class-prefix='icon'  slot="icon" name="bisai"></van-icon>
                <span>比赛</span>
            </van-tabbar-item>
            <van-tabbar-item  icon="cluster-o" to="news" >
                <van-icon class="iconfont" class-prefix='icon'  slot="icon" name="xinwen"></van-icon>
                <span>新闻</span>    
            </van-tabbar-item>
            <van-tabbar-item  icon="user-o" to="mine">
                我的
            </van-tabbar-item>
        </van-tabbar>
    </div>
</template>



<script>

export default {
    data(){
        return{
            active:0,
        }
    },
}   
</script>


<style lang="less">
    footer{
	position:fixed;
	width:100%;
	height:.9rem;
	left:0;
	bottom:0;
	background:#fff;
	display:flex !important;
    z-index:100;
    border-top:1px solid black;
	div{
		flex:1;
		height:0.9rem;
		a{
			display: block;
			width:100%;
			height:100%;
			display:flex;
			flex-direction:column;
			box-sizing:border-box;
			padding:0.06rem 0;
			text-align:center;
			font-family:"微软雅黑";
			color:#999;
			position: relative;
			i{
			width:100%;
			height:0.45rem;
			line-height:0.45rem;
			font-size:0.42rem !important;
			}
			span{
				width:100%;
				height:0.35rem;
				line-height:0.35rem;
				font-size:0.26rem;
			}
			.hot{
				position: absolute;
				top:0;
				left:60%;
				display: inline;
				width:.25rem;
			}
		}
		.nav-active,.router-link-exact-active{
			color:#1989fa;
		    border-color:#1989fa;
        }
        .iconfont{
            color: #000;
        }

	}
}
</style>