<template>
    <div>
        <ChildComponent testProp="some-value"/>

        <a href='https://google.com'>Link</a>
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