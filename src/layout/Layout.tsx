import React from 'react';
import NavbarC from '../components/navbar';

type Props = {
	children: React.ReactNode;
};

const Layout = ({ children }: Props) => (
	<div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
		<NavbarC />
		<main className="mt-[5vh] mb-[5vh]">{children}</main>
	</div>
);

export default Layout;
