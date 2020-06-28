import React, { useState } from 'react';
import { AppLoading } from "expo";
import { RootNav } from "./navigation";

import { loadFonts } from "./styles/fonts";
import { HotelScreen } from './screens';


export default function App() {
  const [loaded, setLoaded] = useState(false);
  if (!loaded) {
    return (
      <AppLoading
        startAsync={loadFonts}
        onFinish={() => setLoaded(true)}
        onError={() => console.log("Loading Rejected")}
      />
    );
  }
  // return <RootNav />;
  return <HotelScreen />;
}
