import Form from '../../Components/Form';

describe('<Form />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Form />);
    expect(wrapper).toMatchSnapshot();
  });

  it('it submits the form passing the value to a parent function', () => {
    const updateCity = jest.fn();
    const wrapper = shallow(<Form updateCity={updateCity} />);
    wrapper.find('form').simulate('submit', { preventDefault() {} });

    // make sure updateCity have been called
    expect(updateCity).toHaveBeenCalled();

    // check this function has been called with the correct input from component state
    expect(updateCity).toBeCalledWith(wrapper.state().input);
  });
});
