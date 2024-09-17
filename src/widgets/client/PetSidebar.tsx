import { ReactElement } from 'react';
import type { MenuProps } from 'antd';
import { Flex, Menu, Button, ConfigProvider } from 'antd';
import cn from 'classnames';

import styles from './PetSidebar.module.scss';

type MenuItem = Required<MenuProps>['items'][number];
interface IPet {
  name: string;
  icon: ReactElement | null;
}
interface PetsArray {
  pets: IPet[];
}

const PetSidebar: React.FC<PetsArray> = ({ pets }) => {
  const items: MenuItem[] = pets.map((pet: IPet, index: number) => {
    const buttons = (
      <div>
        <a href={`/${pet.name}`} className={styles.sidebar__edit_link}>
          <Button type='primary' className={cn(styles.sidebar__buttons, styles.sidebar__edit_button)}>
            Редактировать
          </Button>
        </a>
        <Button
          type='primary'
          onClick={() => {
            console.log(`${pet.name} deleted`);
          }}
          danger
          className={cn(styles.sidebar__buttons, styles.sidebar__delete_button)}>
          Удалить
        </Button>
      </div>
    );

    return {
      key: index,
      label: pet.name,
      icon: pet.icon ? pet.icon : <span className={styles.sidebar__menu_no_icon} />,
      children: [{ key: `${index}${index}`, label: buttons }],
    };
  });

  return (
    <Flex vertical className={styles.sidebar}>
      <Flex className={styles.sidebar__header}>
        <span className={styles.sidebar__header_text}>Ваши питомцы</span>
        <button type='button' className={styles.sidebar__header_button}></button>
      </Flex>
      <ConfigProvider
        theme={{
          components: {
            Menu: {
              itemHoverBg: 'rgba(84, 150, 212, 0.2)',
              itemColor: 'rgba(58, 64, 69, 1)',
            },
          },
        }}>
        <Menu selectable={false} className={styles.sidebar__menu} mode='inline' items={items} />
      </ConfigProvider>
    </Flex>
  );
};

export default PetSidebar;
