<template>
  <div
    class="showTimeReserve p-5 w-full bg-gray-200 flex justify-between items-center"
  >
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
        class="card flex w-24 text-center rounded-lg bg-white focus:bg-red-300 cursor-pointer p-2 flex-col leading-8 overflow-x-hidden"
        v-for="(card, index) in cards"
        :key="index"
        :virtualIndex="card.id"
        :class="[{ active: index === activeIndex }]"
        @click="toggleBg(index)"
      >
        <span class="text-zinc-800 text-sm">{{ card.dateText }}</span>
        <span
          class="bg-red-400 rounded-full mt-2 mx-auto text-center text-white"
          style="width: 2.2em; height: 2.2em; display: block"
          >{{ card.dateNum }}</span
        >
        <p class="text-xs text-zinc-500 mt-2">{{ card.desc }}</p>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
import { ref, reactive } from "vue";
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
  setup({emit}) {
    
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
        desc: "روز کاری",
      },
      {
        id: 1,
        dateText: "امروز",
        dateNum: 12,
        desc: "روز کاری",
      },
      {
        id: 2,
        dateText: "امروز",
        dateNum: 12,
        desc: "روز کاری",
      },
      {
        id: 3,
        dateText: "یکشنبه",
        dateNum: 8,
        desc: "روزغیرکاری",
      },
      {
        id: 4,
        dateText: "یکشنبه",
        dateNum: 8,
        desc: "روزغیرکاری",
      },
      {
        id: 5,
        dateText: "یکشنبه",
        dateNum: 8,
        desc: "روزغیرکاری",
      },
      {
        id: 6,
        dateText: "شنبه",
        dateNum: 9,
        desc: "روز کاری",
      },
      {
        id: 7,
        dateText: "جمعه",
        dateNum: 10,
        desc: "ظرفیت تکمیل",
      },
      {
        id: 8,
        dateText: "پنجشنبه",
        dateNum: 11,
        desc: "روز کاری",
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
      emit('cardDateValue' , this.cards)
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
