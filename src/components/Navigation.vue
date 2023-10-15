<template>
  <header class="bg-at-light-green text-white">
    <nav class="container py-5 px-4 flex flex-col gap-4 items-center sm:flex-row">
      <div class="flex items-center gap-x-4">
        <img class="w-14" src="@/assets/images/dumbbell-light.png" alt="">
        <h1 class="text-lg">Active Tracker</h1>
      </div>
      <ul class="flex flex-1 justify-end gap-x-10">
        <router-link class="cursor-pointer" :to="{ name: 'Home' }">{{ $t('common.home') }}</router-link>
        <router-link v-if="user" class="cursor-pointer" :to="{ name: 'Create' }">{{ $t('common.create') }}</router-link>
        <router-link v-if="!user" class="cursor-pointer" :to="{ name: 'Login' }">{{ $t('common.login') }}</router-link>
        <li v-if="user" @click="logout" class="cursor-pointer">{{ $t('common.logout') }}</li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { userStore } from '@/store/modules/index';
import { computed } from 'vue';
import { supabase } from '@/supabase/supabase';
import { useRouter } from 'vue-router';

const store = userStore();
const user = computed(() => store.getUser);
const router = useRouter();

const logout = async () => {
  await supabase.auth.signOut();
  router.push({ name: 'Home' })
}

</script>