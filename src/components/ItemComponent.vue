<template>
    <div>
      {{item.by}} - {{item.url}} - {{item.score}}
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
  