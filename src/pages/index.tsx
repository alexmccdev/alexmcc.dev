import Head from 'next/head'
import HeroSection from '@components/Sections/HeroSection'

const Home: React.FC = () => {
    return (
        <>
            <Head>
                <title>Home | {process.env.myName}</title>
            </Head>
            <HeroSection />
        </>
    )
}

export default Home
