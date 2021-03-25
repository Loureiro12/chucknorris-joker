import { createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        justify-content: center;
        text-align: center;
    }
    body{
        background: #ccc;
        font-family: 'Roboto', sans-serif;
    }
    
    body, input, textarea, button {
    font: 400 1rem "Inter", sans-serif;
    }
    button {
        cursor: pointer;
    }
`