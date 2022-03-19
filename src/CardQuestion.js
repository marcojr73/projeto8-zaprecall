import { useState } from "react";

const deckStatic = [
    { questionsText: "Nome do professor?", answers: "Emmett Brown" },
    { questionsText: "Modelo do veiculo/máquina do tempo", answers: "DeLorean" },
    { questionsText: "Data que Martin chega no futuro no segundo filme", answers: "21 de outubro" },
    { questionsText: "Marca da cueca de Martin?", answers: "Calvin Klein" },
    { questionsText: "Velocidade necessária para se utilizar a máquina do tempo?", answers: "88 milhas p hora" },
    { questionsText: "Nome do cachorro do professor?", answers: "Einstein" },
    { questionsText: "Esporte preferido de martin?", answers: "Skate" },
    { questionsText: "Acidente natural que permite martin voltar para o futuro?", answers: "Raio na torre" }
]

const deck = deckStatic.sort(() => {
    return (Math.random() - 0.5);
})

console.log(deck);

export default function CardQuestion() {
    return (
        <nav className="screen deck">
            <Header />
            <Question />
        </nav>
    )
}

function Header() {
    return (
        <header className="top">
            <img className="light" src="./assets/light.png" />
            <h1 className="zaprecall">ZapRecall</h1>
        </header>
    )
}

function Question() {
    let [pos, setPos] = useState(null);

    return (
        <>
            {deck.map((deck, index) => {
                if (pos === index) {
                    return (
                        <section onClick={() => setPos(pos = index)} className="card askTxt">
                            <QuestionAskTxt questions={deck}/>
                        </section>)
                } else {
                    return (
                        <section onClick={() => setPos(pos = index)} className="card ask">
                            <QuestionAsk index={index} />
                        </section>)
                }
            })}
        </>
    )
}

function QuestionAsk(props) {
    return (
            <div className="questions">
                <p>Pergunta {props.index + 1}</p>
                <ion-icon name="play-outline"></ion-icon>
            </div>
    )
}

function QuestionAskTxt(props) {
    return (
        <>
        <div className="question face">
                                <p>{props.questions.questionsText}</p>
                                <img src="./assets/reverse.png"/>
        </div>
        <div className="answer face">
            <p>{props.questions.answers}</p>
            <div className="options">
                <div className="box wrong">Não lemprei</div>
                <div className="box almost">Quase Não lembrei</div>
                <div className="box zap">Zap</div>
            </div>
        </div>
        </>
    )
}



// function Question() {
//     const [select, setSelect] = useState(false);
//     const css = `card ${select ? "select" : ""}`
//     return (
//         <>
//             {deck.map((question, indice) => {
//                 return (
//                     <section onclick={()=>setSelect(!select)} className={css}>
//                         <div className="questions">
//                             <p>Pergunta {indice + 1}</p>
//                             <ion-icon name="play-outline"></ion-icon>
//                         </div>
//                     </section>
//                 )
//             })}
//         </>
//     )
// }


{/* <div className="answer face">
                            <p>{question.answers}</p>
                            <div className="options">
                                <div className="box wrong">Não lemprei</div>
                                <div className="box almost">Quase Não lembrei</div>
                                <div className="box zap">Zap</div>
                            </div>
                        </div> */}