class AppHeader extends HTMLElement {
    constructor() {
      super();
  
      // Crear Shadow DOM (para encapsular estilos)
      const shadow = this.attachShadow({ mode: 'open' });
  
      // Definir la estructura HTML del header
      shadow.innerHTML = `
        <style>
            * {
                box-sizing: border-box;
                margin: 0;
                padding: 0;
            }
                
            header{
                width: 100%;
                padding: 0;
                background-color: #1C1C1C;
                z-index: 99;
                position: fixed;
                top: 0;
                background-color: rgba(28, 28, 28, 0.09); 
                backdrop-filter: blur(10px);
                -webkit-backdrop-filter: blur(10px);
            }
            .content-header{
                max-width: 1300px;
                margin: 0 auto;
                display: flex;
                padding: 12px 8px;
                justify-content: space-between;
                align-items: center;
            }

            .logo-buenasweb{
                width: 140px;
                height: auto;
                marging-right: auto;
                img{
                    
                    object-fit: cover;
                    width: 140px;
                    height: auto;
                }
            }

            .menu{
                ul{
                    display: flex;
                    flex-direction: row;
                    list-style: none;
                    gap: 24px;
                    left: 0;
                    padding-left: 0px;
                    li{
                        position: relative;
                        .nav-link{
                            text-decoration: none;
                            padding: 16px 8px;
                            color: var(--gray);
                            &:hover{
                                color: rgb(255, 255, 255);
                                font-weight: 500;
                            }
                        }
                        
                    }




                
                    
                }
            }

            





            .content-header {
                .social {
                    width: 100px;
                    display: flex;
                    justify-content: space-between;

                    img {
                        width: 20px;
                        height: 20px;
                        cursor: pointer;
                    }
                }
            }




            /* Contenedor principal */
            .hamburger {
                width: 28px;
                height: 28px;
                padding: 4px;
            }

            /* hamburguesa ícono */
            .hamburger {
                display: none;
                cursor: pointer;
            }

            /* Barras del ícono */
            .bar{
                display: block;
                width: 25px;
                height: 3px;
                margin: 5px auto;
                -webkit-transition: all 0.3s ease-in-out;
                transition: all 0.3s ease-in-out;
                background-color: white;
            }


            @media (max-width: 950px){
                header{
                width: 100%;
                padding: 0px 20px;
                z-index: 50;
                height: 70px;
                display: flex;
                }
                .content-header{
                width: 100%;
                padding: 18px 0px;
                margin: auto 0;
                display: flex;
                justify-content: space-between;
                }
                .content-header .social{
                    display: none;
                }
                .hamburger{
                    display: block;
                }
                .hamburger.active .bar:nth-child(2){
                    opacity: 0;
                }
                .hamburger.active .bar:nth-child(1){
                    transform: translateY(8px) rotate(45deg);
                }
                .hamburger.active .bar:nth-child(3){
                    transform: translateY(-8px) rotate(-45deg);
                }
                .menu{
                    position: fixed;
                    top: 60px;
                    padding: 20px 10px;
                    left: -100%;
                    width: 100%;
                    


                  /* COLOR CLAVE: Un gris muy oscuro pero muy transparente */
        background-color: rgba(0, 0, 0, 0.96); 
        
        /* EFECTO CRISTAL */
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
        
        
        z-index: 100;
        transition: left 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);



                    ul{
                        display: flex;
                        flex-direction: column;
                        gap: 16px;
                        text-align: center;
                        li{
                            position: relative;
                            padding: 16px 12px;
                            .nav-link{
                                color: white;
                                font-size: 20px;
                                &:hover{
                                    color: rgb(255, 255, 255);
                                    font-weight: 500;
                                }
                            }
                            
                        }
                    
                    }
                }
                .menu.active{
                    left: 0;
                }


             

        </style>
  
        <header>
       <div class="content-header" >
            <div class="logo-buenasweb"><img src="images/logo-blanco.svg" alt="Logo ByteSync"></div>
            <!-- menu boton mobile -->
                    <div class="hamburger">
                    <span class="bar"></span>
                    <span class="bar"></span>
                    <span class="bar"></span>
                    </div>
            <nav class="menu" >
                <ul>
                    <li><a href="index.html" class="nav-link" id="index">Inicio</a></li>
                    <li><a href="nosotros.html" class="nav-link" id="nosotros">Nosotros</a></li>
                    <li><a href="servicios.html" class="nav-link" id="servicios">Servicios</a></li>
                    
                    <li><a href="contacto.html" class="nav-link" id="contacto">Contacto</a></li>
                </ul>
            </nav>
            <div class="social">
                
                <a target="_blank" href="#">
                <img src="images/tiktok.svg" alt="logo tik Tok">
                </a>

                <a target="_blank" href="https://www.instagram.com/">
                <img src="images/instagram.svg" alt="logo instagram">
                </a>

                <a target="_blank" href="https://www.facebook.com/">
                <img src="images/facebook.svg" alt="logo facebook">
                </a>
            </div>
        </div>
        </header>
      `;
  
            
                const hamburger = this.shadowRoot.querySelector(".hamburger");
                const menu = this.shadowRoot.querySelector(".menu");

                hamburger.addEventListener("click", ()=>{
                    hamburger.classList.toggle("active");
                    menu.classList.toggle("active")
                } );

                const link = this.shadowRoot.querySelectorAll(".nav-link");
                link.forEach(l => l.addEventListener("click", ()=>{
                    hamburger.classList.remove("active");
                    menu.classList.remove("active");
                }))

                

        // Cierra el submenú al hacer clic fuera
       





    };
}
  
  
  // Registrar el componente personalizado
  customElements.define('app-header', AppHeader);