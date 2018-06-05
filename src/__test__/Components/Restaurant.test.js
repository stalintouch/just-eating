import Restaurant from '../../Components/Restaurant';
import imagesData from './data/imagesData.json';
import restaurantData from './data/restaurantData.json';
import CircularProgress from 'material-ui/CircularProgress';

describe('<Restaurant />', () => {
  let wrapper;
  let wrapperMount;
  const restaurants = {
    restaurants: restaurantData
  };
  const focus = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<Restaurant {...restaurants} focus={focus} />);
    wrapper.setState({ backgroundImages: imagesData });
  });

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('render a spinner when the component initial renders and no restaurant array has been loaded to state', () => {
    expect(wrapper.find(CircularProgress)).toHaveLength(1);
  });

  it('when clicked this button focus on the search bar, it needs to be delay until the component gets props and setstate to render', async () => {
    const button = await wrapper.find('#restaurant').first();

    await new Promise(resolve => {
      setTimeout(() => {
        resolve();
        button.simulate('click', { preventDefault() {} });
        expect(focus).toBeCalled();
      }, 1000);
    });
  });
});
