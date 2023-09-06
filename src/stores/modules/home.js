import { getHomeHotSuggests, getHomeHouselist } from "@/services";
import { defineStore } from "pinia";

const useHomeStore = defineStore("home", {
    state: () => ({
        hotSuggests: [],
        categories: [],
        currentPage: 1,
        houselist: [],
        noMoreData: false
    }),
    actions: {
        async fetchHotSuggestData() {
            const res = await getHomeHotSuggests()
            this.hotSuggests = res.data
        },
        async fetchHomeHouselist() {
            try {
                const res = await getHomeHouselist(this.currentPage);
                this.houselist.push(...res.data)
                this.currentPage++
            } catch (error) {
                this.noMoreData = true
            }

        }
    }
})

export default useHomeStore

