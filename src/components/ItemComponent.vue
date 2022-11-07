<template>
    <div>
      <li>
        <a :href="item.url">{{item.title}}</a><br>
      </li>
      <p>
        {{item.by}} - {{item.score}}
      </p>
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
  