import api from "../Api";

const authApi = {
  login: (formData) => api.post("/api/auth/login", formData),
  signup: (formData) => api.post("/api/auth/signup", formData),
};

export default authApi;
