import Document, { Head, Main, NextScript } from "next/document";

export default class Template extends Document {
    render() {
        return (
            <html>
                <head>
                    <title>Example Template</title>
                    <link
                        rel="stylesheet"
                        href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                        crossOrigin="anonymous"
                    />
                </head>

                <body>
                    <div className="container">
                        <Main />
                        <footer
                            style={{
                                width: "100%",
                                position: "fixed",
                                bottom: 0,
                                background: "gray"
                            }}
                        >
                            footer section
                        </footer>
                    </div>
                    <NextScript />
                </body>
            </html>
        );
    }
}
