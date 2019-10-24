import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

// If using the fetch API
import fetch from 'node-fetch';
global.fetch = fetch;

import 'jest-extended';
