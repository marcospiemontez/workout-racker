<template>
  <div v-if="dataLoader" class="container mt-10 px-4">
    <div v-if="data.length === 0" class="w-full flex flex-col items-center">
      <h1 class="text-2xl">Looks empty here...</h1>
      <router-link :to="{ name: 'create' }">{{ create Workout }}</router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { supabase } from '@/supabase/supabase';

const data = ref<any[]>([]);
const dataLoader = ref<boolean>(false);

const getData = async () => {
  try {
    const { data: workouts, error } = await supabase.from('workouts').select('*');
    if (error) throw error;
    data.value = workouts;
    dataLoader.value = true;
  } catch (error: any) {
    console.warn(error.message);
  }
}

</script>