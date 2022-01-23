import { defineComponent } from './vendor/vue.esm-browser.js';
import UiContainer from './UiContainer.js';
import UiAlert from './UiAlert.js';
import MeetupView from './MeetupView.js';
import { fetchMeetupById } from './meetupService.js';

export default defineComponent({
  name: 'PageMeetup',

  components: {
    UiAlert,
    UiContainer,
    MeetupView,
  },
  props: {
    meetupId: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      currentMeetup: {},
      loading: false,
      isError: false,
      errorMsg: '',
    };
  },
  watch: {
    async meetupId() {
      await this.getCurrentMeetup(this.meetupId);
    },
  },
  async beforeMount() {
    await this.getCurrentMeetup(1);
  },
  async mounted() {
    await this.getCurrentMeetup(this.meetupId);
  },

  methods: {
    async getCurrentMeetup(meetupId) {
      this.loading = true;
      this.isError = false
      try {
        await fetchMeetupById(meetupId).then((result) => {
          this.currentMeetup = result;
          this.loading = false;
        });
      } catch(error) {
        this.loading = false;
        this.isError = true;
        this.errorMsg = error.message;
      }
    },
  },

  template: `
    <div class="page-meetup">
      <meetup-view v-if="!loading && !isError" :meetup="currentMeetup"></meetup-view>

      <ui-container v-if="loading">
        <ui-alert>Загрузка...</ui-alert>
      </ui-container>

      <ui-container>
        <ui-alert v-if="isError">{{ errorMsg }}</ui-alert>
      </ui-container>
    </div>`,
});
