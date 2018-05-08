// 接口
import { getDocumenTitle, getHomeData } from "@/services/api";
// 方法
import { parseResponse } from "@/utils/parse";

export const home = {
  namespaced: true,

  state: {
    isLoading: true,
    homeData: [],
    pageTitle: "..."
  },

  getters: {},

  // 异步
  actions: {
    async getHomeData({ commit }) {
      await commit({
        type: "changeLoading",
        payload: true
      });
      const response = await getHomeData();
      const { status, message, count, data } = await parseResponse(response);
      // await console.log(data, "home data");
      if (status > 0) {
        commit({
          type: "changeHomeData",
          payload: data
        });
      }
      await commit({
        type: "changeLoading",
        payload: false
      });
    },
    async getDocumenTitle({ commit }) {
      const response = await getDocumenTitle();
      const { status, data } = await parseResponse(response);
      if (status > 0) {
        const { title, subtitle } = data[0];
        // console.log(`${title} -- ${subtitle}`, "page title");
        commit({
          type: "changeDocumenTitle",
          payload: `${subtitle} -- ${title}`
        });
      }
    }
  },

  // 同步
  /* eslint-disable no-param-reassign */
  mutations: {
    changeLoading(state, { payload }) {
      state.isLoading = payload;
    },
    changeHomeData(state, { payload }) {
      state.homeData = payload;
    },
    changeDocumenTitle(state, { payload }) {
      state.pageTitle = payload;
    }
  }
};
