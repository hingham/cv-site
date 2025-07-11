import React from 'react';

type TextBlockProps = {
    title: string;
    bodyText: string;
};

const TextBlock: React.FC<TextBlockProps> = ({ title, bodyText }) => (
    <div className="text-block">
        <h3>{title}</h3>
        <p>{bodyText}</p>
    </div>
);

export default TextBlock;