// import type { App } from 'vue';
import {  createApp } from "vue";
import "virtual:windi.css";
import App from "./App.vue";
import { registerGlobComp } from '/@/components/registerGlobComp';
import { setupStore } from '/@/store';
import { setupGlobDirectives } from '/@/directives';
import { router, setupRouter } from '/@/router';

function bootstrap(){
    const app = createApp(App);

    setupRouter(app); // 初始化路由
    setupStore(app); // 初始化 Pinia
    registerGlobComp(app); // 注册全局组件
    setupGlobDirectives(app); // 注册全局指令


    app.mount("#app");
}

bootstrap();
