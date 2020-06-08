import React from 'react';
import './TextContent.scss';

const TextContent = React.memo((props) => {
    return (
        <div
            className="text-content default"
            dangerouslySetInnerHTML={{ __html: props.value }}
        ></div>
    );
});

export default TextContent;
