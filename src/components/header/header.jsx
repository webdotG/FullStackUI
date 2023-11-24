
import style from './header.module.scss';

export const Header = () => {

  const isAuth = false;

  const onClickLogout = () => { };

  return (
    <header className={style.header}>
      <nav className={style.main_nav} >
          <a className={style.logo} href="/FullStackUI">
            <div>webDotG Blog</div>
          </a>
          {isAuth
            ? (
              <div className={style.user_nav}>
                <a className={style.header_links} href="/FullStackUI/posts/create">Написать статью</a>
                <a  onClick={onClickLogout} className={style.header_links}>Выйти</a>
              </div>
            )
            : (
              <div className={style.user_nav}>
                <a className={style.header_links} href="/FullStackUI/login">Войти</a>
                <a className={style.header_links} href="/FullStackUI/register">Создать аккаунт</a>
              </div>
            )
          }
      </nav>
    </header>
  );
};
