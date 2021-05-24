<template>
  <div class="tw-block">
      <h1 class="tw-text-3xl tw-text-black tw-font-bold">Scheduler <span class="animate__animated animate__fadeIn" v-if="user.name">- Welcome {{user.name}}</span></h1>
  </div>
</template>

<script>
export default {
  props: {
    user:{
      type: Object,
    default: null
    }
  }
}
</script>

<style>

</style>