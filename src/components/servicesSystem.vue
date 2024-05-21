<template>
  <div class="service-content w-screen flex flex-col py-16 bg-[#dff8e5]">
    <div class="title text-center">
      <h1 class="lg:text-[40px] text-[30px] text-[#62c17d]">خدمات سامانه</h1>
      <p class="text-[#999] md:text-[16px] text-[14px] leading-9">
        پلتفرم کالرفول بیوتی همواره در زمینه پشتیبانی کاربران و صرفه جویی در وقت
        آنها در حال بروزرسانی است
      </p>
    </div>
    <div
      class="services flex container items-center justify-between mx-auto md:p-20 p-10 text-center leading-10 text-lg"
    >
      <div>
        <div
          class="haircut cursor-pointer md:h-24 md:w-24 w-16 h-16 bg-[#62c17d] text-center flex items-center justify-center rounded-full"
        >
          <Icon
            icon="mingcute:scissors-line"
            class="text-white md:text-5xl text-2xl "
          />
        </div>
        <span class="md:text-base text-sm">کوتاهی مو</span>
      </div>
      <div class="items-center">
        <div
          class="makeup cursor-pointer md:h-24 md:w-24 w-16 h-16 bg-[#62c17d] text-center flex items-center justify-center rounded-full"
        >
          <Icon
            icon="icon-park-outline:foundation-makeup"
            class="text-white md:text-5xl text-2xl"
          />
        </div>
        <span class="md:text-base text-sm">میکاپ شنیون</span>
      </div>
      <div>
        <div
          class="haircolor cursor-pointer md:h-24 md:w-24 w-16 h-16 bg-[#62c17d] text-center flex items-center justify-center rounded-full"
        >
          <Icon
            icon="mingcute:hair-fill"
            class="text-white md:text-5xl text-2xl"
          />
        </div>
        <span class="md:text-base text-sm">رنگ مو</span>
      </div>
      <div>
        <div
          class="laser cursor-pointer md:h-24 md:w-24 w-16 h-16 bg-[#62c17d] text-center flex items-center justify-center rounded-full"
        >
          <Icon
            icon="mdi:laser-pointer"
            class="text-white md:text-5xl text-2xl"
          />
        </div>
        <span class="md:text-base text-sm">لیزر</span>
      </div>
      <div>
        <div
          class="face-correction cursor-pointer md:h-24 md:w-24 w-16 h-16 bg-[#62c17d] text-center flex items-center justify-center rounded-full"
        >
          <Icon
            icon="ic:twotone-face"
            class="text-white md:text-5xl text-2xl text-bold"
          />
        </div>
        <span class="md:text-base text-sm">اصلاح صورت</span>
      </div>
      <div>
        <div
          class="products cursor-pointer md:h-24 md:w-24 w-16 h-16 bg-[#62c17d] text-center flex items-center justify-center rounded-full"
        >
          <Icon
            icon="ic:twotone-production-quantity-limits"
            class="text-white md:text-5xl text-3xl"
          />
        </div>
        <span class="md:text-base text-sm">محصولات</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";
</script>