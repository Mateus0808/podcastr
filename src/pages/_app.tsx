import { Header } from "../components/Header"
import { Player } from "../components/Player"

import styles from '../styles/app.module.scss'
import '../styles/global.scss'
// Arquivo global
// Todos os componentes que aparecem em todas as paginas sao colocados aqui

function MyApp({ Component, pageProps }) {
  return (
    <div className={styles.wrapper}>
      <main>
        <Header />
        <Component {...pageProps} />
      </main>
      <Player />
    </div>
  )
}

export default MyApp
