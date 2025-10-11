import Image from 'next/image';

import { TextFlip } from '@/components/text-flip';

const Profile: React.FC = () => {
  return (
    <div className="flex items-center gap-4 pt-16 md:pt-32">
      <Image
        className="size-32 md:size-40 rounded-full bg-active-background"
        src="/avatar.png"
        alt="avatar"
        width={460}
        height={460}
      />

      <div>
        <div className="flex items-center h-12">
          <span className="text-3xl font-semibold tracking-tight">
            Jason Wang
          </span>
        </div>

        <div className="flex items-center h-12">
          <TextFlip className="text-sm text-balance text-muted-foreground font-geist-mono">
            <span>软件工程师</span>
            <span>开源贡献者</span>
            <span>打造像素级完美用户界面</span>
            <span>即使一无所有，也要未雨绸缪</span>
          </TextFlip>
        </div>
      </div>
    </div>
  );
};

export default Profile;
