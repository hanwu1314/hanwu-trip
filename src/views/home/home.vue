<script setup>
import HomeNavBar from './components/home-nav-bar.vue'
import HomeSearcBox from './components/home-search-box.vue'
import useHomeStore from '@/stores/modules/home';

const homeStore = useHomeStore()
homeStore.fetchHotSuggestData()

</script>
<template>
    <div class="home">
        <HomeNavBar />
        <div class="banner">
            <img src="@/assets/img/home/banner.webp" alt="">
        </div>
        <HomeSearcBox />
    </div>
</template>
<style lang='less' scoped>
.banner {
    img {
        width: 100%;
    }
}
</style>