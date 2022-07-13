import Vue from "vue"
export const state = () => ({
  // each favorite photo save  as {Key[id]: Value[boolean]}
  stars: {}
});

export const getters = {
  hasStar: state => photoId => {
    return !!state.stars[photoId]
  },
};

export const mutations = {
  TOOGLE_SET_STAR(state, photoId) {
    //If in this photo doesn't exist before we set it as true
    if (!state.stars[photoId])
      Vue.set(state.stars, photoId, true)
    else
    //We just toogling it 
      Vue.set(state.stars, photoId, !state.stars[photoId])
  },
};
