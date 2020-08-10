import React from 'react';
import { StatusBar } from 'expo-status-bar';

import Landing from './src/views/Landing';

export default function App() {
  return (
    <>
      <Landing />
      <StatusBar style="auto" />
    </>
  );
}
