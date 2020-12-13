import React from "react";
import { FirebaseContext } from "../Firebase";


const Test = () => {

    const firebase = React.useContext(FirebaseContext);

    const getNotes = () => {
        const { db } = firebase;
        db.collection("Notes").onSnapshot(querySnapshot => {
            const notes = querySnapshot.docs.map(_doc => {
                const data = _doc.data();
                data.id = _doc.id
                return data
            })
            console.log(notes);
        })
    }

    return (
        <div className="test">
            <button onClick={getNotes}>Click Me 😎</button>
        </div>
    );
};

export default Test;
