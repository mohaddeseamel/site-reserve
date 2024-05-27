<template>
  <div class="question-user container mx-auto flex flex-col">
    <div class="title mt-5">
      <h1 class="lg:text-[40px] text-[30px] text-center text-green-dark mb-5">
        سوالات متداول
      </h1>
    </div>
    <div class="accordion-question rounded-2xl border-2 border-green-dark">
      <ul v-for="(q, index) in questionList" :key="index" class="mx-4 rounded-lg">
        <li
          @click="q.open = !q.open"
          class="flex items-center justify-between p-5 border-b border-green-light text-[1.1em] text-[#212529] cursor-pointer"
        >
          <span class="mr-3 flex">
            <icon icon="iconamoon:arrow-down-2-thin" class="text-lg text-green-dark font-bold rounded-full bg-green-light ml-3 w-6 h-6"/>
            {{ q.question }}
          </span>
          
          <span class="bg-green-light text-green-dark py-2 px-3 rounded-lg text-sm">{{ q.spanText }}</span>
        </li>

        <li
          v-if="q.open"
          class="answer-box  py-8 px-5 text-right text-gray-lightgray border-t-2 border-green-light"
        >
          {{ q.answer }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import { Icon } from "@iconify/vue";

const questionList = reactive([
  {
    id: 0,
    question: "کالرفول بیوتی چیست؟",
    answer:"کالرفول بیوتی یک سرویس آنلاین است که به شما امکان می‌دهد به راحتی و سریع نوبت خدمات زیبایی در کالرفول بیوتی را رزرو کنید. این سرویس به شما امکان می‌دهد زمان مورد نظر خود را برای خدمات ارایشی، مراقبت از پوست و موها،  و دیگر خدمات موجود در کالرفول بیوتی انتخاب کنید، بدون نیاز به تماس تلفنی یا مراجعه حضوری. این سرویس به شما اطمینان می‌دهد که به راحتی و با کمترین دردسر ممکن، نوبت خود را برای تجربه‌ای لذت‌بخش از زیبایی در کالرفول بیوتی رزرو کنید.",
    open: false,
    spanText:'کالرفول بیوتی چیست'
  },
  {
    id: 1,
    question: "کالرفول بیوتی چه خدماتی ارائه می دهد؟",
    answer:"کالرفول بیوتی با ارائه خدمات متنوع و کیفیتی، تلاش می‌کند تا تمامی نیازهای زیبایی شما را برآورده کند. برخی از خدماتی که کالرفول بیوتی ارائه می‌دهد عبارتند از: آرایش و آرایش مو، رنگ و لایت، لیزر، ناخ های زیبا و مراقبت از پوست و مو",
    open: false,
    spanText:'خدمات کالرفول بیوتی'
  },
  {
    id: 2,
    question: "چرا باید از کالرفول بیونی استفاده کنیم؟",
    answer:"کالرفول بیوتی برای رفع نیازهای شما از جمله تنوع در خدمات، راحتی در رزرو نوبت، صرفه جویی در وقت و هزینه و غیره مزایا بسیاری دارد.",
    open: false,
    spanText:'استفاده کالرفول بیوتی'
  },
  {
    id: 3,
    question: "آیا امکان خرید به صورت ادمین برای بیوتی کالرها وجود دارد؟",
    answer:"بله امکان خرید سایت به صورت ادمین فراهم است، به عنوان مدیر یا مالک سایت شما میتوانید به عنوان ادمین وارد پنل مدیریتی سایت شوید و اقدامات مختلفی از جمله مدیریت نوبت ها و رزرو ها، مدیریت محصولات و خدمات، پشتیبانی مشتریان و... را انجام دهید.",
    open: false,
    spanText: 'خرید کالرفول بیوتی'
  },
]);
</script>

<!-- <style>
.answer-box {
  background: rgba(192, 192, 192, 0.1);
  border: 1px solid rgba(192, 192, 192, 0.3);
  padding: 10px 20px;
}
</style> -->
