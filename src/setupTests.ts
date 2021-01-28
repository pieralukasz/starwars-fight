import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

import React from "react"
React.useLayoutEffect = React.useEffect

configure({ adapter: new Adapter() });
