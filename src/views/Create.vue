<template>
  <div class="max-w-screen-md mx-auto px-4 py-10">
    <div v-if="statusMassege || errorMessage" class="mb-10 p-4 bg-light-grey rounded-md">
      <p class="text-at-light-green">
        {{ statusMassege }}
      </p>
      <p class="text-red-500">
        {{ errorMessage }}
      </p>
    </div>

    <div class="p-8 flex items-start bg-light-grey rounded-md shadow-lg">
      <form class="flex flex-col gap-y-5 w-full">
        <h1 class="text-2xl text-at-light-green">
          {{ $t('common.recordWorkout') }}
        </h1>

        <div class="flex flex-col">
          <label for="workoutName" class="mb-1 text-sm text-at-light-green">
            {{ $t('common.workoutName') }}
          </label>
          <input type="text" class="p-2 text-gray-500 focus:outline-none" id="workoutName" v-model="workoutName" />
        </div>

        <div class="flex flex-col">
          <label for="workoutType" class="mb-1 text-sm text-at-light-green">
            {{ $t('common.workoutType') }}
          </label>
          <select id="workoutType" class="p-2 text-gray-500 focus:outline-none bg-white" required v-model="workoutType">
            <option value="selectWorkout">{{ $t('common.selectWorkout') }}</option>
            <option value="strengthTraining">{{ $t('common.strengthTraining') }}</option>
            <option value="cardio">{{ $t('common.cardio') }}</option>
          </select>
        </div>

        <div v-if="workoutType === 'strengthTraining'" class="flex flex-col gap-y-4">
          <div class="flex flex-col gap-x-6 gap-y-2 relative md:flex-row" v-for="(item, index) in exercises" :key="index">
            <div class="flex flex-col md:w-1/3">
              <label for="exerciseName" class="mb-1 text-sm text-at-light-green">
                {{ $t('common.exercise') }}
              </label>
              <input required type="text" class="p-2 w-full text-gray-500 focus:outline-none" v-model="item.exercise" />
            </div>
            <div class="flex flex-col flex-1">
              <label for="reps" class="mb-1 text-sm text-at-light-green">
                {{ $t('common.reps') }}
              </label>
              <input required type="text" class="p-2 w-full text-gray-500 focus:outline-none" v-model="item.reps" />
            </div>
            <div class="flex flex-col flex-1">
              <label for="sets" class="mb-1 text-sm text-at-light-green">
                {{ $t('common.sets') }}
              </label>
              <input required type="text" class="p-2 w-full text-gray-500 focus:outline-none" v-model="item.sets" />
            </div>
            <div class="flex flex-col flex-1">
              <label for="weight" class="mb-1 text-sm text-at-light-green">
                {{ $t('common.weight') }}
              </label>
              <input required type="text" class="p-2 w-full text-gray-500 focus:outline-none" v-model="item.weight" />
            </div>
            <img src="@/assets/images/trash-light-green.png" class="h-4 w-auto absolute -left-5 cursor-pointer" alt="">
            <button type="submit" class="mt-6 py-2 px-6 rounded-sm self-start text-sm text-white bg-at-light-green duration-200 border-solid border-2 hover: border-at-light-green hover:bg-white hover:text-at-light-green">
              {{ $t('common.addExercise') }}
            </button>
          </div>
        </div>

        <div v-if="workoutType === 'cardio'" class="flex flex-col gap-y-4">
          <div class="flex flex-col gap-x-6 gap-y-2 relative md:flex-row" v-for="(item, index) in exercises" :key="index">
            <div class="flex flex-col md:w-1/3">
              <label for="cardioType" class="mb-1 text-sm text-at-light-green">
                {{ $t('common.type') }}
              </label>
              <select id="cardioType" class="bg-white p-2 w-full- text-gray-500 focus:outline-none" v-model="item.cardioType">
                <option value="#">{{ $t('common.selectType') }}</option>
                <option value="run">{{ $t('common.runs') }}</option>
                <option value="walk">{{ $t('common.walk') }}</option>
              </select>
            </div>
            <div class="flex flex-col flex-1">
              <label for="distance" class="mb-1 text-sm text-at-light-green">
                {{ $t('common.distance') }}
              </label>
              <input required type="text" class="p-2 w-full text-gray-500 focus:outline-none" v-model="item.distance" />
            </div>
            <div class="flex flex-col flex-1">
              <label for="duration" class="mb-1 text-sm text-at-light-green">
                {{ $t('common.duration') }}
              </label>
              <input required type="text" class="p-2 w-full text-gray-500 focus:outline-none" v-model="item.duration" />
            </div>
            <div class="flex flex-col flex-1">
              <label for="pace" class="mb-1 text-sm text-at-light-green">
                {{ $t('common.pace') }}
              </label>
              <input required type="text" class="p-2 w-full text-gray-500 focus:outline-none" v-model="item.pace" />
            </div>
            <img src="@/assets/images/trash-light-green.png" class="h-4 w-auto absolute -left-5 cursor-pointer" alt="">
            <button type="submit" class="mt-6 py-2 px-6 rounded-sm self-start text-sm text-white bg-at-light-green duration-200 border-solid border-2 hover: border-at-light-green hover:bg-white hover:text-at-light-green">
              {{ $t('common.addExercise') }}
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const workoutName = ref<string>('');
const workoutType = ref<string>('selectWorkout');
const exercises = ref<any[]>([1]);
const statusMassege = ref<any>(null);
const errorMessage = ref<string>('');

</script>