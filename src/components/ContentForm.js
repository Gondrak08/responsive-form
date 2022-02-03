import React,{useState, useEffect, useRef, useContext} from 'react'
import '../styles/ContentItem.scss'

import SchemaJson from '../context/Schema.json'
import ObjectContainer from './values/ObjectContainer';
import FormContext from '../context/FormContext';


function ContentItem() {
    const [schema, setSechema] = useState(null);
    const context = useContext(FormContext);
    useEffect(() => {
        setSechema(SchemaJson)
    }, [])
    // console.log(schema);
    const { type, properties } = schema ?? {};


    function handleSubmit(e) {
        alert(JSON.stringify(context.content, undefined, 12))
        e.preventDefault();
    }

    return (
        <section className="content-display" >
            {type === 'object' ? (
                <form className="form" onSubmit={(e) => handleSubmit(e)} >
                    <ObjectContainer
                        content={context.content}
                        setContent={context.setContent}
                        properties={properties}
                        schema={schema}
                    />
                    <button type="submit"  className="btn-submit"  >
                    Submit content
                    </button>
            </form>) : 'não é objeto'}
            
        </section>
    )
}

export default ContentItem
