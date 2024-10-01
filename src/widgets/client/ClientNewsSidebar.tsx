import NewsData from './NewsData';
import NewsSection from '../../shared/ui/button/newsSection/NewsSection';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { useGetClientNewsQuery } from '../../shared/services/api/client/clientNews.api';

import 'swiper/css';
import 'swiper/css/autoplay';
import styles from './styles.module.scss';
import { useEffect } from 'react';

const ClientNewsSidebar = () => {
  const tablet = window.matchMedia('(max-width: 834px)');
  const { data = [], isError, isLoading } = useGetClientNewsQuery();

  useEffect(() => console.log(tablet.matches), [tablet.matches]);

  return (
    <Swiper
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      breakpoints={{
        901: {
          slidesPerView: 3,
        },
        0: {
          slidesPerView: 1,
          spaceBetween: 0,
          loop: true,
          speed: 1000,
        },
      }}
      modules={[Autoplay]}
      className={styles.newsSidebar}>
      <SwiperSlide>
        {isError ? <div>Data news is error</div> : null}
        {data ? <NewsSection isLoading={isLoading} topic={'Новости'} articles={data} /> : <div>There aren`t news</div>}
      </SwiperSlide>
      <SwiperSlide>
        <NewsSection isLoading={isLoading} topic={'Акции'} articles={NewsData.specialOffer} />
      </SwiperSlide>
      <SwiperSlide>
        <NewsSection isLoading={isLoading} topic={'Скидки'} articles={NewsData.sale} />
      </SwiperSlide>
    </Swiper>
  );
};

export default ClientNewsSidebar;
