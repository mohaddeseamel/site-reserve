<template>
  <div class="TabshowTime mx-auto bg-white">
    <h1 class="text-start p-5 font-yekan text-lg" style="color: #7c766a">تایم های رزرو</h1>
    <ul class="flex justify-between space-x-2 text-white">
      <li class="w-1/3 ml-2">
        <button
          @click="activeTabOne"
          class="inline-block w-full  px-4 py-2 font-yekan bg-[#62c17d]"
        >
            صبح
        </button>
      </li>
      <li class="w-1/3">
        <button
          @click="activeTabTwo"
          class="inline-block w-full px-4 py-2 font-yekan bg-[#62c17d]"
        >
          ظهر
        </button>
      </li>
      <li class="w-1/3">
        <button
          @click="activeTabThree"
          class="inline-block w-full px-4 py-2 font-yekan bg-[#62c17d]"
        >
          عصر و شب
        </button>
      </li>
    </ul>
    <div class="p-4 text-center bg-white rounded-b-3xl">
      <div v-if="tab === 1" class="flex justify-start items-center flex-wrap">
        <div
          class="timeBtn"
          ref="checkedBg"
          v-for="(hour, index) in nightTime"
          :key="index"
        >
          <button
            @click="changeColor(index)"
            :class="[{ active: indexActive == index }]"
            class="border-2 ml-3 px-6 py-2 mt-3 rounded-lg w-40 border-[#62c17d]"
          >
            {{ hour.time }}
          </button>
        </div>
      </div>
      <div v-if="tab === 2" class="flex justify-start items-center flex-wrap">
        <div class="timeBtn" v-for="(hour, index) in noonTime" :key="index">
          <button
            @click="changeColor(index)"
            :class="[{ active: indexActive == index }]"
            class="border-2 ml-3 px-6 py-2 mt-3 rounded-lg w-40 border-[#62c17d] hover:bg-[#dff8e5]"
          >
            {{ hour.time }}
          </button>
        </div>
      </div>
      <div v-if="tab === 3" class="flex justify-start items-center flex-wrap">
        <div class="timeBtn" v-for="(hour, index) in morningTime" :key="index">
          <button
            class="border-2 ml-3 px-6 py-2 mt-3 rounded-lg w-40 border-[#62c17d] hover:bg-[#dff8e5]"
            @click="changeColor(index)"
            :class="[{ active: indexActive == index }]"
          >
            {{ hour.time }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, ref } from "vue";
export default {
  setup() {
    const tab = ref(1);
    const checkedBg = ref(false);
    const indexActive = ref(null);

    const activeTabOne = () => {
      tab.value = 1;
    };
    const activeTabTwo = () => {
      tab.value = 2;
    };
    const activeTabThree = () => {
      tab.value = 3;
    };

    const changeColor = (index) => {
      indexActive.value = index;
    };

    const morningTime = reactive([
      {
        id: 1,
        time: "9:30",
      },
      {
        id: 2,
        time: "9:45",
      },
      {
        id: 3,
        time: "10:00",
      },
      {
        id: 4,
        time: "10:15",
      },
      {
        id: 5,
        time: "10:30",
      },
      {
        id: 5,
        time: "11:00",
      },
      {
        id: 5,
        time: "11:20",
      },
      {
        id: 5,
        time: "11:45",
      },
    ]);

    const noonTime = reactive([
      {
        id: 1,
        time: "12:00",
      },
      {
        id: 2,
        time: "12:20",
      },
      {
        id: 3,
        time: "12:45",
      },
      {
        id: 4,
        time: "13:15",
      },
      {
        id: 5,
        time: "13:45",
      },
    ]);
    const nightTime = reactive([
      {
        id: 1,
        time: "20:00",
      },
      {
        id: 2,
        time: "20:15",
      },
      {
        id: 3,
        time: "20:45",
      },
      {
        id: 3,
        time: "21:00",
      },
    ]);

    return {
      tab,
      checkedBg,
      indexActive,
      activeTabOne,
      activeTabTwo,
      activeTabThree,
      changeColor,
      morningTime,
      noonTime,
      nightTime,
    };
  },
};
</script>

<style scoped>
.active {
  background-color: #53c373;
  color: white;
  border: transparent;
}
</style>
