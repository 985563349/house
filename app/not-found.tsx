import NavLink from '@/components/nav-link';

export default function NotFound() {
  return (
    <div className="mx-auto max-w-screen-md px-5">
      <p className="mb-4">找不到此页面。</p>
      <NavLink href="/">返回首页</NavLink>
    </div>
  );
}