import { useState } from 'react'
import styles from './Registration.module.scss'
import {PiArrowFatLinesDownThin, PiEyeThin} from  'react-icons/pi'
import { Link } from 'react-router-dom';

const districts: { country: string; location: [number, number] }[] = [
    {
        country: 'Nukus',
        location: [42.460341, 59.617996]
    },
    {
        country: 'Muynak',
        location: [43.766605, 59.028055]
    },
    {
        country: 'Kungirot',
        location: [43.045816, 58.847529]
    },
    {
        country: 'Shumanay',
        location: [42.662505, 58.902884]
    },
    {
        country: 'Kanlykul',
        location: [42.786029, 59.083472]
    },
    {
        country: 'Khojayli',
        location: [42.412544, 59.453057]
    },
    {
        country: 'Takhiaash',
        location: [42.333846, 59.575506]
    },
    {
        country: 'Nukus Rayon',
        location: [42.539086, 59.585432]
    },
    {
        country: 'Kegeyli',
        location: [42.740576, 59.698414]
    },
    {
        country: 'Karaozyak',
        location: [42.760365, 60.157920]
    },
    {
        country: 'Chimbay',
        location: [42.934882, 59.770027]
    },
    {
        country: 'Takhtakupir',
        location: [43.159008, 61.186275]
    },
    {
        country: 'Amudarya',
        location: [42.151624, 60.140205]
    },
    {
        country: 'Beruniy',
        location: [41.691312, 60.756800]
    },
    {
        country: 'Ellikkala',
        location: [41.907782, 61.026977]
    },
    {
        country: 'Bozatov',
        location: [42.962202, 59.350227]
    }
];

export const Registration = () => {
    const [pasActive, setPasActive] = useState<boolean>(false)

  return (
    <div className={styles.form}>
            <h1>Регистрация</h1>
        <form className={styles['form-inner']}>
            
            <div className={styles['form-item']}>
                <label htmlFor="">Имя</label>
                <input type="text" />
            </div>

            <div className={styles['form-item']}>
                <label htmlFor="">Фамилия</label>
                <input type="text" />
            </div>

            <div className={styles['form-item']}>
                <label htmlFor="">Телефон</label>
                <input type="number" />
            </div>

            <div className={styles['form-item']}>
                <label htmlFor="">Адрес</label>
                <input type="text" />
            </div>

            <div className={styles['form-item']}>
                <label htmlFor="">Район/Город</label>
                <select id="" >
                    {districts.map((district, index) => (
                            <option value={district.country} key={index}>
                                {district.country}
                            </option>
                    ))}
                </select>
            </div>

            <div className={styles['form-item']}>
                <label htmlFor="">Email</label>
                <input type="email" />
            </div>

            <div className={styles['form-item']}>
                <label htmlFor="">Пароль</label>
                <input type={pasActive ? 'text' : 'password'} />
            <PiEyeThin onClick={() => setPasActive(!pasActive)} className={styles['eyes-icon']} />
            </div>

            <Link to='/authorization'>Авторизация</Link>

            <div className={styles['form-btns']}>
            <button>Очистить</button>
            <button>Авторизоваться</button>
            </div>
        </form>
    </div>
  )
}
/* FIO, telefon, adres, adres rayon, email, parol,  */
