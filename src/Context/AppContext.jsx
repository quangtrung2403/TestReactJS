import { createContext } from 'react';
import { data } from '../utils/context';

export const AppContext = createContext(null);

const AppProvider = ({ children }) => {

	return (
		<AppContext.Provider value={{ data }}>
			{children}
		</AppContext.Provider>
	);
};

export { AppProvider };