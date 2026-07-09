import {
  CodeXmlIcon,
  CakeIcon,
  Gamepad2Icon,
  MapPinIcon,
  MailIcon,
} from 'lucide-react';
import { PiWechatLogoBold } from 'react-icons/pi';

import { cn } from '@/lib/utils';

import Badge from '@/components/badge';

const overviewItems = [
  {
    icon: CodeXmlIcon,
    label: '软件工程师',
    className: 'sm:col-span-2',
  },
  {
    icon: Gamepad2Icon,
    label: '魂系游戏爱好者',
    className: 'sm:col-span-2',
  },
  {
    icon: CakeIcon,
    label: '1998.09',
  },
  {
    icon: MapPinIcon,
    label: '深圳',
  },
  {
    icon: MailIcon,
    label: 'jie985563349@outlook.com',
  },
  {
    icon: PiWechatLogoBold,
    label: 'wj985563349',
  },
];

const Overview: React.FC = () => {
  return (
    <div className="grid sm:grid-cols-2 gap-x-4 gap-y-2 p-4">
      {overviewItems.map(({ icon: Icon, label, className }) => (
        <div key={label} className={cn('flex items-center gap-4', className)}>
          <Badge>
            <Icon className="size-4 text-muted-foreground" />
          </Badge>
          <span className="text-sm font-geist-mono">{label}</span>
        </div>
      ))}
    </div>
  );
};

export default Overview;
