import ReactDOM from "react-dom";
import Welcome from "./Welcome";
import CardQuestion from "./CardQuestion";



function App(){

    return(
    <>
        <Welcome/>
        <main>
            <CardQuestion/>
        </main>
    </>
    )
}

let root = document.querySelector(".root")
ReactDOM.render(App(),root);