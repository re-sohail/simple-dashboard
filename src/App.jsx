import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./pages/home/home-page";
import Layout from "./layout/layout";
import DashboardPage from "./pages/dashboard/dashboard-page";
import SettingsPage from "./pages/settings/settings-page";
import UserPage from "./pages/user/user-page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />

        {/* Dashboard Layout */}
        <Route path="/dashboard" element={<Layout />}>
          {/* Child Routes */}
          <Route index element={<DashboardPage />} />
          <Route path="users" element={<UserPage />} />
          <Route path="settings" element={<SettingsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// // Data Modal
// let routes = createBrowserRouter([
//   {
//     path: "/",
//     element: <HomePage />,
//   },
//   {
//     path: "/dashboard",
//     element: <DashboardPage />,
//     children: [
//       {
//         path: "settings",
//         element: <DashboardSettingsPage />,
//       },
//     ],
//   },
// ]);
