import { Message, MessageContent } from '@/components/ai-elements/message';

export type HumanMessageProps = {
  children?: React.ReactNode;
};

const HumanMessage: React.FC<HumanMessageProps> = (props) => {
  const { children } = props;

  return (
    <Message from="user">
      <MessageContent>{children}</MessageContent>
    </Message>
  );
};

export default HumanMessage;
