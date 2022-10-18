import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Error404() {
  const router = useRouter();

  useEffect(() => {
    // void router.push('/');
    console.log(router);
  }, [router]);

  return null;
}
