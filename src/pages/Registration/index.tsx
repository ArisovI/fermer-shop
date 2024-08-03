import React, { useState } from 'react'
import styles from './Registration.module.scss'
import { PiEyeThin} from  'react-icons/pi'
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

    const handleOnSubmit= (event: React.FormEvent<HTMLFormElement>) =>{
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const fields = Object.fromEntries(formData)
        console.log(fields)
    }

  return (
    <div className={styles.form}>
      <h1>Регистрация</h1>
      <form className={styles['form-inner']} onSubmit={handleOnSubmit}>
        <div className={styles['form-item']}>
          <label htmlFor="name">Имя</label>
          <input type="text" id='name' name='name' />
        </div>

        <div className={styles['form-item']}>
          <label htmlFor="surname">Фамилия</label>
          <input type="text" id='surname' name='surname' />
        </div>

        <div className={styles['form-item']}>
          <label htmlFor="phone">Телефон</label>
          <input type="number" id='phone' name='phone' />
        </div>

        <div className={styles['form-item']}>
          <label htmlFor="address">Адрес</label>
          <input type="text" id='address' name='address' />
        </div>

        <div className={styles['form-item']}>
          <label htmlFor="localAddress">Район/Город</label>
          <select id="localAddress" name='localAddress'>
            {districts.map((district, index) => (
              <option value={district.country} key={index}>
                {district.country}
              </option>
            ))}
          </select>
        </div>

        <div className={styles['form-item']}>
          <label htmlFor="email">Email</label>
          <input type="email" id='email' name='email' />
        </div>

        <div className={styles['form-item']}>
          <label htmlFor="password">Пароль</label>
          <input type={pasActive ? 'text' : 'password'} id='password' name='password' />
          <PiEyeThin onClick={() => setPasActive(!pasActive)} className={styles['eyes-icon']} />
        </div>

        <Link to='/authorization'>Авторизация</Link>

        <div className={styles['form-btns']}>
          <button type='reset'>Очистить</button>
          <button type='submit'>Авторизоваться</button>
        </div>
      </form>
    </div>
  )
}
/* FIO, telefon, adres, adres rayon, email, parol,  */
