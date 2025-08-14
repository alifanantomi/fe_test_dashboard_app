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
// eslint-disable-next-line import/no-extraneous-dependencies
import {
  RiBookMarkedLine, RiGraduationCapLine, RiMoneyDollarBoxLine, RiUserLine,
} from '@remixicon/vue';
import StatCard from '@/components/StatCard.vue';
import StudentTable from '@/components/StudentTable.vue';
import { StudentRow } from '@/lib/types/student';
import avatarImg from '@/assets/avatar.jpg';

export default defineComponent({
  name: 'DashboardHome',
  components: { DashboardLayout, StatCard, StudentTable },
  setup() {
    const stats = [
      {
        label: 'Students', value: 243, color: 'skyblue', icon: RiGraduationCapLine,
      },
      {
        label: 'Course', value: 13, color: 'lightpink', icon: RiBookMarkedLine,
      },
      {
        label: 'Payments', value: 556000, color: 'secondary', icon: RiMoneyDollarBoxLine,
      },
      {
        label: 'Users', value: 3, color: 'primary', icon: RiUserLine,
      },
    ];

    const students: StudentRow[] = [
      {
        id: 1,
        avatar: avatarImg,
        name: 'Karthi Madesh',
        email: 'karthi@example.com',
        phone: '+91 98765 43210',
        enrollNumber: 'ENR001',
        admissionDate: '08-Dec, 2021',
      },
      {
        id: 2,
        avatar: avatarImg,
        name: 'Ananya Rao',
        email: 'ananya.rao@example.com',
        phone: '+91 91234 56789',
        enrollNumber: 'ENR002',
        admissionDate: '15-Jan, 2022',
      },
      {
        id: 3,
        avatar: avatarImg,
        name: 'Ravi Kumar',
        email: 'ravi.kumar@example.com',
        phone: '+91 99887 76655',
        enrollNumber: 'ENR003',
        admissionDate: '23-Mar, 2022',
      },
      {
        id: 4,
        avatar: avatarImg,
        name: 'Priya Singh',
        email: 'priya.singh@example.com',
        phone: '+91 90000 11122',
        enrollNumber: 'ENR004',
        admissionDate: '02-Jul, 2022',
      },
      {
        id: 5,
        avatar: avatarImg,
        name: 'Arjun Mehta',
        email: 'arjun.mehta@example.com',
        phone: '+91 95555 44433',
        enrollNumber: 'ENR005',
        admissionDate: '18-Sep, 2022',
      },
    ];

    return {
      stats,
      students,
    };
  },
});
</script>
