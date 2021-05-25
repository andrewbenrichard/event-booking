<template>
  <div class="tw-mx-5">
    <div class="tw-flex tw-w-full tw-mt-11">
      <Sidebar />
      <div class="tw-pl-12 tw-w-full">
        <div>
          <h4 class="tw-text-lg tw-text-black tw-font-bold tw-mb-2">
            Scheduled events
          </h4>
        </div>
        <Events />
      </div>
    </div>
    <client-only>
      <v-dialog v-model="dialog" persistent width="500">
        <v-card class="tw-relative">
          <div class="tw-h-24 tw-flex tw-items-center tw-justify-center">
            <p class="tw-font-extrabold tw-text-gray-700">
              Welcome - Create your account
            </p>
          </div>

          <div class="tw-px-12 tw-pb-8">
            <div
            class="grid grid-cols-1 tw-mt-3 tw-border-purple-600 tw-border-2 tw-rounded-lg"
          >
            <input
              class="tw-py-2 tw-px-3 tw-rounded-lg tw-border-2 focus:tw-outline-none focus:tw-ring-2 focus:tw-border-transparent tw-w-full"
              type="text"
              v-bind="attrs"
              v-on="on"
              v-model="form.username"
              placeholder="Your Name"
            />
          </div>
          <div
            class="grid grid-cols-1 tw-mt-3 tw-border-purple-600 tw-border-2 tw-rounded-lg"
          >
            <input
              class="tw-py-2 tw-px-3 tw-rounded-lg tw-border-2 focus:tw-outline-none focus:tw-ring-2 focus:tw-border-transparent tw-w-full"
              type="text"
              v-bind="attrs"
              v-on="on"
              v-model="form.email"
              placeholder="Email"
            />
          </div>
          <p v-if="error" class="tw-text-red-500">{{error}}</p>
          </div>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <div
              @click="addUser"
              class="tw-cursor-pointer tw tw-w-3/4 tw-shadow-md hover:tw-shadow-lg tw-bg-purple-600 tw-text-white tw-h-12 tw-rounded-lg tw-flex tw-items-center tw-justify-center hover:tw-bg-purple-700"
            >
              <span class="">
                <!-- <v-progress-circular
            indeterminate
            color="white"
            size="20"
            width="3"
          ></v-progress-circular> -->

                Create account</span
              >
            </div>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </client-only>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  components: {},
  data() {
    return {
      dialog: true,
      error: '',
      form: {
        username: "",
        email: "",
      },
    };
  },
  layouts: "default",
  methods: {
    addUser() {
     if (this.form.username && this.form.email) {
        try {
        this.$store.commit("ADD_USER", this.form);
        this.dialog = false
        this.error = ''
      } catch (err) {
        console.log(err);
      }
     } else {
       this.error = "Please fill all form"
     }
    },
  },
};
</script>
