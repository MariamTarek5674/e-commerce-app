 const routes = [
    {
      path: '/',
      name: 'Layout',
      component: ()=>import('../Layout/index.vue'),
      children:[
        {
            name:"home",
            path:"/",
            component:()=>import('../pages/Home/index.vue'),
        },
      ]
    },
    {
      name:"Login",
      path:"/login",
      component:()=>import('../pages/Login/index.vue'),
    },
  ]
  export default routes