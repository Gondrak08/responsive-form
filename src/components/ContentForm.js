import React,{useState, useEffect, useContext} from 'react'
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

    const [content, setContent] = useState({
        "name": "João Marciano Neto",
        "address": 'Rua Fernando Neto',
        "active": true,
        "list": ['Livros', 'Bolos'],
        "someOption": "B",
        "identifier": 32,
        "objectList": [
            {
                "status": false,
                "label": 'casa verde',
            },
             {
                "status": false,
                "label": 'casa vermelho',
            }
        ]





    })

    return (
        <section className="content-display" >
            {type === 'object' ? (<div className="form" >
                <ObjectContainer
                    content={context.content}
                    setContent={context.setContent}
                    properties={properties}
                    schema={schema}
                />
            </div>) : 'não é objeto'}           
        </section>
    )
}

export default ContentItem
