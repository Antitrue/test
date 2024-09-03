import { Flex } from 'antd';

import styles from './Pets.module.scss';
import { pets } from './Pets.constants';
import { ReactNode } from 'react';

function Pets() {
  return (
    <Flex vertical className={styles.container}>
      <div className={styles.header}>Работаем со всеми видами животных</div>
      <Flex className={styles.pets}>
        {pets.map<ReactNode>((pet: string, id: number): ReactNode => {
          return (
            <div key={id} className={styles.cards + ' ' + styles[`card_${id + 1}`]}>
              <span className={styles.card_number}>{`0${id + 1}`}</span>
              <span className={styles.card_name}>{pet}</span>
            </div>
          );
        })}
        <button type='button' className={styles.cards + ' ' + styles.button}>
          <span>Вызвать доктора </span>
          <span>на дом</span>
        </button>
      </Flex>
    </Flex>
  );
}

export default Pets;
