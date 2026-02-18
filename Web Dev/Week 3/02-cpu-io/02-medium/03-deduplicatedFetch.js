// Problem Description – Deduplicated Network Request Utility

// You are required to build a utility that prevents multiple identical network requests from executing simultaneously.
// If the same request (for example, getData('id-1')) is called multiple times at the same moment, only one network request should be triggered.
// All callers must receive the same Promise result once the request completes.

const pendingRequests = new Map();

function deduplicatedFetch(id, apiCall) {
  if (pendingRequests.has(id)) {
    return pendingRequests.get(id);
  }
  const promise = apiCall(id)
    .then((result) => {
      pendingRequests.delete(id);
      return result;
    })
    .catch((err) => {
      pendingRequests.delete(id);
      throw err;
    });

  pendingRequests.set(id, promise);
  return promise;
}

module.exports = deduplicatedFetch;




/*
═══════════════════════════════════════════════════
  PATTERN: Request Deduplication / Promise Coalescing
═══════════════════════════════════════════════════

  CORE IDEA:
  Store the in-flight Promise in a Map.
  If same key is requested again, return the SAME promise.
  Delete from cache once request is done (success or failure).

  WHY MAP?
  → key = unique request id
  → value = the Promise (not the result!)
  → Map lives OUTSIDE the function so it persists across calls

  WHY DELETE IN BOTH .then() AND .catch()?
  → Success only  = failed requests stuck in cache forever (no retry)
  → Failure only  = successful requests stuck in cache (stale data)
  → Both          = cache only holds truly in-flight requests ✅

  WHY NOT .finally() FOR CLEANUP?
  → .finally() has microtask timing issues
  → cleanup may not complete before the next sequential call hits
  → explicit .then() + .catch() runs cleanup in the same chain ✅

  WHY apiCall(id) NOT apiCall()?
  → the mock/real function needs the id to return the correct data
  → forgetting this returns "data-undefined"

  DECISION TREE:
  incoming call
      │
      ├── cache HIT?  → return cached promise (no new request)
      │
      └── cache MISS? → fire apiCall(id)
                      → store promise in cache
                      → cleanup on resolve OR reject
                      → return promise

  SCENARIOS TO VERIFY:
  ✅ Simultaneous same-key calls  → only 1 network call fires
  ✅ Different keys               → each gets its own request
  ✅ Sequential after success     → fresh request fires (cache was cleared)
  ✅ Sequential after failure     → fresh request fires (cache was cleared)
*/