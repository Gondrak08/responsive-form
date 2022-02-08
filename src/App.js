import { FormProvider } from './context/FormContext';
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
