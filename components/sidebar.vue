<template>
  <div class="tw-w-2/6">
    <div
      class="animate__animated animate__fadeInUp  tw-mt-4 tw-shadow-md hover:tw-shadow-lg tw-bg-purple-600 tw-text-white tw-h-12 tw-rounded-lg tw-flex tw-items-center tw-justify-center hover:tw-bg-purple-700"
    >
      <span class="" v-if="!form.date">+ Create Schedule</span>
      <span
        class="animate__animated animate__fadeIn animate__slow"
        v-if="form.date"
        >{{ form.date }}</span
      >
    </div>
    <div v-if="!form.date" class="animate__animated animate__fadeInUp">
      <v-date-picker v-model="form.date" no-title color="#6d28d9" scrollable />
    </div>

    <div class="tw-mt-3 animate__animated animate__fadeInUp" v-if="form.date">
      <div
        class="grid grid-cols-1 tw-mt-3  tw-border-purple-600 tw-border-2 tw-rounded-lg"
      >
        <input
          class="tw-py-2 tw-px-3 tw-rounded-lg tw-border-2  focus:tw-outline-none focus:tw-ring-2 focus:tw-border-transparent tw-w-full"
          type="text"
          v-model="form.username"
          placeholder="Full name"
        />
      </div>

      <div
        class="grid grid-cols-1  tw-mt-3 tw-border-purple-600 tw-border-2 tw-rounded-lg"
      >
        <input
          class="tw-py-2 tw-px-3 tw-rounded-lg tw-border-2  focus:tw-outline-none focus:tw-ring-2 focus:tw-border-transparent tw-w-full"
          type="email"
          v-model="form.email"
          placeholder="email"
        />
      </div>
      <div
        class="grid grid-cols-1  tw-mt-3 tw-border-purple-600 tw-border-2 tw-rounded-lg"
      >
        <input
          class="tw-py-2 tw-px-3 tw-rounded-lg tw-border-2  focus:tw-outline-none focus:tw-ring-2 focus:tw-border-transparent tw-w-full"
          type="text"
          v-model="form.title"
          placeholder="Event Title"
        />
      </div>
      <div
        class="grid grid-cols-1  tw-mt-3 tw-border-purple-600 tw-border-2 tw-rounded-lg"
      >
        <input
          class="tw-py-2 tw-px-3 tw-rounded-lg tw-border-2  focus:tw-outline-none focus:tw-ring-2 focus:tw-border-transparent tw-w-full"
          type="text"
          v-model="form.location"
          placeholder="Location"
        />
      </div>
      <div
        class="grid grid-cols-1  tw-mt-3 tw-border-purple-600 tw-border-2 tw-rounded-lg"
      >
        <input
          class="tw-py-2 tw-px-3 tw-rounded-lg tw-border-2  focus:tw-outline-none focus:tw-ring-2 focus:tw-border-transparent tw-w-full"
          type="text"
          v-model="form.address"
          placeholder="Address / Url"
        />
      </div>
      <v-dialog
        ref="dialog"
        v-model="modal2"
        :return-value.sync="time"
        persistent
        width="290px"
      >
        <template v-slot:activator="{ on, attrs }">
          <div
        class="grid grid-cols-1  tw-mt-3 tw-border-purple-600 tw-border-2 tw-rounded-lg"
      >
        <input
          class="tw-py-2 tw-px-3 tw-rounded-lg tw-border-2  focus:tw-outline-none focus:tw-ring-2 focus:tw-border-transparent tw-w-full"
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
          @click="form.date == ''"
          class="tw-items-center tw-flex tw-cursor-pointer tw-mr-3 hover:tw-shadow-lg tw-transition tw-w-12 tw-h-12 tw-rounded-xl tw-justify-center tw-bg-gray-400"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#1f2937"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"
            />
          </svg>
          <span> </span>
        </div>
        <div @click="addEvent"
          class="tw-cursor-pointer tw tw-w-3/4 tw-shadow-md hover:tw-shadow-lg tw-bg-purple-600 tw-text-white tw-h-12 tw-rounded-lg tw-flex tw-items-center tw-justify-center hover:tw-bg-purple-700"
        >
          <span class="">
            <!-- <v-progress-circular
            indeterminate
            color="white"
            size="20"
            width="3"
          ></v-progress-circular> -->

            Create event</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      disabled: true,
      date: "",
      modal2: false,
      time: "",
      form:{
          username: '',
          email: '',
          time: '',
          date: '',
          title: '',
          location: '',
          address: '',
      }
    };
  },
  methods: {
    addEvent(){
      console.log("Event");
      this.$store.dispatch('addUser', this.form)
    }
  }
};
</script>

<style lang="scss" scoped></style>
