import TodoList from "@/components/TodoList.vue";
import { mount } from "@vue/test-utils";

describe("TodoList", () => {
  it("Renders without crashing", () => {
    expect(mount(TodoList).isVueInstance()).toBe(true);
  });

  it("Renders TODO list", () => {
    const propsData = {
      todos: [
        { id: "szq86umfc", note: "item 1", complete: true },
        { id: "b8jj7karu", note: "item 2", complete: false },
        { id: "0wzn59w1p", note: "item 3", complete: true }
      ]
    };
    const wrapper = mount(TodoList, { propsData });

    expect(wrapper.findAll(".todo-list li").length).toBe(3);
  });
});
