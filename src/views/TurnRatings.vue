<template>
  <div class="container">
    <!-- <div class="dialogAddInfo w-50 bg-white" style=" position: absolute; bottom: 0;right: 0; left:0; bottom:0;" v-if="openDialog">
      <div class="showInfo">
        <div class="header-info">
          <h1>ثبت اطلاعات</h1>
          <i @click="closeDialog()" style="font-size:18px" class="fa">&#xf00d;</i>
        </div>
        <div class="showComment">
          <p>لطفا جهت ثبت نوبت اطلاعات خود را تکمیل نمایید.</p>
        </div>
        <div class="Info">
          <div class="name">
            <label for="name">نام</label>
            <input type="text" name="name" placeholder="">
          </div>
          <div class="lastName">
            <label for="lastName">نام خانوادگی</label>
            <input type="text" name="lastName" placeholder="">
          </div>
           <div class="mobile">
            <label for="mobile">شماره موبایل</label>
            <input type="number" name="mobile" placeholder="">
          </div>
           <div class="meliCode">
            <label for="meliCode">کدملی</label>
            <input type="text" name="meliCode" placeholder="">
          </div>
          <div class="gender">
            <h2>جنسیت</h2>
            <input type="radio" name="meliCode" placeholder="">
            <input type="radio" name="meliCode" placeholder="">
          </div>
        </div>
      </div>
    </div> -->
    <div
      class="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
      v-if="openDialog"
    >
      <!--
    Background backdrop, show/hide based on modal state.

    Entering: "ease-out duration-300"
      From: "opacity-0"
      To: "opacity-100"
    Leaving: "ease-in duration-200"
      From: "opacity-100"
      To: "opacity-0"
  -->
      <div
        class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
      ></div>

      <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div
          class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
        >
          <!--
        Modal panel, show/hide based on modal state.

        Entering: "ease-out duration-300"
          From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          To: "opacity-100 translate-y-0 sm:scale-100"
        Leaving: "ease-in duration-200"
          From: "opacity-100 translate-y-0 sm:scale-100"
          To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
      -->
          <div
            class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
          >
            <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div class="header-info">
                <h1 class="text-center text-base font-medium">ثبت اطلاعات</h1>
              </div>
              <div class="sm:flex sm:items-start">
                <div
                  class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10"
                >
                  <svg
                    class="h-6 w-6 text-red-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                    />
                  </svg>
                </div>
                <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <h3
                    class="text-base font-semibold leading-6 text-gray-900"
                    id="modal-title"
                  >
                    Deactivate account
                  </h3>
                  <div class="mt-2">
                    <p class="text-sm text-gray-500">
                      Are you sure you want to deactivate your account? All of
                      your data will be permanently removed. This action cannot
                      be undone.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6"
            >
              <button
                type="button"
                class="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
              >
                Deactivate
              </button>
              <button
                type="button"
                class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                @click="closeDialog"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="content flex justify-center items-center w-screen h-screen">
      <div
        class="showOwner flex justify-center items-center flex-col w-1/5 bg-white mr-8 rounded-lg p-5"
      >
        <div class="img-owner">
          <img
            src="../assets/imgs/girl.jpg"
            class="w-12 h-12 rounded-full"
            alt="ownerImg"
          />
        </div>
        <div class="sub-title text-center mt-3">
          <h2 class="text-lg">محدثه عامل</h2>
          <span class="text-sm">مشاور ارشد</span>
        </div>
        <button
          class="buy bg-red-500 p-2 text-white w-full rounded-lg mt-5"
          @click="gotoInfoUser()"
        >
          ادامه
        </button>
      </div>
      <div class="showTurnRatings w-1/2">
        <HeaderTurnRating />
        <showTimeReserve  @cardDateValue="showData($event)"/>
        <TabMenu />
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import TabMenu from "../components/TabMenu.vue";
import HeaderTurnRating from "../components/HeaderTurnRating.vue";
import showTimeReserve from "../components/showTimeReserve.vue";

const openDialog = ref(false);



const gotoInfoUser = () => {
  console.log("uuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu");
  openDialog.value = !openDialog.value;
  console.log(openDialog.value);
};

const closeDialog = () => {
  openDialog.value = false;
};
const showData = (event) => {
  console.log('eventeventevent' , event)
}
</script>

<style scoped>
.container {
  background: rgb(238, 174, 202);
  background: radial-gradient(
    circle,
    rgba(238, 174, 202, 1) 0%,
    rgba(148, 187, 233, 1) 100%
  );
}
</style>
