import SocialLinkBar from '@components/SocialLinkBar'
import React from 'react'

const Footer: React.FC = () => {
    return (
        <footer className="text-center text-sm px-4 pb-4 w-full bg-footer dark:bg-footerDark">
            <div className="flex justify-center pb-4">
                <SocialLinkBar />
            </div>
            Copyright &copy; {new Date().getFullYear()} {process.env.siteName}
        </footer>
    )
}

export default Footer
