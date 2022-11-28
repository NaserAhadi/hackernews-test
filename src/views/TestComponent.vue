<template>
    <div>
        <ChildComponent testProp="some-value"/>

        <a href='https://google.com'>Link</a>

        <p style='color: red'>Paragraph</p>
    </div>
</template>

<script>
import ChildComponent from '@/components/ChildComponent'
    export default {
        name: 'TestComponent',
        components:{
            ChildComponent
        }
    }
</script>

<style lang="scss" scoped>

</style>