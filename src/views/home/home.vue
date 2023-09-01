<script setup>
import HomeNavBar from './components/home-nav-bar.vue'
</script>
<template>
    <div class="home">
        <HomeNavBar />
        <div class="banner">
            <img src="@/assets/img/home/banner.webp" alt="">
        </div>
    </div>
</template>
<style lang='less' scoped>
.banner {
    img {
        width: 100%;
    }
}
</style>