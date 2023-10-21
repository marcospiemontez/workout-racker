<template>
  <div v-if="appReady" class="min-h-full font-Poppins box-border">
    <router-view />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { supabase } from './supabase/supabase';
import { userStore } from '@/store/modules/index';
import { User } from '@/types/User.ts';

const store = userStore();
const appReady = ref<boolean>(false);
const getUser = supabase.auth.getUser();

if (!getUser) {
  appReady.value = true;
}

supabase.auth.onAuthStateChange((_, session) => {
  const user = session as User;
  store.setUser(user);
  appReady.value = true;
  console.log('user');
});

</script>


<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Poppins:wght@100;200;300;400;500;600");
</style>