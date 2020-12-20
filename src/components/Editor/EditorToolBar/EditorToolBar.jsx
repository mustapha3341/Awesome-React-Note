import "./EditorToolBar.css";
import EditorToolBarButton from "./EditorToolBarButton/EditorToolBarButton";
import EditorToolBarDropdown from "./EditorToolBarDropdown/EditorToolBarDropdown";

import { BLOCK_TYPE_HEADINGS, BLOCK_TYPES } from "../blockStyles";

const EditorToolBar = (props) => {
    return (
        <div className="editor--toolbar">
            <EditorToolBarDropdown options={BLOCK_TYPE_HEADINGS} />
            <EditorToolBarButton blockStyles={BLOCK_TYPES} />
        </div>
    );
}

export default EditorToolBar;