import React, {useState,useRef,useEffect} from 'react';
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom'
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from '../api/axios';
import useAuth from '../hooks/useAuth';

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = '/register';
const LOGIN_URL = '/auth';



const ModalWindow = () => {
    let subtitle;
    const [isFirstModalOpen, setIsFirstModalOpen] = useState(false);
    const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);
    const [isFourthModalOpen, setIsFourthModalOpen] = useState(false);
    const [isThirdModalOpen, setIsThirdModalOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    const handleLogin = () => {
        
    }

    const openFirstModal = () => {
        setIsFirstModalOpen(true)
        setIsSecondModalOpen(false);
        setIsFourthModalOpen(false)
        setIsThirdModalOpen(false)
    }
    const closeFirstModal = () => {
        setIsFirstModalOpen(false);
    }  

    function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#FFFF00';
    subtitle.style.textAlign = 'center';
  }

  const openSecondModal = () => {
    setIsSecondModalOpen(true);
    setIsFirstModalOpen(false);
    setIsThirdModalOpen(false)
}
const closeSecondModal = () => {
    setIsSecondModalOpen(false);
}

const openThirdModal = () => {
    setIsThirdModalOpen(true);
    setIsFirstModalOpen(false)
    setIsFourthModalOpen(false)
    setIsSecondModalOpen(false)
}
const closeThirdModal = () => {
    setIsThirdModalOpen(false);
}

const openFourthModal = () => {
    setIsFourthModalOpen(true)
    setIsSecondModalOpen(false);
    setIsFirstModalOpen(false);
    setIsThirdModalOpen(false)
}
const closeFourthModal = () => {
    setIsFourthModalOpen(false)
}

const closeModal = () => {
    setIsFirstModalOpen(false)
    setIsSecondModalOpen(false)
    setIsFourthModalOpen(false)
    setIsThirdModalOpen(false)
}

    const userRef = useRef();
    const errRef = useRef();

    const [user,setUser] = useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [name, setName] = useState('');

    const [phone,setPhone] = useState(''); 

    const [email,setEmail] = useState('');
 
    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);


    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');


    useEffect(() => {
        setValidName(USER_REGEX.test(user))
    }, [user])

    useEffect(() => {
        setValidPwd(PWD_REGEX.test(pwd));
        setValidMatch(pwd === matchPwd);
    }, [pwd, matchPwd])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd, matchPwd])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const v1 = USER_REGEX.test(user);
        const v2 = PWD_REGEX.test(pwd);

        if (!v1 || !v2) {
            setErrMsg("Invalid Entry");
            return;
        }
        try {
            const response = await axios.post(REGISTER_URL,
                JSON.stringify({ user,name,phone,email,pwd }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            console.log(JSON.stringify(response?.data));
            setUser('');
            setName('');
            setPhone('');
            setEmail('');
            setPwd('');
            setMatchPwd('');
            
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 409) {
                setErrMsg('Username Taken');
            } else {
                setErrMsg('Registration Failed')
            }
            errRef.current.focus();
        }
    }

    const {setAuth} = useAuth();

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

    const handleSubmit2 = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(LOGIN_URL,
                JSON.stringify({ user, pwd }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            console.log(JSON.stringify(response?.data));
            const accessToken = response?.data?.accessToken;
            const roles = response?.data?.roles;
            setAuth({ user, pwd, roles, accessToken });
            setUser('');
            setPwd('');
            setIsLoggedIn(true);
            navigate('/home')
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400) {
                setErrMsg('Missing Username or Password');
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            }
            errRef.current.focus();
        }
    }


  return (
    <div className='windowsModal'>
        <a onClick={openFirstModal}>Ingresar /</a>
        <a onClick={openSecondModal}> Crear Cuenta</a>
      
        <Modal className='modal1' isOpen={isFirstModalOpen} onClose={closeFirstModal} onAfterOpen={afterOpenModal}>
            <form className="form">
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Iniciar Sesión</h2>
                <div className="field">
                    <svg className='input-icon' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/>
                    </svg>
                    <input autocomplete="off" 
                    placeholder="Nombre Usuario"
                    id='username'
                    className="input-field" 
                    type="text"
                    ref={userRef}
                    onChange={(e) => setUser(e.target.value)}
                    value={user}
                    required/>
                </div>
                <div className="field">
                    <svg className="input-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"></path>
                    </svg>
                    <input placeholder="Contraseña" 
                    className="input-field" 
                    type="password"
                    id='password'
                    onChange={(e) => setPwd(e.target.value)}
                    value={pwd}
                    required/>
                </div>
                <div className="btn">
                    <button onClick={handleSubmit2} onChange={handleLogin} className="button1">Ingresar</button>
                    <button onClick={openSecondModal} className="button2">Registrarse</button>
                </div>
                <button onClick={openThirdModal} class="button4">¿Olvidaste tu contraseña?</button>
            </form>
            <a className='close' onClick={closeModal}>Cerrar</a>
        </Modal>
        <Modal className='modal1' isOpen={isThirdModalOpen} onClose={closeThirdModal} onAfterOpen={afterOpenModal}>
            <form className="form">
                <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Recuperar Contraseña</h2>
                <div className="field">
                    <svg className="input-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z"></path>
                    </svg>
                    <input autocomplete="off" placeholder="Correo" className="input-field" type="text"/>
                </div>
                <div className="btn">
                    <button className="button4">Enviar</button>
                </div>
            </form>
            <a className='close' onClick={closeModal}>Cerrar</a>
        </Modal>
        <Modal style={{border: 'none'}} className='modal2' isOpen={isSecondModalOpen} onClose={closeSecondModal} onAfterOpen={afterOpenModal}>
        <form className="form" onSubmit={handleSubmit}>
        <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Registrarse</h2>
                <div className="field">
                    <svg className='input-icon' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/>
                    </svg>
                    <FontAwesomeIcon icon={faCheck} className={validName ? "valid" : "hide"} />
                    <FontAwesomeIcon icon={faTimes} className={validName || !user ? "hide" : "invalid"} />
                    <input autocomplete="off" 
                    placeholder="Nombre Usuario" 
                    className="input-field" 
                    type="text" 
                    id="username" 
                    ref={userRef} 
                    onChange={(e) => setUser(e.target.value)} 
                    value={user} 
                    required 
                    aria-invalid={validName ? "false" : "true"} 
                    aria-aria-describedby='uidnote' 
                    onFocus={() => setUserFocus(true)} 
                    onBlur={() => setUserFocus(false)}/>
                </div>
                <p id="uidnote" className={userFocus && user && !validName ? "instructions" : "offscreen"}>
                        <FontAwesomeIcon icon={faInfoCircle} />
                        4 a 24 caracteres.<br />
                        Debe comenzar con una letra.<br />
                        Se permiten letras, números, guiones bajos y guiones.
                    </p>
                <div className="field">
                    <svg className='input-icon' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/>
                    </svg>
                    <input autocomplete="off" 
                    placeholder="Nombre y Apellidos" 
                    className="input-field" 
                    type="text" 
                    id='name' 
                    ref={userRef}  
                    onChange={(e) => setName(e.target.value)} 
                    value={name}/>
                </div>
                <div className="field">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
                        <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                    </svg>
                    <input autocomplete="off" 
                    placeholder="Telefono" 
                    className="input-field"
                    type="text" 
                    id='phone' 
                    onChange={(e) => setPhone(e.target.value)} 
                    value={phone}/>
                </div>
                <div className="field">
                    <svg className="input-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z"></path>
                    </svg>
                    <input autocomplete="off" 
                    placeholder="Correo" 
                    className="input-field" 
                    type="text" id='email' 
                    ref={userRef} 
                    onChange={(e) => setEmail(e.target.value)} 
                    value={email}/>
                </div>
                <div className="field">
                    <svg className="input-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"></path>
                    </svg>
                    <FontAwesomeIcon icon={faCheck} className={validPwd ? "valid" : "hide"} />
                    <FontAwesomeIcon icon={faTimes} className={validPwd || !pwd ? "hide" : "invalid"} />
                    <input placeholder="Contraseña" 
                    className="input-field" 
                    type="password" 
                    id='password' 
                    onChange={(e) => setPwd(e.target.value)} 
                    value={pwd} 
                    required
                    aria-invalid={validPwd ? "false" : "true"}
                    aria-describedby="pwdnote"
                    onFocus={() => setPwdFocus(true)}
                    onBlur={() => setPwdFocus(false)}/>
                </div>
                <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
                    <FontAwesomeIcon icon={faInfoCircle} />
                    8 a 24 caracteres.<br />
                    Debe incluir letras mayúsculas y minúsculas, un número y un carácter especial.<br />
                    Caracteres especiales permitidos: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                </p>
                <div className="field">
                    <svg className="input-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"></path>
                    </svg>
                    <FontAwesomeIcon icon={faCheck} className={validMatch && matchPwd ? "valid" : "hide"} />
                    <FontAwesomeIcon icon={faTimes} className={validMatch || !matchPwd ? "hide" : "invalid"} />
                    <input placeholder="Confirmación de contraseña" 
                    className="input-field" 
                    type="password" 
                    id='confirm_pwd' 
                    onChange={(e) => setMatchPwd(e.target.value)} 
                    value={matchPwd} 
                    required
                    aria-invalid={validMatch ? "false" : "true"}
                    aria-describedby="confirmnote"
                    onFocus={() => setMatchFocus(true)}
                    onBlur={() => setMatchFocus(false)}/>
                </div>
                <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
                    <FontAwesomeIcon icon={faInfoCircle} />
                    Debe coincidir con el primer campo de entrada de contraseña.
                </p>
                <div className="btn">
                    <button className="button1">Crear Cuenta</button>
                    <button onClick={openFirstModal} className="button2">Iniciar Sesión</button>
                </div>
                <button onClick={openFourthModal} class="button4">¡Registra tu Gimnasio!</button>
            </form>
            <a className='close' onClick={closeModal}>Cerrar</a>
        </Modal>
        <Modal style={{border: 'none'}} className='modal2' isOpen={isFourthModalOpen} onClose={closeFourthModal} onAfterOpen={afterOpenModal}>
        <form className="form">
                <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Registrar Gimnasio</h2>
                <div className="field">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-shop-window" viewBox="0 0 16 16">
                    <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h12V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zm2 .5a.5.5 0 0 1 .5.5V13h8V9.5a.5.5 0 0 1 1 0V13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5a.5.5 0 0 1 .5-.5z"/>
                </svg>
                    <input autocomplete="off" placeholder="Nombre Gimnasio" className="input-field" type="text"/>
                </div>
                <div className="field">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-map" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M15.817.113A.5.5 0 0 1 16 .5v14a.5.5 0 0 1-.402.49l-5 1a.502.502 0 0 1-.196 0L5.5 15.01l-4.902.98A.5.5 0 0 1 0 15.5v-14a.5.5 0 0 1 .402-.49l5-1a.5.5 0 0 1 .196 0L10.5.99l4.902-.98a.5.5 0 0 1 .415.103zM10 1.91l-4-.8v12.98l4 .8V1.91zm1 12.98 4-.8V1.11l-4 .8v12.98zm-6-.8V1.11l-4 .8v12.98l4-.8z"/>
                </svg>
                    <input autocomplete="off" placeholder="Direccion" className="input-field" type="text"/>
                </div>
                <div className="field">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
                        <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                    </svg>
                    <input autocomplete="off" placeholder="Telefono" className="input-field" type="text"/>
                </div>
                <button class="button4">¡Registrar!</button>
            </form>
            <a className='close' onClick={closeModal}>Cerrar</a>
        </Modal>
    </div>
  );
}

export default ModalWindow;