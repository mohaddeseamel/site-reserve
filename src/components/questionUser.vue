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
    answer:"امروز روزی است که ایران، پس از چندسال با دنیا آشتی کرد. اگر چه این توافق قطعاً با دادن امتیازهایی از سوی ایران همراه بود، اما جنبه های بسیار مثبت دیگری را برای ایران به ارمغان آورد و امیدواریم توافق امروز نوید آینده ای روشن و پرامید برای ایران عزیز باشد. دیپ لوک به عنوان پایگاه تخصصی تازه های دنیای کوانتوم، توافق هسته ای ایران را که از لحاظ علمی در زمره ی دنیای کوانتوم قرار می گیرد، به تمامی ایرانیان عزیز تبریک می گوید.",
    open: false,
    spanText:'کالرفول بیوتی چیست'
  },
  {
    id: 1,
    question: "کالرفول بیوتی چه خدماتی ارائه می دهد؟",
    answer:
      "امروز روزی است که ایران، پس از چندسال با دنیا آشتی کرد. اگر چه این توافق قطعاً با دادن امتیازهایی از سوی ایران همراه بود، اما جنبه های بسیار مثبت دیگری را برای ایران به ارمغان آورد و امیدواریم توافق امروز نوید آینده ای روشن و پرامید برای ایران عزیز باشد. دیپ لوک به عنوان پایگاه تخصصی تازه های دنیای کوانتوم، توافق هسته ای ایران را که از لحاظ علمی در زمره ی دنیای کوانتوم قرار می گیرد، به تمامی ایرانیان عزیز تبریک می گوید.",
    open: false,
    spanText:'خدمات کالرفول بیوتی'
  },
  {
    id: 2,
    question: "چرا باید از کالرفول بیونی استفاده کنیم؟",
    answer:
      "امروز روزی است که ایران، پس از چندسال با دنیا آشتی کرد. اگر چه این توافق قطعاً با دادن امتیازهایی از سوی ایران همراه بود، اما جنبه های بسیار مثبت دیگری را برای ایران به ارمغان آورد و امیدواریم توافق امروز نوید آینده ای روشن و پرامید برای ایران عزیز باشد. دیپ لوک به عنوان پایگاه تخصصی تازه های دنیای کوانتوم، توافق هسته ای ایران را که از لحاظ علمی در زمره ی دنیای کوانتوم قرار می گیرد، به تمامی ایرانیان عزیز تبریک می گوید.",
    open: false,
    spanText:'استفاده کالرفول بیوتی'
  },
  {
    id: 3,
    question: "آبا امکان خرید به صورت ادمین برای بیوتی کالرها وجود دارد؟",
    answer:
      "امروز روزی است که ایران، پس از چندسال با دنیا آشتی کرد. اگر چه این توافق قطعاً با دادن امتیازهایی از سوی ایران همراه بود، اما جنبه های بسیار مثبت دیگری را برای ایران به ارمغان آورد و امیدواریم توافق امروز نوید آینده ای روشن و پرامید برای ایران عزیز باشد. دیپ لوک به عنوان پایگاه تخصصی تازه های دنیای کوانتوم، توافق هسته ای ایران را که از لحاظ علمی در زمره ی دنیای کوانتوم قرار می گیرد، به تمامی ایرانیان عزیز تبریک می گوید.",
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
