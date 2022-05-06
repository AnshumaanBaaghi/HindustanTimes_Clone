import "./Otp.css"

const Otp=()=>{
    return(
        <>
            <div className="logo1">
                <img style={{width:"283px",marginTop:"12px"}} src="https://images.livemint.com/sso/newLogos/prod/ht_logo.svg?v2" alt="logo"/>
            </div>
            <div className="maindiv">
                <h1 style={{textAlign:"center"}}>Validate OTP</h1>
                <div className="sec_div">
                    <p style={{textAlign:"center"}}>We have sent you a verification code to +91 - 9797104169.<br/> Please enter the code to proceed.</p>
                    <div style={{marginTop:"50px"}}>
                       <div className="label">Enter OTP<span>*</span></div>
                       <div className="input">
                           <input style={{marginLeft: "0%"}} maxLength={1} type="tel" inputMode="Numeric"/>
                           <input maxLength={1} type="tel" inputMode="Numeric"/>
                           <input maxLength={1} type="tel" inputMode="Numeric"/>
                           <input maxLength={1} type="tel" inputMode="Numeric"/>
                           <input maxLength={1} type="tel" inputMode="Numeric"/>
                           <input maxLength={1} type="tel" inputMode="Numeric"/>
                       </div>
                       <div className="resend">Resend OTP</div>
                    </div>
                    <div style={{textAlign:"center",marginTop:"35px"}}><button >Verify OTP to proceed</button></div>
                </div>
            </div>
        </>
    )
}
export {Otp}