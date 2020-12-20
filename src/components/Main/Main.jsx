import React from "react";
import "./Main.css";
import Navbar from "../Navbar/Navbar";
import NoteEditor from "../Editor/NoteEditor";

const Main = () => {
    return (
        <div className="main--area">
            <Navbar />
            <NoteEditor />
        </div>
    );
};

export default Main;
