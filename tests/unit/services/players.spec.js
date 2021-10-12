import axios from "axios";
import { getPlayers } from "@/services/players";
import { httpClient } from "@/services/http-client";

describe("@/services/players", () => {
  it("should get players", async () => {
    httpClient.get = jest.fn(async () => ({ data: "players" }));
    function CancelTokenMock(cancelExecutor) {
      cancelExecutor();
    }
    axios.CancelToken = CancelTokenMock;
    const cancelExecutor = jest.fn();
    const result = await getPlayers("searchString", 1, cancelExecutor);
    expect(result).toBe("players");
    expect(httpClient.get).toHaveBeenCalledWith("players", {
      params: {
        searchString: "searchString",
        pageNumber: 1,
        documentsPerPage: 10,
      },
      cancelToken: new CancelTokenMock(() => {}),
    });
    expect(cancelExecutor).toHaveBeenCalled();
  });
});
