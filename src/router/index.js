import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import AddPost from '../views/AddPost.vue';
import Post from '../views/Post.vue';
import EditPost from '../views/EditPost.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/add-post",
    name: "add-post",
    component: AddPost,
  },
  //le he cambiado de path: "/post/:id" a path: "/post/"   --- pad 
  {
    path: "/post/",
    name: "post",
    component: Post,
  },
  {
    path: "/edit-post/:id",
    name: "edit-post",
    component: EditPost,
  },
  {
    path: "/about",
    name: "About",
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
