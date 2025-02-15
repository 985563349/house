import type { Metadata } from 'next';

import BackLink from '@/components/back-link';
import TypeAnimation from '@/components/type-animation';

export const metadata: Metadata = {
  title: '404',
};

export default function NotFound() {
  return (
    <div className="mx-auto max-w-screen-lg px-8 py-10">
      <h1 className="mb-10 text-3xl font-semibold">404</h1>

      <div className="space-y-10">
        <TypeAnimation
          className="min-h-6"
          wrapper="p"
          cursor={false}
          deletionSpeed={80}
          repeat={Infinity}
          sequence={[
            '真正的大师，永远怀着一颗学徒的心。',
            3000,
            '如果碰壁，就用力把它碰穿。',
            3000,
            '时间不在于你拥有多少，而在于你怎样使用。',
            3000,
            '不要害怕未知的事物。',
            3000,
            '我曾踏足山巅，也曾进入低谷，二者都让我受益良多。',
            3000,
          ]}
        />
        <p>
          <BackLink />
        </p>
      </div>
    </div>
  );
}
