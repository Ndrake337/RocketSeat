import { ThumbsUp, Trash } from 'phosphor-react';
import { useState } from 'react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

interface CommentProps {
    content: string;
    //avisando para o typescript que onDeleteComment é uma função que precisa de um parâmetro comment do tipo string e que a mesma não tem retorno
    onDeleteComment: (comment: string) => void;
}

export function Comment( {content, onDeleteComment}: CommentProps) {
    const [likeCount, setLikeCount] = useState(0)
    
    function handleDeleteComment() {
        onDeleteComment(content)
    }
    
    function handleLikeComment() {
        // setLikeCount(likeCount + 1)
        // Sempre que for atualizar uma informação e a mesma depende dela mesma, usar o padrão de funções ou variáveis devido ao closures
        setLikeCount((state) => {
            return state + 1
        });
    }

    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/ndrake337.png" alt="" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Matheus Felipe</strong>
                            <time title='21 de Outubro às 22:10h' dateTime='2022-10-21 22:09:00'>Cerca há 1 h atrás</time>
                        </div>

                        <button onClick={handleDeleteComment} title='Deletar Comentário'>
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    {/* handleLikeComment => Função | handleLikeComment() => execução de uma função */}
                    {/* caso queiramos chamar uma função com argumentos dentro do onClick deveremos usar arrow function: exemplo */}
                    {/* <button onClick={() => setLikeCount(likeCount + 1)}> */}
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}