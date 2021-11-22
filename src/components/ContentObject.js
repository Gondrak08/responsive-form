import React, {useState, useContext, useEffect} from 'react'
import './../styles/ContentObject.scss'
import FormContext from '../context/FormContext';

import PlainText from './values/PlainText';
import Checkbox from './values/CheckBox';
import OptionsBox from './values/OptionsBox';
import ListContainer from './values/ListContainer';
import IntergerContainer from './values/IntergerContainer';

function ContentObject({ properties, property, content, value, valueType }) {
    const context = useContext(FormContext);
       
    if (content instanceof Array) {
        content.map(i=> console.log(i))
    }
    


    return (
        <div className="object-container"  >
            <div className="container">
            {
                    Object.keys(properties).map((value, key) => {        
                        
                        switch (properties[value].type) {
                        case 'string':
                            return properties[value].enum ?
                                <OptionsBox
                                    key={key}
                                    value={properties[value]}
                                    valueType={properties[value].type}
                                    content={context.content[value] ? context.content[value] : null}
                                    property={value}
                                />
                                :
                                 context.content[value] instanceof Array ?
                                    Object.values(context.content[value]).map(content => (
                                        <PlainText
                                            key={key}
                                            value={properties[value]}
                                            valueType={properties[value].type}
                                            content={content}
                                            property={value}
                                        />
                                    )) :
                                <PlainText
                                    key={key}
                                    value={properties[value]}
                                    valueType={properties[value].type}
                                    content={context.content[value]}
                                    property={value}
                                />
                        case 'boolean':
                                return context.content[value] instanceof Array ?
                                    Object.values(context.content[value]).map(content => (    
                                        <Checkbox
                                            key={key}
                                            value={properties[value]}
                                            valueType={properties[value].type}
                                            content={content}
                                            property={value}
                                        />
                                    ))
                                    :
                                    <Checkbox
                                        key={key} 
                                        value={properties[value]}
                                        valueType={properties[value].type}
                                        content={context.content[value] ? context.content[value] : null}
                                        property={value}
                                    />
                                                                
                        case 'array':
                                return <ListContainer
                                    key={key}
                                    value={properties[value]}
                                    valueType={properties[value].type}
                                    content={context.content[value] ? context.content[value] : null}
                                    property={value}
                                    type={valueType}
                                />
                        case 'integer':
                                return <IntergerContainer
                                    key={key}
                                    value={properties[value]}
                                    valueType={properties[value].type}
                                    content={context.content[value] ? context.content[value] : null}
                                    property={value}
                                />
                        case 'object':
                                return <ContentObject
                                    properties={properties[value].properties}
                                    key={key}
                                    valueType={properties[value].type}
                                    content={context.content[value] ? context.content[value] : null}
                                    property={value}
                                
                                />
                        default:
                            return null
                    }
                })
            }
            </div>
          
        </div>
    )
}

export default ContentObject
