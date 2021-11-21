import React from 'react'
import PlainText from './values/PlainText';
import Checkbox from './values/CheckBox';
import Select from './values/Select';
import OptionsBox from './values/OptionsBox';
import SwitchContainer from './values/SwitchContainer';
import ListContainer from './values/ListContainer';

function ContainerObject({value}) {
    let values = value.properties;
    return (
        <>
            {
                Object.keys(values).map((val, k) => {
                    // console.log(values[val])
                    switch (values[val].type) {
                        case 'string':
                            return values[val].enum ? <OptionsBox value={values[val]} key={k} /> : <PlainText value={values[val]} key={k} />
                        case 'integer':
                            return <SwitchContainer value={values[val]} key={k} />
                        case 'array':
                            return <ListContainer value={values[val]} key={k} />
                        case 'boolean':
                            return <Checkbox value={values[val]} key={k} />
                        default:
                            return null
                    }
                })
            }
        </>
    )
}

export default ContainerObject
