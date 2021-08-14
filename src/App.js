import React from "react";
// Routing
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Components
import Bookshelf from "./pages/Bookshelf";
import NotFound from "./pages/NotFound";
// Styles
import { GlobalStyle } from "./GlobalStyle";

const App = () => (
    <Router>
        <Routes>
            <Route path="/" element={<Bookshelf />} />
            <Route path="/*" element={<NotFound />} />
        </Routes>
        <GlobalStyle />
    </Router>
);

export default App;