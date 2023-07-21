import React, { useState } from "react"
import BackgroundBox from "../BackgroundBox"
import "./CreateYourAccount.css"
import Botao from "../Botao"

const CreateYourAccount = () =>{
  const [paginaLogin, setPaginaLogin] = useState(false)
  const backLogin = (event) =>{
    setPaginaLogin(true)
    event.preventDefault();
  }
  return(
    <>
   
     <div className='container-boxes-createAccount'>
      <div id="two-box-create-account">
        <div id="container-createYorAccount-text-and-btn">
          <div>
            <nav><h1 id="Wellcome">Wellcome back</h1></nav>
          </div>
          <nav><p>To connect with us <br /> please login with your personal info</p></nav>
          <nav  onClick={backLogin}><Botao>Sign in</Botao></nav>
         </div>

      </div>
            <div id="content-CreateYourCount-Main">
              <nav id="title-Create">

              <p id="title-Create-your-account">Create your Account</p>
              </nav>

              <div className="RedesSociais-CreateYourAccount">
                <nav id="imgRedesSociaisCreateAccount-container">

                  <nav id="google-container">
                  <img id="redesSociaisCreateAccount" src="./images/google.png" alt="" />
                  </nav>

                  <nav id="facebook-container">
                  <img id="redesSociaisCreateAccount" src="./images/facebook.png" alt="" />
                  </nav>

                  <nav id="linkedin-container">
                  <img id="redesSociaisCreateAccount" src="./images/linkedin.png" alt="" />
                  </nav>
                </nav>
                <div>
                  <p>or use your email  for registration</p>
                </div>

              </div>

      
                  <section>
                  <form  id="input-createYOurAccount"  action="">
                  <input id="name-register" type="text" placeholder="  Name" />
                  <input id="email-register" type="text" placeholder="  Email" />
                  <input id="password-register" type="password" placeholder="  Password" maxLength={8} />
                  <input  id="Btn-CreateAccount-Register" type="submit" />
                  </form>
                  </section>
                
            </div>
    </div>
    { paginaLogin && <BackgroundBox/>}
    </>
  )
}
export default CreateYourAccount