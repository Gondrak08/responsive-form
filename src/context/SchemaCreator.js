const SchemaCreator = ({data, setData}) => {
    
    const HandlingData = (e) => {
        setData(JSON.parse(e.target.value))
    }   
  
    return (
        <>
            <div className="schema-box">
                <div className="tag">
                    <span>JsonSchema</span>
                </div>
                <textarea id="schemaCreator" onChange={(e)=> HandlingData(e)} name="schemaCreator" cols="auto" rows="auto" placeholder="Put here your schema" >
                </textarea> 
            </div>
        </>
    )
}

export default SchemaCreator;