import Navbar from '../Components/Navbar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

describe('<Navbar />', () => {
  let wrapperShallow;
  let wrapperMount;

  beforeEach(() => {
    wrapperShallow = shallow(<Navbar />);

    wrapperMount = mount(
      <MuiThemeProvider>
        <Navbar />
      </MuiThemeProvider>
    );
  });

  it('renders correctly', () => {
    expect(wrapperShallow).toMatchSnapshot();
  });

  it('selects the navbar text', () => {
    const text = wrapperMount
      .find('span')
      .first()
      .text();
    expect(text).toEqual('Just Eat it!');
  });

  it('focus on search bar when clicked', () => {
    const leftSpan = wrapperMount.find('span').first();
    leftSpan.simulate('click', 'autoComplete');
  });
});
