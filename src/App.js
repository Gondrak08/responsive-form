import { FormProvider } from './context/FormContext';
import { FunctionsProvider } from './context/functions/FunctionsContext';

import ContentForm from './components/ContentForm';

function App() {
  return (
    <div >
      <FormProvider>
        <FunctionsProvider>
        <ContentForm/>
        </FunctionsProvider>
      </FormProvider>
    </div>
  );
}

export default App;
