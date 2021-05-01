import React from 'react'
import PageWrapper from '@components/Layout/PageWrapper'

const HeroSection: React.FC = () => {
    return (
        <PageWrapper>
            <p className="max-w-xl text-2xl sm:text-3xl z-40 tracking-tight">
                Hi{' '}
                <span role="img" aria-label="hand wave">
                    👋
                </span>
                , I'm <span className="font-bold">{process.env.myName}</span>.
                <br />
                I'm a {process.env.myJobTitle.toLowerCase()} working remote from beautiful{' '}
                <a
                    className="underline cursor-pointer"
                    href={process.env.locationLink}
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    {process.env.myLocation}
                </a>
                .
            </p>
        </PageWrapper>
    )
}

export default HeroSection
