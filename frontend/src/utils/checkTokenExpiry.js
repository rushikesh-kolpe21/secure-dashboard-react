
import { TOKEN_EXPIRY_MS } from "./tokenExpiry";

export function isTokenExpired() {
  const token = localStorage.getItem("token");
  const loginTime = localStorage.getItem("loginTime");

  if (!token || !loginTime) return true;

  const elapsed = Date.now() - parseInt(loginTime, 10);
  return elapsed > TOKEN_EXPIRY_MS;
}

export function clearAuth() {
  localStorage.removeItem("token");
  localStorage.removeItem("loginTime");
}
