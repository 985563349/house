import { type UIMessage } from 'ai';

import { MessageResponse } from '@/components/ai-elements/message';

export type MessagePartsProps = {
  message: UIMessage;
};

const MessageParts: React.FC<MessagePartsProps> = (props) => {
  const { message } = props;

  return (
    <>
      {message.parts.map((part, i) => {
        if (part.type === 'text') {
          return (
            <MessageResponse key={`${message.id}-${i}`}>
              {part.text}
            </MessageResponse>
          );
        }
        return null;
      })}
    </>
  );
};

export default MessageParts;
