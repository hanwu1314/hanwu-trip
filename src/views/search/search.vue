<script setup>
</script>
<template>
    <div class="search">
        <h2>开始时间:{{ $router.currentRoute.value.query.startDate }}</h2>
        <h2>结束时间:{{ $router.currentRoute.value.query.endDate }}</h2>
        <h2>当前城市:{{ $router.currentRoute.value.query.currentCity }}</h2>
    </div>
</template>s
<style lang='less' scoped></style>