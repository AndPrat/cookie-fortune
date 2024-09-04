import HomePage from "../../pages/Homepage/Homepage";
import paths from "../../routers/paths/paths";
import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";

const App = (): React.ReactElement => {
  return (
    <div>
      <main>
        <Routes>
          <Route path={paths.homePage} element={<HomePage />} />
          <Route path="/" element={<Navigate to={paths.homePage} />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
