<template>
  <div>
    <div class="relative rounded-md shadow-sm">
      <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <slot></slot>
      </div>
      <input
        type="text"
        name="price"
        id="price"
        class="text-xs focus:outline-none focus:ring-0 focus:border-gray-400 block w-full pl-10 pr-12 border-gray-300 rounded-md"
        :placeholder="placeholder"
      />
      <div class="absolute inset-y-0 right-0 flex items-center">
        <select
          v-if="!filter"
          id="users"
          name="users"
          class="focus:outline-none focus:ring-0 focus:border-transparent text-sm h-3/4 py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md
        ">

        </select>
        <button
          v-if="filter"
          class="-ml-px relative inline-flex items-center space-x-2 px-4 py-2 border border-gray-300 text-xs font-medium rounded-r-md text-gray-700 bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-0 focus:border-gray-400"
        >
          <span>Advanced</span>
          <ChevronDownIcon class="h-4 w-4 text-gray-700" aria-hidden="true" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { ChevronDownIcon } from '@heroicons/vue/solid'
export default {
  components: {
    ChevronDownIcon,
  },
  props: [
    'placeholder',
    'filter',
    'options',
  ]
}
</script>
