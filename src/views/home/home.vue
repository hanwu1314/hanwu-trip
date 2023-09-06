<script setup>
import { watch } from 'vue';
import HomeNavBar from './components/home-nav-bar.vue'
import HomeSearcBox from './components/home-search-box.vue'
import HomeContent from './components/home-content.vue'
import useHomeStore from '@/stores/modules/home';
import useScroll from '@/hooks/useScroll'
import useNewScroll from '@/hooks/useNewScroll'

const homeStore = useHomeStore()
homeStore.fetchHotSuggestData()
homeStore.fetchHomeHouselist()

const { isReachBottom } = useNewScroll()
watch(isReachBottom, (newValue) => {
    if (newValue) {
        homeStore.fetchHomeHouselist().then(() => {
            isReachBottom.value = false;
        })
    }
})
</script>
<template>
    <div class="home">
        <HomeNavBar />
        <div class="banner">
            <img src="@/assets/img/home/banner.webp" alt="">
        </div>
        <HomeSearcBox />
        <HomeContent />
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