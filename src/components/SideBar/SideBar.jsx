import React from "react";
import "./SideBar.css";

import { FirebaseContext } from "../../Firebase";

const SideBar = () => {
    const firebase = React.useContext(FirebaseContext);
    const { db } = firebase;
    const [notes, setNotes] = React.useState([]);

    const handleFetchNotes = React.useCallback(() => {
        db.collection("Notes").onSnapshot((querySnapshot) => {
            const notes = querySnapshot.docs.map((_doc) => {
                const data = _doc.data();
                data.id = _doc.id;
                return data;
            });
            setNotes(notes);
        });
    }, [db]);

    React.useEffect(() => {
        handleFetchNotes();
    }, [handleFetchNotes]);

    return (
        <div className="sidebar">
            <div className="search--box">
                <input
                    type="text"
                    className="search--input"
                    placeholder="Search Note...."
                />
            </div>
            <div className="notes--container">
                {notes ? (
                    notes.map((note) => (
                        <div key={note.id} className="note">
                            <h4 className="note--title">{note.title}</h4>
                            <p className="note--description">{note.body}</p>
                        </div>
                    ))
                ) : (
                    <h1>Loading..... 😎</h1>
                )}
            </div>
        </div>
    );
};

export default SideBar;
