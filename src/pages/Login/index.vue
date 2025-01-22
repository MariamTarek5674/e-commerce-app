<template>
  <div class="bg-gray-100 absolute top-0 left-0 bottom-0 leading-5 h-full w-full overflow-hidden">
  </div>
  <div
    class="relative min-h-screen sm:flex sm:flex-row justify-center items-center bg-transparent rounded-3xl shadow-xl">
    <div class="flex-col flex self-center lg:px-14 sm:max-w-4xl xl:max-w-md z-10 w-1/2">
      <div class="w-full">
        <img src="/familyShopping.png" alt="">
      </div>
    </div>
    <div class="flex justify-center self-center z-10">
      <div class="p-12 bg-white mx-auto rounded-3xl min-w-96 max-w-96">
        <div class="mb-7">
          <h3 class="font-semibold text-2xl text-gray-800">Sign In</h3>
          <p class="text-gray-400">Don't have an account? 
            <a href="#" class="text-sm text-red-700 hover:text-red-700">Sign Up</a>
          </p>
        </div>
        <form @submit.prevent="onSubmit">
          <div class="space-y-6">
            <div class="flex flex-col gap-4">
              <input
                v-model="form.username"
                class="w-full text-sm px-4 py-3 bg-gray-200 focus:bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-red-400"
                type="text"
                placeholder="Username"
                @input="()=>validateField('username',form.username)"
              />
              <p v-if="errors.username" class="text-red-500 text-xs text-left px-2 text-wrap">{{ errors.username }}</p>
            </div>
            <div class="relative flex flex-col gap-4">
              <input
                v-model="form.password"
                :type="showPassword ? 'text' : 'password'"
                class="text-sm px-4 py-3 rounded-lg w-full bg-gray-200 focus:bg-gray-100 border border-gray-200 focus:outline-none focus:border-red-400"
                placeholder="Password"
                @input="()=>validateField('password',form.password)"
              />
              <span class="toggle-password" :class="{'!top-[30%]':errors.password}" @click="showPassword=!showPassword">
                <font-awesome-icon :icon="!showPassword ? 'eye-slash' : 'eye'" />
              </span>
              <p v-if="errors.password" class="text-red-500 text-xs text-left px-2">{{ errors.password }}</p>
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
import * as yup from 'yup'
export default {
  name: "Login",
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
      errors:{
        username:'',
        password:'',
      },
      showPassword: false,
    };
  },
  computed:{
    validationSchema() {
      return yup.object({
        username: yup.string()
        .matches(/^[a-zA-Z0-9._]{3,20}$/, "Username must be 3-20 characters and can only include letters, numbers, and underscores")
        .required("Username is required"),
        password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
      });
    },
  },
  methods: {
    validateField(field, value) {
      const schema = this.validationSchema;
      schema
        .validateAt(field, { [field]: value })
        .then(() => {
          this.errors[field] = ""; // Clear error if valid input
        })
        .catch((err) => {
          this.errors[field] = err.message; // Set error if invalid input
        });
    },
    async onSubmit(){
      try{
       await this.$store.dispatch('auth/login',{username:this.form.username, password:this.form.password})
       this.$router.push('/')
      }catch(error){
        this.$toaster.error(error.response.data)
      }
    }
  },
}
</script>
<style scoped>
.toggle-password {
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  cursor: pointer;
  color: #888;
  font-size: 18px;
}

.toggle-password:hover {
  color: #555;
}
</style>