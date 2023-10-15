<template>
  <div class="max-w-screen-sm mx-auto px-4 py-10">
    <div v-if="errorMessage" class="mb-10 p-4 rounded-md bg-light-grey shadow-lg">
      <p class="text-red-500">{{ errorMessage }}</p>
    </div>

    <form @submit.prevent="login" class="p-8 flex flex-col bg-light-grey rounded-md shadow-lg">
      <h1 class="text-3xl text-at-light-green mb-4">{{ $t('common.login') }}</h1>

      <div class="flex flex-col mb-2">
        <label for="email" class="mb-1 text-sm text-at-light-green">{{ $t('user.email') }}</label>
        <input type="text" required class="p-2 text-gray-500 focus:outline-none" id="email" v-model="email" />
      </div>

      <div class="flex flex-col mb-2">
        <label for="password" class="mb-1 text-sm text-at-light-green">{{ $t('user.password') }}</label>
        <input type="password" required class="p-2 text-gray-500 focus:outline-none" id="password" v-model="password" />
      </div>

      <button type="submit" class="mt-6 py-2 px-6 rounded-sm self-start text-sm text-white bg-at-light-green duration-200 border-solid border-2 hover: border-at-light-green hover:bg-white hover:text-at-light-green">
        {{ $t('common.login') }}
      </button>

      <router-link class="text-sm mt-6 text-center" :to="{ name: 'Register' }">
        {{ $t('phrases.dontAlreadyHaveAccount') }} <span class="text-at-light-green">{{ $t('common.registerVerb') }}</span>
      </router-link>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { supabase } from '@/supabase/supabase';
import { useRouter } from 'vue-router';

const router = useRouter();
const email = ref<string>('');
const password = ref<string>('');
const errorMessage = ref<string>('');

const login = async () => {
  try {
    const { error } = await supabase.auth.signInWithPassword({
      email: email.value,
      password: password.value,
    });
    if (error) throw error;
    router.push({ name: 'Home' })
  } catch (error: any) {
    errorMessage.value = `Error: ${error.message}`;
    setTimeout(() => {
      errorMessage.value = '';
    }, 5000)
  }
}

</script>