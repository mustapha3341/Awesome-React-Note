import "./EditorToolBarButton.css";

const EditorToolBarButton = (props) => {
    return (
        <>
            {props.blockStyles.map((block) => (
                <button key={block.style} className="editor--toolbar-btn">
                    <span className="material-icons icons">{block.label}</span>
                </button>
            ))}
        </>
    );
};

export default EditorToolBarButton;
