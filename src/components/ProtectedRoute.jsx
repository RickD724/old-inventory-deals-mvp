import { useAuth } from "../context/AuthContext.jsx";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ role, children }) {
  const { user } = useAuth();
  if (!user) return <Navigate to="/dealer/signup" replace />;
  if (role && user.role !== role) return <Navigate to="/" replace />;
  return children;
}
