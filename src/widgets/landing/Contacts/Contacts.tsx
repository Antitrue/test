import { logo, twitterLogo, vkLogo, facebookLogo, whatsappLogo } from '../../../shared/assets/';
import { services, aboutCompany, faq } from './constants';

import SocialLink from './ui/SocialLink/SocialLinks';
import CompanyInfoSection from './ui/CompanyInfoSection/CompanyInfoSection';

import styles from './Contacts.module.scss';

function Contacts() {
  const currentYear = new Date().getFullYear();

  return (
    <div className={styles.container}>
      <div className={styles.companyInfo}>
        <CompanyInfoSection title='Услуги' to='#' items={services} />
        <CompanyInfoSection title='Компания' to='#' items={aboutCompany} />
        <CompanyInfoSection title='Ответы на вопросы' to='#' items={faq} />
      </div>

      <div className={styles.companyDetails}>
        <div className={styles.logo}>
          <img src={logo} alt='logo' />
        </div>
        <ul className={styles.socialLinks}>
          <SocialLink title='VK' href='#' logo={vkLogo} alt='VK' />
          <SocialLink title='Twitter' href='#' logo={twitterLogo} alt='Twitter' />
          <SocialLink title='Facebook' href='#' logo={facebookLogo} alt='Facebook' />
          <SocialLink title='WhatsApp' href='#' logo={whatsappLogo} alt='WhatsApp' />
        </ul>

        <div className={styles.privatePolicy}>
          <p>Положение о политике персональных данных</p>
          <p>Все права защищены, Ветклиника {currentYear}</p>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
