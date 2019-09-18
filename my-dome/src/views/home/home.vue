<template>
    <div class="home_box">
    <Head title="首页" :show="true"></Head>
       这个是首页 
    <button @click="goPath('/mine')">yyy</button>
    <button @click="goPath('/home/homeChild')">111</button>
    <Footer></Footer>
    </div>
</template>

<script>
export default {
    components:{
  
    },
    data() {
        return {

        }
    },
    created() {
        // let loading = this.$loading({text:"加载中..."})
        // setTimeout(()=>{
        //     loading.close()
        // },3000)
    },
    mounted() {
        
    },
    methods: {
        goPath(path){
            this.$router.push(path)
        }
    },
}
</script>

<style lang="less" scope>
    .home_box{
        width: 100vw;
        height: 100vh;
    }
</style>