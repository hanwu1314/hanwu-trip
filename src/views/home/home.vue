<script setup>
import HomeNavBar from './components/home-nav-bar.vue'
import HomeSearcBox from './components/home-search-box.vue'
import HomeContent from './components/home-content.vue'
import useHomeStore from '@/stores/modules/home';

const homeStore = useHomeStore()
homeStore.fetchHotSuggestData()
homeStore.fetchHomeHouselist()

let currentPage = 1;

const moreBtnClick = () => {
    console.log("加载更多的数据")
    currentPage++
    homeStore.fetchHomeHouselist(currentPage)
}

</script>
<template>
    <div class="home">
        <HomeNavBar />
        <div class="banner">
            <img src="@/assets/img/home/banner.webp" alt="">
        </div>
        <HomeSearcBox />
        <HomeContent />
        <button @click="moreBtnClick">加载更多</button>
    </div>
</template>
<style lang='less' scoped>
.home {
    padding-bottom: 60px;
}

.banner {
    img {
        width: 100%;
    }
}
</style>