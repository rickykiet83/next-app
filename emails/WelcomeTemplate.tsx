import {
	Body,
	Container,
	Html,
	Link,
	Preview,
	Tailwind,
	Text,
} from '@react-email/components';
import React, { CSSProperties } from 'react';

const WelcomeTemplate = ({ name }: { name: string }) => {
	return (
		<Html>
			<Preview>Welcome aboard!</Preview>
			<Tailwind>
				<Body className='bg-white'>
					<Container>
						<Text className='font-bold text-3xl'>Hello {name}</Text>
						<Link href='https://kietpham.dev'>www.kietpham.dev</Link>
					</Container>
				</Body>
			</Tailwind>
		</Html>
	);
};

const body: CSSProperties = {
	background: '#fff',
};

const heading: CSSProperties = {
	fontSize: '23px',
};

export default WelcomeTemplate;
