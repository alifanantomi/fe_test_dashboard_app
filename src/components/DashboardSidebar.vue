<!-- eslint-disable max-len -->
<template>
  <aside class="w-64 bg-sidebar text-sidebar-foreground flex flex-col">
    <div class="h-16 flex items-center justify-center ">
      <div class="w-fit px-4 border-l-6 border-secondary">
        <h1 class="text-xl font-bold">CRUD OPERATIONS</h1>
      </div>
    </div>

    <div class="flex flex-col gap-2 items-center justify-center p-8">
      <img class="w-32 h-32 rounded-full object-cover" src="@/assets/avatar.jpg" alt="">
      <div class="flex flex-col items-center">
        <h4 class="text-lg font-bold">Karthi Madesh</h4>
        <span class="text-primary">Admin</span>
      </div>
    </div>

    <nav class="flex-1 p-4 space-y-2">
      <RouterLink
        v-for="link in links"
        :key="link.name"
        :to="link.path"
        class="flex gap-2 items-center font-medium px-3 py-2 rounded hover:bg-primary"
        active-class="bg-primary"
      >
        <component :is="link.icon" size="20px" />
        {{ link.name }}
      </RouterLink>
    </nav>

    <div class="p-4">
      <button
        class="w-full flex gap-2 items-center text-start font-medium px-3 py-2 hover:bg-primary cursor-pointer rounded"
        @click="logout"
      >
        <RiLogoutBoxRLine size="20px" />
        Logout
      </button>
    </div>
  </aside>
</template>

<script lang="ts">
import store from '@/store';
// eslint-disable-next-line import/no-extraneous-dependencies
import {
  RiBarChartBoxLine,
  RiBookMarkedLine,
  RiFileSettingsLine,
  RiGraduationCapLine,
  RiHome4Line,
  RiLogoutBoxRLine,
  RiMoneyDollarBoxLine,
} from '@remixicon/vue';
import { defineComponent } from 'vue';
import { RouterLink, useRouter } from 'vue-router';

export default defineComponent({
  name: 'DashboardSidebar',
  components: { RouterLink, RiLogoutBoxRLine },
  setup() {
    const links = [
      { name: 'Home', path: '/dashboard', icon: RiHome4Line },
      { name: 'Course', path: '/dashboard/course', icon: RiBookMarkedLine },
      { name: 'Students', path: '/dashboard/students', icon: RiGraduationCapLine },
      { name: 'Payment', path: '/dashboard/payment', icon: RiMoneyDollarBoxLine },
      { name: 'Report', path: '/dashboard/report', icon: RiBarChartBoxLine },
      { name: 'Settings', path: '/dashboard/settings', icon: RiFileSettingsLine },
    ];

    const router = useRouter();

    const logout = () => {
      // eslint-disable-next-line no-restricted-globals, no-alert
      if (confirm('Are you sure you want to logout?')) {
        store.dispatch('auth/logout');
        router.push('/');
      }
    };

    return {
      links,
      logout,
    };
  },
});
</script>
