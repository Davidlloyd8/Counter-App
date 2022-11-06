import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import ErrorBoundaries from "./pages/ErrorBoundaryPage"
import ErrorPage from "./pages/ErrorPage"

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/errorBoundary" element={<ErrorBoundaries />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
    </>
  );
}

export default App;
