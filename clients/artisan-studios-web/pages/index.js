import { useEffect } from 'react';

export default function HomeRedirect() {
  useEffect(() => {
    window.location.replace('/screening-criteria/current-screening-criteria');
  }, []);

  return <p>Redirecting to current screening criteria...</p>;
}
