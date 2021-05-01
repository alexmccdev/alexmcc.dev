import React from 'react'

const PageWrapper: React.FC = ({ children }) => {
    return (
        <section className="flex h-full justify-center items-center px-4 pb-10 object-cover bg-bottom bg-no-repeat bg-svg dark:bg-svgDark">
            {children}
        </section>
    )
}

export default PageWrapper
