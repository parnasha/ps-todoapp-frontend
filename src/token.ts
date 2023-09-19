export const getToken = (): string | null => {
  return localStorage.getItem("accessToken");
};

export const setToken = (token: string | null): void => {
  if (token) {
    localStorage.setItem("accessToken", token);
  } else {
    localStorage.removeItem("accessToken");
  }
};

export const clearToken = () => {
  localStorage.removeItem("accessToken");
};
