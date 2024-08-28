import { Button } from 'antd';

import classes from './styles.module.scss';

const Service = () => {
  return (
    <div className={classes.service}>
      <h2>
        Услуги <br />
        нашей клиники
      </h2>
      <p>
        При каких симптомах нужно обратиться в наш ветеринарный <br /> центр
      </p>
      <div className={classes.box}>
        <ul className={classes.buttonsService}>
          <li className={classes.buttonService}>
            <input type='radio' id='therapy' name='service' checked />
            <label htmlFor='therapy'>
              <img className={classes.imgService} src='src\shared\assets\images\therapy.svg' alt='' />
              <p>Терапия</p>
            </label>
          </li>
          <li className={classes.buttonService}>
            <input type='radio' id='vaccination' name='service' />
            <label htmlFor='vaccination'>
              <img className={classes.imgService} src='src\shared\assets\images\vaccination.svg' alt='' />
              <p>Вакцинация</p>
            </label>
          </li>
          <li className={classes.buttonService}>
            <input type='radio' id='stomatology' name='service' />
            <label htmlFor='stomatology'>
              <img className={classes.imgService} src='src\shared\assets\images\stomatology.svg' alt='' />
              <p>Стоматология</p>
            </label>
          </li>
          <li className={classes.buttonService}>
            <input type='radio' id='dermatology' name='service' />
            <label htmlFor='dermatology'>
              <img className={classes.imgService} src='src\shared\assets\images\dermatology.svg' alt='' />
              <p>Дерматология</p>
            </label>
          </li>
          <li className={classes.buttonService}>
            <input type='radio' id='diagnostic' name='service' />
            <label htmlFor='diagnostic'>
              <img className={classes.imgService} src='src\shared\assets\images\diagnostic.svg' alt='' />
              <p>Диагностика</p>
            </label>
          </li>
        </ul>
        <div className={classes.info}>
          <img src='src\shared\assets\images\catForService.svg' alt='' />
          <div>
            <h3>Терапия</h3>
            <ul>
              <li>- Ваш питомец заболел или его поведение вызывает у Вас тревогу</li>
              <li>- Нужна консультация по содержанию и кормлению</li>
              <li>- Подошла пора вакцинации</li>
            </ul>
            <Button className={classes.button} type='primary'>
              ЗАПИСАТЬСЯ НА ПРИЁМ
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
