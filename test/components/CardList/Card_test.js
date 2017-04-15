import { renderComponent , expect } from '../../test_helper';
import Card from '../../../src/components/CardList/Card';

describe('Card' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(Card);
  });

  it('renders something', () => {
    expect(component).to.exist;
  });

  it('has the appropriate className', () => {
    expect(component).to.have.class('card');
  });
});
