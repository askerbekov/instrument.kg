import React from 'react';
import '../styles/footer.scss'

const Footer = () => {
  return (
    <footer className={''}>
      <div className="footer">
        <div className={'contactMenu'}>
          <div className="contactBar ">
            <i className={'icon footer-icon'}></i>
            <h3><a href="#">8 800 222-22-02</a></h3>
            <div>
              <p>07:00 — 18:00 (по Москве)</p>
              <p>Выходной: суббота, воскресенье</p>
            </div>

            <div className={'feedback'}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19" fill="none">
                <g clipPath="url(#clip0_1_202)">
                  <path fillRule="evenodd" clipRule="evenodd" d="M7.18315 15.7813C8.22215 16.2093 9.31315 16.4213 10.4532 16.4333C10.5282 16.4283 10.6042 16.4253 10.6802 16.4213C10.8652 16.4113 11.0502 16.4013 11.2342 16.3883C11.3589 16.3795 11.4833 16.3662 11.6072 16.3483C13.2802 16.1143 14.7552 15.4883 15.9682 14.4203C18.2742 12.3903 19.1072 9.89733 18.5742 7.04333C18.2422 5.26233 17.2912 3.75933 15.7882 2.57133C13.9962 1.15633 11.9062 0.561329 9.54215 0.799329C8.22895 0.921482 6.96507 1.36074 5.85915 2.07933C3.63515 3.52933 2.44915 5.52433 2.21315 7.98833C2.09115 9.26133 2.32015 10.4923 2.85715 11.6743C2.89015 11.7403 2.89415 11.8143 2.86715 11.8823C2.36615 13.3023 1.86615 14.7243 1.36715 16.1453C1.25015 16.4793 1.31915 16.7813 1.59615 17.0273C1.86615 17.2673 2.18415 17.2973 2.53415 17.1853C4.02215 16.7153 5.50915 16.2453 6.99615 15.7733C7.05717 15.7517 7.12421 15.7545 7.18315 15.7813ZM3.61315 15.1033L3.56215 15.1183L3.78215 14.4903L3.94815 14.0183C4.18315 13.3473 4.41815 12.6753 4.65715 12.0043C4.69772 11.9002 4.71525 11.7886 4.70851 11.6771C4.70178 11.5655 4.67095 11.4568 4.61815 11.3583C4.09526 10.384 3.86012 9.28117 3.94015 8.17833C4.10715 5.75833 5.78415 3.53333 8.42415 2.70833C11.1012 1.87233 14.0132 2.73133 15.6802 4.83633C16.4702 5.83333 16.9142 6.94433 16.9812 8.17033C17.0702 9.77233 16.6062 11.2303 15.5112 12.4993C14.4512 13.7263 13.0672 14.4783 11.3662 14.7133C10.1027 14.8972 8.813 14.7085 7.65515 14.1703C7.51303 14.1003 7.35835 14.0594 7.2002 14.0499C7.04205 14.0405 6.8836 14.0627 6.73415 14.1153C5.99415 14.3553 5.25215 14.5893 4.50915 14.8223L3.69115 15.0803C3.66561 15.0884 3.63894 15.0961 3.61315 15.1033ZM8.18715 9.91333C8.55183 9.91333 8.90156 9.76846 9.15943 9.5106C9.41729 9.25274 9.56215 8.903 9.56215 8.53833C9.56215 8.17366 9.41729 7.82392 9.15943 7.56606C8.90156 7.30819 8.55183 7.16333 8.18715 7.16333C7.82248 7.16333 7.47274 7.30819 7.21488 7.56606C6.95702 7.82392 6.81215 8.17366 6.81215 8.53833C6.81215 8.903 6.95702 9.25274 7.21488 9.5106C7.47274 9.76846 7.82248 9.91333 8.18715 9.91333ZM12.7712 9.91333C13.1358 9.91333 13.4856 9.76846 13.7434 9.5106C14.0013 9.25274 14.1462 8.903 14.1462 8.53833C14.1462 8.17366 14.0013 7.82392 13.7434 7.56606C13.4856 7.30819 13.1358 7.16333 12.7712 7.16333C12.4065 7.16333 12.0567 7.30819 11.7989 7.56606C11.541 7.82392 11.3962 8.17366 11.3962 8.53833C11.3962 8.903 11.541 9.25274 11.7989 9.5106C12.0567 9.76846 12.4065 9.91333 12.7712 9.91333Z" fill="white"/>
                </g>
                <defs>
                  <clipPath id="clip0_1_202">
                    <rect width="19" height="18" fill="white" transform="translate(0.479156 0.169434)"/>
                  </clipPath>
                </defs>
              </svg>
              <a href="#">Обратная связь</a>
            </div>

            <div>
              <a href="#">
                <svg width="35px"
                     height="35px"
                     viewBox="0 0 20.00 20.00"
                     xmlns="http://www.w3.org/2000/svg"
                     fill="#FFF" stroke="#FFF"
                     strokeWidth="0.0002">
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect x="0" fill="none" width="20" height="20"></rect> <g> <path d="M16.8 5.7C14.4 2 9.5.9 5.7 3.2 2 5.5.8 10.5 3.2 14.2l.2.3-.8 3 3-.8.3.2c1.3.7 2.7 1.1 4.1 1.1 1.5 0 3-.4 4.3-1.2 3.7-2.4 4.8-7.3 2.5-11.1zm-2.1 7.7c-.4.6-.9 1-1.6 1.1-.4 0-.9.2-2.9-.6-1.7-.8-3.1-2.1-4.1-3.6-.6-.7-.9-1.6-1-2.5 0-.8.3-1.5.8-2 .2-.2.4-.3.6-.3H7c.2 0 .4 0 .5.4.2.5.7 1.7.7 1.8.1.1.1.3 0 .4.1.2 0 .4-.1.5-.1.1-.2.3-.3.4-.2.1-.3.3-.2.5.4.6.9 1.2 1.4 1.7.6.5 1.2.9 1.9 1.2.2.1.4.1.5-.1s.6-.7.8-.9c.2-.2.3-.2.5-.1l1.6.8c.2.1.4.2.5.3.1.3.1.7-.1 1z"></path> </g> </g></svg></a>
              <a href="#"><svg fill="#fff" width="32px" height="32px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#fff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>telegram</title> <path d="M22.122 10.040c0.006-0 0.014-0 0.022-0 0.209 0 0.403 0.065 0.562 0.177l-0.003-0.002c0.116 0.101 0.194 0.243 0.213 0.403l0 0.003c0.020 0.122 0.031 0.262 0.031 0.405 0 0.065-0.002 0.129-0.007 0.193l0-0.009c-0.225 2.369-1.201 8.114-1.697 10.766-0.21 1.123-0.623 1.499-1.023 1.535-0.869 0.081-1.529-0.574-2.371-1.126-1.318-0.865-2.063-1.403-3.342-2.246-1.479-0.973-0.52-1.51 0.322-2.384 0.221-0.23 4.052-3.715 4.127-4.031 0.004-0.019 0.006-0.040 0.006-0.062 0-0.078-0.029-0.149-0.076-0.203l0 0c-0.052-0.034-0.117-0.053-0.185-0.053-0.045 0-0.088 0.009-0.128 0.024l0.002-0.001q-0.198 0.045-6.316 4.174c-0.445 0.351-1.007 0.573-1.619 0.599l-0.006 0c-0.867-0.105-1.654-0.298-2.401-0.573l0.074 0.024c-0.938-0.306-1.683-0.467-1.619-0.985q0.051-0.404 1.114-0.827 6.548-2.853 8.733-3.761c1.607-0.853 3.47-1.555 5.429-2.010l0.157-0.031zM15.93 1.025c-8.302 0.020-15.025 6.755-15.025 15.060 0 8.317 6.742 15.060 15.060 15.060s15.060-6.742 15.060-15.060c0-8.305-6.723-15.040-15.023-15.060h-0.002q-0.035-0-0.070 0z"></path> </g></svg></a>
            </div>
          </div>
        </div>
        <div className={'footerMenu'}>
          <div className={'footWrapper'}>
            <div className={'footLinks'}>
              <p><a href="#">Каталог</a></p>
              <p><a href="#">Бренды</a></p>
              <p><a href="#">Где купить</a></p>
              <p><a href="#">Филиалы</a></p>
              <p><a href="#">Приложение еОрдер</a></p>
            </div>
            <div className={'footLinks'}>
              <p><a href="#">Медиацентр</a></p>
              <p><a href="#">Гарантия и сервис</a></p>
              <p><a href="#">Пользовательское соглашение</a></p>
              <p><a href="#">Политика обработки персональных данных</a></p>
            </div>
          </div>
          <div className={'footInfo'}>
              <h4>© 2023 ООО «МИР ИНСТРУМЕНТА»</h4>
            <p>Вы принимаете условия политики обработки персональных данных и пользовательского соглашения каждый раз, когда посещаете наш сайт и оставляете свои данные в любой форме на сайте instrument.ru</p>
            <p>Если Вы не даете согласия на обработку своих персональных данных, Вам необходимо покинуть наш сайт.</p>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;