function Recommendation() {
    const month = new Date().getMonth()
    const isSpring =  month >= 2 && month <= 5
    const isSummer =  month >= 6 && month <= 8
    const isAutumn =  month >= 9 && month <= 11

    if (isSpring){ 
        return <div>🌻c'est le printemps, il faut remporter!</div>
    }
    else if (isSummer)
        { 
            return <div>🏖c'est lété , tout est à l'ombre! </div>
        }
    else if (isAutumn)
        { 
                return <div>🍃 C'est l'automone, rebelotte!</div>
        } 
    else return <div>❄️ C'est l'hiver, ça caille mais ça pousse!</div>   
    
}
export default Recommendation
