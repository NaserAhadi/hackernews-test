<template>
    <div>
      {{item.url}}
    </div>
</template>

<script>
export default{
  props: {
    item:{
      type: Object,
      default: () => {}
    }
  }
}
</script>
  