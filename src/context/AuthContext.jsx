import React, { createContext, useContext, useMemo, useState } from "react";

const AuthCtx = createContext(null);
export function AuthProvider({ children }) {
  // MVP fake auth to make routes work; swap with Supabase later
  const [user, setUser] = useState(null);

  const loginAsDealer = () => setUser({ id: "demo-dealer", role: "dealer", email: "dealer@example.com" });
  const loginAsAdmin = () => setUser({ id: "demo-admin", role: "admin", email: "admin@example.com" });
  const logout = () => setUser(null);

  const value = useMemo(() => ({ user, loginAsDealer, loginAsAdmin, logout }), [user]);
  return <AuthCtx.Provider value={value}>{children}</AuthCtx.Provider>;
}
export const useAuth = () => useContext(AuthCtx);
