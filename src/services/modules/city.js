import hwRequest from '../request'

export function getCityAll() {
  return hwRequest.get({
    url: "/city/all"
  })
}
