import App from "@/App.vue";
import { shallowMount } from "@vue/test-utils";

describe("App", () => {
  it("Renders without crashing", () => {
    expect(shallowMount(App).isVueInstance()).toBe(true);
  });
});
