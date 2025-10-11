'use client';

import { useState } from 'react';
import { CodeXmlIcon } from 'lucide-react';

import Badge from '@/components/badge';
import ChevronsUpDownIcon from '@/components/chevrons-up-down-icon';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { Separator } from '@/components/ui/separator';

export type ExperienceCardProps = {
  company: string;
  position: string;
  employmentType: string;
  period: string;
  duration: string;
  descriptions: string[];
  skills: string[];
};

const ExperienceCard: React.FC<ExperienceCardProps> = (props) => {
  const {
    company,
    position,
    employmentType,
    period,
    duration,
    descriptions,
    skills,
  } = props;

  const [open, setOpen] = useState(false);

  return (
    <div className="border border-dashed border-border/80 rounded-xl p-4">
      <div className="space-y-3">
        <p className="text-lg leading-snug font-semibold">{company}</p>

        <div className="relative before:absolute before:left-3 before:h-full before:border-l before:border-border/80">
          <div className="relative">
            <span className="absolute bottom-0 left-3 size-4 bg-background before:absolute before:inset-0 before:border-l before:border-b before:rounded-bl-sm before:border-border/80 before:-translate-y-2.5" />

            <div className="space-y-4">
              <Collapsible open={open} onOpenChange={setOpen}>
                <div className="flex items-start gap-3">
                  <Badge>
                    <CodeXmlIcon className="size-4 text-muted-foreground" />
                  </Badge>
                  <CollapsibleTrigger className="relative flex-1 text-left cursor-pointer before:absolute before:-z-1 before:-inset-1.5 before:rounded-lg before:transition-colors before:ease-out hover:before:bg-active-background">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-medium text-balance">
                        {position}
                      </span>
                      <ChevronsUpDownIcon
                        open={open}
                        className="size-4 shrink-0 text-muted-foreground"
                      />
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <span>{employmentType}</span>
                      <Separator
                        className="mx-2 data-vertical:h-3 data-vertical:self-center"
                        orientation="vertical"
                      />
                      <span>{period}</span>
                      <Separator
                        className="mx-2 data-vertical:h-3 data-vertical:self-center"
                        orientation="vertical"
                      />
                      <span>{duration}</span>
                    </div>
                  </CollapsibleTrigger>
                </div>

                <CollapsibleContent>
                  <div className="prose prose-zinc dark:prose-invert pt-2 pl-9 max-w-none">
                    <ul className="marker:text-xs">
                      {descriptions.map((description) => (
                        <li key={description}>{description}</li>
                      ))}
                    </ul>
                  </div>
                </CollapsibleContent>

                <div className="pt-3 pl-9">
                  <div className="flex flex-wrap gap-1.5">
                    {skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center border rounded-full px-1.5 py-0.5 font-geist-mono text-xs text-muted-foreground bg-zinc-50 dark:bg-zinc-900"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </Collapsible>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
