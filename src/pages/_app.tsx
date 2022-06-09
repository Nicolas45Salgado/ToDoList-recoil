import type { AppProps } from "next/app";
import React, { useEffect, useState } from "react";
import { RecoilRoot } from "recoil";
import "../globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  const [showing, setShowing] = useState(false);

  useEffect(() => {
    setShowing(true);
  }, []);

  if (!showing) {
    return null;
  }

  if (typeof window === "undefined") {
    return <></>;
  } else {
    return (
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    );
  }
}

export default MyApp;
