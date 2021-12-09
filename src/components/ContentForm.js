import React,{useState, useEffect, useContext} from 'react'
import '../styles/ContentItem.scss'

import SchemaJson from '../context/Schema.json'
import ContentObject from './ContentObject';
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

    // if (properties) {
        
    //     Object.keys(properties).map(value=>{console.log(content[value])})
    // }
    return (
        <section className="content-display" >
            {/* {
               properties ? Object.keys(properties).map((key) => (
                   properties[key].type === 'object' ? <ContentObject properties={properties} property={key} key={key} /> : null
                    )) : null

            } */}

            {type === 'object' ? (<div className="form" > <ContentObject content={context.content} setContent={context.setContent} properties={properties}  /> </div>) : 'não é objeto'}
           
        </section>
    )
}

export default ContentItem
