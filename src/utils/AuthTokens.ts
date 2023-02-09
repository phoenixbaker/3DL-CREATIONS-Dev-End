export function setAuthToken(authToken: string) {
  return localStorage.setItem("x-auth-token", authToken);
}

export function getAuthToken() {
  return localStorage.getItem("x-auth-token");
}

export function removeAuthToken() {
  return localStorage.removeItem("x-auth-token");
}
