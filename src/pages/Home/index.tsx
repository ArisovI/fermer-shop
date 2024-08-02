import { Link } from 'react-router-dom';
import styles from './Home.module.scss';
import { Icons } from '../../assets';

export const Home = () => {
    return (
        <div className={styles.home}>
            <div className={styles.left}>
                <h1>Добро пожаловать</h1>

                <ul className={styles.choise}>
                    <li>
                        <Link to='/client'>Клиент</Link>
                        <span>Если вы хотите купить товары у фермеров</span>
                    </li>

                    <li>
                        <Link to='/authorization'>Фермер</Link>
                        <span>Если вы хотите продавать свой товары</span>

                    </li>
                </ul>

                <div className={styles.social}>
                    <ul >
                        <li>
                            <Link to='/'>
                                <img src={Icons.telegram} alt="" />
                                <p>Telegram</p>
                            </Link>
                        </li>
                        <li>
                            <Link to='/'>
                                <img src={Icons.instagram} alt="" />
                                <p>Instagram</p>
                            </Link>
                        </li>
                        <li>
                            <Link to='/'>
                                <img src={Icons.facebook} alt="" />
                                <p>Facebook</p>
                            </Link>
                        </li>
                        <li>
                            <Link to='/'>
                                <img src={Icons.whatsapp} alt="" />
                                <p>Whatsapp</p>
                            </Link>
                        </li>
                    </ul>
                    <p>Следите за нами на Facebook, Instagram, Whatsapp и Telegram, чтобы быть в курсе последних новостей и обновлений</p>
                </div>
            </div>
        </div>
    )
}
