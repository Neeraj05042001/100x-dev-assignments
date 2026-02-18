// Problem Description – Recursive Fetch with Redirect Handling

// You are required to fetch data for a given set of IDs.
// Each response may contain a redirectId, indicating that the data should be fetched again using the new ID.
// The process must continue until the final data is reached.
// Your implementation should also detect and prevent infinite redirect loops.
async function fetchDeep(ids, fetcher, maxDepth = 5) {

  // helper — follows redirect chain for a single id
  async function fetchWithRedirect(id, depth) {
    if (depth > maxDepth) {
      throw new Error("Max redirect depth exceeded");
    }

    const response = await fetcher(id);

    if (response.redirectId) {
      return fetchWithRedirect(response.redirectId, depth + 1);
    }

    return response; // base case — final data
  }

  // get all keys from the ids object: ['a', 'b']
  const keys = Object.keys(ids);

  // run all keys in parallel
  const results = await Promise.all(
    keys.map(key => fetchWithRedirect(ids[key], 0))
  );

  // rebuild object: { a: result, b: result }
  const output = {};
  keys.forEach((key, index) => {
    output[key] = results[index];
  });

  return output;
}

module.exports = fetchDeep;
