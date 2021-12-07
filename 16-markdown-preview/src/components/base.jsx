import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

const Base = () => {
    const [markDown , setMarkDown] = useState("## Mark Down Preview")
    const handleChange = (e) => {
        setMarkDown(e.target.value);
    }
    return <main>
        <section className="markdown">
            <textarea className="input" value={markDown} onChange={(e) => handleChange(e)}></textarea>
            <article className="result">
                <ReactMarkdown>{markDown}</ReactMarkdown>
            </article>
        </section>
    </main>
}
 
export default Base;