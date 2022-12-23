// import { mount } from '@testing-library/vue'
// import { createRouter, createWebHistory } from 'vue-router'
//
// import App from '../../src/App'
// import About from '../../src/views/About'
//
// describe('App', () => {
//     it('renders a component via routing', async () => {
//         // create local router
//         const router = createRouter({
//             history: createWebHistory(),
//             routes: [{
//                 path: '/about',
//                 name: 'About',
//                 component: About
//             }]
//         })
//
//         // navigate to route
//         router.push('/about')
//
//         // await navigation from push()
//         await router.isReady()
//
//         // install the local router
//         const wrapper = mount(App, {
//             global: {
//                 plugins: [router]
//             }
//         })
//
//         expect(wrapper.findComponent(About).exists()).toBe(true)
//     })
// })
import { test } from "vitest";
import { render } from "@testing-library/vue";
import Discover from "../views/Lunch.vue";

test("It renders correctly", () => {
    const { getByText } = render(Discover);
    getByText("Discover");
});
