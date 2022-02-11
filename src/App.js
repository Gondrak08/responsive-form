import { FormProvider } from './context/FormContext';
import Home from './pages/index'
import Footer from './components/global/Footer'

function App() {
  return (
    <div >
      <FormProvider>
          <Home />
      </FormProvider>
      <Footer />
    </div>
  );
}

export default App;
