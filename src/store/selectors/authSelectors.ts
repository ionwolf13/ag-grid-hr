import type { AuthStoreType } from "../stores/AuthStore";

export const selectIsAuthenticated = (state: AuthStoreType) =>
  state.isAuthenticated;
