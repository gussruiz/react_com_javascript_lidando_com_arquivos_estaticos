import home from '../../assets/icons/home-ativo.png';
import maisCurtidas from '../../assets/icons/mais-curtidas-inativo.png';
import maisVistas from '../../assets/icons/mais-vistas-inativo.png';
import novas from '../../assets/icons/novas-inativo.png';
import surpreendaMe from '../../assets/icons/surpreenda-me-inativo.png';

import styles from './Menu.module.scss';

export default function Menu() {
    return(
        <nav className={styles.menu}>
            <ul className={styles.menu__lista}>
                <li className={styles.menu__item}>
                    <img src={home} alt=""></img>
                    <a href="/">Início</a>
                </li>
                <li className={styles.menu__item}>
                    <img src={maisCurtidas} alt=""></img>
                    <a href="/">Mais Curtidas</a>
                </li>
                <li className={styles.menu__item}>
                    <img src={maisVistas} alt=""></img>
                    <a href="/">Mais Vistas</a>
                </li>
                <li className={styles.menu__item}>
                    <img src={novas} alt=""></img>
                    <a href="/">Novas</a>
                </li>
                <li className={styles.menu__item}>
                    <img src={surpreendaMe} alt=""></img>
                    <a href="/">Surpreenda-me</a>
                </li>
            </ul>
        </nav>
    );
}