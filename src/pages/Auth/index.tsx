import { useState } from 'react';
import styles from './Auth.module.scss';
import {PiEyeThin} from  'react-icons/pi'
import { Link } from 'react-router-dom';

export const Auth = () => {
    const [pasActive, setPasActive] = useState<boolean>(false)

  return (
    <div className={styles.form}>
        <h1>Авторизация</h1>
      <form className={styles['form-inner']} >
        <div  className={styles['form-item']}>
            <label htmlFor="login">Логин</label>
            <input type="text" id='login'/>
        </div>

        <div className={styles['form-item']}>
            <label htmlFor='password'>Пароль</label>
            <input type={pasActive ? 'text' : 'password'} id='password'/>
            <PiEyeThin onClick={() => setPasActive(!pasActive)} className={styles['eyes-icon']} />
        </div>

       <Link to='/registration'>Регистрация</Link>
 
        <div className={styles['form-btns']}>
            <button>Очистить</button>
            <button>Авторизоваться</button  >
        </div>
      </form>
    </div>
  )
}
