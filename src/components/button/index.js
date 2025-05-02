import Link from 'next/link';
import styles from './button.module.css';

export default function Button({
  href,
  children,
  wide = false,
  width,
  height,
  text,
  ...props
}) {
  // собираем CSS-классы
  const className = [styles.button, wide && styles.wide]
    .filter(Boolean)
    .join(' ');
  // собираем инлайн-стили для размеров
  const style = {
    ...(width ? { width } : {}),
    ...(height ? { height } : {}),
  };

  // ссылка
  if (href) {
    const isExternal = /^https?:\/\//.test(href);
    if (isExternal) {
      return (
        <a href={href} className={className} style={style} {...props}>
          {text}
        </a>
      );
    }
    return (
      <Link href={href} className={className} style={style} {...props}>
        {text}
      </Link>
    );
  }

  // обычная кнопка
  return (
    <button className={className} style={style} {...props}>
      {text}
    </button>
  );
}
