
import { useState, useEffect } from 'react'

function QuestionForm() {
    const [isInputError, setInputError] = useState(JSON.parse(localStorage.getItem("error_input_key")))
    const [inputValue, setInputValue] = useState('Posez votre question ici')
    
   
    useEffect(() => {
        localStorage.setItem('error_input_key', JSON.stringify(isInputError))},[isInputError]
    )



    function checkValue(value) {
        if (value.includes('f')) { setInputError(true); }
        else {
            setInputError(false);
            setInputValue(value)
            }
    }





    return (

        <div>
            {isInputError && (
                <div>🔥 Vous n'avez pas le droit d'utiliser la lettre "f" ici.</div>
            )}
            <textarea
                value={inputValue}
                onChange={(e) => checkValue(e.target.value)}
            />

            <button onClick={() =>{alert(inputValue); setInputError(false) }}>Alertez moi 🚨</button>

        </div>


    )

}


export default QuestionForm