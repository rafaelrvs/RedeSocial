import React, { useState } from "react"
import RedesSociais from "../RedesSociaisBtn"
import "./BackgroundBox.css"
import CreateYourAccount from "../CreateYourAccount"
import Botao from "../Botao"
const BackgroundBox = () =>{
const [apresentarCadastro,setApresentarCadastro ] = useState(false)
  const RegisterAccount = (event)=>{
    setApresentarCadastro(true)
    event.preventDefault();
  }

  return(
    <>
    <div className='container-boxes'>
      <div id="content-box-main">
          <RedesSociais/>
          <div>

          <p id="useyourEmail-text">or use your email account</p>
          </div>
        
            <section >
              <form className="container-input" action="">
            <input id="input-Email" type="text" placeholder=" Email" />
            <input id="input-Senha" type="password" placeholder=" Password" maxLength={8}/>
              </form>
            </section>
        
      </div>
        <nav className='two-box'>
          <nav className="content-box">
            <div>
            <p id="title-two-box">Create accont</p>
            <p id="content-text-in-box">
              Enter your personal detail <br />
               and start your journey with us
            </p>
            </div>
            <div>
              <div onClick={RegisterAccount}>
              <Botao >Sign up</Botao>
              </div>
             </div>
          </nav>
        </nav>
        {apresentarCadastro && <CreateYourAccount/>}
    </div>
    </>
  )
}
export default BackgroundBox