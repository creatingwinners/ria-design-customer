<template>
    <div class="flex-grow w-full mx-auto lg:flex">

      <div class="w-3/4 mx-auto px-4 sm:px-6 lg:px-8">
        <div class="w-full">
          <Filter />
        </div>
      </div>

    </div>
</template>

<script>
import Filter from '/src/components/Filter.vue'
export default {
  components: {
    Filter
  }
}
</script>
