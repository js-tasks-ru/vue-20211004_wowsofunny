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
      let response = await this.fetchMeetupById(this.meetupId);
      this.meetupTitle = response.title;
    }
  },
  async mounted() {
    let response = await this.fetchMeetupById(this.meetupId);
    this.meetupTitle = response.title;
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
