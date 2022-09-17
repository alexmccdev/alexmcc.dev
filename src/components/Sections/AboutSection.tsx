import React from 'react'
import Link from 'next/link'
import PageWrapper from '@components/Layout/PageWrapper'

const AboutSection: React.FC = () => {
    return (
        <PageWrapper>
            <div className="flex flex-col md:flex-row">
                <img
                    className="overflow-hidden rounded-full max-h-52 max-w-52 flex-shrink-0 self-center mb-10 md:mr-8 md:mb-0"
                    src="/alex.jpg"
                    alt={process.env.myName}
                    title={process.env.myName}
                />
                <p className="max-w-xl text-xl z-50 tracking-tight">
                    Currently, I am a software engineer working on improving loan applicant verifications at{' '}
                    <a
                        className="underline cursor-pointer"
                        href={process.env.employerLink}
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        {process.env.employerName}
                    </a>
                    {process.env.employerName.charAt(process.env.employerName.length - 1) !== '.' && '.'} I began my
                    career as an Industrial &amp; Systems Engineer in Columbus, Ohio working in manufacturing and on
                    data migration projects before learning{' '}
                    <span role="img" aria-label="sparkle">
                        ✨
                    </span>
                    software development
                    <span role="img" aria-label="sparkle">
                        ✨
                    </span>
                    . In my free time I enjoy learning new technologies, hacking on{' '}
                    <span className="underline cursor-pointer">
                        <Link href="/projects">side-projects</Link>
                    </span>
                    , and rock climbing!{' '}
                    <span role="img" aria-label="strong">
                        💪
                    </span>
                </p>
            </div>
        </PageWrapper>
    )
}

export default AboutSection
