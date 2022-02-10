<template>
  <div class="toasts">
    <ui-toast v-for="toast in toasts" :key="toast" :toast-type="toast.type" :text="toast.text" />
  </div>
</template>

<script>
import UiToast from './UiToast';

export default {
  name: 'TheToaster',
  components: { UiToast },
  data() {
    return {
      toasts: [],
    };
  },
  methods: {
    success(message) {
      const timeout = 5000;
      this.toasts.push({
        type: 'success',
        text: message,
      })
      setTimeout(() => {
        this.toasts.shift();
      }, timeout);
    },
    error(message) {
      const timeout = 5000;
      this.toasts.push({
        type: 'error',
        text: message,
      })
      setTimeout(() => {
        this.toasts.shift();
      }, timeout);
    }
  }
};
</script>

<style scoped>
.toasts {
  position: fixed;
  bottom: 8px;
  right: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  white-space: pre-wrap;
  z-index: 999;
}

@media all and (min-width: 992px) {
  .toasts {
    bottom: 72px;
    right: 112px;
  }
}
</style>
