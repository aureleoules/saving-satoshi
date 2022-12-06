import Link from "next/link"
import { ListItem } from "./ListItem"

export const ChallengeList = ({challenges}) => {
    return (
        <div className='flex grow justify-center items-start py-8 font-nunito text-white w-full'>
            {challenges ? 
                    <ul className='grid w-full items-start text-justify'>
                    {challenges.map((ch, idx) => (
                        <ListItem key={idx+1} pos={idx+1} title={ch}/>
                    ))}
                </ul> :
                <p className='text-2xl sm:text-3xl lg:text-4xl text-center'>No challenges yet</p>
            }
            
        </div>
            
    )
}
