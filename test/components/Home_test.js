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

  it('render TopBar component', () => {
    expect(component.find('div')).to.have.class('top-bar');
  });

  it('has the appropriate className', () => {
    expect(component).to.have.class('home-container');
  });
});
