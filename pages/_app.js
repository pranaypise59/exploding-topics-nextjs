import { DataProvider } from "@/contexts/DataContext";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <DataProvider>
      <Component {...pageProps} />
    </DataProvider>
  );
}
