import { Button } from 'antd';

import Class from './styles.module.scss';

function Greeting() {
  function fnToUpperCase(text: string) {
    return text.toUpperCase();
  }

  return (
    <div className={Class.container}>
      <h1 className={Class.headerText}>
        Мы заботимся <br /> о здоровье <br />{' '}
        <span className={Class.headerText__lastLine}>{fnToUpperCase('ваших питомцев')}</span>
      </h1>
      <Button type='primary' className={Class.button}>
        {fnToUpperCase('записаться на приём')}
      </Button>
    </div>
  );
}

export default Greeting;
