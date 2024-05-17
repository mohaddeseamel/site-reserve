<template>
  <div class="showUserStylish bg-white">
    <h1 class="title text-end p-3" style="color: #7c766a">لیست آرایشگران</h1>
    <div class="stylist-card flex p-5">
      <swiper
        effect="cube"
        :modules="modules"
        :slides-per-view="4"
        :centeredSlides="false"
        :spaceBetween="20"
        :navigation="true"
        :virtual="true"
        class="mySwiper"
      >
        <swiper-slide
          class="card border-2 p-5 text-center rounded-2xl cursor-pointer"
          v-for="(user, index) in userInfo"
          :key="index"
          :virtualIndex="user.id"
          style="border-color: #d7c6bc"
          :class="[{ active: index === activeIndex }]"
          @click="toggleBg(index)"
        >
          <!-- <img :src="(user.img)" alt="userImd"> -->
          <!-- <img :src="`../assets/imgs/${user.img}.jpg`" alt="stylishImg"> -->

          <div class="w-full flex justify-center items-center">
            <img
              src="../assets/imgs/stylish-1.jpg"
              alt="stylish-1"
              class="h-28 w-28 rounded-full object-cover border-2"
            />
          </div>
          <span class="text-zinc-800 text-sm text-center mt-3">{{
            user.name
          }}</span>
          <div class="star flex justify-center mt-3">
            <span class="mr-2" style="color: #cdcac1">{{ user.star }}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              style="width: 20px"
            >
              <!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
              <path
                fill="#e7bc9c"
                d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
              />
            </svg>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import { reactive, ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/virtual";
import { Navigation, Virtual } from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const activeIndex = ref(null);
    let swiperRef = ref(null);
    const setSwiperRef = (swiper) => {
      swiperRef = swiper;
    };
    const toggleBg = (index) =>{
        activeIndex.value = index;
    }
    const userInfo = reactive([
      {
        id: 0,
        name: "علیرضا اسدی",
        img: "stylish-1",
        star: 4.2,
      },
      {
        id: 1,
        name: "علیرضا اسدی",
        img: "stylish-1",
        star: 4.2,
      },
      {
        id: 2,
        name: "علیرضا اسدی",
        img: "stylish-1",
        star: 4.2,
      },
      {
        id: 3,
        name: "علیرضا اسدی",
        img: "stylish-1",
        star: 4.2,
      },
      {
        id: 4,
        name: "علیرضا اسدی",
        img: "stylish-1",
        star: 4.2,
      },
      {
        id: 5,
        name: "علیرضا اسدی",
        img: "stylish-1",
        star: 4.2,
      },
      {
        id: 6,
        name: "علیرضا اسدی",
        img: "stylish-1",
        star: 4.2,
      },
      {
        id: 7,
        name: "علیرضا اسدی",
        img: "stylish-1",
        star: 4.2,
      },
      {
        id: 8,
        name: "علیرضا اسدی",
        img: "stylish-1",
        star: 4.2,
      },
      {
        id: 9,
        name: "علیرضا اسدی",
        img: "stylish-1",
        star: 4.2,
      },
    ]);

    return {
      userInfo,
      setSwiperRef,
      modules: [Navigation, Virtual],
      swiperRef: null,
      toggleBg
    };
  },
};
</script>


<style>
.active{
    background-color: #e4ceb6;
}
</style>
