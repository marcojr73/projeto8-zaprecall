
export default function FooterAnswers(props) {
    let { counter, hits, wrong } = props;
    return (
        counter >= 8 ?
            <footer className="end">
                <Finish counter={counter} wrong={wrong} hits={hits} />
                <Partial counter={counter} hits={hits} />
            </footer>
            :
            <footer>
                <Partial counter={counter} hits={hits}/>
            </footer>
    )
}

function Partial(props) {
    let {counter, hits} = props
    return (
        <>        
            <p>{counter}/8 Concluídos</p>
            <div className="mark-hits">{hits}</div>
        </>
    )
}

function Finish(props) {
    let {wrong} = props;
    let message = wrong === true ? "Ainda faltam alguns, mas não desanime" : "Você não se esqueceu de nenhum flashcard!"
    let feeling = wrong === true ? "./assets/sad.png" :"./assets/congratulations.png"
    let result = wrong === true ? "Putz.." : "Parabéns!"
    return (
        <div className="congratulations">
            <div className="smile">
                <img src={feeling} alt="img"/>
                <p>{result}</p>
            </div>
            <p>{message}</p>
        </div>

    )
}