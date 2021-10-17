import { createApp, defineComponent } from './vendor/vue.esm-browser.js';

const Root = defineComponent({
  name: 'App',
  data() {
    return {
      numFirst: 0,
      numSecond: 0,
      operand: 'sum',
    };
  },
  computed: {
    calcValue() {
      if (this.operand === 'sum') {
        return this.numFirst + this.numSecond;
      }
      if (this.operand === 'subtract') {
        return this.numFirst - this.numSecond;
      }
      if (this.operand === 'multiply') {
        return this.numFirst * this.numSecond;
      }
      if (this.operand === 'divide') {
        return this.numFirst / this.numSecond;
      }
      return null;
    },
  },
});

const app = createApp(Root);

app.mount('#app');
