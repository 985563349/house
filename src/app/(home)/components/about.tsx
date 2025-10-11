const About: React.FC = () => {
  return (
    <div className="space-y-6">
      <p className="text-3xl font-semibold tracking-tight">关于我</p>

      <div className="prose prose-zinc dark:prose-invert max-w-none">
        <ul className="marker:text-xs">
          <li>我是 Jason Wang，一名拥有 8 年以上经验的软件工程师。</li>

          <li>
            热衷于探索新技术，并通过精心打磨、深思熟虑的项目将想法变为现实。
          </li>

          <li>
            对我来说，好的软件不只是能跑通逻辑，还要有清晰的结构、克制的设计和经得起使用的手感。
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
