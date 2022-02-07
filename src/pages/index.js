import React, {useState} from 'react';
import Form from '../components/FormContainer'
import SchemaCreator from '../context/SchemaCreator';
import '../styles/Home.scss'

function Home() {
    const [jsonData, setJsonData] = useState(null);
    const EmptyJson = () => {
        return (
            <div>
                <h3>please insert the schema in the text field at the side</h3>
            </div>
            )
    }
    return (
        <section id="home">
            <div className="container-home">
                <h1 className="title">JSON FORM CREATOR</h1>
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
