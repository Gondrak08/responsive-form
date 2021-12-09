import { FormProvider } from './context/FormContext';
import ContentForm from './components/ContentForm';

function App() {
  return (
    <div >
      <FormProvider>
        <ContentForm/>
      </FormProvider>
    </div>
  );
}

export default App;
