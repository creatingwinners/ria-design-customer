
<template>
  <nav class="z-20 sticky top-0 bg-gray-50 border-b border-gray-200 flex" aria-label="Breadcrumb">
    <ol class="w-full mx-auto px-5 flex space-x-4">
      <li class="flex">
        <div class="flex items-center">
          <a href="#" class="text-gray-400 hover:text-gray-500">
            <HomeIcon class="flex-shrink-0 h-4 w-4" aria-hidden="true" />
            <span class="sr-only">Trails</span>
          </a>
        </div>
      </li>
      <li v-for="item in breadcrumbs" :key="item.name" class="flex">
        <div class="flex items-center">
          <svg class="flex-shrink-0 w-6 h-full text-gray-200" preserveAspectRatio="none" viewBox="0 0 24 44" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z" />
          </svg>
          <a :href="item.href" class="ml-4 text-xs font-normal text-gray-500 hover:text-gray-700" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</a>
        </div>
      </li>
    </ol>
    <div class="flex flex-row items-center justify-end lg:ml-6 w-full gap-5 pr-5">
      <div class="w-3/5">
        <label for="search" class="sr-only">Search</label>
        <InputSelectMulti placeholder="Select one or more users" filter="true">
          <UserIcon class="h-4 w-4 text-gray-400" aria-hidden="true" />
        </InputSelectMulti>
      </div>

      <button type="button" class="inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        Download
      </button>
    </div>
  </nav>
</template>

<script>

import InputSelectMulti from '/src/components/partials/InputSelectMulti.vue'
import { HomeIcon, UserIcon } from '@heroicons/vue/solid'

const breadcrumbs = [
  { name: 'Results', href: '#', current: false },
  { name: 'Trails', href: '#', current: false },
  { name: 'Cultural Impact Scan', href: '#', current: true },
]

export default {
  components: {
    InputSelectMulti,

    HomeIcon,
    UserIcon,
  },
  setup() {
    return {
      breadcrumbs,
    }
  },
}
</script>
