import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Message, MessageContent } from '@/components/ai-elements/message';

export type AssistantMessageProps = {
  children?: React.ReactNode;
};

const AssistantMessage: React.FC<AssistantMessageProps> = (props) => {
  const { children } = props;

  return (
    <div className="flex gap-2">
      <Avatar>
        <AvatarImage src="/icarus.png" alt="icarus" />
        <AvatarFallback>I</AvatarFallback>
      </Avatar>
      <Message from="assistant">
        <MessageContent>{children}</MessageContent>
      </Message>
    </div>
  );
};

export default AssistantMessage;
