import { create } from "zustand";

const useProfile = create((set) => ({
  user: null,
  login(token) {
    localStorage.setItem("token_user", token);
    set({ user: token });
  },
  logout() {
    localStorage.removeItem("token_user");
    set({ user: null });
  },
}));

export default useProfile;
