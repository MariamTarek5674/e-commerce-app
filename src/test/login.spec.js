import { mount } from '@vue/test-utils';
import { describe, it, expect, beforeEach } from 'vitest';
import Login from '../pages/Login/index.vue'
describe('Login.vue', () => {
  let wrapper;
  beforeEach(() => {
    // Mount the component with the store and router
    wrapper = mount(Login, {
      global: {
        plugins: [globalThis.store,globalThis.router], // Inject the Vuex store and router
        mocks: {
            $toaster: {
              error: vi.fn(), // Mock the error method
            },
            actions:{
                login: vi.fn()
            }
          },
      },
    });
  });
it('renders the login form correctly', () => {
    expect(wrapper.find('h3').text()).toBe('Sign In');
    expect(wrapper.find('input[placeholder="Username"]').exists()).toBe(true);
    expect(wrapper.find('input[placeholder="Password"]').exists()).toBe(true);
    expect(wrapper.find('button[type="submit"]').text()).toBe('Sign in');
  });

  it('validates username and shows an error', async () => {
    const usernameInput = wrapper.find('input[placeholder="Username"]');
    await usernameInput.setValue('!nv@l!d');

    expect(wrapper.find('.username-error').text()).toBe(
      'Username must be 3-20 characters and can only include letters, numbers, and underscores'
    );
  })

  it('validates password and shows an error', async ()=>{
    const passwordInput = wrapper.find('input[placeholder="Password"]');
    await passwordInput.setValue('123');
    expect(wrapper.find('.password-error').text()).toBe(
        'Password must be at least 6 characters'
    )
  })

  it('calls the login action on valid form submission', async () => {
    //store.dispatch.login = vi.fn(() => Promise.resolve()) 
    const spayOnLogin= vi.spyOn(store,"dispatch") 
    const usernameInput = wrapper.find('input[placeholder="Username"]');
    const passwordInput = wrapper.find('input[placeholder="Password"]');
    await usernameInput.setValue('validUser');
    await passwordInput.setValue('validPass123');

    const form = wrapper.find('form');
    await form.trigger('submit.prevent');

    expect(spayOnLogin).toHaveBeenCalledWith('auth/login', {
        username: 'validUser',
        password: 'validPass123',
      });
    //expect(router.currentRoute.value.name).toBe('Home');
  })

  it('calls the login action on invalid form submission', async () => {
    store.dispatch = vi.fn(() => Promise.reject({ response: { data: 'Login failed' } })); // mocked a failed login request

    const usernameInput = wrapper.find('input[placeholder="Username"]');
    const passwordInput = wrapper.find('input[placeholder="Password"]');
    await usernameInput.setValue('validUser');
    await passwordInput.setValue('validPass123');

    const form = wrapper.find('form');
    await form.trigger('submit.prevent');

    expect(wrapper.vm.$toaster.error).toHaveBeenCalledWith('Login failed');
  })
})
