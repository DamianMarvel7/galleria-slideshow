import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Gallery from "./page/Gallery";
import Layout from "./component/Layout";
import PaintingDetail from "./component/PaintingDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Gallery />,
      },
      {
        path: ":id",
        element: <PaintingDetail />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
