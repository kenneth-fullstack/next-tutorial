import Head from 'next/head'

const Meta = ({ title, keywords, description }) => {
    return (
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name='keywerds' content={keywords} />
            <meta name="description" content={description} />
            <meta charSet='utf-8' />
            <link rel="icon" href="/favicon.ico" />
            <title>Create Next App</title>
        </Head>
    )
}

Meta.defaultProps = {
    title: 'WebDev News',
    keywords: 'web development, programming',
    description: 'Get the latest news in web dev'
}

export default Meta
