import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex items-center justify-center mx-auto max-w-screen-lg px-8 py-10 min-h-full">
      <section>
        <div className="flex flex-col items-center gap-6 mx-auto max-w-3xl text-center">
          <Image
            className="rounded-full"
            src="/avatar.png"
            alt="avatar"
            width={100}
            height={100}
          />
          <p className="text-xl">嗨，我是 Jee 👋🏻</p>
          <p className="text-4xl font-semibold">
            一个 Web 开发者 · 终身学习者 · 游戏爱好者
          </p>
          <p>我喜欢学习新的技术和框架，目前正在寻在新的工作机会 👨‍💻。 </p>
        </div>
      </section>
    </div>
  );
}
