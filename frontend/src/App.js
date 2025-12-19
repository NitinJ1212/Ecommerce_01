// import React, { Suspense, useState, lazy } from "react";
// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import ProtectedRoute from "./components/ProtectedRoute";
// import Home from "./pages/Home";
// import Users from "./pages/Users";
// import UserDetail from "./pages/UserDetail";
// import DashboardLayout from "./pages/Dashboard/DashboardLayout";
// import DashboardStats from "./pages/Dashboard/DashboardStats";
// import DashboardSettings from "./pages/Dashboard/DashboardSettings";
// import NotFound from "./pages/NotFound";
// import Shoping from "./pages/Shoping";
// import SingleProduct from "./pages/SingleProduct";
// import Login from "./components/Login";
// import CategoryManager from "./pages/category/CategoryManager";

// const About = lazy(() => import("./pages/About"));

// export default function App() {
//   const [isAuth, setIsAuth] = useState(false);

//   return (
//     <BrowserRouter>
//       <div className="min-h-screen bg-gray-50 text-gray-800">
//         <Navbar isAuth={isAuth} setIsAuth={setIsAuth} />

//         <main className="container mx-auto px-4 py-8">
//           <div className="bg-white rounded shadow-sm overflow-hidden">
//             <Suspense fallback={<div className="p-6">Loading...</div>}>
//               <Routes>
//                 <Route path="/" element={<Home />} />
//                 <Route path="/shop" element={<Shoping />} />
//                 <Route path="/single" element={<SingleProduct />} />
//                 <Route path="/category" element={<CategoryManager />} />
//                 <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
//                 <Route path="/users/:id" element={<UserDetail />} />

//                 <Route
//                   path="/dashboard"
//                   element={
//                     <ProtectedRoute isAuth={isAuth}>
//                       <DashboardLayout />
//                     </ProtectedRoute>
//                   }
//                 >
//                   <Route index element={<Navigate to="stats" replace />} />
//                   <Route path="stats" element={<DashboardStats />} />
//                   <Route path="settings" element={<DashboardSettings />} />
//                 </Route>

//                 <Route path="*" element={<NotFound />} />
//               </Routes>
//             </Suspense>
//           </div>
//         </main>

//         <footer className="text-center py-6 text-sm text-gray-500">
//           Built with react-router-dom v6 — demo app
//         </footer>
//       </div>
//     </BrowserRouter>
//   );
// }


import React, { Suspense, useState, lazy } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./routes/PublicRoutes";
import PublicRoute from "./routes/PublicRoutes";

import Home from "./pages/Home";
import Users from "./pages/Users";
import UserDetail from "./pages/UserDetail";
import DashboardLayout from "./pages/Dashboard/DashboardLayout";
import DashboardStats from "./pages/Dashboard/DashboardStats";
import DashboardSettings from "./pages/Dashboard/DashboardSettings";
import NotFound from "./pages/NotFound";
import Shoping from "./pages/Shoping";
import SingleProduct from "./pages/SingleProduct";
import Login from "./components/Login";
import CategoryManager from "./pages/category/CategoryManager";
import Cart from "./pages/cart/Cart";

const About = lazy(() => import("./pages/About"));

export default function App() {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <BrowserRouter>
      <Navbar isAuth={isAuth} setIsAuth={setIsAuth} />

      {/* <main className="container mx-auto px-4 py-8"> */}
      <div className="bg-white rounded shadow-sm overflow-hidden">
        <Suspense fallback={<div className="p-6">Loading...</div>}>
          <Routes>

            {/* 🔓 Public routes */}
            <Route element={<PublicRoute isAuth={isAuth} />}>
              <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
            </Route>

            {/* 🔒 Protected routes */}
            <Route element={<ProtectedRoute isAuth={isAuth} />}>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shoping />} />
              <Route path="/single" element={<SingleProduct />} />
              <Route path="/category" element={<CategoryManager />} />
              <Route path="/users/:id" element={<UserDetail />} />
              <Route path="/about" element={<About />} />
              <Route path="/cart" element={<Cart />} />

              {/* Dashboard nested routes */}
              <Route path="/dashboard" element={<DashboardLayout />}>
                <Route index element={<Navigate to="stats" replace />} />
                <Route path="stats" element={<DashboardStats />} />
                <Route path="settings" element={<DashboardSettings />} />
              </Route>
            </Route>

            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </div>
      {/* </main> */}

      <footer className="text-center py-6 text-sm text-gray-500">
        Built with react-router-dom v6 — demo app
      </footer>
    </BrowserRouter>
  );
}

