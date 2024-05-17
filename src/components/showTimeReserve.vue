<template>
  <div
    class="showTimeReserve p-5 w-full bg-white flex justify-between items-center"
  >
    <swiper
      effect="cube"
      :modules="modules"
      :slides-per-view="8"
      :centeredSlides="false"
      :spaceBetween="20"
      :navigation="true"
      :virtual="true"
      class="mySwiper"
    >
      <swiper-slide
        class="card flex w-24 text-center rounded-lg focus:bg-red-300 cursor-pointer p-2 flex-col leading-8 overflow-x-hidden"
        v-for="(card, index) in cards"
        :key="index"
        :virtualIndex="card.id"
        :class="[{ active: index === activeIndex }]"
        @click="toggleBg(index)"
        style="color: #969495"
      >
        <span class="text-zinc-800 text-sm">{{ card.dateText }}</span>
        <span
          class="rounded-full mx-auto text-center visited:text-blue-800 underline-offset-30"
          style="width: 2.2em; height: 2.2em; display: block; color: #7f7b72"
          >{{ card.dateNum }}</span
        >
      </swiper-slide>
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
        dateText: "امروز",
        dateNum: 12,
      },
      {
        id: 1,
        dateText: "امروز",
        dateNum: 12,
      },
      {
        id: 2,
        dateText: "امروز",
        dateNum: 12,
      },
      {
        id: 3,
        dateText: "یکشنبه",
        dateNum: 8,
      },
      {
        id: 4,
        dateText: "یکشنبه",
        dateNum: 8,
      },
      {
        id: 5,
        dateText: "یکشنبه",
        dateNum: 8,
      },
      {
        id: 6,
        dateText: "شنبه",
        dateNum: 9,
      },
      {
        id: 7,
        dateText: "جمعه",
        dateNum: 10,
      },
      {
        id: 8,
        dateText: "پنجشنبه",
        dateNum: 11,
      },
      {
        id: 9,
        dateText: "جمعه",
        dateNum: 12,
      },
      {
        id: 10,
        dateText: "شنبه",
        dateNum: 13,
      },
      {
        id: 11,
        dateText: "یکشنبه",
        dateNum: 13,
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
  background-color: rgb(252 165 165);
}
</style>
