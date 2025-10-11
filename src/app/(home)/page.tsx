import FadeIn from '@/components/fade-in';

import About from './components/about';
import Post from './components/post';
import Experience from './components/experience';
import Overview from './components/overview';
import Profile from './components/profile';
import Stack from './components/stack';

export default function Home() {
  return (
    <div className="space-y-12">
      <FadeIn order={1}>
        <Profile />
      </FadeIn>

      <FadeIn order={2}>
        <Overview />
      </FadeIn>

      <FadeIn order={3}>
        <About />
      </FadeIn>

      <FadeIn order={4}>
        <Stack />
      </FadeIn>

      <FadeIn order={5}>
        <Experience />
      </FadeIn>

      <FadeIn order={6}>
        <Post />
      </FadeIn>
    </div>
  );
}
