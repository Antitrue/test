import type { CollapseProps } from 'antd';
import { Collapse, ConfigProvider } from 'antd';
import { DownOutlined } from '@ant-design/icons';

import styles from './InfoPet.module.scss';
import { useGetDewormingByPetQuery } from '../../shared/services/api/client/deworming.api';
import { useGetAllVaccinationsQuery } from '../../shared/services/api/client/vaccination.api';

// const text = `
//   A dog is a type of domesticated animal.
//   Known for its loyalty and faithfulness,
//   it can be found as a welcome guest in many households across the world.
// `;

// const items: CollapseProps['items'] = [
//   {
//     key: '1',
//     label: 'This is panel header 1',
//     children: <p>{text}</p>,
//   },
//   {
//     key: '2',
//     label: 'This is panel header 2',
//     children: <p>{text}</p>,
//   },
//   {
//     key: '3',
//     label: 'This is panel header 3',
//     children: <p>{text}</p>,
//   },
//   {
//     key: '4',
//     label: 'This is panel header 4',
//     children: <p>{text}</p>,
//   },
//   {
//     key: '5',
//     label: 'This is panel header 5',
//     children: <p>{text}</p>,
//   },
//   {
//     key: '6',
//     label: 'This is panel header 6',
//     children: <p>{text}</p>,
//   },
// ];

const InfoPet: React.FC = () => {
  const id = 1;
  const { data: data1 } = useGetDewormingByPetQuery(id);
  const { data } = useGetAllVaccinationsQuery(id);
  console.log(data);
  const items: CollapseProps['items'] = [
    {
      key: '1',
      label: 'deworming',
      children: <p>{data1 ? JSON.stringify(data1) : null} </p>,
    },
    {
      key: '2',
      label: 'vaccination',
      children: <p>{data ? JSON.stringify(data) : null} </p>,
    },
  ];

  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>Информация о питомце</h2>
      <ConfigProvider
        theme={{
          components: {
            Collapse: {
              headerBg: '#1676F3',
              contentBg: '#F5F5F5',
            },
          },
        }}>
        <Collapse
          className={styles.collapse}
          items={items}
          defaultActiveKey={['1']}
          style={{ borderRadius: 0, border: 'none' }}
          expandIconPosition='end'
          expandIcon={({ isActive }) => (
            <DownOutlined style={{ color: '#FFFFFF', fontSize: '16px' }} rotate={isActive ? 180 : 0} />
          )}
        />
      </ConfigProvider>
    </section>
  );
};

export default InfoPet;
