import hwRequest from '../request'

export function getHomeHotSuggests() {
    return hwRequest.get({
        url: "/home/hotSuggests"
    })
}

export function getHomeHouselist(currentPage = 1) {
    return hwRequest.get({
        url: "/home/houselist/" + currentPage
    })
}