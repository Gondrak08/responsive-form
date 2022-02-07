import React, {useState, useEffect} from 'react';
import Form from '../components/FormContainer'
import SchemaCreator from '../context/SchemaCreator';
import '../styles/Home.scss'

function Home() {
    const [jsonData, setJsonData] = useState(null);
    const EmptyJson = () => {
        return (
            <div>
                <h3>Por favor insira um Schema ao lado</h3>
            </div>
            )
    }
    return (
        <section id="home">
            <div className="container-home">
                <h1>JSON FORM CREATOR</h1>
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
