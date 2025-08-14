<template>
  <DashboardLayout>
    <h1 class="text-2xl font-bold">Payment</h1>
  </DashboardLayout>
</template>

<script>
import DashboardLayout from '@/layouts/DashboardLayout.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PaymentView',
  components: { DashboardLayout },
});
</script>
