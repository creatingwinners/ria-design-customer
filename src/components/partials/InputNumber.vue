<template>
  <div>
    <div class="relative rounded-md shadow-sm">
      <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <slot></slot>
      </div>
      <input
        type="number"
        name="price"
        id="price"
        class="text-xs ffocus:outline-none focus:ring-0 focus:border-gray-400 block w-full pl-10 border-gray-300 rounded-md"
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
