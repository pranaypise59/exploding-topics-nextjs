import { Html, Head, Main, NextScript } from "next/document";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Header/>
        <Main />
        <NextScript />
        <Footer/>
      </body>
    </Html>
  );
}
