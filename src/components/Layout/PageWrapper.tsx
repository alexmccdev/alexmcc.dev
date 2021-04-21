import React from 'react'

interface IPageWrapperProps {}

const PageWrapper: React.FC<IPageWrapperProps> = ({ children }) => {
    return <section className="flex h-full justify-center items-center px-4 pb-10">{children}</section>
}

export default PageWrapper
