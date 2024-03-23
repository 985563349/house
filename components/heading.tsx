import { cn } from '@nextui-org/react';
import { RiLinksFill } from 'react-icons/ri';

export type HeadingProps = React.HTMLAttributes<HTMLHeadingElement> & {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h5';
  anchor?: boolean;
};

const Heading: React.FC<HeadingProps> = ({
  id,
  className,
  variant = 'h1',
  anchor = false,
  children,
  ...props
}) => {
  const Variant = variant;
  const showAnchor = anchor && id;

  return (
    <Variant id={id} className={cn('group flex items-center', className)} {...props}>
      {children}
      {showAnchor ? (
        <a className="ml-2 group-hover:opacity-100 opacity-0 transition-opacity" href={`#${id}`}>
          <RiLinksFill className="w-5 h-5" />
        </a>
      ) : null}
    </Variant>
  );
};

export { Heading };
