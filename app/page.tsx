'use client';

import Image from 'next/image';
// import _ from 'lodash';
import dynamic from 'next/dynamic';
import { useState } from 'react';

const HeavyComponent = dynamic(() => import('./components/HeavyComponent'), {
	ssr: false,
	loading: () => <p>Loading...</p>,
});

export default function Home() {
	// cannot Use this with 'use client'
	// const session = await getServerSession(authOptions);

	const [isVisible, setIsVisible] = useState(false);

	return (
		<main className='relative h-screen'>
			{/* <h1 className='mb-4'>
				Hello {session && <span>{session.user?.name}</span>}
			</h1> */}
			<h1 className='mb-4'>Hello</h1>
			<Image
				src='https://bit.ly/react-cover'
				alt='Coffee'
				width={200}
				height={170}
				className='object-cover'
				sizes='(max-width: 480px) 50vw, (max-width: 786px) 50vw, 33vw'
				quality={100}
				priority={true}
			/>
			<button onClick={() => setIsVisible(true)}>Show Heavy Component</button>
			{isVisible && <HeavyComponent />}

			{/* <button
				onClick={async () => {
					const _ = (await import('lodash')).default; //lazy loading
					const users = [{ name: 'c' }, { name: 'b' }, { name: 'a' }];

					const sorted = _.orderBy(users, ['name']);
					console.log(sorted);
				}}
			>
				Show
			</button> */}
		</main>
	);
}

// export async function generateMetadata(): Promise<Metadata> {
// 	const product = await fetch(''); // get data from ....

// 	return {
// 		title: 'product.title',
// 		description: 'product.description',
// 	};
// }
