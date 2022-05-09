
import "./Password.css"

const Password=()=>{
    return<>
        <div className="logo1">
            <img style={{width:"283px",marginTop:"12px"}} src="https://images.livemint.com/sso/newLogos/prod/ht_logo.svg?v2" alt="logo"/>
        </div>
        <div className="mainDiv">
            <h1 style={{textAlign:"center"}}>Create Password</h1>
            <div className="secDiv">
               <p style={{textAlign:"center",marginBottom:"50px"}}>Please craete a secure password including the secure criteria below</p>
               <input id="passInput" type="password" maxLength="14" minLength="8"></input>
               <div className="passRow1">
               <p><img src="https://images.livemint.com/img/static/check_grey.svg" alt="logo"/>8-14 characters</p>
               <p><img src="https://images.livemint.com/img/static/check_grey.svg" alt="logo"/>1 uppercase letter</p>
               <p><img src="https://images.livemint.com/img/static/check_grey.svg" alt="logo"/>1 lowercase letter</p>
               </div>
               <div className="passRow2">
                   <p><img src="https://images.livemint.com/img/static/check_grey.svg" alt="logo"/>One special character</p>
                   <p><img src="https://images.livemint.com/img/static/check_grey.svg" alt="logo"/>1 number</p>
               </div>
               <p style={{marginBottom:"8px",fontSize: "16px",fontWeight: "700",}}>Password Strength</p>
               <div className="strength"></div>
               <div style={{textAlign:"center"}}><button >Continue</button></div>
            </div>
        </div>
    </>

}
export {Password}