<template>
  <div class="overflow-x-hidden">
    <HeaderDashboard />
    <servicesSystem />
    <questionUser/>
    <DescriptionSite/>
  </div>
</template>

<script setup>
import HeaderDashboard from "../components/HeaderDashboard.vue";
import servicesSystem from "../components/servicesSystem.vue";
import questionUser from "../components/questionUser.vue";
import DescriptionSite from "../components/DescriptionSite.vue";
</script>