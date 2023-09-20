import { Link } from '@nextui-org/link';

export default function Page() {
  return (
    <div>
      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
        <li>
          <Link color="foreground" href="/posts/1">
            Basic markdown style guide
          </Link>
        </li>

        <li>
          <Link color="foreground" href="/posts/2">
            Extended markdown style guide
          </Link>
        </li>

        <li>
          <Link color="foreground" href="/posts/3">
            Prism.js syntax highlighting for code blocks
          </Link>
        </li>

        <li>
          <Link color="foreground" href="/posts/4">
            You can also link to an external blog post
          </Link>
        </li>
      </ul>
    </div>
  );
}
