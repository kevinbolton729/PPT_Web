import request from "@/utils/axios";
// 常量
import { API_DOMAIN } from "@/utils/consts";

// [GET]
// 获取网站标题
export async function getDocumenTitle(params = {}) {
  return request(`${API_DOMAIN}/api/front/doctitle`, {
    params
  });
}
// 获取首页数据
export async function getHomeData(params = {}) {
  return request(`${API_DOMAIN}/api/front/allhome`, {
    params
  });
}


// [POST]

