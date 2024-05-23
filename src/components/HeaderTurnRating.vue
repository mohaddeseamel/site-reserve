<template>
    <div class="Ratings p-5 flex justify-between items-center bg-[#62c17d]">
      <button class="next flex text-sm  disabled:text-white" disabled> 
          <svg
            class="h-5 w-5 text-white"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
          ماه قبل
        </button>
         <div class="title">
          <h1 class="font-bold text-lg text-white">اردیبهشت 1403</h1>
        </div>
        <button class="prev flex text-sm text-white">
          ماه بعد
          <svg
            class="h-5 w-5 text-white"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <polyline points="15 6 9 12 15 18" />
          </svg>
        </button>
      </div>
</template>

<script>
export default {
    name:'HeaderTurnRating'
}
</script>