export const TOKEN_EXPIRY_MS = 60 * 60 * 1000; // 1 hour

// Check if token has expired
export const isTokenExpired = () => {
  const loginTime = localStorage.getItem("loginTime");
  
  if (!loginTime) return true;
  
  const elapsed = Date.now() - parseInt(loginTime);
  return elapsed > TOKEN_EXPIRY_MS;
};

// Clear expired token
export const clearExpiredToken = () => {
  if (isTokenExpired()) {
    localStorage.removeItem("token");
    localStorage.removeItem("loginTime");
    window.location.href = "/login";
  }
};
