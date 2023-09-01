<script setup>

</script>
<template>
    <div class="city">
        <h2>city</h2>
        <template v-for="item in 100">
            <div>
                aaaaaa{{ item }}
            </div>
        </template>
    </div>
</template>
<style lang='less' scoped>
.city {
    position: relative;
    z-index: 9;
    height: 100vh;
    background-color: #fff;

    overflow-y: auto;
}
</style>