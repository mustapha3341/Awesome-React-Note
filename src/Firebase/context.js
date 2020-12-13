import React from "react";
import Firebase from "./firebase";

export const FirebaseContext = React.createContext();

const FirebaseProvider = (props) => {
    return (
        <FirebaseContext.Provider value={new Firebase()}>
            {props.children}
        </FirebaseContext.Provider>
    )
}

export default FirebaseProvider;