import React from 'react';
import './TextContent.scss';

const TextContent = React.memo((props) => {

    if (props.json_data.value) {
        return (
            <div
                className="text-content default"
                dangerouslySetInnerHTML={{ __html: props.json_data.value }}
            ></div>
        );
    }

    return (
        <div></div>
    );
});

export default TextContent;
