import { shallowMount, createLocalVue } from "@vue/test-utils";
import Pagination from "@/components/Pagination.vue";
describe("components/Pagination.vue", () => {
  const localVue = createLocalVue();
  const getWrapper = () =>
    shallowMount(Pagination, {
      localVue,
      stubs: {
        "b-pagination": { template: "</div>" },
      },
    });
  it("should emit input event if value is updated", async () => {
    const wrapper = getWrapper();
    await wrapper.setProps({ value: 5 });
    expect(wrapper.emitted()).toMatchObject({ input: [[1], [5]] });
  });
});
