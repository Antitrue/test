import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import PetSidebar from './PetSidebar';
import { Provider } from 'react-redux';
import { store } from '../../shared/services/store/store';

describe('PetSidebar component', () => {
  it('PetSidebar renders', () => {
    const { baseElement } = render(
      <Provider store={store}>
        <PetSidebar />
      </Provider>
    );

    expect(baseElement).toMatchSnapshot();
  });
});
