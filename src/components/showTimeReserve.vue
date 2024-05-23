<template>
  <div
    class="showTimeReserve  w-full bg-white-default flex justify-between items-center"
  >
    <swiper
      effect="cube"
      :modules="modules"
      :slides-per-view="10"
      :centeredSlides="false"
      :spaceBetween="20"
      :navigation="true"
      :virtual="true"
      class="mySwiper"
    >
      <swiper-slide
        class="card flex w-24 text-center text-gray-light cursor-pointer p-2 flex-col leading-8 overflow-x-hidden"
        v-for="(card, index) in cards"
        :key="index"
        :virtualIndex="card.id"
        :class="[{ active: index === activeIndex }]"
        @click="toggleBg(index)"
      >
        <span class="text-base font-yekan text-gray-dark" >{{ card.dateText }}</span>
        <span
          class="rounded-full mx-auto text-center visited:text-blue-800 underline-offset-30 text-fontColor-brown"
          style="width: 2.2em; height: 2.2em; display: block; color: #8c6f60"
          >{{ card.dateNum }}</span
        >
      </swiper-slide>
      <div class="border h-px text-gray-lighten"></div>
    </swiper>
  </div>
</template>
<script>
import { ref, reactive, defineEmits } from "vue";
// Import Swiper Vue.js components
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
  emits: ["cardDateValue"],
  setup(props, ctx) {
    // const backgroundColor = ref('white')
    // const onSwiper = (swiper) => {
    //     console.log('swiperrrr' , swiper);
    //   };
    const isActive = ref(false);
    const activeIndex = ref(null);
    const cards = reactive([
      {
        id: 0,
        dateText: "شنبه",
        dateNum: 29,
      },
      {
        id: 1,
        dateText: "یکشنبه",
        dateNum: 30,
      },
      {
        id: 2,
        dateText: "دوشنبه",
        dateNum: 31,
      },
      {
        id: 3,
        dateText: "سشنبه",
        dateNum: 1,
      },
      {
        id: 4,
        dateText: "چهارشنبه",
        dateNum: 2,
      },
      {
        id: 5,
        dateText: "پنجشنبه",
        dateNum: 3,
      },
      {
        id: 6,
        dateText: "جمعه",
        dateNum: 4,
      },
      {
        id: 7,
        dateText: "شنبه",
        dateNum: 5,
      },
      {
        id: 8,
        dateText: "یکشنبه",
        dateNum: 6,
      },
      {
        id: 9,
        dateText: "دوشنبه",
        dateNum: 7,
      },
      {
        id: 10,
        dateText: "سشنبه",
        dateNum: 8,
      },
      {
        id: 11,
        dateText: "چهارشنبه",
        dateNum: 9,
      },
    ]);
    let swiperRef = null;
    let appendNumber = 500;
    let prependNumber = 1;

    const setSwiperRef = (swiper) => {
      swiperRef = swiper;
    };

    const toggleBg = (index) => {
      activeIndex.value = index;
      ctx.emit("cardDateValue", cards[index]);
    };

    // const changeColor = (e) => {
    //   bgActive.value = !bgActive.value;
    //   cards.forEach((card , index) =>{
    //     card.target = card;
    //     console.log('card' , card);
    //     if(card.id == index){
    //       card.style.backgroundColor = 'red'
    //     }
    //   })
    //   console.log("bgaaaa", bgActive.value);
    // };

    return {
      cards,
      toggleBg,
      activeIndex,
      isActive,
      // emit,
      // onSlideChange,
      swiperRef: null,
      appendNumber,
      prependNumber,
      setSwiperRef,
      modules: [Navigation, Virtual],
    };
  },
};
</script>

<style>
.red {
  background: red;
}

.blue {
  background: blue;
}
.active {
  /* background-color: #e4ceb6; */
  border-bottom: 5px solid #62c17d;
}
</style>
