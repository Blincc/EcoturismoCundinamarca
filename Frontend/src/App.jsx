import "./App.css";
import Inicio from "./pages/Inicio/Inicio";
import Lugares from "./pages/Lugares/Lugares";
import NavBar from "./components/NavBar";
import ReservaViaje from "./pages/Reserva/Reserva";
import EquipoTrabajo from "./pages/Equipo/Equipo";
import Encabezado from "./components/Header";
import Footer from "./components/Footer";
import VerReservacion from "./pages/VerReservaciones/VerRes";


import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Encabezado />
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Inicio />
          </Route>
          <Route path="/Lugares">
            <Lugares />
          </Route>
          <Route path="/Reserva-Viaje">
            <ReservaViaje />
          </Route>
          <Route path="/VerReservacion">
            <VerReservacion />
          </Route>
          <Route path="/Equipo-trabajo">
            <EquipoTrabajo />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
