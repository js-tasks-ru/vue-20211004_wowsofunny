import { createApp, defineComponent } from './vendor/vue.esm-browser.js';

const Root = defineComponent({
  name: 'App',
  data() {
    return {
      count: 0,
    };
  },
});

const app = createApp(Root);

app.mount('#app');
