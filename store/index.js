import Vue from "vue"
export const state = () => ({
  stars: {}
});

export const getters = {
  hasStar: state => photoId => {
    console.log(state.stars);
    return !!state.stars[photoId]
  },
};

export const mutations = {
  TOOGLE_SET_STAR(state, photoId) {
    if (!state.stars[photoId])
      Vue.set(state.stars, photoId, true)
    else
      Vue.set(state.stars, photoId, !state.stars[photoId])
  },
};
