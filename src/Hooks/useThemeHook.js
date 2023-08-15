import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

const useThemeHook = () => {
  const dispatch = useDispatch();
  const themeToggle = useSelector((state) => state.LDTheme.value);
  useEffect(() => {
    const valueFromLocalStorage = localStorage.getItem('themeColor') === 'false'? false : true; // Access local storage and get the value
  }, []);

  function setThemeToggle() {
    const toggledValue = localStorage.getItem('themeColor') === 'false'? true : false;
    localStorage.setItem('themeColor', toggledValue)
  }

  return { themeToggle, setThemeToggle };
}

export { useThemeHook }