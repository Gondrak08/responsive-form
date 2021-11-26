import React, {useState, useContext, useEffect} from 'react'
import './../styles/ContentObject.scss'
import FormContext from '../context/FormContext';

import PlainText from './values/PlainText';
import Checkbox from './values/CheckBox';
import OptionsBox from './values/OptionsBox';
import ListContainer from './values/ListContainer';
import IntergerContainer from './values/IntergerContainer';

function ContentObject({ properties, property, content,  value, valueType }) {
    const context = useContext(FormContext)
      
    function handleChange(event, property, k) {
        var a = context.content[property];
        
        // a[property] =  event.target.value ;
    
        //     a = event.target.value ;
      

        // context.setContent({ ...context.content, [property]: a })
        console.log(event.target.name)
    };

    console.log(content)

    return (
        <div className="object-container"  >
            <div className="container">
            {
                   properties ? Object.keys(properties).map((value, key) => {
                        console.log(content ? content[value]:null)
                        switch (properties[value].type) {
                            
                            case 'string':
                                
                            // console.log(context.content)
                            // console.log(value, context.content[value])
                                // console.log(value, context.content[value])
                                // console.log(value, properties[value], context.content[property])
                            return properties[value].enum ?
                                <OptionsBox
                                    key={key}
                                    k={key}
                                    value={properties[value]}
                                    valueType={properties[value].type}
                                    content={content ? content[value] : null}
                                    property={value}
                                    handleChange={handleChange}

                                />
                                :
                                    <PlainText
                                        key={key}
                                        k={key}
                                        value={properties[value]}
                                        valueType={properties[value].type}
                                        content={content ? content[value] : null}
                                        property={value}
                                        handleChange={handleChange}
                                    />

                        case 'boolean':
                            return <Checkbox
                                    key={key}
                                    k={key}
                                    value={properties[value]}
                                    valueType={properties[value].type}
                                    content={context.content[value] ?? null}
                                    property={value}
                                    handleChange={handleChange}
                                />

                            case 'array':
                                
                            return <ListContainer
                                key={key}
                                k={key}
                                value={properties[value]}
                                valueType={properties[value].type}
                                content={null}
                                property={value}
                                type={valueType}
                                handleChange={handleChange}
                            />
                        case 'integer':
                            return <IntergerContainer
                                key={key}
                                k={key}
                                value={properties[value]}
                                valueType={properties[value].type}
                                content={context.content[value] ? context.content[value] : null}
                                property={value}
                                handleChange={handleChange}
                            />
                        case 'object':
                               return <ContentObject
                                key={key}
                                k={key}
                                properties={properties[value].properties}
                                valueType={properties[value].type}
                                content={context.content[value] ? context.content[value] : null}
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
