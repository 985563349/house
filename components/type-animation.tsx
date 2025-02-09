'use client';

import { TypeAnimation as ReactTypeAnimation } from 'react-type-animation';

export type TypeAnimationProps = React.ComponentProps<
  typeof ReactTypeAnimation
>;

const TypeAnimation: React.FC<TypeAnimationProps> = (props) => {
  return <ReactTypeAnimation {...props} />;
};

export default TypeAnimation;
