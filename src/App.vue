<template>
  <router-view/>
</template>

<script lang="ts">
import store from './store';

export default {
  name: 'App',
  mounted() {
    store.dispatch('auth/checkAuth');
  },
};
</script>
