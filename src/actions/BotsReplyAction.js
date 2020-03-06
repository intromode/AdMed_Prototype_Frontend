import { request } from '../services/request';

export function getBotsReply() {
    return request()
    .then(res => {
        return res
    })
    .then(res => {
        console.log("RES", res)
    })
}