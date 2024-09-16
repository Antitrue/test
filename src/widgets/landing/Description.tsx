import { Flex } from 'antd';

import Class from './Description.module.scss';
import about_img from '/about_img1.svg';

function Description() {
  return (
    <Flex className={Class.container}>
      <Flex vertical className={Class.description}>
        <div>
          <div className={Class.description__header}>Ветеринарная клиника Слон в Краснодаре</div>
          <div className={Class.description__body}>
            Первый филиал сети ветеринарных центров СЛОН открыл свои двери для владельцев и их питомцев в 2008 году в
            городе Сочи. На данный момент успешно работают и оказывают квалифицированные услуги 10 филиалов в городах
            Сочи и Краснодаре.
          </div>
          <div className={Class.history__header}>История создания сети ветеринарных центров «СЛОН»</div>
          <div className={Class.history__body}>
            Ветеринарная клиника Слон в Краснодаре - одна из ведущих и наиболее современных центров по оказанию помощи
            животным. ...
          </div>
          <button className={Class.show_more_button}>Читать полностью</button>
        </div>
        <Flex className={Class.facts}>
          <div className={Class.facts__block}>
            <div className={Class.facts_big}>12 лет</div>
            <div className={Class.facts_small}>Помогаем животным быть здоровыми</div>
          </div>
          <div className={Class.facts__block}>
            <div className={Class.facts_big}>2000+</div>
            <div className={Class.facts_small}>Успешно сделанных операций</div>
          </div>
          <div className={Class.facts__block}>
            <div className={Class.facts_big}>90%</div>
            <div className={Class.facts_small}>Клиентов рекомендуют нас своим знакомым</div>
          </div>
        </Flex>
      </Flex>
      <img src={about_img} alt='about_img' className={Class.about_img} />
    </Flex>
  );
}

export default Description;
