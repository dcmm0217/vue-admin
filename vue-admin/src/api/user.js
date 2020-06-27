import serveice from '@/utils/request';
// 获取用户列表
export function GetRole(data = {}) {
  return serveice.request({
    method: "post",
    url: "/role/",
    data: data
  })
}
// 添加用户
export function UserAdd(data = {}) {
  return serveice.request({
    method: "post",
    url: "/user/add/",
    data: data
  })
}
// 删除用户
export function UserDel(data) {
  return serveice.request({
    method: "post",
    url: "/user/delete/",
    data: data
  })
}