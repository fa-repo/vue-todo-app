import App from "@/App.vue";
import { shallowMount } from "@vue/test-utils";

describe("App", () => {
  it("Renders without crashing", () => {
    expect(shallowMount(App).isVueInstance()).toBe(true);
  });

  test.todo("Renders TODO list");

  test.todo("Renders TODO item");

  test.todo("Can add item to TODO list");

  test.todo("Can update item in TODO list");

  test.todo("Can delete item in TODO list");
});
