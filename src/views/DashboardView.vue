<template>
  <DashboardLayout>
    <div class="space-y-4">
      <div class="grid grid-cols-4 gap-4">
        <StatCard
          v-for="stat in stats"
          :key="stat.label"
          :stat="stat"
        />
      </div>
      <StudentTable :rows="students" />
    </div>
  </DashboardLayout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import DashboardLayout from '@/layouts/DashboardLayout.vue';
import StatCard from '@/components/StatCard.vue';
import StudentTable from '@/components/StudentTable.vue';
import { stats } from '@/lib/const/stats';
import { students } from '@/lib/const/students';

export default defineComponent({
  name: 'DashboardHome',
  components: { DashboardLayout, StatCard, StudentTable },
  setup() {
    return {
      stats,
      students,
    };
  },
});
</script>
