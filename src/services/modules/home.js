import hwRequest from '../request'

export function getHomeHotSuggests() {
    return hwRequest.get({
        url: "/home/hotSuggests"
    })
}