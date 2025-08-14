<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<template>
  <header class="flex items-center justify-between bg-white px-6 h-16">
    <RiArrowLeftCircleLine class="text-gray-400" size="24px" />

    <div class="flex items-center gap-6">
      <div class="flex items-center gap-2 border rounded-lg px-3 py-2 border-gray-300">
        <input
          name="search"
          class="text-sm focus-visible:outline-none"
          placeholder="Search..."
          type="text"
          v-model="searchQuery"
        />
        <RiSearchLine size="14px" />
      </div>

      <RiNotification3Line class="text-gray-400" size="24px" />
    </div>
  </header>
</template>

<script lang="ts">
// eslint-disable-next-line import/no-extraneous-dependencies
import { RiArrowLeftCircleLine, RiNotification3Line, RiSearchLine } from '@remixicon/vue';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'DashboardHeader',
  components: { RiArrowLeftCircleLine, RiSearchLine, RiNotification3Line },
  setup() {
    const searchQuery = ref('');

    return {
      searchQuery,
    };
  },
});
</script>
