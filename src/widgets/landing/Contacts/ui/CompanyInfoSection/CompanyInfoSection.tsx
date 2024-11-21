import { Link } from 'react-router-dom';

import { CompanyInfoSectionProps } from './CompanyInfoSectionTypes';

export default function CompanyInfoSection({ title, to, items }: CompanyInfoSectionProps) {
  return (
    <div>
      <h2>{title}</h2>
      <ul>
        {items.map(item => (
          <li key={item}>
            <Link to={to} style={{ textDecoration: 'none', color: '#656A6E' }}>
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
