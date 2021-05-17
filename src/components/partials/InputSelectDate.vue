<template>
  <div>
    <div class="relative rounded-md shadow-sm">
      <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <slot></slot>
      </div>
      <input
        type="date"
        name="price"
        id="price"
        class="text-xs focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 border-gray-300 rounded-md"
        :placeholder="placeholder"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'placeholder'
  ]
}
</script>
