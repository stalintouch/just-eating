import Navbar from '../../Components/Navbar';

describe('<Navbar />', () => {

  it('renders correctly', () => {
    const wrapperShallow = shallow(<Navbar />);
    expect(wrapperShallow).toMatchSnapshot();
  });

  it('focus on the search bar when the navbar is clicked', () => {
    const focus = jest.fn()
    const wrapper = shallow(<Navbar focus={focus} />);
    wrapper.find('.navbar').first().simulate('click', { preventDefault() {} })

    expect(focus).toBeCalled();
  });
});
