type DecimalPointsContent = {
    title: string
    content: string
}

export const DecimalPoints = ({ title, content }: DecimalPointsContent) => {
    return (
        <li className='custom-list-item mt-3 text-xl text-[#2e3c35] md:mt-6 md:text-2xl'>
            <span className='font-bold'>{title}</span>
            {content}
        </li>
    )
}