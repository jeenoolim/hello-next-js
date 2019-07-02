import Document, { Head, Main, NextScript } from 'next/document';
import Layout from './components/Layout';

export default class Template extends Document {
	static async getInitialProps({ req }) {
		const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
		return { userAgent };
	}

	render() {
		return (
			<html style={{ padding: 0, margin: 0, height: '100%' }}>
				<head>
					<title>Example Template</title>
					<link
						rel="stylesheet"
						href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
						integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
						crossOrigin="anonymous"
					/>
				</head>

				<body style={{ height: '100%' }}>
					<Main style={{ height: '100%' }} />
					<NextScript />
				</body>
			</html>
		);
	}
}
