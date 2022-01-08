import { defineComponent } from './vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'MeetupInfo',
  props: {
    organizer: {
      type: String,
    },
    place: {
      type: String,
    },
    date: {
      type: Number,
    }
  },
  computed: {
    formatDate() {
      return new Date(this.date).toLocaleDateString(navigator.language, {year: 'numeric', month: 'long', day: 'numeric'})
    },
    attrDate() {
      return new Date(this.date).toISOString().substr(0, 10)
    }
  },
  template: `
    <ul class="meetup-info">
      <li>
        <img class="icon meetup-info__icon" alt="icon" src="/assets/icons/icon-user.svg" />
        {{ organizer }}
      </li>
      <li>
        <img class="icon meetup-info__icon" alt="icon" src="/assets/icons/icon-map.svg" />
        {{ place }}
      </li>
      <li>
        <img class="icon meetup-info__icon" alt="icon" src="/assets/icons/icon-cal-lg.svg" />
        <time :datetime="attrDate">{{ formatDate }}</time>
      </li>
    </ul>`,
});
