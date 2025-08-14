<!-- eslint-disable vuejs-accessibility/label-has-for -->
<template>
  <div class="flex h-screen items-center justify-center bg-gradient">
    <div class="w-lg flex flex-col gap-8 items-center bg-white p-10 rounded-2xl shadow-lg">
      <div class="w-fit px-4 border-l-6 border-secondary">
        <h1 class="text-4xl font-bold">CRUD OPERATIONS</h1>
      </div>

      <div class="grid gap-1">
        <h3 class="text-2xl font-semibold text-center">SIGN IN</h3>
        <p class="text-gray-400 text-center">Enter your credentials to access your account</p>
      </div>

      <form class="w-full grid gap-6" @submit.prevent="handleLogin">
        <div class="grid gap-4">
          <div class="w-full grid gap-1">
            <label for="email" class="form-label">Email</label>
            <input
              id="email"
              name="email"
              v-model="email"
              class="border border-gray-300 p-2 rounded-md"
              type="email"
              placeholder="Enter your email"
              required
            >
          </div>

          <div class="w-full grid gap-1">
            <label for="password" class="form-label">Password</label>
            <input
              id="password"
              name="password"
              v-model="password"
              class="border border-gray-300 p-2 rounded-md"
              type="password"
              placeholder="Enter your password"
              required
            >
          </div>
        </div>

        <button
          class="bg-primary text-white w-full py-3 rounded-md cursor-pointer"
          type="submit"
        >
          SIGN IN
        </button>

        <p class="text-center">
          Forgot your password?
          <RouterLink to="/" class="text-primary underline">Reset Password</RouterLink>
        </p>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import store from '@/store';
import { computed, defineComponent, ref } from 'vue';
import { RouterLink, useRouter } from 'vue-router';

export default defineComponent({
  name: 'LoginView',
  components: { RouterLink },
  setup() {
    const router = useRouter();

    const email = ref('');
    const password = ref('');
    const errorMsg = computed(() => store.getters['auth/getError']);

    const handleLogin = async () => {
      const success = await store.dispatch('auth/login', {
        email: email.value,
        password: password.value,
      });

      if (success) router.push('/dashboard');
      // eslint-disable-next-line no-alert
      else alert(errorMsg.value);
    };

    return {
      email,
      password,
      handleLogin,
    };
  },
});
</script>
