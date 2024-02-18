import Footer from "@/_components/Footer";
import Header from "@/_components/Header";
import { Html, Head, Main, NextScript } from "next/document";

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
