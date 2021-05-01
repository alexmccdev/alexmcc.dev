import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    render() {
        const setInitialTheme = `
            function getUserPreference() {
            if(window.localStorage.getItem('theme')) {
                return window.localStorage.getItem('theme')
            }
            return window.matchMedia('(prefers-color-scheme: dark)').matches
                        ? 'dark'
                        : 'light'
            }
            document.querySelector('html').className = getUserPreference();
        `

        return (
            <Html lang="en">
                <Head>
                    <meta charSet="UTF-8" />
                    <meta name="description" content={`${process.env.myName} - ${process.env.myJobTitle}`} />
                    <meta name="keywords" content={process.env.myJobTitle} />
                    <meta name="author" content={process.env.myName} />
                </Head>
                <body className="text-primary bg-secondary dark:text-primaryDark dark:bg-secondaryDark">
                    <script dangerouslySetInnerHTML={{ __html: setInitialTheme }} />
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
