import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Apropos from "./pages/Apropos";
import Fichelogement from "./pages/Fichelogement";

// Components
import Layout from "./components/Layout";
import Error from "./components/Error/index.jsx";

const App = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/apropos" element={<Apropos />} />
                    <Route
                        path="/fichelogement/:id"
                        element={<Fichelogement />}
                    />
                    <Route path="*" element={<Error />} />
                </Route>
            </Routes>
        </HashRouter>
    );
};

export default App;