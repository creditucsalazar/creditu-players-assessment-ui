import { shallowMount, createLocalVue } from "@vue/test-utils";
import Players from "@/views/Players.vue";

describe("views/Players.vue", () => {
  const localVue = createLocalVue();
  const getWrapper = () =>
    shallowMount(Players, {
      localVue,
      stubs: {
        SearchBar: { template: "</div>" },
        ResultsGrid: { template: "</div>" },
        "b-loading": { template: "</div>" },
        "b-notification": { template: "</div>" },
      },
    });
  it("should show error message if getPlayers throws error", async () => {
    const playersService = await import("@/services/players");
    playersService.getPlayers = jest.fn(async () => {
      throw new Error();
    });
    const wrapper = getWrapper();
    await wrapper.setData({ searchString: "abc" });
    expect(wrapper.vm.isLoading).toBe(false);
    expect(wrapper.vm.isError).toBe(true);
  });
  it("should cancel request", async () => {
    const playersService = await import("@/services/players");
    playersService.getPlayers = jest.fn(async () => {
      throw new Error("cancelled");
    });
    const wrapper = getWrapper();
    await wrapper.setData({ searchString: "abc" });
    expect(wrapper.vm.isLoading).toBe(true);
    expect(wrapper.vm.isError).toBe(false);
  });
  it("sould get players", async () => {
    const playersService = await import("@/services/players");
    playersService.getPlayers = jest.fn(async () => ({
      players: [{ id: 1 }, { id: 2 }, { id: 3 }],
      pagination: { numberOfDocuments: 3 },
    }));
    const wrapper = getWrapper();
    await wrapper.setData({ searchString: "abc" });
    expect(wrapper.vm.isLoading).toBe(false);
    expect(wrapper.vm.isError).toBe(false);
    expect(wrapper.vm.players).toMatchObject([{ id: 1 }, { id: 2 }, { id: 3 }]);

    // ahora probamos cambiar a un string vacio
    await wrapper.setData({ searchString: "" });
    expect(playersService.getPlayers).toHaveBeenCalledTimes(1);
  });
  it("should trigger getPlayers id pageNumber is updated", async () => {
    const playersService = await import("@/services/players");
    playersService.getPlayers = jest.fn(async () => ({
      players: [],
      numberOfDocuments: 0,
    }));
    const wrapper = getWrapper();
    await wrapper.setData({
      isLoading: true,
      pageNumber: 3,
      cancelGetPlayers: jest.fn(),
    });
    expect(wrapper.vm.cancelGetPlayers).toHaveBeenCalledWith("cancelled");
    expect(wrapper.vm.players).toMatchObject([]);
  });
});
