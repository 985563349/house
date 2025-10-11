import Link from 'next/link';
import { LuGithub } from 'react-icons/lu';

import { buttonVariants } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';

async function getGitHubStars() {
  const response = await fetch(
    `https://api.github.com/repos/${process.env.GITHUB_REPO}`,
    {
      headers: {
        Accept: 'application/vnd.github+json',
        Authorization: `Bearer ${process.env.GITHUB_API_TOKEN}`,
        'X-GitHub-Api-Version': '2022-11-28',
      },
      next: { revalidate: 24 * 60 * 60 },
    },
  );

  if (!response.ok) {
    return { stargazers_count: 0 };
  }

  return response.json();
}

export default async function GitHubStars() {
  const { stargazers_count } = await getGitHubStars();

  return (
    <Tooltip>
      <TooltipTrigger
        render={
          <Link
            href={`https://github.com/${process.env.GITHUB_REPO}`}
            target="_blank"
            className={cn(
              'text-muted-foreground',
              buttonVariants({ variant: 'ghost' }),
            )}
          >
            <LuGithub />
            <span>{stargazers_count}</span>
          </Link>
        }
      />
      <TooltipContent>{stargazers_count} Stars</TooltipContent>
    </Tooltip>
  );
}
