import React from 'react';
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

Enzyme.configure({ adapter: new Adapter(), disableLifecycleMethods: true });

global.React = React;
global.Enzyme = Enzyme;
global.shallow = shallow;
global.render = render;
global.mount = mount;
global.MuiThemeProvider = MuiThemeProvider;
