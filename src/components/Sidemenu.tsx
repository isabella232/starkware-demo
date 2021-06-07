import { Grid, Link, styled, Typography } from '@material-ui/core';
import Star from 'assets/menu/Star.svg';
import Block from 'assets/menu/Block.svg';
import Document from 'assets/menu/Document.svg';
import Github from 'assets/menu/Github.svg';
import Starkware from 'assets/menu/Starkware.svg';
import { ReactComponent as Collaboration } from 'assets/menu/Collaboration.svg';

import hexToRgba from 'hex-to-rgba';
import React from 'react';
import { StarknetLogo } from './common/StarknetLogo';
import { EXPLORER_URL } from '../constants';

const StyledContainer = styled(Grid)({
	height: '100%',
	width: 277,
	background: hexToRgba('#535387', 0.28),
	borderRight: '1px solid rgba(145, 145, 183, 0.26)',
});

interface MenuLink {
	label: string;
	icon: string;
	url: string;
}

const MenuItem = styled(Grid)({
	width: 230,
});

const MenuItemText = styled(Typography)({
	display: 'inline-block',
});

const MenuIcon = styled('img')({
	width: 15,
	height: 15,
	marginRight: 12,
});

const links: MenuLink[] = [
	{ label: 'What is StarkNet?', icon: Star, url: '/' },
	{ label: 'Block Explorer', icon: Block, url: EXPLORER_URL },
	{ label: 'Documentation', icon: Document, url: 'http://cairo-lang.org/docs/hello_starknet/' },
	{ label: 'See the Code', icon: Github, url: 'https://github.com/dOrgTech/starkware-demo/' },
	{ label: 'StarkWare', icon: Starkware, url: 'https://starkware.co/' },
];

const MenuItems = styled(Grid)({
	maxWidth: '100%',
});

const LogoContainer = styled(Grid)({
	width: '100%',
	height: 115,
});

const CollaborationContainer = styled(MenuItem)({
	marginBottom: 24,
});

export const Sidemenu: React.FC = () => {
	return (
		<StyledContainer container direction="column" alignItems="center" justify="space-between">
			<Grid item container>
				<LogoContainer item container justify="center" alignItems="center">
					<StarknetLogo />
				</LogoContainer>
				<MenuItems item container spacing={5} direction="column" alignItems="center">
					{links.map(({ label, icon, url }, i) => (
						<MenuItem item key={`menulink-${i}`}>
							<Link href={url} target="_blank" rel="noreferrer">
								<MenuIcon src={icon} />
								<MenuItemText>{label}</MenuItemText>
							</Link>
						</MenuItem>
					))}
				</MenuItems>
			</Grid>
			<MenuItems item container direction="column" alignItems="center">
				<CollaborationContainer item container alignItems="center">
					<Link href={'https://www.dorg.tech/#/'} target="_blank" rel="noreferrer">
						<Collaboration />
					</Link>
				</CollaborationContainer>
			</MenuItems>
		</StyledContainer>
	);
};
