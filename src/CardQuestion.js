import { useState } from "react";
let arr = [];
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
        <nav className="screen deck">
            <Header />
            <Question />
        </nav>
    )
}

function Header() {
    return (
        <header className="top">
            <img className="light" src="./assets/light.png" alt="logo" />
            <h1 className="zaprecall">ZapRecall</h1>
        </header>
    )
}

function Question() {
    let [pos, setPos] = useState(null);
    let [risk, setRisk] = useState("");
    let [completed, setCompleted] = useState(0);
    let [hits, setHits] = useState([]);
    return (
        <>
            {deck.map((deck, index) => {
                if (pos === index) {
                    return (
                        <section onClick={() => setPos(pos = index)} className="card askTxt">
                            <QuestionAskTxt 
                            questions={deck} setRisk={setRisk} setCompleted={setCompleted} completed={completed} setHits={setHits} hits={hits}/>
                        </section>)
                } else {
                    return (
                        <section onClick={() => setPos(pos = index)} className="card ask">
                            <QuestionAsk index={index} css={risk} />
                        </section>)
                }
            })}
            <FooterAnswers counter={completed} hits={hits}/>
        </>
    )
}

function QuestionAsk(props) {
    let { index, css } = props;
    let [select, setSelected] = useState(false);
    console.log(css);


    // if (css !== "") {
    // setSelected(true);
    // }


    let color = select === true ? css : "";

    return (
        <div className="questions" id={color} >
            <p>{css} Pergunta {index + 1}</p>
            <ion-icon name="play-outline"></ion-icon>
        </div>
    )
}

function QuestionAskTxt(props) {
    let { questions, setRisk, setCompleted, completed, setHits} = props;
    let [flip, setFlip] = useState("flip");
    let css = `${flip} card`;
    let red = <img src="./assets/red.png"/>
    let yellow = <img src="./assets/yellow.png"/>
    let green = <img src="./assets/green.png"/>
    
    function update(color, completed, imgHit) {
        setRisk(color);
        setCompleted(completed+1);
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
                    <div onClick={() => update("red",completed, red)} className="box wrong">Não lemprei</div>
                    <div onClick={() => update("yellow",completed, yellow)} className="box almost">Quase Não lembrei</div>
                    <div onClick={() => update("green",completed, green)} className="box zap">Zap</div>
                </div>
            </div>
        </div>
    )
}

function FooterAnswers(props) {
    return (
        <footer>
            <p>{props.counter}/8 Concluídos</p>
            {props.hits}
        </footer>
    )
}

