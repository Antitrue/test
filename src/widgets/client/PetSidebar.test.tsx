import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import PetSidebar from './PetSidebar';
import { Provider } from 'react-redux';
import { store } from '../../shared/services/store/store';

const mockHandleGetPetId = jest.fn();

describe('PetSidebar component', () => {
  it('PetSidebar renders', () => {
    const { baseElement } = render(
      <Provider store={store}>
        <PetSidebar getPetId={mockHandleGetPetId} />
      </Provider>
    );

    expect(baseElement).toMatchSnapshot();
  });
});
