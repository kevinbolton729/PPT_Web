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
// 获取栏目隐射表
export async function getChannelTypes(params = {}) {
  return request(`${API_DOMAIN}/api/front/allchanneltype`, {
    params
  });
}
// 获取文章列表
// export async function getArticleList(params = {}) {
//   return request(`${API_DOMAIN}/api/front/allarticles`, {
//     params
//   });
// }
// 获取文章列表
export async function getArticleListByid(params = {}) {
  return request(`${API_DOMAIN}/api/front/articlebycid`, {
    params
  });
}
// 获取文章详细内容
export async function getArticleDetail(params = {}) {
  return request(`${API_DOMAIN}/api/front/articledetail`, {
    params
  });
}
// 获取产品列表
export async function getProductListByid(params = {}) {
  return request(`${API_DOMAIN}/api/front/articlebycid`, {
    params
  });
}
// 获取产品列详细内容
export async function getProductDetail(params = {}) {
  return request(`${API_DOMAIN}/api/front/articledetail`, {
    params
  });
}
// 获取实体店铺列表
export async function getShopList(params = {}) {
  return request(`${API_DOMAIN}/api/front/allshops`, {
    params
  });
}
// 获取舒览品牌列表
export async function getBrandList(params = {}) {
  return request(`${API_DOMAIN}/api/front/allbrands`, {
    params
  });
}
// 获取导航栏目列表
export async function getChannelList(params = {}) {
  return request(`${API_DOMAIN}/api/front/allchannels`, {
    params
  });
}

// [POST]
// 添加加盟申请
export async function addApply(params = {}) {
  return request(`${API_DOMAIN}/api/front/addapply`, {
    method: "POST",
    body: params
  });
}
