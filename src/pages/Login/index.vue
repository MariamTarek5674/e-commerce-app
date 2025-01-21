<template>
  <div class="bg-gray-100 absolute top-0 left-0 bottom-0 leading-5 h-full w-full overflow-hidden">
  </div>
  <div
    class="relative min-h-screen sm:flex sm:flex-row justify-center items-center bg-transparent rounded-3xl shadow-xl">
    <div class="flex-col flex self-center lg:px-14 sm:max-w-4xl xl:max-w-md z-10 w-1/2">
      <div class="w-full">
        <img src="../../../public/familyShopping.png" alt="">
      </div>
    </div>
    <div class="flex justify-center self-center z-10">
      <div class="p-12 bg-white mx-auto rounded-3xl min-w-96 ">
        <div class="mb-7">
          <h3 class="font-semibold text-2xl text-gray-800">Sign In</h3>
          <p class="text-gray-400">Don't have an account? 
            <a href="#" class="text-sm text-red-700 hover:text-red-700">Sign Up</a>
          </p>
        </div>
        <form>
          <div class="space-y-6">
            <div>
              <input
                v-model="form.email"
                class="w-full text-sm px-4 py-3 bg-gray-200 focus:bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-red-400"
                type="email"
                placeholder="Email"
              />
            </div>
            <div class="relative">
              <input
                v-model="form.password"
                :type="showPassword ? 'text' : 'password'"
                class="text-sm px-4 py-3 rounded-lg w-full bg-gray-200 focus:bg-gray-100 border border-gray-200 focus:outline-none focus:border-red-400"
                placeholder="Password"
              />
            </div>
            <div class="flex items-center justify-between">
              <div class="text-sm ml-auto">
                <a href="#" class="text-red-700 hover:text-red-600">Forgot your password?</a>
              </div>
            </div>
            <div>
              <button type="submit"
                class="w-full flex justify-center bg-red-800 hover:bg-red-700 text-gray-100 p-3 rounded-lg tracking-wide font-semibold cursor-pointer transition ease-in duration-500">
                Sign in
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
      showPassword: false,
    };
  },
};
</script>