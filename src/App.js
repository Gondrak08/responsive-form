import { FormProvider } from './context/FormContext';
import ContentItem from './components/ContentItem';

function App() {
  return (
    <div >
      <FormProvider>
        <ContentItem/>
      </FormProvider>
    </div>
  );
}

export default App;
