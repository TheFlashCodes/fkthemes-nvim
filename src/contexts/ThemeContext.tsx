import { createContext } from 'react';

export const themes = {
  catppuccin: {
    name: "Catppuccin",
    bg: "#1e1e2e",
    fg: "#cdd6f4",
    comment: "#6c7086",
    keyword: "#cba6f7",
    string: "#a6e3a1",
    function: "#89b4fa",
    variable: "#f9e2af",
  },
  tokyonight: {
    name: "Tokyo Night",
    bg: "#1a1b26",
    fg: "#c0caf5",
    comment: "#565f89",
    keyword: "#bb9af7",
    string: "#9ece6a",
    function: "#7aa2f7",
    variable: "#e0af68",
  },
  gruvbox: {
    name: "Gruvbox",
    bg: "#282828",
    fg: "#ebdbb2",
    comment: "#928374",
    keyword: "#fe8019",
    string: "#b8bb26",
    function: "#fabd2f",
    variable: "#83a598",
  },
  "rose-pine": {
    name: "Rose Pine",
    bg: "#191724",
    fg: "#e0def4",
    comment: "#6e6a86",
    keyword: "#c4a7e7",
    string: "#9ccfd8",
    function: "#ebbcba",
    variable: "#f6c177",
  },
  moonlight: {
    name: "Moonlight",
    bg: "#222436",
    fg: "#c8d3f5",
    comment: "#7a88cf",
    keyword: "#ffc777",
    string: "#c3e88d",
    function: "#82aaff",
    variable: "#ff966c",
  },
  material: {
    name: "Material",
    bg: "#263238",
    fg: "#eeffff",
    comment: "#546e7a",
    keyword: "#c792ea",
    string: "#c3e88d",
    function: "#82aaff",
    variable: "#ffcb6b",
  },
  dracula: {
    name: "Dracula",
    bg: "#282a36",
    fg: "#f8f8f2",
    comment: "#6272a4",
    keyword: "#ff79c6",
    string: "#f1fa8c",
    function: "#8be9fd",
    variable: "#ffb86c",
  },
  nord: {
    name: "Nord",
    bg: "#2e3440",
    fg: "#d8dee9",
    comment: "#616e88",
    keyword: "#81a1c1",
    string: "#a3be8c",
    function: "#88c0d0",
    variable: "#ebcb8b",
  },
};


interface ThemeContextType {
  theme: keyof typeof themes;
  setTheme: (theme: keyof typeof themes) => void;
  themes: typeof themes;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: "catppuccin",
  setTheme: () => {},
  themes: themes,
});