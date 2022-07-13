import { mount } from '@vue/test-utils'
import FavoriteIndicator from '@/components/photoGalleryModule/photoList/favorite-indicator.vue'

test('Check Star indicator', () => {
  // render the component
  const wrapper = mount(FavoriteIndicator)

  // should not allow for `username` less than 7 characters, excludes whitespace
  wrapper.setData({
    isFavorite:true
  })

  // assert the error is rendered
  expect(wrapper.find('bi bi-star-fill').exists())

  // update the name to be long enough
  wrapper.setData({  isFavorite:false})

  // assert the error has gone away
  expect(wrapper.find('.bi .bi-star').exists())
})
