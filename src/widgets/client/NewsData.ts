import HorsesImg from '../../shared/assets/images/horse-article.png';
import ChickenImg from '../../shared/assets/images/chicken-article.png';
import SaleImg from '../../shared/assets/images/sale.png';
import SpecialOfferImg from '../../shared/assets/images/special-offer.png';

//import BookMarkDisabled from '../../shared/assets/images/bookmark-disabled.svg';
//import BookMarkEnabled from '../../shared/assets/images/bookmark-enabled.svg';

const NewsData = {
  news: [
    {
      id: Math.random() * Math.random(),
      url: HorsesImg,
      title: 'Animal Scientist Discovers:',
      content:
        'Researchers from the University of All Knowing have discovered a new way to breed farm animals, read without registration and SMS!!!',
      markEnabled: true,
    },
    {
      id: Math.random() * Math.random(),
      url: ChickenImg,
      title: 'Animal Scientist Discovers:',
      content:
        'Researchers from the University of All Knowing have discovered a new way to breed farm animals, read without registration and SMS!!!',
      markEnabled: false,
    },
  ],
  specialOffer: [
    {
      id: Math.random() * Math.random(),
      url: SpecialOfferImg,
      title: 'Some Stock',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed incididunt ut labore et dolore, read without registration and SMS!!!',
    },
  ],
  sale: [
    {
      id: Math.random() * Math.random(),
      url: SaleImg,
      title: 'Some Stock',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed incididunt ut labore et dolore, read without registration and SMS!!!',
    },
  ],
};

export default NewsData;
