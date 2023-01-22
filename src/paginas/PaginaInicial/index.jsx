import Footer from "../../components/Footer";
import Galeria from "../../components/Galeria";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import Populares from "../../components/Populares";
import banner from "./banner.png";

import styles from './PaginaInicial.module.scss';

export default function PaginaInicial() {
    return(
        <>
            <Header/>
            <main>
                <section className={styles.principal}>
                    <Menu/>
                    <div className={styles.principal__imagem}>
                        <h1>A galeria mais completa do espaço</h1>
                        <img src={banner} alt="A imagem da terra vista do espaço"></img>
                    </div>
                </section>
                <div className={styles.galeria}>
                    <Galeria/>
                    <Populares/>
                </div>
            </main>
            <Footer/>
        </>
    );
}