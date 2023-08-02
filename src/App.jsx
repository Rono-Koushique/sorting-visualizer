import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SortingVisualizer from "./pages/SortingVisualizer";
import NotFound from "./pages/NotFound";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<SortingVisualizer />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}

export default App;
