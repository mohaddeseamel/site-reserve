<template>
  <div class="bg-green-light overflow-hidden">
    <div class="content flex justify-center py-20 w-screen h-screen">
      <!-- <div class="w-1/5">
        <ownerBox/>
      </div> -->
      <div class="showTurnRatings w-2/3">
        <HeaderTurnRating class="rounded-t-3xl" />
        <showTimeReserve @cardDateValue="showData" />
        <showUser />
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
import showUser from "../components/showUser.vue";
import ownerBox from "../components/ownerBox.vue";

const showData = (e) => {
  console.log("eventeventevent", e);
};
</script>

<style scoped>
/* .content {
  background-color: #f7daca;
} */
</style>
