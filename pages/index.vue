<template>
  <div>
    <h1>test</h1>
    <hello-text />
    <hello-text-text />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      editText: 'moduleA/editText'
    })
  }
}
</script>
