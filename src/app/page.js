'use client'

import ThemeContainer from '@/theme';
import MainPage from '@/Views/Pages/Main'

// import ThemeContainer from "../../src/theme";
import { Provider } from 'react-redux';
import store from '../Redux/store';
export default function Home() {
  return (
    <>
    
      <ThemeContainer>

      <Provider store={store}>
        <MainPage />
      </Provider>
      </ThemeContainer>
    </>
  )
}
