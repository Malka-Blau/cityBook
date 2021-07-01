import './App.css';
import { FormProvider } from './components/FormContext'
import PersonalDetailsComp from './components/PersonalDetails'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import InstructionsComp from './components/Instructions'
import HeaderComp from './components/Header'
import ExportReactCSV from './components/ExportToExcel//ExportReactCSV';

function App() {
  return (
    <div>
      <BrowserRouter>
        <HeaderComp />
        <FormProvider>
          <Switch>
            <Route path="/instructions" component={InstructionsComp} />
            <Route exact path="/" component={InstructionsComp} />{/*TODO: CREATE HOME COMPONENT*/}
            <Route path="/details" component={PersonalDetailsComp} />
            <PersonalDetailsComp />
          </Switch>

        </FormProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;


