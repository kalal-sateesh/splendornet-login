import "./App.css";
import AppHeader from "./components/AppHeader/AppHeader";
import AuthProvider from "./contexts/AuthContext";
import PageRoutes from "./routes/PageRoutes";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <AppHeader />
        <main>
          <PageRoutes />
        </main>
      </AuthProvider>
    </div>
  );
}

export default App;
