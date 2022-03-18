import { useState } from "react";

const deckStatic = [
    { questionNumber: "pergunta", questionsText: "Nome do professor?", answers: "Emmett Brown" },
    { questionNumber: "pergunta", questionsText: "Modelo do veiculo/máquina do tempo", answers: "DeLorean" },
    { questionNumber: "pergunta", questionsText: "Data que Martin chega no futuro no segundo filme", answers: "21 de outubro" },
    { questionNumber: "pergunta", questionsText: "Marca da cueca de Martin?", answers: "Calvin Klein" },
    { questionNumber: "pergunta", questionsText: "Velocidade necessária para se utilizar a máquina do tempo?", answers: "88 milhas p hora" },
    { questionNumber: "pergunta", questionsText: "Nome do cachorro do professor?", answers: "Einstein" },
    { questionNumber: "pergunta", questionsText: "Esporte preferido de martin?", answers: "Skate" },
    { questionNumber: "pergunta", questionsText: "Acidente natural que permite martin voltar para o futuro?", answers: "Raio na torre" }
]

const questionNumber = []


const deck = deckStatic.sort(() => {
    return (Math.random() - 0.5);
})

console.log(deck);

export default function CardQuestion() {
    const [visible, setVisible] = useState(true);

    return (
        visible === true ?
            <nav className="screen deck">
                <Header />
                <Question />
            </nav>
            : <></>
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
    const [select, setSelect] = useState(false);

    return (
        <>
            {deck.map((question,indice) => {
                return (
                    select === false ?
                        <div onClick={() => setSelect(true)} className="questions">
                            <p>{question.questionNumber} {indice + 1}</p>
                            <ion-icon name="play-outline"></ion-icon>
                        </div>
                        : <section className="card">
                            <div className="question face">
                                <p>{question.questionsText}</p>
                                <img src="./assets/reverse.png"/>
                            </div>
                            <div className="answer face">
                                <p>{question.answers}</p>
                                <div className="options">
                                    <div className="box wrong">Não lemprei</div>
                                    <div className="box almost">Quase Não lembrei</div>
                                    <div className="box zap">Zap</div>
                                </div>
                            </div>
                        </section>
                )
            })}
        </>
    )
}

