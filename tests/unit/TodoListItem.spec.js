import TodoListItem from "@/components/TodoListItem.vue";
import { mount } from "@vue/test-utils";

describe("TodoListItem", () => {
  it("Renders properly", () => {
    const propsData = {
      todo: { id: "id", note: "yawww", complete: true }
    };
    const wrapper = mount(TodoListItem, { propsData });

    expect(wrapper.isVueInstance()).toBe(true);
    expect(wrapper.element).toMatchSnapshot();
  });

  test("Calls onUpdate after editing note", () => {
    const propsData = {
      todo: { id: "id", note: "yawww", complete: true },
      onUpdate: jest.fn()
    };
    const wrapper = mount(TodoListItem, { propsData });

    wrapper.find(".note").setValue("some input");
    wrapper.find(".note").trigger("blur");

    expect(wrapper.vm.onUpdate).toHaveBeenCalledTimes(1);
  });

  test("Calls onUpdate after toggling note", () => {
    const propsData = {
      todo: { id: "id", note: "yawww", complete: true },
      onUpdate: jest.fn()
    };
    const wrapper = mount(TodoListItem, { propsData });

    wrapper.find(".completed").trigger("click");

    expect(wrapper.vm.onUpdate).toHaveBeenCalledTimes(1);
  });

  test("Calls onRemove after deleting note", () => {
    const propsData = {
      todo: { id: "id", note: "yawww", complete: true },
      onDelete: jest.fn()
    };
    const wrapper = mount(TodoListItem, { propsData });

    wrapper.find(".delete").trigger("click");

    expect(wrapper.vm.onDelete).toHaveBeenCalledTimes(1);
  });
});
