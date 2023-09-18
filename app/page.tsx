import Image from 'next/image';
import Link from 'next/link';
import ProductCard from './components/ProductCard/ProductCard';
import { authOptions } from './api/auth/[...nextauth]/route';
import coffee from '@/public/images/coffee.jpg';
import { getServerSession } from 'next-auth';

export default async function Home() {
	const session = await getServerSession(authOptions);

	return (
		<main className='relative h-screen'>
			<h1>Hello {session && <span>{session.user?.name}</span>}</h1>
			<Image
				src='https://bit.ly/react-cover'
				alt='Coffee'
				fill
				className='object-cover'
				sizes='(max-width: 480px) 100vw, (max-width: 786px) 50vw, 33vw'
				quality={100}
				priority={true}
			/>
		</main>
	);
}
