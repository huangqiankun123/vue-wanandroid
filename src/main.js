import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import {Button, Tabbar, TabbarItem,Swipe, SwipeItem} from "vant";

Vue.use(Button).use(Tabbar).use(TabbarItem).use(Swipe).use(SwipeItem);

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
