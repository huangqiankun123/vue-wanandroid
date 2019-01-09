<template>
    <div class="home-wrapper">
        <!--swipe area-->
        <div class="swipe-area">
            <van-swipe :autoplay="2000">

            </van-swipe>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import serviceApi from '../common/serviceApi'

    export default {
        name: "Home",
        components: {},
        created() {
            this.getBannerData()
        },
        methods: {
            getBannerData() {
                axios({
                    url: serviceApi.getBanner,
                    method: 'get'
                }).then(res=>{
                    console.log(res)
                }).catch(error=>{

                })
            }
        }
    };
</script>

<style lang="stylus" scoped>

</style>
