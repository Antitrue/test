import { Flex } from 'antd';

import Class from './Pets.module.scss';

function Pets() {
  return (
    <Flex vertical className={Class.container}>
      <div className={Class.header}>Работаем со всеми видами животных</div>
      <Flex className={Class.pets}>
        <button type='button' className={Class.buttons + ' ' + Class.button_1}>
          01
        </button>
        <button type='button' className={Class.buttons + ' ' + Class.button_2}>
          02
        </button>
        <button type='button' className={Class.buttons + ' ' + Class.button_3}>
          03
        </button>
        <button type='button' className={Class.buttons + ' ' + Class.button_4}>
          04
        </button>
        <button type='button' className={Class.buttons + ' ' + Class.button_5}>
          05
        </button>
        <button type='button' className={Class.buttons + ' ' + Class.button_6}>
          06
        </button>
        <button type='button' className={Class.buttons + ' ' + Class.button_7}>
          07
        </button>
        <button type='button' className={Class.buttons + ' ' + Class.button_8}>
          Вызвать доктора
          <br />
          на дом
        </button>
      </Flex>
    </Flex>
  );
}

export default Pets;
