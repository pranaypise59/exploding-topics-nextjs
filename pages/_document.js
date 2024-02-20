import Footer from "@/_components/Footer";
import Header from "@/_components/Header";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <script async src="https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.min.js"></script>
        <script async src="https://cdn.jsdelivr.net/npm/chartjs-plugin-trendline"></script>
      </Head>
      <body>
        <Header/>
        <Main />
        <NextScript />
        <Footer/>
      </body>
    </Html>
  );
}
