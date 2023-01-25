
import { useState, useEffect } from 'react'

function QuestionForm() {
    const [isInputError1, setInputError] = useState(JSON.parse(localStorage.getItem("error_input_key")))
    const [inputValue, setInputValue] = useState('Posez votre question ici')
    
   
    useEffect(() => {
        window.localStorage.setItem('error_input_key', isInputError1)},[isInputError1]
    )



    function checkValue(value) {
        if (inputValue.includes('f')) { setInputError(true); window.location.reload() }
        else {
            setInputValue(value)
            }
    }





    return (

        <div>
            {isInputError1 && (
                <div>🔥 Vous n'avez pas le droit d'utiliser la lettre "f" ici.</div>
            )}
            <textarea
                value={inputValue}
                onChange={(e) => checkValue(e.target.value)}
            />

            <button onClick={() =>{checkValue(inputValue);alert(inputValue); setInputError(false) }}>Alertez moi 🚨</button>

        </div>


    )

}


export default QuestionForm