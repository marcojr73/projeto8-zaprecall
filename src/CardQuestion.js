import { useState } from "react";
import Welcome from "./Welcome";

const deck = [
    { questionNumber: "pergunta 1", questionsText: "Nome do professor?", answers: "Emmett Brown" },
    { questionNumber: "pergunta 2", questionsText: "Modelo do veiculo/máquina do tempo", answers: "DeLorean" },
    { questionNumber: "pergunta 3", questionsText: "Data que Martin chega no futuro no segundo filme", answers: "21 de outubro" },
    { questionNumber: "pergunta 4", questionsText: "Marca da cueca de Martin?", answers: "Calvin Klein" },
    { questionNumber: "pergunta 5", questionsText: "Velocidade necessária para se utilizar a máquina do tempo?", answers: "88 milhas p hora" },
    { questionNumber: "pergunta 6", questionsText: "Nome do cachorro do professor?", answers: "Einstein" },
    { questionNumber: "pergunta 7", questionsText: "Esporte preferido de martin?", answers: "Skate" },
    { questionNumber: "pergunta 8", questionsText: "Acidente natural que permite martin voltar para o futuro?", answers: "Raio na torre" }
]

const questions = ["pergunta 1", "pergunta 2", "pergunta 3", "pergunta 4", "pergunta 5", "pergunta 6", "pergunta 7", "pergunta 8"];

const deckrandom = deck.sort(() => {
    return (Math.random() * 0.5);
})


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
            {deck.map(question => {
                return (
                    select === false ?
                        <div onClick={() => setSelect(true)} className="questions">
                            <p>{question.questionNumber}</p>
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

