import Image from "next/image"

export const Avatar = ({ avatar, size, classes, onClick }: { avatar?: number, size?: number, classes?: string, onClick?: () => void }) => {
    return (
        <Image
            src={`/assets/avatars/${avatar || 0}.png`}
            alt="Avatar"
            width={size || 30}
            height={size || 30}
            className={`rounded-full ${classes}`}
            onClick={onClick}
        />
    )
}