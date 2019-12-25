<template>
  <v-btn dark outlined block :style="styles" v-bind="$attrs" v-on="$listeners">
    <slot />
  </v-btn>
</template>

<script>
export default {
  name: 'BaseButton',
  inheritAttrs: false,
  props: {
    square: Boolean,
  },
  computed: {
    styles() {
      return {
        borderRadius: this.square ? '2px' : undefined,
      }
    },
  },
}
</script>
