import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@material-ui/core';
import { ReactQueryDevtools } from 'react-query/devtools';

import App from 'App';
import LocalizedFormat from 'dayjs/plugin/localizedFormat';
import dayjs from 'dayjs';
import { BrowserRouter as Router } from 'react-router-dom';
import { theme } from 'theme/theme';
import reportWebVitals from './reportWebVitals';
import './assets/css/body.css';
import { NotificationsProvider } from 'context/notifications';
import { UserProvider } from 'context/user';
import { QueryClient, QueryClientProvider } from 'react-query';
import { SnackbarProvider } from 'notistack';

const queryClient = new QueryClient();
dayjs.extend(LocalizedFormat);

ReactDOM.render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<ThemeProvider theme={theme}>
				<Router>
					<UserProvider>
						<NotificationsProvider>
							<SnackbarProvider
								maxSnack={3}
								anchorOrigin={{
									vertical: 'bottom',
									horizontal: 'right',
								}}
							>
								<App />
							</SnackbarProvider>
						</NotificationsProvider>
					</UserProvider>
				</Router>
			</ThemeProvider>
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	</React.StrictMode>,
	document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
