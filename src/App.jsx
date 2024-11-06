import "./App.css";
import Dashboard from "./components/pageComponents/Dashboard";
import { DataProvider } from "./context/DataContext";
import ProfileCard from './components/layerComponents/ProfileCard';
import NewForm from "./components/layerComponents/NewForm";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <DataProvider>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/user/:id" element={<ProfileCard />} />{" "}
          <Route path="/form/:id" element={<NewForm />} />{" "}
        </Routes>
      </DataProvider>
    </Router>
  );
}

export default App;
