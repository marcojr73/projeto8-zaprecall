
import { useState } from "react"

export default function Welcome(){
    const [visible, setVisible] = useState(true)
        return(
            visible === true ?
            <section className="screen welcome">
                <figure>
                    <img id="light" src = "./assets/light.png" alt="light"/>
                    <h1 className= "zaprecall">ZapRecall</h1>
                </figure>
                <button className="start" onClick={()=>setVisible(false)}>Iniciar Recall</button>
            </section> : <></>
        )
}

