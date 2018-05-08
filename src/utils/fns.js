/*
 * @Author: Kevin Bolton
 * @Date: 2018-02-05 22:04:50
 * @Last Modified by: Kevin Bolton
 * @Last Modified time: 2018-03-18 11:17:57
 */
// 第三方库
// 常量
import { URL_PREFIX, API_DOMAIN } from "@/utils/consts";
// 格式化数字
const twoDecimal = num => {
  // 显示数字，保留小数点后两位
  // 返回值的类型为String
  const f = parseFloat(num);

  if (!f) {
    return "0.00";
  }

  return (Math.floor(f * 100) / 100).toFixed(2);
};
export const parseNum = value =>
  twoDecimal(value).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
// 解析URL地址
export const parseUrl = url => {
  let newUrl = url;
  const httpIndexOf = newUrl && newUrl.indexOf("http");
  if (httpIndexOf === -1) {
    newUrl = `${API_DOMAIN}${newUrl}`;
  }
  return newUrl;
};
// 获取sort
export const getSortType = (sort, maps = []) => {
  let sortTypeNum = 0;
  const codes = maps;
  for (let i = 0; i < codes.length; i += 1) {
    if (sort === codes[i].sortId) {
      const { sortType } = codes[i];
      sortTypeNum = sortType;
      break;
    }
  }
  return parseInt(sortTypeNum, 10);
};
// 获取typeName
export const getTypeName = (sort, maps = []) => {
  let result = DATA_NODATA;
  let parentName = "";
  const codes = maps;
  for (let i = 0; i < codes.length; i += 1) {
    if (sort === codes[i].sortId) {
      if (parseInt(codes[i].sortPid, 10) !== 0) {
        // 获取父类别,递归方法getypeName
        parentName = getTypeName(codes[i].sortPid, codes);
        parentName += " / ";
      }
      result = parentName + codes[i].sortName;
      break;
    }
  }
  return result;
};
// 解析隐射表 站点/栏目 返回字符串
export const getMapStrName = (ids, maps = []) => {
  const result = [];
  const codes = maps;

  for (let i = 0; i < ids.length; i += 1) {
    for (let n = 0; n < codes.length; n += 1) {
      if (ids[i] === codes[n].siteid || ids[i] === codes[n].channelid) {
        result.push(codes[n].name);
        break;
      }
    }
  }
  return result;
};
// 字符串转换成大写
export const strToUpper = str => str.toString().toUpperCase();
// 获取图片Base64编码内容
export const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
};
// base64 to Blob
export const base64UrlToBlob = urlData => {
  // 去掉url的头，并转换为byte
  const bytes = window.atob(urlData.split(",")[1]);
  // 处理异常,将ascii码小于0的转换为大于0
  const ab = new ArrayBuffer(bytes.length);
  const ia = new Uint8Array(ab);
  ia.forEach((i, index) => {
    ia[index] = bytes.charCodeAt(index);
  });
  return new Blob([ia], {
    type: urlData
      .split(",")[0]
      .split(":")[1]
      .split(";")[0]
  });
};
// >> 分页
// arr: 数组  cur: 当前页码  size: 当前页条数
export const getCurArr = (arr, cur, size) => {
  const start = (cur - 1) * size; // 开始的索引
  const end = cur * size; // 结束的索引

  return arr.slice(start, end);
};
// 解析时间
export const getDateFormat = value => {
  const date = new Date(parseInt(value, 10));
  let month = date.getMonth() + 1;
  let day = date.getDate();

  if (month < 9) month = "0" + month;
  if (day < 9) day = "0" + day;

  return `${month}/${day}`;
};
// 根据Channel id，获取栏目主题图片
export const getChannelThumb = (channelid, channelist) =>
  channelist.filter(item => channelid === item.channelid)[0].thumb;
// --- END ---
