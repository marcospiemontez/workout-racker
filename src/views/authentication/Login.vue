<template>
  <div class="flex justify-center items-center h-screen bg-gray-500">
    <div class="bg-white p-8 rounded-xl w-80">
      <h2 class="text-2xl font-semibold mb-4">Login</h2>
      <div class="mb-4">
        <label for="email" class="block text-sm font-medium text-gray-600">Email</label>
        <input type="email" id="email" v-model="email" class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring focus:ring-blue-200" placeholder="Email">
      </div>
      <!-- <div class="mb-4"> -->
        <!-- <label for="password" class="block text-sm font-medium text-gray-600">Password</label> -->
        <!-- <div class="relative">
          <input type="password" id="password" v-model="password" class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring focus:ring-blue-200" placeholder="Password">
        </div> -->
      <!-- </div> -->
      <!-- <button @click="login" class="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200">Login</button> -->
      <!-- <div class="mt-4 text-center">
        <span class="text-gray-600">Don't have an account? <a href="#" class="text-blue-500 hover:underline">Register</a></span>
      </div> -->
    </div>
  </div>
</template>
