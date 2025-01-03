import LatestPosts from './components/latest-posts';
import Summary from './components/summary';

export default function Home() {
  return (
    <div className="mx-auto max-w-screen-md px-5">
      <div className="space-y-16">
        <Summary />
        <LatestPosts />
      </div>
    </div>
  );
}
