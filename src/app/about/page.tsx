import type { Metadata } from 'next';
import Link from 'next/link';
import {
  AngularDark,
  AngularLight,
  Css,
  Docker,
  Git,
  GithubDark,
  GithubLight,
  GmailDark,
  GmailLight,
  Html,
  JavaScript,
  Jest,
  NestJsDark,
  NestJsLight,
  NextJsDark,
  NextJsLight,
  Nginx,
  PostgreSqlDark,
  PostgreSqlLight,
  Prisma,
  ReactDark,
  ReactLight,
  RollupJsDark,
  RollupJsLight,
  Sass,
  StyledComponents,
  SupabaseDark,
  SupabaseLight,
  Svelte,
  TailwindCssDark,
  TailwindCssLight,
  ThreeJsDark,
  ThreeJsLight,
  TypeScript,
  VimDark,
  VimLight,
  ViteDark,
  ViteLight,
  VitestDark,
  VitestLight,
  VsCodeDark,
  VsCodeLight,
  VueJsDark,
  VueJsLight,
  WebpackDark,
  WebpackLight,
} from '@skill-icons/react';

export const metadata: Metadata = {
  title: '关于',
};

export default function About() {
  return (
    <div className="mx-auto max-w-screen-lg px-8 py-10">
      <h1 className="mb-10 text-3xl font-semibold">关于</h1>

      <div className="prose dark:prose-invert space-y-10">
        <section>
          <h3>我是谁</h3>
          <p>嗨，我是 Jee，一个 Web 开发者，喜欢 Coding 和电子游戏（尤其是魂类游戏 🎮 ）。</p>
        </section>

        <section>
          <h3>我在做什么</h3>
          <p>目前我正在学习如何使用 Expo 开发移动应用，空闲时也会写一些文章。</p>
        </section>

        <section>
          <h3>我的技能</h3>

          <div>
            <p className="font-semibold">前端</p>
            <ul>
              <li className="flex items-center gap-1">
                <Html />
                HTML、
                <Css />
                CSS、
                <JavaScript />
                JavaScript，熟练使用。
              </li>

              <li className="flex items-center gap-1">
                <TypeScript />
                TypeScript，会玩体操，偶尔也会 any。
              </li>

              <li className="flex items-center gap-1">
                <TailwindCssLight className="dark:hidden" />
                <TailwindCssDark className="hidden dark:block" />
                TailwindCSS、
                <Sass />
                Sass、
                <StyledComponents />
                CSS in JS，需要哪个就用哪个。
              </li>

              <li className="flex items-center gap-1">
                <ReactLight className="dark:hidden" />
                <ReactDark className="hidden dark:block" />
                React、
                <VueJsLight className="dark:hidden" />
                <VueJsDark className="hidden dark:block" />
                Vue、
                <AngularLight className="dark:hidden" />
                <AngularDark className="hidden dark:block" />
                Angular、
                <Svelte />
                Svelte，流行的都玩，哪有为什么。
              </li>

              <li className="flex items-center gap-1">
                <NextJsLight className="dark:hidden" />
                <NextJsDark className="hidden dark:block" />
                NextJS，会做服务端渲染，不会处理高并发。
              </li>

              <li className="flex items-center gap-1">
                <WebpackLight className="dark:hidden" />
                <WebpackDark className="hidden dark:block" />
                Webpack、
                <RollupJsLight className="dark:hidden" />
                <RollupJsDark className="hidden dark:block" />
                Rollup、
                <ViteLight className="dark:hidden" />
                <ViteDark className="hidden dark:block" />
                Vite，会写配置和插件，没看过源码。
              </li>

              <li className="flex items-center gap-1">
                <Jest />
                Jest、
                <VitestLight className="dark:hidden" />
                <VitestDark className="hidden dark:block" />
                Vitest，会不会得看时间够不够。
              </li>

              <li className="flex items-center gap-1">
                <ThreeJsLight className="dark:hidden" />
                <ThreeJsDark className="hidden dark:block" />
                ThreeJS，用过，还在新手期。
              </li>
            </ul>
          </div>

          <div>
            <p className="font-semibold">后端</p>
            <ul>
              <li className="flex items-center gap-1">
                <NestJsLight className="dark:hidden" />
                <NestJsDark className="hidden dark:block" />
                NestJS，能写 CRUD 的水平。
              </li>

              <li className="flex items-center gap-1">
                <PostgreSqlLight className="dark:hidden" />
                <PostgreSqlDark className="hidden dark:block" />
                PostgreSQL、
                <SupabaseLight className="dark:hidden" />
                <SupabaseDark className="hidden dark:block" />
                Supabase、
                <Prisma />
                Prisma，能写简单的 SQL，主要用 ORM 框架。
              </li>

              <li className="flex items-center gap-1">
                <Docker />
                Docker，会用，没它后端技术我学不会。
              </li>

              <li className="flex items-center gap-1">
                <Nginx />
                Nginx，会配置代理、HTTP2、HTTPS。
              </li>
            </ul>
          </div>

          <div>
            <p className="font-semibold">其它</p>
            <ul>
              <li className="flex items-center gap-1">
                <Git />
                Git，能分清 merge 和 rebase。
              </li>

              <li className="flex items-center gap-1">
                <VsCodeLight className="dark:hidden" />
                <VsCodeDark className="hidden dark:block" />
                VSCode，我从小用到大。
              </li>

              <li className="flex items-center gap-1">
                <VimLight className="dark:hidden" />
                <VimDark className="hidden dark:block" />
                Vim，好玩，爱玩。
              </li>
            </ul>
          </div>
        </section>

        <section>
          <h3>联系我</h3>
          <p>你可以通过以下方式联系我 👇</p>

          <div className="flex items-center space-x-3">
            <Link
              className="hover:opacity-75 transition-opacity duration-300 ease-in-out"
              href="https://github.com/985563349"
              target="_blank"
            >
              <GithubLight className="dark:hidden size-7" />
              <GithubDark className="hidden dark:block size-7" />
            </Link>

            <Link
              className="hover:opacity-75 transition-opacity duration-300 ease-in-out"
              href="mailto:jie985563349@outlook.com"
            >
              <GmailLight className="dark:hidden size-7" />
              <GmailDark className="hidden dark:block size-7" />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
