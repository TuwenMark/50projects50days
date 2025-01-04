import clsx from 'clsx'

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
      className={clsx(
        'relative flex-[0.5_1_0%] m-10 h-[80vh] text-[#fff] bg-center bg-cover bg-no-repeat rounded-[50px] cursor-pointer transition-all duration-700 ease-in',
        {
          ['flex-[5_1_0%]']: isActive,
        }
      )}
      style={{ backgroundImage: `url(${src})` }}
      onClick={() => onClick(index)}
    >
      <h3
        className={clsx('text-2xl absolute left-5 bottom-5 m-0 opacity-0', {
          ['opacity-100 transition-opacity duration-300 ease-in delay-[400ms]']:
            isActive,
        })}
      >
        {text}
      </h3>
    </button>
  )
}
