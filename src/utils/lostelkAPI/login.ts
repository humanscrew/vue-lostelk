import request from "@/plugins/request";
// for debug
// url: 'https://api.apiopen.top/getSingleJoke'
export function login(userData: any) {
  return request({
    url: "login",
    method: "post",
    data: userData,
  });
}

export function getPublicKey(username: any) {
  return request({
    url: "getRSA",
    method: "post",
    data: username,
  })
}