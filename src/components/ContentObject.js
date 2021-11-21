import React, {useState, useContext, useEffect} from 'react'
import './../styles/ContentObject.scss'
import FormContext from '../context/FormContext';
// import ContainerObject from './ContainerObject'
import PlainText from './values/PlainText';
import Checkbox from './values/CheckBox';
import OptionsBox from './values/OptionsBox';
import ListContainer from './values/ListContainer';
import IntergerContainer from './values/IntergerContainer';

function ContentObject({ properties, property, content, value }) {
    const context = useContext(FormContext);
    // let data =[];
    // for (const property in properties) {
    //     if (Object.hasOwnProperty.call(properties, property)) {
    //         const propertyData = properties[property];
    //         data.push(propertyData);
    //     }
    // }

    // console.log(properties)


    // console.log(value.properties)
    // if (context.content[property]) Object.values(context.content[property]).map(key => console.log(key))

    // console.log(context.content[property])


    function addField(key) {
        const newField = context.content[property];
        newField.push('');
        context.setContent({ ...context.content, [property]: newField });
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
                                    content={context.content[value]}
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
                            return <Checkbox
                                    key={key} 
                                    value={properties[value]}
                                    valueType={properties[value].type}
                                    content={context.content[value]}
                                    property={value}
                                    />
                        case 'array':
                                return <ListContainer
                                    key={key}
                                    value={properties[value]}
                                    valueType={properties[value].type}
                                    content={context.content[value]}
                                    property={value}
                                    addField={addField}
                                />
                        case 'integer':
                                return <IntergerContainer
                                    key={key}
                                    value={properties[value]}
                                    valueType={properties[value].type}
                                    content={context.content[value]}
                                    property={value}
                                />
                        case 'object':
                                return <ContentObject
                                    properties={properties[value].properties}
                                    key={key}
                                    valueType={properties[value].type}
                                    content={context.content[value]}
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
