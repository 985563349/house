import {
  Marquee,
  MarqueeContent,
  MarqueeFade,
  MarqueeItem,
} from '@/components/ui/marquee';
import { Suggestion } from '@/components/ai-elements/suggestion';

const questions = [
  [
    'Icarus，你是谁？',
    '能简单介绍一下 Jason 吗？',
    'Jason 今年几岁？',
    '他的专业背景是什么？',
    '他擅长哪些技术？',
    '他偏前端还是全栈？',
    '他最近在做什么？',
  ],
  [
    'Jason 目前是否接受招聘？',
    '他适合什么团队？',
    '他的工作方式是怎样的？',
    '可以看看他的文章吗？',
    '怎么联系 Jason？',
    '我应该问他什么？',
  ],
];

export type QuestionsProps = {
  onClick: (content: string) => void;
};

const Questions: React.FC<QuestionsProps> = (props) => {
  const { onClick } = props;

  return (
    <div className="w-full space-y-4">
      <Marquee className="min-h-7">
        <MarqueeFade side="left" />
        <MarqueeFade side="right" />
        <MarqueeContent direction="left">
          {questions[0].map((question) => (
            <MarqueeItem key={question}>
              <Suggestion
                key={question}
                suggestion={question}
                onClick={() => onClick(question)}
              />
            </MarqueeItem>
          ))}
        </MarqueeContent>
      </Marquee>

      <Marquee className="min-h-7">
        <MarqueeFade side="left" />
        <MarqueeFade side="right" />
        <MarqueeContent direction="right">
          {questions[1].map((question) => (
            <MarqueeItem key={question}>
              <Suggestion
                key={question}
                suggestion={question}
                onClick={() => onClick(question)}
              />
            </MarqueeItem>
          ))}
        </MarqueeContent>
      </Marquee>
    </div>
  );
};

export default Questions;
