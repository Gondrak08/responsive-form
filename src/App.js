import { FormProvider } from './context/FormContext';
// import { FunctionsProvider } from './context/functions/FunctionsContext';
import Form from './components/FormContainer';
import Schema from './context/Schema.json'

import Home from './pages/index'


function App() {
  return (
    <div >
      <FormProvider>
     
          <Home />
      
      </FormProvider>
    </div>
  );
}

export default App;
