
export default function DeveloperInput(props) {
    const {handleAddExcuses, excuseValue, setExcuseValue} = props
    return (
        <header>
            <input value={excuseValue} onChange={(e) => {
                setExcuseValue(e.target.value)
            }} placeholder="Enter excuse..." />

            <button onClick={() => {
                handleAddExcuses(excuseValue)
                setExcuseValue('')
            }
            }>Add</button>
        </header>
    )
}