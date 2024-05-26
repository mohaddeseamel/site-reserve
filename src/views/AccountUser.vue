<template>
  <div
    class="login-form-account lg:bg-green-light bg-white-default w-screen h-screen flex items-center justify-center"
  >
    <div
      class="formLogin-account flex items-center justify-center bg-white-default container mx-auto p-10 rounded-3xl relative"
    >
      <div class="flex absolute top-0 lg:right-0 left-0 p-14">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          lg:width="3em"
          width="2em"
          lg:height="3em"
          height="2em"
          viewBox="0 0 50 50"
        >
          <path
            fill="#62c17d"
            d="M34.781 6.664H27.83c-1.256.004-1.209 1.876 0 1.865h6.951v.957H27.83c-1.249-.011-1.203 1.86 0 1.865h6.951v.978H27.83c-1.249 0-1.203 1.87 0 1.865h6.951v.932H27.83c-1.223.009-1.203 1.881 0 1.887h6.951v.934H27.83c-1.223-.004-1.228 1.865 0 1.865h6.951v.932H27.83c-1.223.004-1.228 1.875 0 1.866h6.951v.955H27.83c-1.223-.011-1.228 1.858 0 1.865h6.951v.93H27.83c-1.223-.001-1.203 1.872 0 1.866h6.951v18.159c.004 2.767 4.207 2.717 4.219 0V3.89c-.012-1.264-1.05-2.862-2.758-2.867H27.83c-1.256.001-1.209 1.873 0 1.865l6.951.023v.93H27.83c-1.254-.006-1.207 1.865 0 1.866h6.951zm-7.429 32.194C27.348 35.628 24 32.154 20 34.404V22.05L17.413 1.675c-.054-.539-.511-.666-.818-.675c-.317.009-.952.136-1.021.675L13 22.05v12.354c-4-2.25-7.24 1.246-7.241 4.429c.001 2.832 2.181 5.158 5.131 5.151c2.972.007 5.11-2.6 5.11-5.151V26h1v12.833c0 2.856 2.212 4.97 4.67 5.104c-.041 1.566.47 3.8 1.432 4.686c1.128 1.04 2.471-.29 1.92-1.373c-.532-1.008-1.054-1.605-.63-3.806c1.772-.82 2.956-2.546 2.96-4.586m-16.348 2.541a2.542 2.542 0 0 1 0-5.085c1.386.008 2.515 1.145 2.525 2.544a2.552 2.552 0 0 1-2.525 2.541m8.571-2.541a2.553 2.553 0 0 1 2.526-2.544a2.548 2.548 0 0 1 2.525 2.544a2.545 2.545 0 0 1-2.525 2.541a2.549 2.549 0 0 1-2.526-2.541"
          />
        </svg>
        <span class="text-green-dark lg:text-2xl text-lg font-[500]">Colorful Beauty</span>
      </div>
      <div class="flex flex-col items-center justify-center lg:w-1/2 w-full">
        <div
          class="form-account bg-gray-secondgray lg:w-2/3 w-full h-full p-10 leading-10 rounded-lg"
        >
          <h1 class="text-start mb-12 text-[1.5rem]">ورود</h1>
          <form action="#">
            <div class="phoneNumber flex flex-col mb-2">
              <label for="number" class="text-[13px] text-darken"
                >شماره تلفن</label
              >
              <div class="mobile-input relative bg-white-default rounded-lg">
                <Icon
                  icon="mdi:user"
                  class="absolute left-2 top-3 text-gray-light"
                />
                <input
                  type="text"
                  placeholder=""
                  class="outline-none px-3 ml-5 text-left w-11/12"
                  v-model="formData.mobile"
                />
              </div>
            </div>
            <div class="password flex flex-col">
              <label for="password" class="text-[13px]">رمز عبور</label>
              <div class="mobile-input relative bg-white-default rounded-lg">
                <Icon
                  icon="mdi:password-outline"
                  class="absolute left-2 top-3 text-gray-light"
                />
                <input
                  type="text"
                  placeholder=""
                  class="bg-white-default outline-none  px-3 text-left w-11/12"
                  v-model="formData.password"
                />
              </div>
            </div>
            <button
              class="w-full bg-green-dark text-white-default rounded-lg mt-5"
            >
              ورود
            </button>
          </form>
          <div class="create-account flex justify-center mt-3 text-[13px]">
            <span class="ml-2">حساب کاربری ندارید؟</span>
            <a class="text-green-dark cursor-pointer">ثبت نام کنید</a>
          </div>
        </div>
      </div>
      <div class="imgAccount lg:w-1/2 w-0">
        <img src="../assets/imgs/beauty-4.jpg" alt="accoutImg" />
      </div>
    </div>
  </div>
</template>


<script setup>
import { Icon } from "@iconify/vue";
import { reactive } from "vue";

const formData = reactive({
  mobile: "",
  password: "",
});
</script>