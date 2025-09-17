import { Outlet } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import "./index.css";

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <Outlet />
    </ThemeProvider>
  );
}

export default App;
