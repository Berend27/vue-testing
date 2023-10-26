import { mount } from "@vue/test-utils";
import AppHeader from "@/components/AppHeader";

describe("AppHeader", () => {
  test("if a user is not logged in, do not show the logout button", () => {
    const wrapper = mount(AppHeader);
    expect(wrapper.find("button").isVisible()).toBe(false);
  });

  // async await was used, unlike in the tutorial
  test("if logged in, show logout button", async () => {
    const wrapper = mount(AppHeader);
    await wrapper.setData({ loggedIn: true });
    expect(wrapper.find("button").isVisible()).toBe(true);
  });
  // it() can be used instead of test()
});
