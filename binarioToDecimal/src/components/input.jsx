import { useState } from "react"
import '../styles/input.css'

export function Input() {
    const [bin, setBin] = useState(0)
    const [dec, setDec] = useState(0)

    const conversorBinarioToDecimal = () => {
        let binario = bin
        let decimal = 0
        let arrayBin = binario.split("")

        var diferente = 0

        for (let b = 0; b < arrayBin.length; b++) {
            if (arrayBin[b] != 0 && arrayBin[b] != 1) diferente = 1
        }

        if (diferente == 1) {
            alert("Digite apenas 1 ou 0")
        }else if (binario.length > 8) {
            alert("Digite no máximo 8 digitos")
        } else {
            for (let n = 0; n < binario.length; n++) {
                decimal += Math.pow(2, n) * binario[binario.length - n - 1]
            }
            setDec(decimal)
        }
    }

    return(
        <div className="Input">
            <h1>Conversor</h1>
            <label>Número Binário</label>
            <input type="text" id="binario" onChange={(event) => setBin(event.target.value)}/>
            <button type="button" className="btn" onClick={conversorBinarioToDecimal}>Converter</button>
            <h4>Resultado</h4>
            <p id="resultado">{dec}</p>
        </div>
    )
}