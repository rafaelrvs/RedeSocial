import { useState } from "react"
import BackgroundBox from "../BackgroundBox"
import "./CreateYourAccount.css"

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
          <nav><input onClick={backLogin} id="btnUseYourAccont" type="button" value="Sign in " /></nav>
        </div>

      </div>
            <div id="content-CreateYourCount-Main">
              <p id="title-Create-your-account">Create your Account</p>

              <div className="RedesSociais-CreateYourAccount">
                <nav id="imgRedesSociaisCreateAccount-container">
                  <img id="redesSociaisCreateAccount" src="./images/google.png" alt="" />
                  <img id="redesSociaisCreateAccount" src="./images/facebook.png" alt="" />
                  <img id="redesSociaisCreateAccount" src="./images/linkedin.png" alt="" />
                </nav>
                <div>
                  <p>or use your email  for registration</p>
                </div>

              </div>

                <div id="input-createYOurAccount">
                  <input id="name-register" type="text" placeholder="  Name" />
                  <input id="email-register" type="text" placeholder="  Email" />
                  <input id="password-register" type="password" placeholder="  Password" maxLength={8} />
                  <input  id="Btn-CreateAccount-Register" type="submit" />
                </div>
            </div>
    </div>
    { paginaLogin && <BackgroundBox/>}
    </>
  )
}
export default CreateYourAccount