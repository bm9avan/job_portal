import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NavBar from "./UI/NavBar";
import Jobs from "./pages/Jobs";
import AddJob from "./pages/AddJob";
import Home from "./pages/Home";
import Apply from "./pages/Apply";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <NavBar />,
      children: [
        { index: true, element: <Home /> },
        { path: "/apply", element: <Apply /> },
        { path: "/jobs", element: <Jobs /> },
        { path: "/add", element: <AddJob /> },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
