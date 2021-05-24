<template>
  <div>
   <div v-if="events.length">
      <div
      v-for="event in events"
      :key="event.index"
      class="tw-bg-white animate__animated  animate__fadeInUp tw-mt-4 tw-font-bold tw-text-sm tw-max-h-14 tw-shadow-xl tw-w-full tw-h-14 tw-rounded-xl tw-p-4 tw-grid tw-grid-cols-5 tw-gap-2 tw-items-center hover:tw-shadow-2xl tw-cursor-pointer tw-transition hover:tw-text-purple-500"
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
        <div
          class="tw-w-8 tw-mr-2 tw-h-8 tw-rounded-full tw-text-center tw-bg-red-200 tw-flex tw-justify-center tw-items-center"
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
          class="tw-w-8 tw-h-8 tw-rounded-full tw-text-center tw-bg-yellow-200 tw-flex tw-justify-center tw-items-center"
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
                    d="M11,12l-6-1.5V7.01l8.87,3.73c0.94-0.47,2-0.75,3.13-0.75c0.1,0,0.19,0.01,0.28,0.01L3,4v16l7-2.95c0-0.02,0-0.03,0-0.05 c0-0.8,0.14-1.56,0.39-2.28L5,16.99V13.5L11,12z"
                  />
                </g>
                <g>
                  <path
                    d="M17,12c-2.76,0-5,2.24-5,5s2.24,5,5,5s5-2.24,5-5S19.76,12,17,12z M17,20l-3-3l0.71-0.71l1.79,1.79V14h1v4.09l1.79-1.79 L20,17L17,20z"
                  />
                </g>
              </g>
            </g>
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
import { mapGetters } from 'vuex'

export default {
  props: {
  },
  computed: {
    ...mapGetters({
      events: 'getEvents',
    }),
  }
};
</script>

<style></style>
