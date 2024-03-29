import React from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

import {AreaLogin} from './styled'


import {BtnDefaulIcons, BtnDeFaut} from '../../components/Styled'


import FacebookIcon from '@material-ui/icons/Facebook';
import GTranslateIcon from '@material-ui/icons/GTranslate';


      export default () => {
      return (

      <BrowserRouter> 
            <Switch>
            
            <Route exact path="/Login"> 
            <AreaLogin>
            <h1> Faça o Login em sua conta </h1>
{/* 
                  <BtnDefaulIcons>
                  <FacebookIcon />
                  <div className="center">Fazer login com o Facebook</div> 
                  </BtnDefaulIcons>

                  <BtnDefaulIcons>
                  <GTranslateIcon />
                  <div className="center">Fazer login com o Google</div> 
                  </BtnDefaulIcons>

                  <p>OU</p> */}

                  <form>
                  <div className="form-imput"> 
                        <label>E-mail</label>
                        <input type="email" />
                  </div>

                  <div className="form-imput"> 
                        <label>Senha</label>
                        <input type="password" />
                  </div>

                  <BtnDeFaut>Entrar</BtnDeFaut>

                  <div className="footerLogin">
                        Não possui uma conta ? 
                        <Link  to="/Cadastro"> Cadastrar-se </Link> 
                  </div>
                  </form>
            </AreaLogin>

            </Route>
            </Switch> 
                  
            </BrowserRouter>
       );    
}