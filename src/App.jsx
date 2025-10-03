import { useState, useEffect } from "react"
import DeveloperExcuses from "./components/DeveloperExcuses"
import DeveloperInput from "./components/DeveloperInput"
import DeveloperGif from "./components/DeveloperGif"

function App() {

  const [excuses, setExcuses] = useState([''])
  const [excuseValue, setExcuseValue] = useState('')

  function persistData(newList) {
    localStorage.setItem('excuses', JSON.stringify({
      excuses:
        newList
    }))
  }

  function handleAddExcuses(newExcuse) {
    const newExcuseList = [...excuses, newExcuse]
    persistData(newExcuseList)
    setExcuses(newExcuseList)
  }

  function handleDeleteExcuse(index) {
    const newExcuseList = excuses.filter((excuse, excuseIndex) => {
      return excuseIndex !== index
    })
    persistData(newExcuseList)
    setExcuses(newExcuseList)
  }

  function handleEditExcuse(index) {
    const valueToBeEdited = excuses[index]
    setExcuseValue(valueToBeEdited)
    handleDeleteExcuse(index)
  }

  useEffect(() => {
    if (!localStorage)
      return

    let localExcuses = localStorage.getItem('excuses')
    if (!localExcuses)
      return

    localExcuses = JSON.parse(localExcuses).excuses
    setExcuses(localExcuses)
  }, [])

  return (
    <>
      <DeveloperGif />
      <DeveloperInput handleAddExcuses={handleAddExcuses} excuseValue={excuseValue} setExcuseValue={setExcuseValue} />
      <DeveloperExcuses handleDeleteExcuse={handleDeleteExcuse} excuses={excuses} handleEditExcuse={handleEditExcuse} />
    </>
  )
}

export default App
