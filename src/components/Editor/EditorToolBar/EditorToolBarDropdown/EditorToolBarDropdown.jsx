import "./EditorToolBarDropdown.css";

const EditorToolBarDropdown = (props) => {
    const options = props.options;
    return (
        <select className="editor--dropdown">
            <option value="">Normal</option>
            {options.map(option => (
               <option key={option.label} value={option.style}>{option.label}</option>
            ))}
            {/* <option value="item one">item one</option>
            <option value="item two">item two</option>
            <option value="item three">item three</option>
            <option value="item four">item four</option> */}
        </select>
    );
}

export default EditorToolBarDropdown;