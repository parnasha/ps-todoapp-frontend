// Function to retrieve the access token from localStorage
export const getToken = (): string | null => {
    return localStorage.getItem("accessToken");
};
// Function to set the access token in localStorage
export const setToken = (token: string | null): void => {
    // Check if a token is provided
    if (token) {
        // If a token is provided, store it in localStorage
        localStorage.setItem("accessToken", token);
    } else {
        // If no token is provided (e.g., during logout), remove it from localStorage
        localStorage.removeItem("accessToken");
    }
};
// Function to clear the access token from localStorage (used during logout)
export const clearToken = () => {
    // Remove the access token from localStorage
    localStorage.removeItem("accessToken");
};
