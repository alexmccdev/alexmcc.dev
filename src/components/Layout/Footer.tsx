import SocialLinkBar from '@components/SocialLinkBar'
import React from 'react'

interface IFooterProps {}

const Footer: React.FC<IFooterProps> = (props) => {
    return (
        <footer className="text-center text-sm p-4 w-full">
            <div className="flex justify-center mb-4">
                <SocialLinkBar />
            </div>
            Copyright &copy; {new Date().getFullYear()} {process.env.siteName}
        </footer>
    )
}

export default Footer
