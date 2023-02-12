import { ImgHTMLAttributes } from 'react'
import styles from './Avatar.module.css'

//extensão no TypeScript, permite que herdemos propriedades de outros objetos, sem cria-las novamente
interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
    //colocamos o ? na frente do nome da propriedade para indicar que ela é opcional
    hasBorder?: boolean;
}

// ...props - ... é um rest operator, para que não precisemos citar todas as props de uma herança
export function Avatar({ hasBorder = true, ...props }: AvatarProps) {
    return (
        <img 
            className={hasBorder === true ? styles.avatarWithBorder : styles.avatar} 
            //pego o valor do meu spread operator e passo para a tag image
            {...props}
        />
    )
}