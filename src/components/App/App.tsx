import { Suspense } from "react";
import paths from "../../routers/paths/paths";
import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import { LazyHomepage } from "../../pages/LazyPages/LazyPages";

const App = (): React.ReactElement => {
  return (
    <div>
      <main>
        <Routes>
          <Route
            path={paths.homePage}
            element={
              <Suspense>
                <LazyHomepage />
              </Suspense>
            }
          />
          <Route path="/" element={<Navigate to={paths.homePage} />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
