# 🗓️ 8-Day React + GraphQL + Rust Ramp-Up
## 9/30, Day 1 — React Core Refresh

- Review React.dev Learn:
  - Components, JSX, props/state.
  - Hooks refresher: `useState`, `useEffect`, `useRef`, `useMemo`, `useCallback`.
- Practice: rebuild a small app (todo or notes) with only hooks + function components.
- Tools: React DevTools quick tour.

## 10/01, Day 2 — Modern React Patterns
- Advanced hooks: `useReducer`, `useContext`, `useTransition`, `Suspense` basics.
- Component composition, lifting state vs context.
- Build: add async data (fake fetch) with Suspense fallback & error boundaries.
- If using TypeScript: refresh typing for props and hooks.

## 10/02, Day 3 — GraphQL Fundamentals
- GraphQL schema basics: queries, mutations, fragments.
- Apollo Client quickstart: `useQuery`, `useMutation`, error/loading states.
- Practice: connect your React app to a public GraphQL API (e.g. Countries API
).
- Learn Apollo cache basics: `fetchPolicy`, `update`, optimistic UI.

## 10/03, Day 4 — GraphQL in Production
- Pagination: offset vs cursor; Apollo `fetchMore`.
- Normalized cache & cache updates after mutations.
- Auth & error handling: `onError`, HTTP headers.
- Build: add pagination + optimistic UI to your app.

## 10/04, Day 5 — Rust GraphQL Server Basics
- Learn the project’s likely stack: `async-graphql` + Actix Web or Axum.
- Build a tiny Rust GraphQL API:
  - Schema with `#[Object]`, query + mutation.
- Simple resolver hitting an in-memory store.
- Practice: query it from your React app.

## 10/06, Day 6 — Production Integration
- Advanced React + GraphQL: Suspense with GraphQL, testing with React Testing Library + Apollo mocks.
- Rust side: read an existing schema, trace a resolver → DB call.
- Build: extend your Rust API with a new field and consume it in React.

## 10/07, Day 7 — Performance & Debugging
- React performance: Profiler, memoization (when to use/not use).
- GraphQL batching/N+1 avoidance: DataLoader pattern in Rust.
- Drill: optimize a slow list rendering, test GraphQL caching.
- Bonus: experiment with error boundaries + retry.

## 10/09, Day 8 — Integration Drill / Catch-Up
- Treat this day as a “real ticket” simulation:
  - Add a GraphQL field to Rust schema.
  - Write resolver + test it.
  - Update React query + UI with loading/error states.
  - Add a small test for the new component.
- Use this day to catch up if you lost time earlier.

## Tips
- Front load React + GraphQL: you’ll use it daily.
- Rust: get just enough to navigate and edit resolvers.
- GraphQL boundary tracing (schema → resolver → UI) is the #1 job skill to hit by the end.
