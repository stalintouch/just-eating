import NotFound from '../../Components/NotFound';

describe('<NotFound />', () => {
  it('renders correctly', () => {
    const wrapper = mount(<NotFound />);
    expect(wrapper).toMatchSnapshot();
  });
});
