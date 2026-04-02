<template>
  <div>
    <Beverage :isIced="beverageStore.currentTemp === 'Cold'"
    :isCream="beverageStore.currentCreamer?.name !== 'No Cream'"
    :isSyrup="beverageStore.currentSyrup?.name !== 'No Syrup'" />
    <ul>
      <li>
        <template v-for="temp in beverageStore.temps" :key="temp">
          <label>
            <input
              type="radio"
              name="temperature"
              :id="`r${temp}`"
              :value="temp"
              v-model="beverageStore.currentTemp"
            />
            {{ temp }}
          </label>
        </template>
      </li>
      <li>
        <template v-for="Base in beverageStore.base" :key="Base.id">
          <label>
            <input
              type="radio"
              name="base"
              :id="`r${Base}`"
              :value="Base"
              v-model="beverageStore.currentBase"
            />
            {{ Base }}
          </label>
        </template>
      </li>
      <li>
        <template v-for="cream in beverageStore.creamer" :key="cream.id">
          <label>
            <input
              type="radio"
              name="creamer"
              :id="`r${cream}`"
              :value="cream"
              v-model="beverageStore.currentCreamer"
            />
            {{ cream }}
          </label>
        </template>
      </li>
      <li>
        <template v-for="syrup in beverageStore.syrup" :key="syrup.id">
          <label>
            <input
              type="radio"
              name="syrup"
              :id="`r${syrup}`"
              :value="syrup"
              v-model="beverageStore.currentSyrup"
            />
            {{ syrup }}
          </label>
        </template>
      </li>
    </ul>
    <input type="text" placeholder="Beverage Name" />
    <button>🍺 Make Beverage</button>
  </div>
  <div id="beverage-container" style="margin-top: 20px">
    <ul>
      <li>
      <template v-for="drink in beverageStore.bevList" :key="drink.id">
      <label>
        <input
          type="radio"
          name="savedBeverages"
          :value="drink.id"
          v-model="drinkId"
          @change="beverageStore.showBeverage(drinkId)"
        />
        {{ drink.name}}
      </label>
      </template>
    </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import Beverage from "./components/Beverage.vue";
import { ref } from "vue";
import { useBeverageStore } from "./stores/beverageStore";
const beverageStore = useBeverageStore();
const drinkId = ref("")
</script>

<style lang="scss">
body,
html {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: #6e4228;
  background: linear-gradient(to bottom, #6e4228 0%, #956f5a 100%);
}
ul {
  list-style: none;
}
</style>
