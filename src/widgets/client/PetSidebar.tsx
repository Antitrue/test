import type { MenuProps } from 'antd';
import { Flex, Menu, Button, ConfigProvider } from 'antd';
import cn from 'classnames';
import { v4 as uuidv4 } from 'uuid';
import { useGetAllPetsQuery } from '../../shared/services/api/client/petClient.api';

import styles from './PetSidebar.module.scss';
import { useMemo } from 'react';

type MenuItem = Required<MenuProps>['items'][number];

const PetSidebar: React.FC = () => {
  const { data = [], isError, isLoading } = useGetAllPetsQuery();

  const items: MenuItem[] = useMemo(() => {
    return data.map((pet, index: number) => {
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
      const iconUrl =
        typeof pet.avatar === 'string'
          ? pet.avatar
          : 'https://static-00.iconduck.com/assets.00/animal-icon-2048x2048-rdj39f2s.png';
      return {
        key: uuidv4(),
        label: pet.name,
        icon: <img src={iconUrl} alt={pet.name} />,
        children: [{ key: `${index}${index}`, label: buttons }],
      };
    });
  }, [data]);

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
        {isLoading ? <div>Loading...</div> : null}
        {isError ? (
          <div>Pets data are having error</div>
        ) : (
          <Menu selectable={false} className={styles.sidebar__menu} mode='inline' items={items} />
        )}
      </ConfigProvider>
    </Flex>
  );
};

export default PetSidebar;
