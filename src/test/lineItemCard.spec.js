import { mount } from "@vue/test-utils";
import { describe, it, expect, vi, beforeEach } from "vitest";
import lineItemCard from "../components/Cart/components/lineItemCard.vue";
import lineItemCardSkeleton from "../components/Cart/components/lineItemCardSekleton.vue";

describe("lineItemCard.vue", () => {
  let wrapper;

  beforeEach(async () => {
    wrapper = mount(lineItemCard, {
      global: {
        plugins: [globalThis.store, globalThis.router],
      },
      props: {
        productData: {
          productId: 1,
          id: 1,
          quantity: 2,
        },
      },
    });
  });

  it("renders the skeleton when loading is true",async () => {
    // Set the initial state explicitly
  await wrapper.setData({ loading: true });

  // Mock the fetchProduct function
  const fetchProductSpy = vi.spyOn(wrapper.vm, "fetchProduct").mockImplementation(() => new Promise(() => {})); // Prevent it from resolving

  // Trigger the next tick to simulate lifecycle hooks
  await wrapper.vm.$nextTick();

  // Assert that loading is true before fetchProduct resolves
  expect(wrapper.vm.loading).toBe(true);
  expect(wrapper.findComponent(lineItemCardSkeleton).exists()).toBe(true);

  // Clean up spy
  fetchProductSpy.mockRestore();
});

  it("fetches product details on mount", async () => {
    // Wait for the fetchProduct method to resolve
    const fetchProductDetailsSpy = vi.spyOn(store, "dispatch")
    await wrapper.vm.fetchProduct();
    const productTitle= wrapper.find('.product-title');
    expect(fetchProductDetailsSpy).toHaveBeenCalledWith("home/fetchProductDetails", 1); // or just ==> expect(globalThis.store.dispatch).toHaveBeenCalledWith("home/fetchProductDetails", 1);    
    expect(productTitle.text()).toBe("Test Product");
    expect(wrapper.vm.loading).toBe(false);
  });

  it("renders the product details when loading is false", async () => {
    // Simulate product being fetched
    await wrapper.vm.fetchProduct();

    // Assert the rendered product details
    expect(wrapper.find(".product-title").text()).toBe("Test Product");
    expect(wrapper.find(".product-price").text()).toBe("100 EGP");
    expect(wrapper.find("img").attributes("src")).toBe("test-image.jpg");
  });

  it("calls handleQuantityChange when '+' button is clicked", async () => {
    // Simulate product being fetched
    await wrapper.vm.fetchProduct();

    const incrementButton = wrapper.findAll("button")[1]; // Find the '+' button
    await incrementButton.trigger("click");

    expect(globalThis.store.dispatch).toHaveBeenCalledWith("cart/updateProductQuantity", {
      productId: 1,
      quantity: 3,
      cartId: 1,
    });
 });

 it('calls handleQuantityChange when "-" button is clicked', async () => {
    await wrapper.vm.fetchProduct();
    const decrementButton = wrapper.findAll("button")[0];
    await decrementButton.trigger("click");
    expect(globalThis.store.dispatch).toBeCalledWith("cart/updateProductQuantity",{
        productId: 1,
        quantity: 1,
        cartId: 1,
    })
 })


  it("truncates product title longer than 20 characters", () => {
    expect(wrapper.vm.truncatedTitle("This is a very long product title")).toBe("This is a very long ...");
    expect(wrapper.vm.truncatedTitle("Short title")).toBe("Short title");
  });

});
