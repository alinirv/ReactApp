import React,{useState} from 'react';
import axios from 'axios';
import * as S from './styled';
import { useHistory } from 'react-router-dom';

function App(props) {
  const history = useHistory();
  const [usuario, setUsuario] = useState('')
  const [erro, setErro] = useState (false)
  function handlePesquisa(){
    axios.get(`https://api.github.com/users/${usuario}/repos`)
    .then(response => {
      const repositories = response.data;
      const repositoresName = [];
      repositories.map((repository) => {
        repositoresName.push(repository.name);
      });
      localStorage.setItem('repositoriesName', JSON.stringify(repositoresName))
      history.push('/repositories');
    })
    .catch(err => {
      setErro(true)
    });
  }

  return (
    <S.HomeConteiner>
      <S.Title>Pesquisa Github</S.Title>  
      <S.Content> 
        
        <S.Input className="usuario" placeholder="Usuário"value={usuario} onChange={e => setUsuario(e.target.value)}/>    
        <S.Button type="button" onClick={handlePesquisa}>Pesquisar</S.Button>    
      </S.Content>
      {erro ? <S.ErrorMsg>Ocorreu um erro. Tente novamente.</S.ErrorMsg> : ''}
    </S.HomeConteiner>
  );
}

export default App;