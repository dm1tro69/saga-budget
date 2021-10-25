import './App.css';
import {Container} from "semantic-ui-react";
import MainHeader from "./components/MainHeader";
import NewEntryForm from "./components/NewEntryForm";
import DisplayBalance from "./components/DispalyBalance";
import DisplayBalances from "./components/DisplayBalances";
import {useEffect, useState} from "react";
import EntryLines from "./components/EntryLines";
import ModalEdit from "./components/ModalEdit";

function App() {

    const [entries, setEntries] = useState(initialEntries);
    const [description, setDescription] = useState('')
    const [value, setValue] = useState('')
    const [isExpense, setIsExpense] = useState(true)
    const [isOpen, setIsOpen] = useState(false)
    const [entryId, setEntryId] = useState()
    const [incomeTotal, setIncomeTotal] = useState(0)
    const [expenseTotal, setExpenseTotal] = useState(0)
    const [total, setTotal] = useState(0)

    const resetEntry = () => {
        setDescription('')
        setValue('')
        setIsExpense(true)
    }

    useEffect(() => {
        if (!isOpen && entryId){
            const index = entries.findIndex(entry => entry.id === entryId)
            const newEntries = [...entries]
            newEntries[index].description = description
            newEntries[index].value = value
            newEntries[index].isExpense = isExpense
            setEntries(newEntries)
            resetEntry()
        }
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isOpen])

    useEffect(() => {
        let totalIncomes = 0
        let totalExpense = 0
        entries.map((entry) => {
            if (entry.isExpense){
               return  totalExpense += Number(entry.value)
            }
            return  totalIncomes += Number(entry.value)

        })
        setTotal(totalIncomes - totalExpense)
        setExpenseTotal(totalExpense)
        setIncomeTotal(totalIncomes)
    }, [entries])

    const deleteEntry = (id) => {
        setEntries(entries.filter(entry => entry.id !== id))
    }
    const editEntry = (id) => {
         if (id){
             const index = entries.findIndex(entry => entry.id === id)
             const entry = entries[index]
             setEntryId(id)
             setDescription(entry.description)
             setValue(entry.value)
             setIsOpen(true)
             setIsExpense(entry.isExpense)
         }
    }

    const addEntry = (description, value, isExpense) => {
        const result = entries.concat({id: entries.length + 1, value, description, isExpense})

        setEntries(result)
        resetEntry()
    }

  return (
   <Container>
      <MainHeader title={'Budget'} type={'h1'}/>
       <DisplayBalance value={total} color={'black'} title={'Your Balance:'} size={'small'}/>
       <DisplayBalances incomeTotal={incomeTotal} expenseTotal={expenseTotal}/>
       <MainHeader title={'History'} type={'h3'}/>
       <EntryLines entries={entries} deleteEntry={deleteEntry} editEntry={editEntry}/>
       <MainHeader title={'Add new transaction'} type={'h3'}/>
       <NewEntryForm
           addEntry={addEntry}
           description={description}
           value={value}
           setDescription={setDescription}
           isExpense={isExpense}
           setValue={setValue}
           setIsExpense={setIsExpense}
       />

       <ModalEdit
           isOpen={isOpen}
           setIsOpen={setIsOpen}
           addEntry={addEntry}
           description={description}
           value={value}
           setDescription={setDescription}
           isExpense={isExpense}
           setValue={setValue}
           setIsExpense={setIsExpense}
       />
   </Container>
  );
}

export default App;
let initialEntries = [
    {
        description: 'Work income',
        value: 1000.00,
        isExpense: false,
        id: 1
    },
    {
        description: 'Water bill',
        value: 20.00,
        isExpense: true,
        id: 2
    },
    {
        description: 'Rent',
        value: 300.00,
        isExpense: true,
        id: 3
    },
    {
        description: 'Power bill',
        value: 50.00,
        isExpense: true,
        id: 4
    },

]
