import React from "react";
// Routing
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Pages
import Bookshelf from "./pages/Bookshelf/Bookshelf";
import Reader from "./pages/Reader";
import NotFound from "./pages/NotFound";
// Styles
import { GlobalStyle } from "./GlobalStyle";

const App = () => (
    <Router>
        <Routes>
            <Route path="/" element={<Bookshelf isEditable />} />
            <Route path="/:bookId" element={<Reader />} />
            <Route path="/*" element={<NotFound />} />
        </Routes>
        <GlobalStyle />
    </Router>
);

export default App;