import { Outlet } from "react-router-dom";
import { memo } from "react";
import { useLogRender } from "../hook/useLogRender";
import Header from "./Header";
import { AppProvider } from "../Context/AppContext";

const DefaultLayout = () => {
  useLogRender("Layout-DefaultLayout");
  return (
    <AppProvider>
      <div className="app-header">
        <Header />
      </div>
      <div className="app-content position-relative">
        <Outlet />
      </div>
    </AppProvider>
  );
};

export default memo(DefaultLayout);
