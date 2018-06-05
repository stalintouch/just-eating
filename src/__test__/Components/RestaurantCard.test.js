import RestaurantCard from '../../Components/RestaurantCard';
import GoogleMaps from '../../Components/GoogleMaps';
import NotFound from '../../Components/NotFound';

describe('<RestaurantCard />', () => {
  let restaurantInfo;
  let wrapper;
  beforeEach(() => {
    restaurantInfo = {
      name: 'test',
      address: 'test',
      area: 'test',
      postal_code: 'test',
      price: 1,
      phone: '555-555-5555',
      reserve_url: 'test',
      image_url: 'test',
      lat: 'test',
      lng: 'test'
    };
    wrapper = shallow(<RestaurantCard {...{ restaurantInfo }} />);
  });

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('render a google map component without issues', () => {
    expect(wrapper.find(GoogleMaps)).toHaveLength(1);
  });
});
