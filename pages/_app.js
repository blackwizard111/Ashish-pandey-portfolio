import "../styles/globals.css";
import dynamic from "next/dynamic";
import NextNProgress from "nextjs-progressbar";
import Layout from "../components/Layout";
const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});
function MyApp({ Component, pageProps }) {
  return (
    <>
      <AnimatedCursor
        innerSize={20}
        outerSize={15}
        color="255,255,255"
        outerAlpha={0.2}
        innerScale={0.9}
        outerScale={5}
        clickables={[
          "a",
          'input[type="text"]',
          ".link",
          ".gradient__color",
          ".animate__cursor",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
        ]}
      />
      <NextNProgress
        color="#29D"
        startPosition={0.3}
        stopDelayMs={200}
        height={5}
        showOnShallow={true}
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
