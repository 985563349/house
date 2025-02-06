import BackLink from '@/components/back-link';

export default function NotFound() {
  return (
    <div className="mx-auto max-w-screen-lg px-8 py-10">
      <h1 className="mb-10 text-3xl font-semibold">404</h1>

      <div className="space-y-10">
        <p>真正的大师，永远怀着一颗学徒的心。</p>
        <p>
          <BackLink />
        </p>
      </div>
    </div>
  );
}
