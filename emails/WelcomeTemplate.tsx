import {
	Body,
	Container,
	Html,
	Link,
	Preview,
	Text,
} from '@react-email/components';

import React from 'react';

const WelcomeTemplate = ({ name }: { name: string }) => {
	return (
		<Html>
			<Preview>Welcome aboard!</Preview>
			<Body>
				<Container>
					<Text>Hello {name}</Text>
					<Link href='https://kietpham.dev'>www.kietpham.dev</Link>
				</Container>
			</Body>
		</Html>
	);
};

export default WelcomeTemplate;
