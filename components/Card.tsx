import clsx from 'clsx'
import styles from './styles.module.css'

type CardProps = {
  src: string
  text: string
  index: number
  isActive: boolean
  onClick: (index: number) => void
}

export default function Card({
  src,
  text,
  index,
  isActive,
  onClick,
}: Readonly<CardProps>) {
  return (
    <button
      className={clsx(styles.image, {
        [styles.imageActive]: isActive,
      })}
      style={{ backgroundImage: `url(${src})`, }}
      onClick={() => onClick(index)}
    >
      <h3 className={clsx(styles.h3, { [styles.h3Active]: isActive })}>
        {text}
      </h3>
    </button>
  )
}
