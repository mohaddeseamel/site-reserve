<template>
  <div>
    <div
      class="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
      v-if="openDialog"
    >
      <div
        class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
      ></div>

      <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div
          class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
        >
          <div
            class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
          >
            <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <form>
                <h1 class="text-center text-base font-medium">تکمیل اطلاعات</h1>
                <div class="mt-5 text-right sm:ml-4 sm:mt-0 sm:text-right">
                  <p class="text-xs mt-5 text-gray-600">
                    .لطفا جهت ثبت نوبت اطلاعات خود را تکمیل کنید
                  </p>
                </div>
                <i
                  @click="closeDialog()"
                  class="fa absolute top-6 cursor-pointer"
                  >&#xf00d;</i
                >
                <div class="flex mt-8">
                  <div class="mb-4 mr-5 w-full">
                    <label
                      class="block text-right text-gray-700 text-sm font-bold mb-2"
                      for="username"
                    >
                      نام خانوادگی
                    </label>
                    <input
                      class="shadow text-right text-xs appearance-none border rounded w-full py-3 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="username"
                      type="text"
                      placeholder="نام خانوادگی را وارد نمایید"
                    />
                  </div>
                  <div class="mb-4 w-full">
                    <label
                      class="block text-right text-gray-700 text-sm font-bold mb-2"
                      for="username"
                    >
                      نام
                    </label>
                    <input
                      class="shadow text-right text-xs appearance-none border rounded w-full py-3 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="username"
                      type="text"
                      placeholder="نام را وارد نمایید"
                    />
                  </div>
                </div>
                <div class="flex mt-3">
                  <div class="mb-4 mr-5 w-full">
                    <label
                      class="block text-right text-gray-700 text-sm font-bold mb-2"
                      for="username"
                    >
                      شماره موبایل
                    </label>
                    <input
                      class="shadow text-xs text-right appearance-none border rounded w-full py-3 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="username"
                      type="password"
                      placeholder="شماره موبایل خود را وارد نمایید"
                    />
                  </div>
                  <div class="mb-4 w-full">
                    <label
                      class="block text-right text-gray-700 text-sm font-bold mb-2"
                      for="password"
                    >
                      کدملی
                    </label>
                    <input
                      class="shadow text-xs text-right appearance-none border rounded w-full py-4 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="username"
                      type="password"
                      placeholder="کدملی خود را وارد نمایید"
                    />
                  </div>
                </div>

                <div class="flex mt-3">
                  <div
                    class="flex w-full mr-2 items-center ps-4 border border-gray-200 rounded dark:border-gray-700"
                  >
                    <input
                      id="bordered-radio-1"
                      type="radio"
                      value=""
                      name="bordered-radio"
                      class="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      for="bordered-radio-1"
                      class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >زن</label
                    >
                  </div>
                  <div
                    class="flex w-full items-center ps-4 border border-gray-200 rounded dark:border-gray-700"
                  >
                    <input
                      checked
                      id="bordered-radio-2"
                      type="radio"
                      value=""
                      name="bordered-radio"
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      for="bordered-radio-2"
                      class="w-full px-3 py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >مرد</label
                    >
                  </div>
                </div>
              </form>
            </div>
            <div class="bg-gray-50 w-full px-4 py-3">
              <button
                type="button"
                class="w-full bg-red-400 px-4 py-3 text-white rounded-full"
              >
                ثبت اطلاعات
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="showOwner flex justify-center items-center flex-col bg-white mr-8 rounded-lg p-5"
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
  </div>
</template>

<script setup>
import {ref} from "vue";
const gotoInfoUser = () => {
  console.log("uuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu");
  openDialog.value = !openDialog.value;
  console.log(openDialog.value);
};
const openDialog = ref(false);

const closeDialog = () => {
  openDialog.value = false;
};
</script>
