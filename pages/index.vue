<template>
  <div class="tw-mx-5">
    <Header :user="user"/>
    <div class="tw-flex tw-w-full tw-mt-11">
      <Sidebar />
      <div class="tw-pl-12 tw-w-full">
        <div>
          <h4 class="tw-text-lg tw-text-black tw-font-bold tw-mb-2">Scheduled events</h4>
        </div>
        <Events />
      </div>
    </div>
  </div>
</template>

<script>

import { mapGetters } from 'vuex'

export default {
  components: {
   
  },
  data() {
    return {
    };
  },
  layouts: "default",
    computed: {
    ...mapGetters({
      user: 'getUser',
    }),
  }
};
</script>
