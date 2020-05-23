import React, { useState, useRef, useEffect } from 'react';
import './BlogEditor.scss';
import JoditEditor from 'jodit-react';

const BlogEditor = (props) => {
    const editor = useRef(null);
    const [content, setContent] = useState('');

    const config = {
        readonly: false, // all options from https://xdsoft.net/jodit/doc/
        minHeight: 400,
    };

    useEffect(() => {
        //get data for existed content

        return () => {};
    }, []);

    const saveContents = (newContent) => {
        setContent(newContent);

        console.log(newContent);
        //to do: save content to database
    };

    return (
        <div className="editor-container">
            <JoditEditor
                ref={editor}
                value={content}
                config={config}
                tabIndex={1} // tabIndex of textarea
                onBlur={(newContent) => {
                    saveContents(newContent);
                }} // preferred to use only this option to update the content for performance reasons
                onChange={(newContent) => {}}
            />
        </div>
    );
};

export default BlogEditor;
