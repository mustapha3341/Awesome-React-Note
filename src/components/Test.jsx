import React from "react";
import { FirebaseContext } from "../Firebase";


const Test = () => {

    const firebase = React.useContext(FirebaseContext);

    const getNotes = () => {
        const { db } = firebase;
        db.collection("Notes").get().then(querySnapshot => {
            querySnapshot.forEach(doc => {
                console.log(doc.data());
            })
        })
    }

    return (
        <div className="test">
            <button onClick={getNotes}>Click Me 😎</button>
        </div>
    );
};

export default Test;
