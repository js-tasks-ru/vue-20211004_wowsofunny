import { createApp, defineComponent } from './vendor/vue.esm-browser.js';

const API_URL = 'https://course-vue.javascript.ru/api';

/* function fetchMeetupById(meetupId) {
  return fetch(`${API_URL}/meetups/${meetupId}`).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      return response.json().then((error) => {
        throw error;
      });
    }
  });
} */

// Требуется создать Vue приложение

const Root = defineComponent({
  data() {
    return {
      meetupId: 1,
      meetupTitle: '',
    };
  },
  watch: {
    async meetupId() {
      await this.fetchMeetupById(this.meetupId)
        .then((data) => this.meetupTitle = data.title)
    }
  },
  async mounted() {
    await this.fetchMeetupById(this.meetupId)
        .then((data) => this.meetupTitle = data.title)
  },
  methods: {
    fetchMeetupById(meetupId) {
      return fetch(`${API_URL}/meetups/${meetupId}`).then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          return response.json().then((error) => {
            throw error;
          });
        }
      });
    },
  },
});

const app = createApp(Root);

app.mount('#app');
