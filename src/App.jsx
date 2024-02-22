import NavBar from './layout/nav_bar/nav_bar'
import HomePage from './pages/home_page';
import { Route,RouterProvider,createBrowserRouter,createRoutesFromElements } from 'react-router-dom';
import "./global.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import  RootLayout from 'src/layout/root_layout'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route path="home" element={<HomePage />} />
        <Route path="about" element={<h1>About page</h1>} />
        <Route path="contact" element={<h1>contact page</h1>} />
        <Route path="" element={<h1>Opps page not found</h1>} />
      </Route>
    )
  );
   return <RouterProvider router={router}/>
}

export default App