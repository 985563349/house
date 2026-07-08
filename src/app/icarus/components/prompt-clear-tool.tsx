import { type ChatStatus } from 'ai';
import { Trash2Icon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';

export type PromptClearToolProps = {
  status?: ChatStatus;
  onClear: () => void;
};

const PromptClearTool: React.FC<PromptClearToolProps> = (props) => {
  const { onClear } = props;

  return (
    <AlertDialog>
      <AlertDialogTrigger
        render={
          <Button variant="ghost">
            <Trash2Icon size={16} />
          </Button>
        }
      />

      <AlertDialogContent size="sm">
        <AlertDialogHeader>
          <AlertDialogTitle>删除对话</AlertDialogTitle>
          <AlertDialogDescription>
            确定要删除这次对话吗？
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel>取消</AlertDialogCancel>
          <AlertDialogAction variant="destructive" onClick={onClear}>
            删除
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default PromptClearTool;
