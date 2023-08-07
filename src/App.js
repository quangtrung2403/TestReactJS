import { Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import RenderRouter from "./router";
import { useDispatch } from "react-redux";
import { getInitData } from "./stores/auth";
import PageLoading from "./pages/loading";

export default function App() {
  const dispatch = useDispatch();
  dispatch(getInitData());
  return (
    <div className="App">
      <Suspense fallback={<PageLoading />}>
        <Router>
          <RenderRouter />
        </Router>
      </Suspense>
    </div>
  );
}
