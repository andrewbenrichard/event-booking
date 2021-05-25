<template>
  <v-app>
    <div class="tw-bg-gray-100 tw-h-full">
      <v-container>
         <Header :user="user"/>
        <nuxt />
      </v-container>
    </div>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {};
  },
    computed: {
    ...mapGetters({
      user: 'getUser',
    }),
  }
};
</script>
