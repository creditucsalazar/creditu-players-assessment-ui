import { shallowMount, createLocalVue } from "@vue/test-utils";
import SearchBar from "@/components/SearchBar.vue";
describe("components/SearchBar.vue", () => {
  const localVue = createLocalVue();
  const getWrapper = (placeholder, value) =>
    shallowMount(SearchBar, {
      localVue,
      propsData: { placeholder, value },
      stubs: {
        "b-field": { template: "<div/>" },
      },
    });
  it("should emit input event when value changes", async () => {
    const wrapper = getWrapper("Ingresar búsqueda...", "noobmaster");
    expect(wrapper.vm.auxValue).toBe("noobmaster");
    await wrapper.setProps({ value: "masternoob" });
    expect(wrapper.vm.auxValue).toBe("masternoob");
    expect(wrapper.emitted()).toMatchObject({
      input: [[""], ["noobmaster"], ["masternoob"]],
    });
  });
});
