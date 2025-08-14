<template>
  <div class="flex h-screen bg-background">
    <DashboardSidebar />

    <div class="flex flex-col flex-1 overflow-hidden">
      <DashboardHeader />

      <main class="flex-1 overflow-y-auto p-6">
        <slot />
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import DashboardHeader from '@/components/DashboardHeader.vue';
import DashboardSidebar from '@/components/DashboardSidebar.vue';

export default defineComponent({
  name: 'DashboardLayout',
  components: {
    DashboardHeader,
    DashboardSidebar,
  },
});
</script>
