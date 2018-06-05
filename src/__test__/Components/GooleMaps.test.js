import GoogleMaps from '../../Components/GoogleMaps';

describe('<GoogleMaps />', () => {
  let wrapperShallow;
  let wrapperMount;

  it('renders correctly', () => {
    wrapperShallow = shallow(<GoogleMaps />);
    expect(wrapperShallow).toMatchSnapshot();
  });
});
