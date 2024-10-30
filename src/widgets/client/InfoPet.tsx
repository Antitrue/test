import type { CollapseProps } from 'antd';
import { Collapse, ConfigProvider } from 'antd';
import { DownOutlined } from '@ant-design/icons';

import styles from './InfoPet.module.scss';
import { useGetDewormingByPetQuery } from '../../shared/services/api/client/deworming.api';
import { useGetAllVaccinationsQuery } from '../../shared/services/api/client/vaccination.api';
import { useGetPetContactQuery } from '../../shared/services/api/client/petContact.api';
import { useGetExternalProcedureQuery } from '../../shared/services/api/client/external.api';
import { useGetAllReproductionQuery } from '../../shared/services/api/client/reproduction.api';

type Props = {
  petId: number;
};

const InfoPet: React.FC<Props> = ({ petId }) => {
  const { data: dewormingInfo } = useGetDewormingByPetQuery(petId);
  const { data: vaccinationInfo } = useGetAllVaccinationsQuery(petId);
  const { data: contactInfo } = useGetPetContactQuery(petId);
  const { data: externalInfo } = useGetExternalProcedureQuery(petId);
  const { data: reproductionInfo } = useGetAllReproductionQuery(petId);

  const items: CollapseProps['items'] = [
    {
      key: '1',
      label: 'deworming',
      children: <p>{dewormingInfo ? JSON.stringify(dewormingInfo) : null} </p>,
    },
    {
      key: '2',
      label: 'vaccination',
      children: <p>{vaccinationInfo ? JSON.stringify(vaccinationInfo) : null} </p>,
    },
    {
      key: '3',
      label: 'contact',
      children: <p>{contactInfo ? JSON.stringify(contactInfo) : null} </p>,
    },
    {
      key: '4',
      label: 'extarnal',
      children: <p>{externalInfo ? JSON.stringify(externalInfo) : null} </p>,
    },
    {
      key: '5',
      label: 'reproduction',
      children: <p>{reproductionInfo ? JSON.stringify(reproductionInfo) : null} </p>,
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
