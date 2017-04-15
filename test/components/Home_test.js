import { renderComponent , expect } from '../test_helper';
import Home from '../../src/components/Home';

describe('Home' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(Home);
  });

  it('renders something', () => {
    expect(component).to.exist;
  });

  it('has the appropriate className', () => {
    expect(component).to.have.class('home-container');
  });

  it('render TopBar component', () => {
    expect(component.find('div')).to.have.class('top-bar');
  });

  it('render CardList component', () => {
    expect(component.find('div')).to.have.class('card-list');
  });
});
