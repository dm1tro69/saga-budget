import './App.css';
import {Container} from "semantic-ui-react";
import MainHeader from "./components/MainHeader";
import NewEntryForm from "./components/NewEntryForm";
import DisplayBalance from "./components/DispalyBalance";
import DisplayBalances from "./components/DisplayBalances";
import EntryLine from "./components/EntryLine";

function App() {
  return (
   <Container>
      <MainHeader title={'Budget'} type={'h1'}/>
       <DisplayBalance value={'2,550.23'} color={'black'} title={'Your Balance:'} size={'small'}/>
       <DisplayBalances/>
       <MainHeader title={'History'} type={'h3'}/>
      <EntryLine color={'red'} isExpense description={'Something'} value={'$20.00'}/>
       <EntryLine color={'green'} description={'Something else'} value={'$200.00'}/>
       <EntryLine color={'red'} isExpense description={'Something2'} value={'$50.00'}/>
       <MainHeader title={'Add new transaction'} type={'h3'}/>
       <NewEntryForm/>
   </Container>
  );
}

export default App;
