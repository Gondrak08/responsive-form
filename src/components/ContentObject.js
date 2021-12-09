import React, {useState, useContext, useEffect} from 'react'
import './../styles/ContentObject.scss'
import FormContext from '../context/FormContext';

import PlainText from './values/PlainText';
import Checkbox from './values/CheckBox';
import OptionsBox from './values/OptionsBox';
import ArrayContainer from './values/ArrayContainer';
import IntergerContainer from './values/IntergerContainer';

function ContentObject({ properties, property, content, setContent, schema, valueType, }){

    const context = useContext(FormContext)
    
    function handleChange(event, propert, k) {
        var a = context.content[propert];
        // a[property] =  event.target.value ;
        //     a = event.target.value ;
        // context.setContent({ ...context.content, [property]: a })
        console.log(a[k], propert)
    };


    function addField(cont, prop, maxItems) {
        const newField = cont
        let obj = { ...context.content };
        newField.push(null);

        if (obj[property]) {
            obj[property][prop] = newField;
            context.setContent(obj);
        } else {
            obj[prop] = newField;
            context.setContent(obj);
        }
        // if (typeof newField[0] === 'string') {
        //     obj[prop] = newField;
        //     if (newField.length < maxItems) {
        //         newField.push(null);
        //         context.setContent( obj );
        //     }
        // }
        // if (typeof newField[0] === 'object') {
        //     obj[property][prop] = newField;
        //     newField.push({ status: false, label: 'nada' });
        //     context.setContent(obj);
        //     // console.log(typeof newField[0]);
        // }
        
        // console.log(context.content)
        // console.log({
        //     content: property[prop],
        //     cont: cont,
        //     property: property,
        //     prop:prop,
        // })
    }

    function removeField(cont, prop, k) {
        const field = cont;
        let obj = { ...context.content };
        field.splice(k, 1);
        if (obj[property]) {
            obj[property][prop] = field;
            context.setContent(obj)
        } else {
            obj[prop] = field;
            context.setContent(obj)
        }
    }


    return (
        <div className="object-container"  >
            <div className="container">
            {
                    properties ? Object.keys(properties).map((value, key) => {
                        // console.log({
                        //     content: content,
                        //     value: value,
                        //     item:content[value]
                        // })

                        switch (properties[value].type) {
                            
                            case 'string':
                            // console.log(content ? content[value] : null)
                    
                            return properties[value].enum ?
                                <OptionsBox
                                    key={key}
                                    k={key}
                                    schema={properties[value]}
                                    valueType={properties[value].type}
                                    content={content ? content[value] : null}
                                    property={value}
                                    handleChange={handleChange}

                                />
                                :
                                    <PlainText
                                        key={key}
                                        k={key}
                                        schema={properties[value]}
                                        valueType={properties[value].type}
                                        content={content ? content[value] : null}
                                        property={value}
                                        handleChange={handleChange}
                                    />

                        case 'boolean':
                            return <Checkbox
                                    key={key}
                                    k={key}
                                    schema={properties[value]}
                                    valueType={properties[value].type}
                                    content={content ? content[value] : null}
                                    property={value}
                                    handleChange={handleChange}
                                />

                        case 'array':
                        // console.log(content ? content[value] : null, value)
                        return <ArrayContainer
                            key={key}
                            k={key}
                            schema={properties[value]}
                            valueType={properties[value].type}
                            content={content ? content[value] : null}
                            setContent={setContent}
                            property={value}
                            type={valueType}
                            handleChange={handleChange}
                            addField={addField}
                            removeField={removeField}
                        />
                        
                        case 'integer':
                            return <IntergerContainer
                                key={key}
                                k={key}
                                schema={properties[value]}
                                valueType={properties[value].type}
                                content={content ? content[value] : null}
                                property={value}
                                handleChange={handleChange}
                            />
                            case 'object':
                               return <ContentObject
                                key={key}
                                k={key}
                                schema={properties[value]}
                                properties={properties[value].properties}
                                valueType={properties[value].type}
                                content={content[value]}
                                property={value}
                                handleChange={handleChange}
                                />

                        default:
                            return null;
                            // typeof properties[value] == 'string' ?
                            //     <PlainText
                            //         key={key}
                            //         value={properties[value]}
                            //         valueType={properties[value].type}
                            //         content={properties[value]}
                            //         property={value}
                            //     />
                            //     : <Checkbox
                            //         key={key}
                            //         value={properties[value]}
                            //         valueType={properties[value].type}
                            //         content={properties[value]}
                            //         property={value}
                            //     />
                                
                    }
                       
                }) : null
                }
                
            </div>
    
          
        </div>
    )
}

export default ContentObject
