<template>
  <div class="flex items-center">
    <label class="inline-flex items-center">
      <input
        type="radio"
        name="price"
        class="text-xs text-yellow-600 focus:outline-none focus:ring-0 block border-gray-300"
        :placeholder="placeholder"
      />
      <span class="ml-2">{{ label }}</span>
    </label>
  </div>
</template>

<script>
export default {
  props: [
    'placeholder',
    'label',
  ]
}
</script>
