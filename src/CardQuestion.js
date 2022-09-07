import { useState } from "react";
import FooterAnswers from "./FooterAnswers";
import Header from "./Header";
let arr = [];
let wrong = null;
const deckStatic = [
    { questionsText: "Qual a diferença de React e ReactDOM?", answers: "React é uma ferramenta para construção de interfaces, ReactDOM permite manipular o DOM dentro dos componentes!" },
    { questionsText: "Qual comando é usado para iniciar um projeto react localmente?", answers: "npm run start!" },
    { questionsText: "O que é JSX?", answers: "Uma extensão de linguagem do JavaScript!" },
    { questionsText: "Por quê usamos props?", answers: "Para passar diferentes informações para componentes!" },
    { questionsText: "O que é o React?", answers: "Uma biblioteca JavaScript para construção de interfaces!" },
    { questionsText: "Como se chama a prática de renderizar ou não um componente?", answers: "Renderização condicional!" },
    { questionsText: "Qual hook deve ser utilizado para fazer request a uma API logo que o component é renderizado?", answers: "Use Effect!" },
    { questionsText: "O que é o context api?", answers: "Um forma de gerenciar estados fora de seu componente!" }
]

const deck = deckStatic.sort(() => {
    return (Math.random() - 0.5);
})

export default function CardQuestion() {
    return (
        <nav className="deck">
            <Header />
            <Question />
        </nav>
    )
}

function Question() {
    let [pos, setPos] = useState(null);
    let [completed, setCompleted] = useState(0);
    let [hits, setHits] = useState([]);
    let [risk, setRisk] = useState("");
    return (
        <>
            {deck.map((deck, index) => {
                if (pos === index) {
                    return (
                        <section onClick={() => setPos(pos = index)} className="card askTxt">
                            <QuestionAskTxt
                                questions={deck} setRisk={setRisk}
                                setCompleted={setCompleted} 
                                completed={completed} 
                                setHits={setHits} 
                                hits={hits} />
                        </section>)
                } else {
                    return (
                        <section onClick={() => setPos(pos = index)} className="card ask">
                            <QuestionAsk index={index} css={risk} />
                        </section>)
                }
            })}
            <FooterAnswers counter={completed} hits={hits} wrong={wrong} />
        </>
    )
}

function QuestionAsk(props) {
    let { index, css } = props;

    let color = css !== "" ? `questions ${css}`: "questions"
    return (
        <div className={color}  id={css}>
            <p>Pergunta {index + 1}</p>
            <ion-icon className="icon" name="play-outline"></ion-icon>
        </div>
    )
}

function QuestionAskTxt(props) {
    let { questions, setRisk, setCompleted, completed, setHits } = props;
    let [flip, setFlip] = useState("flip");
    
    let css = `${flip} card`;
    let red = <img src="./assets/red.png" alt="color"/>
    let yellow = <img src="./assets/yellow.png" alt="color"/>
    let green = <img src="./assets/green.png" alt="color"/>

    function update(color, completed, imgHit) {
        setRisk(color);
        setCompleted(completed + 1);
        if (color === "red") {
            wrong = true;
        }
        arr.push(imgHit);
        setHits([...arr]);
    }

    return (
        <div className={css}>
            <div onClick={() => setFlip(flip = "")} className="question face">
                <p>{questions.questionsText}</p>
                <img src="./assets/reverse.png" alt="reverse" />
            </div>
            <div className="answer face">
                <p>{questions.answers}</p>
                <div className="options">
                    <div onClick={() => update("red", completed, red)} className="box wrong">Não lemprei</div>
                    <div onClick={() => update("yellow", completed, yellow)} className="box almost">Quase Não lembrei</div>
                    <div onClick={() => update("green", completed, green)} className="box zap">Zap</div>
                </div>
            </div>
        </div>
    )
}


