import Link from 'next/link';

export default function About() {
  return (
    <div className="mx-auto max-w-screen-lg px-8 py-10">
      <h1 className="mb-10 text-3xl font-semibold">关于</h1>

      <div className="prose dark:prose-invert space-y-10">
        <section>
          <h3>我是谁</h3>
          <p>
            嗨，我是 Jee，一个 Web 开发者，喜欢 Coding
            和电子游戏（尤其是魂类游戏 🎮 ）。
          </p>
        </section>

        <section>
          <h3>我在做什么</h3>
          <p>
            目前正在学习 Expo，以及开发一个小程序组件库，偶尔还会写一些文章。
          </p>
        </section>

        <section>
          <h3>我的技能</h3>

          <div>
            <p className="font-semibold">前端</p>
            <ul>
              <li>
                <i className="mr-1 translate-y-0.5 icon-[skill-icons--html]" />
                HTML、
                <i className="mr-1 translate-y-0.5 icon-[skill-icons--css]" />
                CSS、
                <i className="mr-1 translate-y-0.5 icon-[skill-icons--javascript]" />
                JavaScript，熟练使用。
              </li>

              <li>
                <i className="mr-1 translate-y-0.5 icon-[skill-icons--typescript]" />
                TypeScript，会玩体操，偶尔也会 any。
              </li>

              <li>
                <i className="mr-1 translate-y-0.5 icon-[skill-icons--tailwindcss-dark] dark:hidden" />
                <i className="mr-1 translate-y-0.5 icon-[skill-icons--tailwindcss-light] hidden dark:inline-block" />
                TailwindCSS、
                <i className="mr-1 translate-y-0.5 icon-[skill-icons--sass]" />
                Sass、
                <i className="mr-1 translate-y-0.5 icon-[skill-icons--styledcomponents]" />
                CSS in JS，需要哪个就用哪个。
              </li>

              <li>
                <i className="mr-1 translate-y-0.5 icon-[skill-icons--react-dark] dark:hidden" />
                <i className="mr-1 translate-y-0.5 icon-[skill-icons--react-light] hidden dark:inline-block" />
                React、
                <i className="mr-1 translate-y-0.5 icon-[skill-icons--vuejs-dark] dark:hidden" />
                <i className="mr-1 translate-y-0.5 icon-[skill-icons--vuejs-light] hidden dark:inline-block" />
                Vue、
                <i className="mr-1 translate-y-0.5 icon-[skill-icons--angular-dark] dark:hidden" />
                <i className="mr-1 translate-y-0.5 icon-[skill-icons--angular-light] hidden dark:inline-block" />
                Angular、
                <i className="mr-1 translate-y-0.5 icon-[skill-icons--svelte]" />
                Svelte，流行的都玩，哪有为什么。
              </li>

              <li>
                <i className="mr-1 translate-y-0.5 icon-[skill-icons--nextjs-dark] dark:hidden" />
                <i className="mr-1 translate-y-0.5 icon-[skill-icons--nextjs-light] hidden dark:inline-block" />
                NextJS，会做服务端渲染，不会处理高并发。
              </li>

              <li>
                <i className="mr-1 translate-y-0.5 icon-[skill-icons--webpack-dark] dark:hidden" />
                <i className="mr-1 translate-y-0.5 icon-[skill-icons--webpack-light] hidden dark:inline-block" />
                Webpack、
                <i className="mr-1 translate-y-0.5 icon-[skill-icons--rollupjs-dark] dark:hidden" />
                <i className="mr-1 translate-y-0.5 icon-[skill-icons--rollupjs-light] hidden dark:inline-block" />
                Rollup、
                <i className="mr-1 translate-y-0.5 icon-[skill-icons--vite-dark] dark:hidden" />
                <i className="mr-1 translate-y-0.5 icon-[skill-icons--vite-light] hidden dark:inline-block" />
                Vite，会写配置和插件，没看过源码。
              </li>

              <li>
                <i className="mr-1 translate-y-0.5 icon-[skill-icons--jest]" />
                Jest、
                <i className="mr-1 translate-y-0.5 icon-[skill-icons--vitest-dark] dark:hidden" />
                <i className="mr-1 translate-y-0.5 icon-[skill-icons--vitest-light] hidden dark:inline-block" />
                Vitest，会不会得看时间够不够。
              </li>

              <li>
                <i className="mr-1 translate-y-0.5 icon-[skill-icons--threejs-dark] dark:hidden" />
                <i className="mr-1 translate-y-0.5 icon-[skill-icons--threejs-light] hidden dark:inline-block" />
                ThreeJS，用过，处于入门阶段。
              </li>
            </ul>
          </div>

          <div>
            <p className="font-semibold">后端</p>
            <ul>
              <li>
                <i className="mr-1 translate-y-0.5 icon-[skill-icons--nestjs-dark] dark:hidden" />
                <i className="mr-1 translate-y-0.5 icon-[skill-icons--nestjs-light] hidden dark:inline-block" />
                NestJS，能写 CRUD 的水平。
              </li>

              <li>
                <i className="mr-1 translate-y-0.5 icon-[skill-icons--postgresql-dark] dark:hidden" />
                <i className="mr-1 translate-y-0.5 icon-[skill-icons--postgresql-light] hidden dark:inline-block" />
                PostgreSQL、
                <i className="mr-1 translate-y-0.5 icon-[skill-icons--supabase-dark] dark:hidden" />
                <i className="mr-1 translate-y-0.5 icon-[skill-icons--supabase-light] hidden dark:inline-block" />
                Supabase、
                <i className="mr-1 translate-y-0.5 icon-[skill-icons--prisma]" />
                Prisma，会用 ORM 框架，能写简单的 SQL 语句。
              </li>

              <li>
                <i className="mr-1 translate-y-0.5 icon-[skill-icons--docker]" />
                Docker，会用，没它后端技术我学不会。
              </li>

              <li>
                <i className="mr-1 translate-y-0.5 icon-[skill-icons--nginx]" />
                Nginx，会配置代理、HTTP2、HTTPS。
              </li>
            </ul>
          </div>

          <div>
            <p className="font-semibold">其它</p>
            <ul>
              <li>
                <i className="mr-1 translate-y-0.5 icon-[skill-icons--git]" />
                Git，能分清 merge 和 rebase。
              </li>

              <li>
                <i className="mr-1 translate-y-0.5 icon-[skill-icons--vscode-dark] dark:hidden" />
                <i className="mr-1 translate-y-0.5 icon-[skill-icons--vscode-light] hidden dark:inline-block" />
                VSCode，最常用的编辑器。
              </li>

              <li>
                <i className="mr-1 translate-y-0.5 icon-[skill-icons--vim-dark] dark:hidden" />
                <i className="mr-1 translate-y-0.5 icon-[skill-icons--vim-light] hidden dark:inline-block" />
                Vim，会用，喜欢用。
              </li>
            </ul>
          </div>
        </section>

        <section>
          <h3>联系我</h3>
          <p>你可以通过以下方式联系我 👇</p>

          <div className="space-x-3">
            <Link
              className="hover:opacity-75 transition-opacity"
              href="https://github.com/985563349"
              target="_blank"
            >
              <i className="size-7 icon-[skill-icons--github-dark] dark:hidden" />
              <i className="size-7 icon-[skill-icons--github-light] hidden dark:inline-block" />
            </Link>

            <Link
              className="hover:opacity-75 transition-opacity"
              href="mailto:jie985563349@outlook.com"
            >
              <i className="size-7 icon-[skill-icons--gmail-dark] dark:hidden" />
              <i className="size-7 icon-[skill-icons--gmail-light] hidden dark:inline-block" />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
