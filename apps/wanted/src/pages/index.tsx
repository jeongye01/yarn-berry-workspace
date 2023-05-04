import { sayHello } from '@wanted/lib';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}>
      <p>의존성 테스트 {sayHello()}</p>
    </main>
  );
}
