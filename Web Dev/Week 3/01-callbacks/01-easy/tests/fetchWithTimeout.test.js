const fetchWithTimeout = require("../03-fetchWithTimeout");

describe("fetchWithTimeout (Callback Style)", () => {
  beforeEach(() => {
    jest.useRealTimers();
    global.fetch = jest.fn();
  });

  test("calls callback with data if fetch completes within time", (done) => {
    // Mock fetch to return a resolved Promise with mock response
    const mockData = { id: 1, title: "Test Post" };
    
    global.fetch.mockResolvedValue({
      ok: true,
      json: async () => mockData
    });

    fetchWithTimeout("https://example.com", 1000, (err, result) => {
      try {
        expect(err).toBeNull();
        expect(result).toEqual(mockData);
        done();
      } catch (error) {
        done(error);
      }
    });
  }, 5000);

  test("calls callback with timeout error if fetch is too slow", (done) => {
    // Mock fetch to return a Promise that takes too long
    global.fetch.mockImplementation(() => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            ok: true,
            json: async () => ({ data: "slow data" })
          });
        }, 2000); // Takes 2 seconds
      });
    });

    fetchWithTimeout("https://example.com", 500, (err, result) => {
      try {
        expect(err).toBeDefined();
        expect(err.message).toBe("Request Timed Out");
        expect(result).toBeUndefined();
        done();
      } catch (error) {
        done(error);
      }
    });
  }, 5000);

  test("calls callback with error if fetch fails", (done) => {
    // Mock fetch to return a rejected Promise
    const mockError = new Error("Network error");
    
    global.fetch.mockRejectedValue(mockError);

    fetchWithTimeout("https://example.com", 1000, (err, result) => {
      try {
        expect(err).toBeDefined();
        expect(err.message).toBe("Network error");
        expect(result).toBeUndefined();
        done();
      } catch (error) {
        done(error);
      }
    });
  }, 5000);

  test("calls callback with error if response is not ok", (done) => {
    // Mock fetch to return a response with error status
    global.fetch.mockResolvedValue({
      ok: false,
      status: 404
    });

    fetchWithTimeout("https://example.com", 1000, (err, result) => {
      try {
        expect(err).toBeDefined();
        expect(err.message).toContain("404");
        expect(result).toBeUndefined();
        done();
      } catch (error) {
        done(error);
      }
    });
  }, 5000);
});