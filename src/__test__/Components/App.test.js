import App from '../../App';
import Navbar from '../../Components/Navbar';
import Restaurant from '../../Components/Restaurant';
import Form from '../../Components/Form';

describe('<App />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('renders the navbar component inside App correctly', () => {
    expect(wrapper.find(Navbar)).toHaveLength(1);
  });

  it('renders the Restaurant component inside App correctly', () => {
    expect(wrapper.find(Restaurant)).toHaveLength(1);
  });

  it('renders the Form component inside App correctly', () => {
    expect(wrapper.find(Form)).toHaveLength(1);
  });

  it('check state and calls componentDidMount  and checks the state changes between the two phases', async () => {
    // check if restaurants and city are empty on the state object
    expect(wrapper.state().restaurants).toEqual([]);
    expect(wrapper.state().city).toEqual('');

    // calls componentDidMount and update state
    await wrapper.instance().componentDidMount();

    // check if calling componentDidMount has updated both state by checking the length of the array and that city is not an empty string
    expect(wrapper.state().restaurants.length).toBeGreaterThan(1);
    expect(wrapper.state().city).toBeTruthy();
  });
});
