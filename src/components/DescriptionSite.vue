<template>
  <div class="contant-site container mx-auto">
    <div class="main-content  flex">
      <div class="mt-6 w-2/3 py-16 mr-5">
        <div class="title">
          <h1 class="dana-bold text-[1.8em]">
            نگران رزرو نوبت آرایشگاه و خدمات زیبایی خود نباشید!
          </h1>
          <ul class="mt-12">
            <li v-for="(list, index) in descBeauty" :key="index" class="flex text-gray-fivth mt-5 dana-medium text-[1.1em]">
              <icon
                icon="material-symbols:check"
                class="text-white-default font-bold rounded-full bg-green-dark ml-3 text-lg"
              />
              {{ list.text }}
            </li>
          </ul>
        </div>
      </div>
      <div class="img-dec w-1/3 p-5 ml-12">
        <img src="../assets/imgs/beauty-5.jpg" alt="">
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import { Icon } from "@iconify/vue";

const descBeauty = reactive([
  {
    id: 0,
    text: "راحتی و سرعت رزرو نوبت در کمترین زمان",
  },
  {
    id: 1,
    text: "قابلیت پیگیری نوبت و در صورت امکان لغو آن",
  },
  {
    id: 2,
    text: "اطلاع رسانی موثر سایت از جمله تغییرات در نوبت ها، تخفیف ها و اخبار آرایشگاه",
  },
  {
    id: 3,
    text: "پشتیبانی و ارتباط موثر و اطمینان از اینکه می توانند با یک انسان واقعی ارتباط بگیرند",
  },
  {
    id: 4,
    text: "امکانات اضافی و خدمات جانبی از جمله ماساژ و مراقبت از پوست و مو میتواند برای کاربران جذاب باشد",
  },
]);
</script>
