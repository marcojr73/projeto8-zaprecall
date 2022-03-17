import { useState } from "react"

export default function FooterAnswers(){

    const [visible, setVisible] = useState(false);

    return(
        visible === true ?
        <footer>
            <p></p>
        </footer>
        : <></>
    )
}