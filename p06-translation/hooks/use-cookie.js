import { useEffect, useState } from 'react';

const getRandomCookieKey = () => {
  const cookieLen = 15;
  const randomNum = Math.ceil(Math.random() * cookieLen);
  return `cookie_${randomNum}`;
}

export default function useCookie() {
  const [cookieKey, setCookieKey] = useState('');

  useEffect(() => {
    const randomCookieKey = getRandomCookieKey();
    setTimeout(() => {
      setCookieKey(randomCookieKey);
    }, 1000);
  }, []);

  return {
    cookieKey,
  };
}