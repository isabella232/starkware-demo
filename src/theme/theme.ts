import { createMuiTheme } from '@material-ui/core/styles';
import hexToRgba from 'hex-to-rgba';

export const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#FE4A49',
		},
		background: {
			paper: '#28286E',
		},
		text: {
			primary: '#FAFAF5',
			secondary: hexToRgba('#FAFAF5', 0.6),
		},
	},
	typography: {
		fontFamily: 'IBM Plex Sans',
		subtitle1: {
			fontSize: '14px',
			lineHeight: '18px',
		},
		subtitle2: {
			fontWeight: 300,
			fontSize: '10px',
			lineHeight: '13px',
		},
		body1: {
			fontStyle: 'normal',
			fontSize: '20px',
			lineHeight: '26px',
		},
		body2: {
			fontSize: '22px',
			lineHeight: '29px',
		},
	},
	overrides: {},
});