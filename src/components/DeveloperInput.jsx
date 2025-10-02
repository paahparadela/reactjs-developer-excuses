
export default function DeveloperInput(props) {
    const { handleAddExcuses, excuseValue, setExcuseValue } = props

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            handleAddExcuses(excuseValue)
            setExcuseValue('')
            event.preventDefault();
        }
    };

    return (
        <header>
            <input value={excuseValue} onChange={(e) => {
                setExcuseValue(e.target.value)
            }} onKeyDown={handleKeyDown} placeholder="Enter excuse..." />

            <button onClick={() => {
                handleAddExcuses(excuseValue)
                setExcuseValue('')
            }}
            >Add</button>
        </header>
    )
}