import { shallowMount } from '@vue/test-utils'
import LandingBlock from '../../src/components/LandingBlock'


describe('/components/landing-block', () => {
  const factory = (opts = {}) => shallowMount(LandingBlock, {
    ...opts
  })

  it('matches snapshot', () => {
    const wrapper = factory()

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('matches snapshot with custom props', () => {
    const wrapper = factory({
      propsData: {
        headline: 'Test headline',
        image: 'image src'
      }
    })

    expect(wrapper.html()).toMatchSnapshot()
  })
})
