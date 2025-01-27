import { mount } from '@vue/test-utils';
import ProductCard from '../components/productCard/index.vue';
import RatingStar from '../components/productCard/components/RatingStar.vue';

describe('ProductCard.vue', () => {
  let wrapper;
  const product = {
    id: 1,
    title: 'Test Product Title for the Card',
    price: 100,
    image: 'https://via.placeholder.com/150',
    rating: { rate: 4.5 },
  };
  beforeEach(() => {
    wrapper = mount(ProductCard, {
      props: {
        product,
      },
      global: {
        plugins: [globalThis.router],
      },
    });
  });

  it('renders the product image', () => {
    const img = wrapper.find('img');
    expect(img.exists()).toBe(true);
    expect(img.attributes('src')).toBe(product.image);
    expect(img.attributes('alt')).toBe(product.title);
  });

  it('renders the product title', () => {
    const title = wrapper.find('h3');
    expect(title.text()).toBe('Test Product Ti...');
  });

  it('renders the product price', () => {
    const price = wrapper.find('.text-right p');
    expect(price.text()).toBe(`${product.price} EGP`);
  });

  it('displays the "New" badge', () => {
    const badge = wrapper.find('.absolute .bg-slate-100');
    expect(badge.exists()).toBe(true);
    expect(badge.text()).toBe('New');
  });

  it('renders the rating star component', () => {
    const ratingStar = wrapper.findComponent(RatingStar);
    expect(ratingStar.exists()).toBe(true);
    expect(ratingStar.props('productRate')).toBe(product.rating.rate);
  });

  it('correctly truncates long titles', async () => {
    const longTitle = 'This is a very long product title that should be truncated';
    await wrapper.setProps({ product: { ...product, title: longTitle } });
    const title = wrapper.find('h3');
    expect(title.text()).toBe('This is a very ...'); 
  });

  it('correctly handles short titles without truncating', async() => {
    const shortTitle = 'Short Title';
    await wrapper.setProps({ product: { ...product, title: shortTitle } });
    const title = wrapper.find('h3');
    expect(title.text()).toBe(shortTitle);
  });

  it('handles click on the product card and redirects to product details', async () => {
    const redirectionSpy = vi.spyOn(wrapper.vm, 'redirectionToProductDetails'); //sping on redirectionToProductDetails in the wrapper.vm (wrapper instance)
    await wrapper.trigger('click');
    expect(redirectionSpy).toHaveBeenCalled();

    // Mocking the router push for redirection
    const routerPushSpy = vi.spyOn(wrapper.vm.$router, 'push');
    await wrapper.vm.redirectionToProductDetails();
    expect(routerPushSpy).toHaveBeenCalledWith(`/product/${product.id}`);
  });
});
