import NewsData from './NewsData';
import NewsSection from '../../shared/ui/button/newsSection/NewsSection';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/autoplay';
import styles from './styles.module.scss';
import { useEffect } from 'react';

const ClientNewsSidebar = () => {
  const tablet = window.matchMedia('(max-width: 834px)');

  useEffect(() => console.log(tablet.matches), [tablet.matches]);

  return (
    <Swiper
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      breakpoints={{
        834: {
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
        <NewsSection topic={'Новости'} articles={NewsData.news} />
      </SwiperSlide>
      <SwiperSlide>
        <NewsSection topic={'Акции'} articles={NewsData.specialOffer} />
      </SwiperSlide>
      <SwiperSlide>
        <NewsSection topic={'Скидки'} articles={NewsData.sale} />
      </SwiperSlide>
    </Swiper>
  );
};

export default ClientNewsSidebar;
