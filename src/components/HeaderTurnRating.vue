<template>
    <div class="Ratings bg-white p-5 flex justify-between items-center">
        <button class="prev flex text-sm">
          ماه بعد
          <svg
            class="h-5 w-5 text-red-500"
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
        <div class="title">
          <h1 class="font-bold text-lg">اردیبهشت 1403</h1>
        </div>
        <button class="next flex text-sm disabled:text-slate-500" disabled>
          ماه قبل
          <svg
            class="h-5 w-5 text-red-500"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>
</template>

<script>
export default {
    name:'HeaderTurnRating'
}
</script>