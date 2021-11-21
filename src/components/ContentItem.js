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

    // Object.keys(properties).map(key => {
    //     console.log(properties[key])
    // })
    // console.log(context.content[properties])

    return (
        <section>
            {
               properties ? Object.keys(properties).map((key) => (
                   properties[key].type === 'object' ? <ContentObject properties={properties} property={key} key={key} />      :null
                    
                    )) : null

            }


            {/* {type === 'object' ? <ContentObject properties={properties} /> : 'não é objeto'} */}
        </section>
    )
}

export default ContentItem
