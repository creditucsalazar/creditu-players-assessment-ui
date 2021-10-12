import { shallowMount, createLocalVue } from "@vue/test-utils";
import ResultsGrid from "@/components/ResultsGrid.vue";
describe("components/ResultsGrid.vue", () => {
  const localVue = createLocalVue();
  const getWrapper = () =>
    shallowMount(ResultsGrid, {
      localVue,
      stubs: {
        Player: { template: "</div>" },
      },
    });
  it("should be defined", () => {
    const wrapper = getWrapper();
    expect(wrapper).toBeDefined();
  });
});
