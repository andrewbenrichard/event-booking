<template>
  <div class="tw-mx-5">
    <div>
      <nuxt-link
        to="/"
        class="tw-items-center tw-mt-6 tw-flex tw-cursor-pointer tw-mr-3 hover:tw-shadow-lg tw-transition tw-w-12 tw-h-12 tw-rounded-xl tw-justify-center tw-bg-gray-400"
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
            d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"
          />
        </svg>
      </nuxt-link>
    </div>
    <div class="tw-flex tw-w-full tw-mt-11">
      <div class="tw-w-2/3 animate__animated animate__fadeInUp tw-relative">
        <SingleEvent :event="form" />
      </div>
      <div class="tw-pl-12 tw-w-full">
        <div>
          <h4 class="tw-text-lg tw-text-black tw-font-bold tw-mb-2">
            Edit Event
          </h4>
          <v-form @submit.prevent="updateEvent">
            <div class="tw-mt-3 animate__animated animate__fadeInUp">
              <div
                class="grid grid-cols-1 tw-mt-3 tw-border-purple-600 tw-border-2 tw-rounded-lg"
              >
                <input
                  class="tw-py-2 tw-px-3 tw-rounded-lg tw-border-2 focus:tw-outline-none focus:tw-ring-2 focus:tw-border-transparent tw-w-full"
                  type="text"
                  v-model="form.title"
                  placeholder="Event Title"
                />
              </div>
              <div
                class="grid grid-cols-1 tw-mt-3 tw-border-purple-600 tw-border-2 tw-rounded-lg"
              >
                <input
                  class="tw-py-2 tw-px-3 tw-rounded-lg tw-border-2 focus:tw-outline-none focus:tw-ring-2 focus:tw-border-transparent tw-w-full"
                  type="text"
                  v-model="form.location"
                  placeholder="Location"
                />
              </div>
              <div
                class="grid grid-cols-1 tw-mt-3 tw-border-purple-600 tw-border-2 tw-rounded-lg"
              >
                <input
                  class="tw-py-2 tw-px-3 tw-rounded-lg tw-border-2 focus:tw-outline-none focus:tw-ring-2 focus:tw-border-transparent tw-w-full"
                  type="text"
                  v-model="form.address"
                  placeholder="Address / Url"
                />
              </div>
              <v-dialog
                ref="dateDialog"
                v-model="modal"
                :return-value.sync="form.date"
                persistent
                width="290px"
              >
                <template v-slot:activator="{ on, attrs }">
                  <div
                    class="grid grid-cols-1 tw-mt-3 tw-border-purple-600 tw-border-2 tw-rounded-lg"
                  >
                    <input
                      class="tw-py-2 tw-px-3 tw-rounded-lg tw-border-2 focus:tw-outline-none focus:tw-ring-2 focus:tw-border-transparent tw-w-full"
                      type="text"
                      v-model="form.date"
                      label="Picker in dialog"
                      prepend-icon="mdi-calendar"
                      readonly
                      placeholder="Event date"
                      v-bind="attrs"
                      v-on="on"
                    />
                  </div>
                </template>

                <v-date-picker v-model="form.date" scrollable>
                  <v-spacer></v-spacer>
                  <v-btn text color="primary" @click="modal = false">
                    Cancel
                  </v-btn>
                  <v-btn
                    text
                    color="primary"
                    @click="$refs.dateDialog.save(form.date)"
                  >
                    OK
                  </v-btn>
                </v-date-picker>
              </v-dialog>
              <v-dialog
                ref="dialog"
                v-model="modal2"
                :return-value.sync="time"
                persistent
                width="290px"
              >
                <template v-slot:activator="{ on, attrs }">
                  <div
                    class="grid grid-cols-1 tw-mt-3 tw-border-purple-600 tw-border-2 tw-rounded-lg"
                  >
                    <input
                      class="tw-py-2 tw-px-3 tw-rounded-lg tw-border-2 focus:tw-outline-none focus:tw-ring-2 focus:tw-border-transparent tw-w-full"
                      type="text"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                      v-model="form.time"
                      placeholder="Event time"
                    />
                  </div>
                </template>
                <v-time-picker
                  v-if="modal2"
                  v-model="form.time"
                  header-color="#6d28d9"
                  color="#000000"
                  full-width
                >
                  <v-spacer></v-spacer>
                  <v-btn text color="primary" @click="modal2 = false">
                    Cancel
                  </v-btn>
                  <v-btn text color="primary" @click="$refs.dialog.save(time)">
                    OK
                  </v-btn>
                </v-time-picker>
              </v-dialog>
              <div class="tw-flex tw-items-center tw-justify-center tw-mt-5">
                <div
                  @click="updateEvent"
                  class="tw-cursor-pointer tw tw-w-3/4 tw-shadow-md hover:tw-shadow-lg tw-bg-purple-600 tw-text-white tw-h-12 tw-rounded-lg tw-flex tw-items-center tw-justify-center hover:tw-bg-purple-700"
                >
                  <span class=""> Update event</span>
                </div>
              </div>
            </div>
          </v-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      event: {},
      modal: false,
      modal2: false,
      time: "",
      editMode: false,
      form: {
        username: "Andrew R",
        email: "andrewbenrichard@gmail.com",
        start: "06:30",
        end: "06:30",
        date: "2021-05-27",
        title: "demo",
        location: "dwee",
        address: "https://zoom.com",
      },
    };
  },
  computed: {},
  mounted() {
    this.singleEvent();
  },
  watch: {
    form() {
      this.editMode = true;
    },
  },
  methods: {
    updateEvent() {
      const singleEvent = {
        index: this.$route.params.slug,
        event: this.form,
      };
      this.$store.commit("UPDATE_SINGLE_EVENTS", this.singleEvent);
    },
    singleEvent() {
      const data = this.$store.getters.getEvents;
      this.form = data[this.$route.params.slug];
    },
  },
};
</script>

<style>
</style>