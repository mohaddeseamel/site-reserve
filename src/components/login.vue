<template>
  <div
    class="w-screen h-screen bg-gray-neutralLight flex-col flex items-center justify-center"
  >
    <div
      v-if="loginform"
      class="border-2 border-gray-lighten bg-white-default text-start p-8 h-80 leading-10 rounded-lg"
      style="width: 400px"
    >
      <form @submit.prevent="goTosendSms">
        <div class="sub-title">
          <h1 class="font-bold text-xl text-gray-neutral">ورود | ثبت نام</h1>
        </div>
        <div class="guide">
          <span class="text-sm text-gray-lightgray leading-relaxed"
            >ُسلام!</span
          >
        </div>
        <div class="mobileField">
          <label class="text-sm text-gray-lightgray"
            >لطفا شماره موبایل خود را وارد نمایید</label
          >
          <input
            type="tel"
            class="w-full outline-none border-gray-lighten border-2 radius-5 pl-2 rounded-lg mt-5"
            placeholder=""
            v-model="loginFormData.mobile"
          />
        </div>
        <button
          class="w-full bg-red-default p-1 text-white-default mt-8 rounded-lg"
          type="submit"
        >
          تایید و ارسال کد
        </button>
      </form>
    </div>

    <!--send code form-->
    <div
      v-else-if="sendCode"
      class="form-sendCode border-2 border-gray-lighten bg-white-default text-end p-8 h-60 leading-10 rounded-lg"
      style="width: 400px"
    >
      <form>
        <Icon
          icon="icon-park-outline:foundation-makeup"
          class="text-red-default md:text-5xl text-2xl z-10"
        />
        <div class="sub-title">
          <h1 class="text-lg text-gray-lightgray leading-relaxed text-start">
            کد تایید را وارد کنید
          </h1>
        </div>
        <div class="verify-code">
          <input
            type="text"
            class="w-full outline-none border-gray-lighten border-2 radius-5 pl-2 rounded-lg mt-5"
            name="verify"
          />
        </div>
        <div class="btn-submit">
          <router-link to="/dashboard">
            <button
              class="w-full bg-red-default p-1 text-white-default mt-8 rounded-lg"
            >
              <!--@submit.prevent="redirectToTurnRatings()"-->
              ادامه
            </button></router-link
          >
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { ref, computed, onMounted, reactive } from "vue";
const router = useRouter();

const sendCode = ref(false);
const loginform = ref(true);

const loginFormData = reactive({
  mobile: "",
});

const goTosendSms = () => {
  loginform.value = false;
  sendCode.value = true;
  localStorage.setItem("mobile", loginFormData.mobile);
};
const redirectToTurnRatings = () => {
  console.log(
    "redirectToTurnRatingsredirectToTurnRatingsredirectToTurnRatingsredirectToTurnRatings"
  );
  router.push({ name: "dashboard.vue", path: "/dashboard" });
};
</script>
