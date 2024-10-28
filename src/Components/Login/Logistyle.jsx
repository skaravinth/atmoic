import { border, borderLeft, display, fontWeight, height, width } from "@mui/system";

export const SigninStyle = {
    Signin: {
      width: '28%',
      height: '62%',
      backgroundColor: '#FFFFFF',
      borderRadius: '4%',
    },
    eyeicon: {
      color: 'black',
    },
    Forgot: {
      textDecoration: 'underline',
      color: '#353448',
      fontSize: '14px',
      fontWeight: '500',
    },
    Signinlogo: {
      marginTop: '5%',
      textAlign: 'left',
      marginLeft: '7%',
      marginBottom: '4%',
    },
    welcome: {
      color: '#0E1824',
      fontWeight: '600',
      fontSize: '22px',
      textAlign: 'left',
      paddingLeft: '7%',
    },
    Signincontent: {
      color: '#71707E',
      width: '80%',
      textAlign: 'left',
      paddingLeft: '30px',
    },
    signinemail: {
      color: '#262C33',
      textAlign: 'left',
      paddingLeft: '32px',
      paddingBottom: '2%',
    },
    Emailfield: {
      marginTop: '4%',
    },
    welcomebox: {
      marginBottom: '1%',
    },
    signinPassword: {
      color: '#262C33',
      textAlign: 'left',
      paddingLeft: '32px',
      paddingBottom: '2%',
    },
    Passwordfield: {
      color: '#262C33',
      marginTop: '3%',
    },
    forgotpasswordbox: {
      textAlign: 'right',
      marginTop: '4%',
      paddingRight: '8%',
      marginBottom: '8%',
    },
    alert:{
        position: 'absolute',
        width:'312px',
        top: '60px',
        left: '50%',
        transform: 'translateX(-50%)',
        height:'40px',
        backgroundColor: '#CEF3E4',
        border:'1px solid #7FDCA4',
        color:'#353448',
        padding: '0.5rem 1rem',
        borderRadius: '12px',
        display: 'flex',
        alignItems: 'center',
        justifyContent:'center'
        

    }
    ,
    alertclose:{
        color:'black',
       
        display:'flex',
        alignItems:'center',
        
        marginLeft:'20px'
       

    },
    msg:{
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        fontWeight:'500'
    },
    closeBox:{
        width:'40px',
        height:'32px',
        marginLeft:'40px',
        display:'flex',
        alignItems:'center',
        borderLeft:'1px solid white',
    }
  };
  