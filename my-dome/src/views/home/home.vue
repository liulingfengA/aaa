<template>
    <div class="home_box">
    <Head title="足球" :show="true"></Head>
    <NavTab></NavTab>
    <Footer></Footer>
    </div>
</template>

<script>

import $axios from "../../common/api"
export default {
    components:{
  
    },
    data() {
        return {

        }
    },
    created() {
        // this.getMock()
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
        },
        // getMock(){
        //     $axios.postRequest("http://localhost:8082/v3/bf-zq-match/infos").then((res)=>{})
        //     console.log(res)
        // }
    },
}
</script>

<style lang="less" scope>
    .home_box{
        width: 100vw;
        height: 100vh;
        .navUl{
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            text-align: center;
            li{
                width: 20%;
               
            }
            .border{
                border-bottom: 2px solid #f00;
            }
        }
    }
</style>