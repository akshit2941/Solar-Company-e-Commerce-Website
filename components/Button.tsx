import Image from "next/image"

type ButtonProp = {
    title: string;
    variant: string;
}


const Button = ({ title, variant }: ButtonProp) => {
    const imageSrc = variant === 'btn_white' ? '/next_white.png' : '/next_black.png';
    const btnColor = variant === 'btn_white' ? 'bg-[#2e3f35] ' : 'bg-white';
    return (
        <button className={`py-2 text-xl font-medium rounded-full pl-6 pr-2 flex flex-row text-center justify-center items-center group ${variant}`}>
            <label >{title}</label>
            <Image
                src={imageSrc}
                alt="next"
                width={38}
                height={20}
                className={`p-2 ml-5 rounded-full  ${btnColor}`}
            />
        </button>
    )
}

export default Button