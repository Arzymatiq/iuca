import React from "react";
import NavBar from "./components/ui/NavBar";
import MainRouting from "./components/routing/MainRouting";
import Footer from "./components/ui/Footer";

const App = () => {
    return (
        <div>
            <NavBar />
            <MainRouting />
            <Footer />
        </div>
    );
};

export default App;
