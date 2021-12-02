import React, {useState, useContext, useEffect} from 'react'
import './../styles/ContentObject.scss'
import FormContext from '../context/FormContext';

import PlainText from './values/PlainText';
import Checkbox from './values/CheckBox';
import OptionsBox from './values/OptionsBox';
import ListContainer from './values/ListContainer';
import IntergerContainer from './values/IntergerContainer';

function ContentObject({ properties, property, content, setContent, schema, valueType }) {
    const context = useContext(FormContext)
      
    function handleChange(event, property, k) {
        var a = content[property];
        // a[property] =  event.target.value ;
        //     a = event.target.value ;
        // context.setContent({ ...context.content, [property]: a })
        console.log(event.target.name)
    };



    function addField(cont) {
        if (content) {
            Object.entries(content).map((value, index) => {
                console.log(value)
            })
        }
        
        
        // const newField = [...content]
        // console.log(property)
        // newField.push(schema)
        // newField.push('');
        // context.setContent({ ...context.content, [property]: newField });
        // console.log(newField)
    }

    if (content) {
        Object.entries(content).map((value, index) => {
            console.log(value)
        })
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
                        return <ListContainer
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
                                // console.log(content ? content[value] : null)

                               return <ContentObject
                                key={key}
                                k={key}
                                properties={properties[value].properties}
                                valueType={properties[value].type}
                                content={content}
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
