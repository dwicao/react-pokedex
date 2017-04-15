import { renderComponent , expect } from '../../test_helper';
import TopBar from '../../../src/components/TopBar';

describe('TopBar' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(TopBar);
  });

  it('renders something', () => {
    expect(component).to.exist;
  });

  it('has the appropriate className', () => {
    expect(component).to.have.class('top-bar');
  });

  it('shows correct title', () => {
    expect(component.find('.top-bar-title')).to.have.text('Pokedex');
  });
});
