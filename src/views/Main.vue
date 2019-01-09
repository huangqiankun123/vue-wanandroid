<template>
    <div>
        <div>
            <keep-alive>
                <router-view/>
            </keep-alive>
        </div>
        <!--通过变量来控制是否选中了哪一个-->
        <van-tabbar v-model="index" @change="changeTabbar(index)">
            <van-tabbar-item icon="fire">首页</van-tabbar-item>
            <van-tabbar-item icon="records">体系</van-tabbar-item>
            <van-tabbar-item icon="contact">导航</van-tabbar-item>
            <van-tabbar-item icon="label">项目</van-tabbar-item>
            <van-tabbar-item icon="setting">我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
    export default {
        name: "Main",
        data() {
            return {
                index: 0
            }
        },
        methods: {
            changeTabbar(index) {
                switch (index) {
                    case 0:
                        this.$router.push({name: 'Home'});
                        break;
                    case 1:
                        this.$router.push({name: 'System'});
                        break;
                    case 2:
                        this.$router.push({name: 'Navigation'});
                        break;
                    case 3:
                        this.$router.push({name: 'Project'});
                        break;
                    case 4:
                        this.$router.push({name: 'Me'});
                        break;
                }
            }
        }
    }
</script>

<style lang="stylus" scoped>

</style>