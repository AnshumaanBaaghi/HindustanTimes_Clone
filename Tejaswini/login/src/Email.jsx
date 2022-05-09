import "./Email.css"

const Email=()=>{
    return<>
        <div className="logo1">
            <img style={{width:"283px",marginTop:"12px"}} src="https://images.livemint.com/sso/newLogos/prod/ht_logo.svg?v2" alt="logo"/>
        </div>
        <div className="main">
            <div style={{textAlign:"center",marginTop:"40px"}}>
            <img src="https://images.livemint.com/img/static/thumsup.svg" alt=""/>
            <h1 >You have successfully registered</h1>
            </div>
            <div className="div2">
                <p >Do you wish to link your email adrress?</p>
                <input className="emailInput" type="email" placeholder="you@example.com"></input>
                <div style={{display:"flex"}}>
                    <div className="skip">Skip</div>
                    <div className="continue">Continue</div>
                </div>
            </div>
        </div>
    </>
}
export {Email}