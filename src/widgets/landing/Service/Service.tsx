import { Button } from 'antd';
import { service } from './constant';

import classes from './Service.module.scss';

const Service = () => {
  const getButtonName = (el: [string, string]) => {
    return (
      <li className={classes.buttonService}>
        <input type='radio' id={el[1]} name='service' defaultChecked />
        <label htmlFor={el[1]}>
          <img className={classes.imgService} src={`src\\shared\\assets\\images\\${el[1]}.svg`} alt={`${el[1]}`} />
          <p>{el[0]}</p>
        </label>
      </li>
    );
  };

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
        <ul className={classes.buttonsService}>{service.map((el: [string, string]) => getButtonName(el))}</ul>
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
