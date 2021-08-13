import React from "react";
// Routing
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Components
import Bookshelf from "./components/Bookshelf";
import NotFound from "./components/NotFound";
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