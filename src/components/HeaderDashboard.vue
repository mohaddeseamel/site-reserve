<template>
  <div class="w-screen px-11 py-5 flex-col">
    <nav class="flex items-center justify-between flex-wrap bg-teal">
      <div class="flex items-center flex-no-shrink text-white mr-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          lg:width="3em" width="2em"
          lg:height="3em" height="2em"
          viewBox="0 0 50 50"
        >
          <path
            fill="#62c17d"
            d="M34.781 6.664H27.83c-1.256.004-1.209 1.876 0 1.865h6.951v.957H27.83c-1.249-.011-1.203 1.86 0 1.865h6.951v.978H27.83c-1.249 0-1.203 1.87 0 1.865h6.951v.932H27.83c-1.223.009-1.203 1.881 0 1.887h6.951v.934H27.83c-1.223-.004-1.228 1.865 0 1.865h6.951v.932H27.83c-1.223.004-1.228 1.875 0 1.866h6.951v.955H27.83c-1.223-.011-1.228 1.858 0 1.865h6.951v.93H27.83c-1.223-.001-1.203 1.872 0 1.866h6.951v18.159c.004 2.767 4.207 2.717 4.219 0V3.89c-.012-1.264-1.05-2.862-2.758-2.867H27.83c-1.256.001-1.209 1.873 0 1.865l6.951.023v.93H27.83c-1.254-.006-1.207 1.865 0 1.866h6.951zm-7.429 32.194C27.348 35.628 24 32.154 20 34.404V22.05L17.413 1.675c-.054-.539-.511-.666-.818-.675c-.317.009-.952.136-1.021.675L13 22.05v12.354c-4-2.25-7.24 1.246-7.241 4.429c.001 2.832 2.181 5.158 5.131 5.151c2.972.007 5.11-2.6 5.11-5.151V26h1v12.833c0 2.856 2.212 4.97 4.67 5.104c-.041 1.566.47 3.8 1.432 4.686c1.128 1.04 2.471-.29 1.92-1.373c-.532-1.008-1.054-1.605-.63-3.806c1.772-.82 2.956-2.546 2.96-4.586m-16.348 2.541a2.542 2.542 0 0 1 0-5.085c1.386.008 2.515 1.145 2.525 2.544a2.552 2.552 0 0 1-2.525 2.541m8.571-2.541a2.553 2.553 0 0 1 2.526-2.544a2.548 2.548 0 0 1 2.525 2.544a2.545 2.545 0 0 1-2.525 2.541a2.549 2.549 0 0 1-2.526-2.541"
          />
        </svg>
        <span class="text-green-dark lg:text-2xl text-lg font-[500]"
          >Colorful Beauty</span
        >
      </div>
      <div class="block md:hidden">
        <button
          @click="toggle"
          class="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white"
        >
          <svg
            class="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        :class="open ? 'block' : 'hidden'"
        class="w-full flex-grow md:flex md:items-center md:w-auto"
      >
        <div class="md:flex-grow mr-3">
          <a
            href="#responsive-header"
            class="no-underline lg:text-base text-sm text-center block mt-4 md:inline-block md:mt-0 text-teal-lighter hover:text-white lg:mr-6 mr-4 hover:text-green-dark"
          >
            صفحه اصلی
          </a>
          <a
            href="#responsive-header"
            class="no-underline lg:text-base text-sm text-center block mt-4 md:inline-block md:mt-0 text-teal-lighter hover:text-white lg:mr-6 mr-4 hover:text-green-dark"
          >
            رزرو آنلاین
          </a>
          <a
            href="#responsive-header"
            class="no-underline lg:text-base text-sm text-center block mt-4 md:inline-block md:mt-0 text-teal-lighter hover:text-white lg:mr-6 mr-4 hover:text-green-dark"
          >
            درباره ما
          </a>
          <a
            href="#responsive-header"
            class="no-underline lg:l-base text-sm text-center block mt-4 md:inline-block md:mt-0 text-teal-lighter hover:text-white lg:mr-6 mr-4 hover:text-green-dark"
          >
            تماس با ما
          </a>
        </div>
        <div class="userAccount px-12 flex justify-center items-center mr-6 mt-4">
          <button
            class="account-style  no-underline inline-block bg-white hover:bg-green-dark hover:text-fontColor-white text-sm w-40 py-2 leading-none border rounded-lg text-green-dark border-white hover:border-transparent mt-4 sm:mt-0"
          >
            حساب کاربری
          </button>
        </div>
      </div>
    </nav>
    <div class="content lg:flex lg:flex-row container mx-auto">
      <div
        class="content-title lg:w-2/3 w-full lg:px-10 lg:py-32 py-14 leading-10 justify-center"
      >
        <h1
          class="lg:text-right text-center lg:text-[40px] text-[30px] lg:mb-5 lg:py-5 px-3 dana-bold"
        >
          کالرفول بیوتی، رزرو آنلاین
        </h1>
        <p
          class="lg:text-right text-center p-3 w-fit text-fontColor-dark rounded-lg lg:text-[20px] text-[15px] leading-9"
        >
          کالرفول بیوتی با هدف رفع نیاز کاربران و صرفه جویی در وقت، امکان رزرو
          نوبت به صورت آنلاین را فراهم کرده است و کاربران میتوانند در کمترین
          زمان بیوتی کالر خود را انتخاب نمایند
        </p>
        <div
          class="signin-signup lg:mt-10 mt-8 flex lg:justify-start justify-center"
        >
          <button
            class="rounded-lg text-sm ml-2 w-40 py-2 bg-green-dark text-fontColor-white"
          >
            ثبت نام
          </button>
          <button
            class="text-green-dark rounded-lg w-40 py-2 text-sm border-2 border-green-dark hover:bg-green-dark hover:text-fontColor-white"
          >
            ورود
          </button>
        </div>
      </div>
      <div class="img-header lg:w-1/3 w-full lg:mt-8">
        <img src="../assets/imgs/beauty-3.jpg" alt="img-header-beauty" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const open = ref(false);

const toggle = () => {
  open.value = !open.value;
};
</script>

<style>
.account-style {
  border: 2px solid #62c17d;
}
</style>
