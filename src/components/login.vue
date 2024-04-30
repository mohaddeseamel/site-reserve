<template>
  <div
    class="w-screen h-screen bg-gray-100 flex-col flex items-center justify-center"
  >
    <div
      v-if="loginform"
      class="border-2 bg-white text-end p-8 h-80 leading-10 rounded-lg"
      style="width: 400px"
    >
      <form @submit.prevent="goTosendSms">
        <div class="sub-title">
          <h1 class="font-bold text-xl text-neutral-900">ورود | ثبت نام</h1>
        </div>
        <div class="guide">
          <span class="text-sm text-gray-500 leading-relaxed">!سلام</span>
        </div>
        <div class="mobileField">
          <label class="text-sm text-gray-500"
            >لطفا شماره موبایل خود را وارد نمایید</label
          >
          <input
            type="tel"
            class="w-full outline-none border-2 radius-5 pl-2 rounded-lg mt-5"
            placeholder=""
            v-model="loginFormData.mobile"
          />
        </div>
        <button
          class="w-full bg-red-500 p-1 text-white mt-8 rounded-lg"
          type="submit"
        >
          تایید و ارسال کد
        </button>
      </form>
    </div>

    <!--send code form-->
    <div
      v-else-if="sendCode"
      class="form-sendCode border-2 bg-white text-end p-8 h-60 leading-10 rounded-lg"
      style="width: 400px"
    >
      <form>
        <div class="sub-title">
          <h1 class="text-lg text-gray-500 leading-relaxed">
            کد تایید را وارد کنید
          </h1>
        </div>
        <div class="verify-code">
          <input
            type="text"
            class="w-full outline-none border-2 radius-5 pl-2 rounded-lg mt-5"
            name="verify"
          />
        </div>
        <div class="btn-submit">
          <router-link to="/turnRatings">
            <button
              class="w-full bg-red-500 p-1 text-white mt-8 rounded-lg"
              @submit.prevent="redirectToTurnRatings()"
            >
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
  router.push({ name: "TurnRatings.vue", path: "/TurnRatings" });
};
</script>
