import ReactDOM from "react-dom";
import Welcome from "./Welcome";
import CardQuestion from "./CardQuestion";
import FooterAnswers from "./FooterAnswers";


function App(){

    return(
    <>
        <Welcome/>
        <main>
            <CardQuestion/>
            <FooterAnswers/>
        </main>
    </>
    )
}

let root = document.querySelector(".root")
ReactDOM.render(App(),root);