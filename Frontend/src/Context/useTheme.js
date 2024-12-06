import { create } from "zustand";

const useTheme = ({ set }) => ({
  theme: localStorage.getItem("theme") || "light",
  toggleTheme: () =>
    set((state) => ({ theme: state.theme === "light" ? "dark" : "light" })),
});

export default useTheme