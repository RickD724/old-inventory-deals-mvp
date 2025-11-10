import React, { createContext, useContext, useMemo, useState } from "react";

const AuthCtx = createContext(null);
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const loginAsDealer = () => setUser({ id: "demo-dealer", role: "dealer" });
  const loginAsAdmin = () => setUser({ id: "demo-admin", role: "admin" });
  const logout = () => setUser(null);
  const value = useMemo(() => ({ user, loginAsDealer, loginAsAdmin, logout }), [user]);
  return <AuthCtx.Provider value={value}>{children}</AuthCtx.Provider>;
}
export const useAuth = () => useContext(AuthCtx);
