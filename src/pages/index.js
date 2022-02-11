import React, {useState} from 'react';
import Form from '../components/Form'
import SchemaCreator from '../components/SchemaCreator';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import '../styles/Home.scss'

function Home() {
    const [jsonData, setJsonData] = useState(null);
    const EmptyJson = () => {
        const exemple = `
        {
            "type": "object",
            "properties": {
                "first_name": {
                    "type": "string",
                    "title": "Nome"
                },
                "last_name": {
                    "type": "string",
                    "title": "Sobrenome"
                },
                "birthday": {
                    "type": "string",
                    "format": "date",
                    "title": "Data de nascimento"
                },
                "address": {
                    "type": "object",
                    "properties": {
                        "street_address": {
                            "type": "string",
                            "title": "Rua"
                        },
                        "address_number": {
                            "type": "string",
                            "title": "CEP"
                        },
                        "city": {
                            "type": "string",
                            "title": "Cidade"
                        },
                        "state": {
                            "type": "string",
                            "title": "UF"
                        },
                        "country": {
                            "type": "string",
                            "title": "País"
                        }
                    }
                }
            }
        }
        `
        return (
            <div className="empty-json" >
                <span className="title" >What is <strong> JSON Schema? </strong> </span>
                <p>
                    If you’ve ever used XML Schema, RelaxNG or ASN.1 you probably already know what a schema is.
                    <br />
                    <br />
                    JSON Schema is a powerful tool for validating the structure of a JSON data.
                    The schema follows a JSON structure, and with these data types, all kinds of structured data can be represented. 
                    <br />
                    <br />
                    like the exemple bellow:
                </p>
                <ReactMarkdown className="r-markdown" children={exemple} />
                <p>
                    This JSON SChema validator do what the name already say's. The app takes the Schema that you write in the textarea and authomaticly generates a form for you. 
                </p>
                <p>
                    You can learn more about JSON Schema and it power at the <a href="https://json-schema.org/understanding-json-schema/" target="_blank" rel="noreferrer" >link.</a>
                    <br />
                    and you can use this opensource library acessing the git <a href="https://github.com/Gondrak08/JSONSchema-validator" target="_blank" rel="noreferrer">repository</a>
                </p>
                
            </div>
            )
    }
    return (
        <section id="home">
            <div className="container-home">
                <h1 className="title">JSON SCHEMA VALIDATOR</h1>
                <div className="content">
                    <div className="j-creator">
                        <SchemaCreator
                            data={jsonData}
                            setData={setJsonData}
                        />
                    </div>
                    <div className="f-display">
                        {
                            jsonData ?
                            (
                            <Form
                                schema={jsonData}
                            />
                            )
                            :
                        <EmptyJson/>
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home;
