import NewTodo from "@/components/NewTodo.vue";
import { mount } from "@vue/test-utils";

describe("NewTodo", () => {
  it("Renders empty input by default", () => {
    expect(mount(NewTodo).isVueInstance()).toBe(true);
    expect(mount(NewTodo).vm.newTodo).toBe("");
  });

  it("Can submit Todo", async () => {
    const propsData = {
      onAddTodo: jest.fn()
    };
    const input = mount(NewTodo, { propsData });

    input.setValue("some input");
    input.trigger("keyup.enter");

    expect(input.vm.onAddTodo).toHaveBeenCalledTimes(1);
    expect(input.vm.onAddTodo.mock.calls[0][0].note).toBe("some input");
    expect(input.vm.onAddTodo.mock.calls[0][0].id.length).toBe(9);
    expect(input.vm.onAddTodo.mock.calls[0][0].complete).toBe(false);
  });

  it("can't submit empty Todo", () => {
    const propsData = {
      onAddTodo: jest.fn()
    };
    const input = mount(NewTodo, { propsData });

    input.trigger("keyup.enter");

    expect(input.vm.onAddTodo).toHaveBeenCalledTimes(0);
    expect(input.vm.newTodo).toBe("");
  });
});
