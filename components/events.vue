<template>
  <div>
    <client-only>
      <v-dialog v-model="eventDialog" width="500">
        <v-card class="tw-relative">
          <div class="tw-h-24 tw-flex tw-items-center tw-justify-center">
            <p class="tw-font-extrabold tw-text-gray-700">
              {{ event.details.title }}
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
                {{ event.details.date }}
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
                {{ event.details.time }}
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
                {{ event.details.location }} -
                <a :href="'http://' + event.details.address">{{
                  event.details.address
                }}</a>
              </p>
            </div>
          </div>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="#6d28d9"
              @click="downloadIcs"
              icon
              class="tw-text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                enable-background="new 0 0 24 24"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                fill="#000000"
              >
                <g><rect fill="none" height="24" width="24" /></g>
                <g>
                  <path
                    d="M18,15v3H6v-3H4v3c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2v-3H18z M17,11l-1.41-1.41L13,12.17V4h-2v8.17L8.41,9.59L7,11l5,5 L17,11z"
                  />
                </g>
              </svg>
            </v-btn>
            <v-btn color="#6d28d9" icon @click="eventDialog = false">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                fill="#000000"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path
                  d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"
                />
              </svg>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </client-only>
    <div v-if="events.length">
      <div
        v-for="(event, index) in events"
        :key="index"
        class="tw-bg-white animate__animated animate__fadeInUp tw-mt-4 tw-font-bold tw-text-sm tw-max-h-14 tw-shadow-xl tw-w-full tw-h-14 tw-rounded-xl tw-p-4 tw-grid tw-grid-cols-5 tw-gap-2 tw-items-center hover:tw-shadow-2xl tw-cursor-pointer tw-transition hover:tw-text-purple-500"
      >
        <div class="tw-text-xs tw-w-full">
          <slot name="title">{{ event.title }}</slot>
        </div>
        <div
          class="tw-text-center tw-w-full tw-flex tw-justify-center tw-items-center"
        >
          <span class="tw-mr-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="15px"
              viewBox="0 0 24 24"
              width="15px"
              class="tw-fill-current"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2zm-7 5h5v5h-5z"
              />
            </svg>
          </span>
          <span>{{ event.date }}</span>
        </div>
        <div
          class="tw-text-center tw-w-full tw-flex tw-justify-center tw-items-center"
        >
          <span class="tw-mr-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="15px"
              viewBox="0 0 24 24"
              width="15px"
              class="tw-fill-current"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"
              />
            </svg>
          </span>
          <span>{{ event.time }}</span>
        </div>
        <div class="tw-text-center tw-w-full">
          {{ event.location }}
        </div>
        <div class="tw-text-center tw-w-full tw-flex tw-items-center">
          <nuxt-link :to="'event/'+index">
            <div
            class="tw-w-8 tw-mr-2 tw-h-8 tw-rounded-full tw-text-center tw-bg-gray-200 tw-flex tw-justify-center tw-items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              enable-background="new 0 0 24 24"
              height="18px"
              viewBox="0 0 24 24"
              width="18px"
              fill="#000000"
            >
              <g><rect fill="none" height="24" width="24" /></g>
              <g>
                <g>
                  <g>
                    <path
                      d="M3,21l3.75,0L17.81,9.94l-3.75-3.75L3,17.25L3,21z M5,18.08l9.06-9.06l0.92,0.92L5.92,19L5,19L5,18.08z"
                    />
                  </g>
                  <g>
                    <path
                      d="M18.37,3.29c-0.39-0.39-1.02-0.39-1.41,0l-1.83,1.83l3.75,3.75l1.83-1.83c0.39-0.39,0.39-1.02,0-1.41L18.37,3.29z"
                    />
                  </g>
                </g>
              </g>
            </svg>
          </div>
          </nuxt-link>
          <div
            @click="deleteEvent(index)"
            class="tw-w-8 tw-mr-2 hover:tw-shadow-xl tw-h-8 tw-rounded-full tw-text-center tw-bg-red-200 tw-flex tw-justify-center tw-items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M14.12 10.47L12 12.59l-2.13-2.12-1.41 1.41L10.59 14l-2.12 2.12 1.41 1.41L12 15.41l2.12 2.12 1.41-1.41L13.41 14l2.12-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4zM6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9z"
              />
            </svg>
          </div>

          <div
            @click="toggleDialog(event, index)"
            class="tw-w-8 tw-h-8 tw-rounded-full tw-text-center tw-bg-yellow-200 tw-flex tw-justify-center tw-items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M12 6c3.79 0 7.17 2.13 8.82 5.5C19.17 14.87 15.79 17 12 17s-7.17-2.13-8.82-5.5C4.83 8.13 8.21 6 12 6m0-2C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 5c1.38 0 2.5 1.12 2.5 2.5S13.38 14 12 14s-2.5-1.12-2.5-2.5S10.62 9 12 9m0-2c-2.48 0-4.5 2.02-4.5 4.5S9.52 16 12 16s4.5-2.02 4.5-4.5S14.48 7 12 7z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <h3 class="tw-text-lg tw-text-black tw-font-bold tw-mb-2">
        No events found
      </h3>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import moment from "moment";

export default {
  props: {},
  data() {
    return {
      eventDialog: false,
      event: {
        details: {},
        id: null,
      },
      localEvents: [],
    };
  },
  computed: {
    ...mapGetters({
      events: "getEvents",
      user: "getUser",
    }),
  },
  watch: {
    // events() {
    //   this.localEvents = this.events;
    // },
  },
  methods: {
    toggleDialog(event, index) {
      this.event.id = index;
      this.event.details = event;
      this.eventDialog = true;
    },
    deleteEvent(index) {
      this.$store.commit("UPDATE_EVENTS_ARRAY", index);
    },
    downloadIcs() {
      this.$ics.removeAllEvents();
      const language = "en-us";
      const subject = this.event.details.title;
      const description = subject + " with " + this.user.name;
      const location = this.event.details.location + ' ' + this.event.details.address;
      const begin = moment
        .utc(this.event.details.date + " " + this.event.details.time)
        .format("YYYY-MM-DD HH:mm:ss");
      const stop = moment
        .utc(this.event.details.date + " " + this.event.details.time)
        .format("YYYY-MM-DD HH:mm:ss");
      const url = this.event.details.address;
      const organizer = {
        name: this.user.name,
        email: this.user.email,
      };

      this.$ics.addEvent(
        language,
        subject,
        description,
        location,
        begin,
        stop,
        url,
        organizer
      );
      console.log(this.$ics.calendar());
      // eslint-disable-next-line camelcase
      const ics_data = this.$ics.calendar().replace(/^\s+|\s+$/g, "");

      // eslint-disable-next-line camelcase
      const temp_ics_link = document.createElement("a");
      temp_ics_link.setAttribute(
        "href",
        "data:text/calendar;charset=utf8," + encodeURIComponent(ics_data)
      );
      temp_ics_link.setAttribute("download", subject);

      temp_ics_link.style.display = "none";
      document.body.appendChild(temp_ics_link);

      temp_ics_link.click();

      document.body.removeChild(temp_ics_link);

      // this.$ics.download(subject)
    },
  },
};
</script>

<style></style>
