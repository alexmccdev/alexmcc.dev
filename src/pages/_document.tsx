import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <meta charSet="UTF-8" />
                    <meta name="description" content={`${process.env.myName} - ${process.env.myJobTitle}`} />
                    <meta name="keywords" content={process.env.myJobTitle} />
                    <meta name="author" content={process.env.myName} />
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
                                if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                                    document.querySelector('html').classList.add('dark')
                                } else {
                                    document.querySelector('html').classList.remove('dark')
                                }
                            `,
                        }}
                    />
                </Head>
                <body className="text-primary bg-secondary dark:text-primaryDark dark:bg-secondaryDark">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
