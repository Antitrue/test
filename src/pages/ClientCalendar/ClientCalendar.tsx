import { Calendar, CalendarProps } from 'antd';
import type { Dayjs } from 'dayjs';
import { useGetAppointmentCalendarQuery } from '../../shared/services/api/client/clientAppointment.api.ts';
import cl from './ClientCalendar.module.scss';
import { IAppointments } from '../../shared/services/api/client/clientAppointmentDTO.ts';
import { useEffect, useState } from 'react';

type ClientCalendarProps = {
  showCalendar: boolean;
};

const ClientCalendar = ({ showCalendar }: ClientCalendarProps) => {
  const { data: { days } = { days: [] } } = useGetAppointmentCalendarQuery();
  const [screen, setScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 480) {
        setScreen(true);
      } else {
        setScreen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const extractDays = (type: string) => {
    return days.map(item => (type === 'date' ? item.date : item.appointments));
  };

  const getListData = (value: Dayjs) => {
    const dateFormat = value.format('YYYY-MM-DD');
    const dateList = extractDays('date');
    const timeList = extractDays('appointments') as IAppointments[][];
    let listData: { type: string; content: string; available: boolean }[] = [];

    dateList.forEach(date => {
      if (dateFormat === date) {
        timeList.forEach((item: IAppointments[]) => {
          listData = item.map(appointment => ({
            type: 'error',
            content: appointment.time.slice(0, 5),
            available: appointment.available,
          }));
        });
      }
    });

    return listData;
  };

  const monthCellRender = () => {
    return null;
  };

  const dateCellRender = (value: Dayjs) => {
    const listData = getListData(value);

    return (
      <ul className={cl.events}>
        {listData.map(item => (
          <li className={!item.available ? cl['not-available'] : cl['available']} key={item.content}>
            {item.content}
          </li>
        ))}
      </ul>
    );
  };

  const cellRender: CalendarProps<Dayjs>['cellRender'] = (current, info) => {
    if (info.type === 'date') return dateCellRender(current);
    if (info.type === 'month') return monthCellRender();
    return info.originNode;
  };

  return (
    <div className={cl.container}>
      {showCalendar && <Calendar fullscreen={!screen} className={cl.calendar} cellRender={cellRender} />}
    </div>
  );
};

export default ClientCalendar;
