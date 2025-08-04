import React from 'react';

type TextBlockProps = {
    title: string;
    bodyText: string | React.ReactNode;
    collapsible?: boolean;
};

const TextBlock: React.FC<TextBlockProps> = ({ title, bodyText, collapsible = false }) => {
    const [isCollapsed, setIsCollapsed] = React.useState(true);
    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    }
    return (
        <div className="text-block">
            <h3 onClick={toggleCollapse}>{title}</h3>
            {collapsible && isCollapsed ? <p>{typeof bodyText == "string" && bodyText.slice(0, 200) + "..."}</p> : <p>{bodyText}</p>} 
        </div>
    )
};

export default TextBlock;