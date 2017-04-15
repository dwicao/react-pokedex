import { renderComponent , expect } from '../../test_helper';
import CardList from '../../../src/components/CardList';

describe('CardList' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(CardList);
  });

  it('renders something', () => {
    expect(component).to.exist;
  });

  it('has the appropriate className', () => {
    expect(component).to.have.class('card-list');
  });
});
