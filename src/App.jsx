import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router";
import HomeIndex from "./pages/home/HomeIndex";
import ContactIndex from "./pages/contact/ContactIndex";
import ShopIndex from "./pages/shop/ShopIndex";
import RootLayouts from "./components/layouts/RootLayouts";
import CustomError from "./components/common/CustomError";
import LoginIndex from "./pages/login/LoginIndex";


const router = createBrowserRouter(createRoutesFromElements(
  
  <Route element={<RootLayouts/>}>
    <Route index element={<HomeIndex/>} />
    <Route path="/contact" element={<ContactIndex/>} />
    <Route path="/shop" element={<ShopIndex/>} />
    <Route path="/login" element={<LoginIndex/>} />
    <Route path="*" element={<CustomError/>} />
  </Route>
    
))

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
