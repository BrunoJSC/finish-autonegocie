import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/auth";
import PublicRoute from "./PublicRoute";
import { Home } from "./pages/Home";
import { Announce } from "./pages/Announce";
import { Contact } from "./pages/Contact";
import { Finance } from "./pages/Finance";
import { Admin } from "./pages/Admin";
import { Cars } from "./pages/Cars";
import { Forms } from "./pages/Forms";
import { Motorbikes } from "./pages/Motorbikes";
import { Dashboard } from "./admin/pages/Dashboard";
import PrivateRoute from "./routes/PrivateRoute";
import { Emails } from "./admin/pages/Emails";
import { CreateCar } from "./admin/pages/CreateCar";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route
          path="/"
          element={
            <PublicRoute>
              <Home />
            </PublicRoute>
          }
        />

        <Route
          path="/anunciar"
          element={
            <PublicRoute>
              <Announce />
            </PublicRoute>
          }
        />

        <Route
          path="/contato"
          element={
            <PublicRoute>
              <Contact />
            </PublicRoute>
          }
        />

        <Route
          path="/financiamento"
          element={
            <PublicRoute>
              <Finance />
            </PublicRoute>
          }
        />

        <Route
          path="/admin"
          element={
            <PublicRoute>
              <Admin />
            </PublicRoute>
          }
        />

        <Route
          path="/carros"
          element={
            <PublicRoute>
              <Cars />
            </PublicRoute>
          }
        />

        <Route
          path="/motos"
          element={
            <PublicRoute>
              <Motorbikes />
            </PublicRoute>
          }
        />

        <Route
          path="/formularios"
          element={
            <PublicRoute>
              <Forms />
            </PublicRoute>
          }
        />

        {/* Admin Routes */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />

        <Route
          path="/dashboard/emails"
          element={
            <PrivateRoute>
              <Emails />
            </PrivateRoute>
          }
        />

        <Route
          path="/dashboard/criar-carro"
          element={
            <PrivateRoute>
              <CreateCar />
            </PrivateRoute>
          }
        />
      </Routes>
    </AuthProvider>
  );
}

export default App;
