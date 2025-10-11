import { themeIcons } from 'seti-icons';

const getIcon = themeIcons({
  blue: '#498ba7',
  grey: '#455155',
  'grey-light': '#627379',
  green: '#7fae42',
  orange: '#f05138',
  pink: '#dd4b78',
  purple: '#9068b0',
  red: '#b8383d',
  white: '#bfc2c1',
  yellow: '#b7b73b',
  ignore: '#3b4b52',
});

export type FileIconProps = {
  className?: string;
  style?: React.CSSProperties;
  name: string;
};

const FileIcon: React.FC<FileIconProps> = (props) => {
  const { className, style, name } = props;

  const { svg, color } = getIcon(name);
  const __html = svg.replace(
    /svg/,
    `svg fill='${color}' width='1em' height='1em'`,
  );

  return (
    <span
      className={className}
      style={style}
      dangerouslySetInnerHTML={{ __html }}
    />
  );
};

export default FileIcon;
