import Document, { Html, Head, Main, NextScript } from 'next/document'

// Arquivo criado para não renderizar todos as estilizações da pagina sempre que recarregar a pagina
// Estilizacao renderizada uma vez

export default class MyDocument extends Document {
    render() {
        return(
            <Html>
                <Head>
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Inter&family=Lexend:wght@500;600&display=swap" rel="stylesheet" />    
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}