import axios from "axios";

describe("@/services/http-client", () => {
  beforeAll(() => {
    axios.create = jest.fn(() => "client");
  });
  it("should create http client", async () => {
    const { httpClient } = await import("@/services/http-client");
    expect(httpClient).toBe("client");
  });
});
