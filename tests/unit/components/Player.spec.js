import { shallowMount, createLocalVue } from "@vue/test-utils";
import Player from "@/components/Player.vue";
describe("components/Player.vue", () => {
  const localVue = createLocalVue();
  const getWrapper = () => shallowMount(Player, { localVue });
  it("should be defined", () => {
    const wrapper = getWrapper();
    expect(wrapper).toBeDefined();
  });
});
