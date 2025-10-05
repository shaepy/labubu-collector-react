import Index from "./components/Index/Index";
import ItemPage from "./components/ItemPage/ItemPage";
import NavBar from "./components/NavBar/NavBar"
import Series from "./components/Series/Series"
import SeriesPage from "./components/SeriesPage/SeriesPage"
import Franchise from "./components/Franchises/Franchises";
import FranchisePage from "./components/FranchisePage/FranchisePage"
import { Routes, Route } from "react-router";

const App = () => {
  return (
    <>
    <NavBar />
    <Routes>
      <Route path="/" element={<h1>LabubuPedia</h1>}></Route>
      <Route path="/index" element={<Index />}></Route>
      <Route path="/index/:itemId" element={<ItemPage />}></Route>
      <Route path="/series" element={<Series />}></Route>
      <Route path="/series/:seriesId" element={<SeriesPage />}></Route>
      <Route path="/franchises" element={<Franchise />}></Route>
      <Route path="/franchises/:franchiseId" element={<FranchisePage />}></Route>
    </Routes>
    </>
  )
};

export default App;
