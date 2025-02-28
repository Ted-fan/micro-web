import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

import { registerMicroApps, start } from 'qiankun';

registerMicroApps([
  {
    name: 'vue-sub',//子应用的项目名称
    entry: '//localhost:9000',// 本地调试（发布需改为实际地址）
    container: '#vue-sub-container',//html的id名
    activeRule: '/vue-sub',//主应用跳转子应用的主路径
  },
  {
    name: 'react-sub',//子应用的项目名称
    entry: '//localhost:8000',// 本地调试（发布需改为实际地址）
    container: '#react-sub-container',//html的id名
    activeRule: '/react-sub',//主应用跳转子应用的主路径
  },
]);
// 启动 qiankun
start();
