import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
html {
    height: 100%;

    body {
        display: flex;
        flex-direction: column;
        height: 100%;
        margin: 0;

        #root {
            /* 282c34 is a color and adding cc at the end 
            i.e '282c34cc' gives it opacity attribute */
            background: radial-gradient(#282c34cc, #282c34);
            color: #282c34;
            display: flex;
            font-family: sans-serif;
            height: 100%;
            justify-content: center;
            padding: 15px;
        }
    }
}
`
