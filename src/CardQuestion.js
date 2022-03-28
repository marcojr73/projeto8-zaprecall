import { useState } from "react";
import FooterAnswers from "./FooterAnswers";
import Header from "./Header";
let arr = [];
let wrong = null;
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
    let [select, setSelected] = useState(true);
    console.log(css);


    if (css !== "") {
    setSelected(true);
    css="";
    }

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


