import TodoList from "@/components/TodoList.vue";
import { mount } from "@vue/test-utils";

describe("TodoList", () => {
  it("Renders without crashing", () => {
    expect(mount(TodoList).isVueInstance()).toBe(true);
  });

  test.only("Renders TODO list", () => {
    const propsData = { items: ["a", "b", "c"] };
    const wrapper = mount(TodoList, { propsData });

    expect(wrapper.findAll(".todo-list li").length).toBe(3);
  });

  test.todo("Renders TODO item");

  test.todo("Can add item to TODO list");

  test.todo("Can update item in TODO list");

  test.todo("Can delete item in TODO list");
});
