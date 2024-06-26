import Image from 'next/image'

type ButtonProp = {
  title: string
  variant: string
}

const Button = ({ title, variant }: ButtonProp) => {
  const imageSrc =
    variant === 'btn_white' ? '/next_white.png' : '/next_black.png'
  const btnColor = variant === 'btn_white' ? 'bg-[#2e3f35] ' : 'bg-white'
  const textColor = variant === 'btn_white' ? 'text-black' : 'text-white'

  return (
    <button
      className={`group flex flex-row items-center justify-center rounded-full py-1 pr-1 pl-3 lg:py-2 lg:pl-6 lg:pr-2 text-center md:text-lg lg:text-xl font-medium ${variant}`}
    >
      <label className={`${textColor}`}>{title}</label>
      <Image
        src={imageSrc}
        alt='next'
        width={38}
        height={20}
        className={`ml-5 rounded-full p-2 ${btnColor}`}
      />
    </button>
  )
}

export default Button
