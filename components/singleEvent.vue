<template>
  <div class="tw-relative tw-bg-white tw-shadow-lg tw-rounded-lg">
    <div class="tw-h-24 tw-flex tw-items-center tw-justify-center">
      <p class="tw-font-extrabold tw-text-gray-700">
        {{ event.title }}
      </p>
    </div>

    <div class="tw-flex tw-flex-col tw-mt-7 tw-px-7">
      <div class="tw-flex tw-items-center">
        <div
          class="tw-w-10 tw-h-10 tw-bg-[#f37a7b] tw-flex tw-text-white tw-items-center tw-justify-center tw-rounded-lg tw-shadow-lg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            class="tw-fill-current"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2zm-7 5h5v5h-5z"
            />
          </svg>
        </div>
        <p class="tw-text-gray-600 tw-mt-5 tw-ml-5 tw-font-medium">
          {{ event.date }}
        </p>
      </div>
      <div class="tw-flex tw-items-center">
        <div
          class="tw-w-10 tw-h-10 tw-bg-[#f37a7b] tw-flex tw-text-white tw-items-center tw-justify-center tw-rounded-lg tw-shadow-lg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            class="tw-fill-current"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"
            />
          </svg>
        </div>
        <p class="tw-text-gray-600 tw-mt-5 tw-ml-5 tw-font-medium">
          {{ event.start }} - {{ event.end }}
        </p>
      </div>
      <div class="tw-flex tw-items-center">
        <div
          class="tw-w-10 tw-h-10 tw-bg-[#f37a7b] tw-flex tw-text-white tw-items-center tw-justify-center tw-rounded-lg tw-shadow-lg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            class="tw-fill-current"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z"
            />
            <circle cx="12" cy="9" r="2.5" />
          </svg>
        </div>
        <p class="tw-text-gray-600 tw-mt-5 tw-ml-5 tw-font-medium">
          {{ event.location }} -
          <a :href="'http://' + event.address">{{ event.address }}</a>
        </p>
      </div>
    </div>

    <v-divider></v-divider>

    <v-card-actions>
      <v-spacer></v-spacer>

      <v-btn
        :loading="isLoading"
        color="#6d28d9"
        @click="downloadIcs"
        class="tw-text-white"
      >
        <span class="tw-text-white">Send to my email</span>
      </v-btn>
    </v-card-actions>
  </div>
</template>

<script>
import moment from "moment";
import { mapGetters } from "vuex";

export default {
  props: {
    event: {
      type: Object,
      default: Object,
    },
  },
  data() {
    return {
      isLoading: false,
      date_log: Date,
    };
  },
  computed: {
    ...mapGetters({
      user: "getUser",
    }),
  },
  mounted() {},
  methods: {
    eventStartFun(EventDate, EventTime) {
      var now = new Date(EventDate + " " + EventTime + " UTC").toISOString();
      console.log([moment(now)._d]);
      return moment(now)._d;
    },
    eventEndFun(EventDate, EventTime) {
      var now = new Date(EventDate + " " + EventTime + " UTC").toISOString();
      console.log([moment(now)._d]);
      return moment(now)._d;
    },
    cleanDateTime(val) {
      var remove_space = val.replace(" ", "T");
      var remove_dash = remove_space.replace(/[^a-zA-Z0-9]/g, "");

      return remove_dash;
    },
    cleanTimezone(val) {
      const str = val + " ";
      let split_str = str.split("(").pop();
      split_str = split_str.replace(")", "");
      return split_str;
    },
    async downloadIcs() {
      /* get timezone  */
      this.isLoading = true;
      const start_date = moment(
        this.event.date + " " + this.event.start
      ).format("YYYY-MM-DD HH:mm:ss");
      const end_date = moment(this.event.date + " " + this.event.start).format(
        "YYYY-MM-DD HH:mm:ss"
      );
      var zone_name = moment.tz.guess();
      var breaker_timezone = moment.tz(zone_name);

      /* set the function variable */
      this.$ics.removeAllEvents();
      const language = "en-us";
      const subject = this.event.title;
      const description = subject + " with " + this.user.name;
      const location = this.event.location + " " + this.event.address;
      const begin = this.cleanDateTime(start_date);
      const stop = this.cleanDateTime(end_date);
      const url = this.event.address;
      const timezone = this.cleanTimezone(breaker_timezone._d);
      const organizer = {
        name: this.user.name,
        email: this.user.email,
      };

      /* node mail data */
      const eventData = {
        language: language,
        subject: subject,
        description: description,
        location: location,
        begin: begin,
        stop: stop,
        url: url,
        timezone: timezone,
        organizer: organizer,
      };
      const data = await this.$axios
        .$post("/user", eventData)
        .then((res) => {
          this.isLoading = false;
          console.log(res);
        })
        .catch((error) => {
          this.isLoading = false;
          console.log(error);
        });
    },

    deleteEvent() {
      this.$store.commit("UPDATE_EVENTS_ARRAY", this.$route.params.slug);
    },
  },
};
</script>

<style></style>
