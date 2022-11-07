<template>
    <div>
      <li>
        <a>{{item.title}}</a><br>
        {{item.url}}
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
  