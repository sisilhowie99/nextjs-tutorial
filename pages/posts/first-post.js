import Head from 'next/head';
import Image from 'next/image';
import Link from "next/link";

const ProfilePic = () => (
    <Image src='/images/profile.jpg' height={144} width={144} alt='Profile' />
)

export default function FirstPost() {
	return (
		<>
            <Head>
                <title>First post</title>
            </Head>
			<h1>First Post</h1>
            <ProfilePic />
			<h2>
				<Link href="/">Return home</Link>
			</h2>
		</>
	);
}
