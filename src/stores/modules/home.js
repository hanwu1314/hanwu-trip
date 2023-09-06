import { getHomeHotSuggests, getHomeHouselist } from "@/services";
import { defineStore } from "pinia";

const useHomeStore = defineStore("home", {
    state: () => ({
        hotSuggests: [],
        categories: [],
        houselist: []
    }),
    actions: {
        async fetchHotSuggestData() {
            const res = await getHomeHotSuggests()
            this.hotSuggests = res.data
        },
        async fetchHomeHouselist(currentPage) {
            const res = await getHomeHouselist(currentPage)
            this.houselist.push(...res.data)
        }
    }
})

export default useHomeStore

