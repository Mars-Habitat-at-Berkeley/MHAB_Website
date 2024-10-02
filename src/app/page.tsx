// import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.css';
import Background from './components/background';
import IntroSection from './components/introSection';
// import './global.css';
// import Profile from './components/test';
// import { Head } from 'next/head';
export default function Home() {
  return (
    <div>
      <Background />
      <IntroSection />
    </div>
  );
}
