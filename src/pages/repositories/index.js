import React, { useEffect, useState }from 'react';
import * as S from './styled'; 
import { useHistory } from 'react-router-dom';


export default function Repositories(){
    const history = useHistory();
    const [repositories, setRepositories] = useState([]);
    useEffect(() =>{
        let repositoresName = localStorage.getItem('repositoriesName');
        if (repositoresName != null){
            repositoresName = JSON.parse(repositoresName);
            setRepositories(repositoresName);
            localStorage.clear();
        }else{
            history.push('/')
        }    

    },[]);
    return (
        <S.Container>
            <S.Title>Repositories</S.Title>
            <S.List>
                {repositories.map(repository =>{
                    return(
                        <S.ListsItem>  Repositorio: {repository}</S.ListsItem>
                    )
                })}                
            </S.List>
            <S.LinkHome to = "/">Voltar</S.LinkHome>
        </S.Container>
    )
}