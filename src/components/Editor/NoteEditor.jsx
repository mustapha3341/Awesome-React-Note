import React from "react";
import { EditorState, Editor, RichUtils } from "draft-js";
import "./NoteEditor.css";
import "draft-js/dist/Draft.css";

import EditorToolBar from "../Editor/EditorToolBar/EditorToolBar";

const NoteEditor = (props) => {
    const [editorState, setEditorState] = React.useState(() =>
        EditorState.createEmpty()
    );

    const handleKeyCommand = (command) => {
        const newState = RichUtils.handleKeyCommand(editorState, command);
        if(newState) {
            setEditorState(newState);
            return "handled";
        }
        return "not-handled";
    }

    return (
        <div className="editor--container">
            <EditorToolBar />
            <Editor
                editorState={editorState}
                onChange={setEditorState}
                handleKeyCommand={handleKeyCommand}
            />
        </div>
    );
};

export default NoteEditor;
