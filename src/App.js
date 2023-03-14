import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Characters from './pages/characters/Characters';
import LayoutContainer from "./components/layout-container/LayoutContainer";
import Main from "./pages/main";
import CharacterDetails from "./pages/characters-details/CharacterDetails";
import EpisodeDetails from "./pages/episodes-details/EpisodeDetails";
import Episodes from "./pages/episodes/Episodes";
import Locations from "./pages/location/Location";
import LocationDetails from "./pages/location-details/LocationDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LayoutContainer/>}>
          <Route index element={<Main />} />
          <Route path="Characters" element={<Characters />} />
          <Route path="characters/:id" element={<CharacterDetails />} />
          <Route path="Episodes" element={<Episodes />} />
          <Route path="episodes/:id" element={<EpisodeDetails />} />
          <Route path="Locations" element={<Locations />} />
          <Route path="locations/:id" element={<LocationDetails />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
