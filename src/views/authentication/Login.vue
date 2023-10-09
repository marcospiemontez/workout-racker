<template>
  <form class="flex justify-center items-center bg-blue-100 h-screen" @submit.prevent="handleLogin">
    <div class="bg-white p-5 rounded-xl w-80">
      <p class="text-2xl font-bold text-primary my-4">Login</p>
      <div class="w-full space-y-4">
        <input class="w-full px-4 py-2 border rounded-lg" type="text" id="email" v-model="loginData.email" placeholder="Email" />
        <input class="w-full px-4 py-2 border rounded-lg" type="text" id="email" v-model="loginData.password" placeholder="Password" />
        <div class="space-y-4">
          <button class="w-full py-2 mt-3 bg-blue-200 text-white rounded-lg hover:bg-blue-600 focus: outline-none focus:ring-blue-200" type="submit">Login</button>
        </div>
      </div>
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Auth } from '@/types/Auth';

const loginData = ref<Auth>({
  email: '',
  password: '',
  user: {},
});

const handleLogin = () => {
  if (loginData.value.email === 'usuario@email.com' && loginData.value.password === 'senha') {
    loginData.value.user = {
      id: 1,
      name: 'Nome do Usuário',
      email: loginData.value.email,
    };
    alert('Login bem-sucedido!');
  } else {
    alert('Credenciais inválidas. Tente novamente.');
  }
};
</script>