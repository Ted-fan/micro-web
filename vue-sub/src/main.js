import { createApp } from 'vue';
import App from './App.vue';
import router from './router'

let app = null;

function render(props = {}) {
  const { container } = props;
  app = createApp(App).use(router);
  app.mount(container ? container.querySelector('#app') : '#app');
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  console.log('[vue3] vue3 app bootstraped');
}
export async function mount(props) {
  console.log('[vue3] props from main framework', props);
  render(props);
}
export async function unmount() {
  app.unmount();
  app = null;
}
