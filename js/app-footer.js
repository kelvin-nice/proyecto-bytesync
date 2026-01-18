class AppFooter extends HTMLElement {
    constructor() {
      super();
  
      // Crear Shadow DOM (para encapsular estilos)
      const shadow = this.attachShadow({ mode: 'open' });
  
      // Definir la estructura HTML del header
      shadow.innerHTML = `
        <style>
          /* Estilos encapsulados */
 

        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body{
            font-family: 'Roboto', sans-serif;
        }

        footer{
            background: var(--dark);
            color: cornsilk;
            width: 100%;
            padding-top: 30px;

}

.pie-content{
    width: 98%;
    max-width: 1300px;
    margin-left: auto;
    margin-right: auto;
    padding: 40px 0px 50px 0px;
    display: flex;
    justify-content: center;
    justify-content: space-between;
    flex-wrap: nowrap;
    color: rgb(202, 202, 202);
    
}

@media (max-width: 1020px){
    .pie-content{
        flex-wrap: wrap;
    }
}
.card3{
    top: 0;
    margin-top: 30px ;
    padding: 15px;
    width: 300px;
    height: auto;
    margin-right: 20px;

}
.card3 .logito{
    width: 200px;
    margin-bottom: 10px;
}
.card3 h3{
    font-size: 20px;
    margin-bottom: 20px;
    color: #ffffff;
    font-weight: 700;
}

.text-pie1{
    font-size: 18px;
    line-height: 24px;
    margin-bottom: 20px;
}
.text-pie2{
    font-size: 16px;
    line-height: 20px;
}
.card3 .flechita{
    width: 25px;
    height: 15px;
    margin-right: 5px;
    padding-right:8px;
    margin-bottom: 0px;
}
.grupo-flecha{
    display: flex;
    align-items: center;
    justify-content: left;
}


.text-pie{
    font-size: 16px;
    line-height: 20px;
    margin-bottom: 5px;
}

.text-pie a{
    color: #cc75ff;
}

.correos{
    text-decoration: none;
    color: #cc75ff;
    line-height: 22px;
}

.correos:hover{
    color: white;
    transition: all .5s;
}

.down{
    background: var(--dark);
    margin-left: auto;
    margin-right: auto;
    border-top: 0.2px solid #194c7c;
}

.down p{
    padding-top: 30px;
    padding-bottom: 30px;
    padding-left: 10px;
    padding-right: 10px;
    text-align: center;
    font-size: 14px;
    color: #235c92;
} 

.redes-sociales-abajo a{
text-decoration: none;
height-line: 0px;
}

.redes-sociales-abajo a .face{
    color: white;
    margin-right: 12px;
    border-radius: 8px; 
    padding: 8px 8px 6px 8px;
    cursor: pointer;
    display: inline-block;
}

.redes-sociales-abajo a .insta{
    color: white;
    margin-right: 12px;
    border-radius: 8px; 
    padding: 8px 8px 6px 8px;
    cursor: pointer;
    display: inline-block;
    margin-bottom: 0px;
}
    .redes-sociales-abajo a .tiktok{
    color: white;
    margin-right: 12px;
    border-radius: 8px; 
    padding: 8px 8px 6px 8px;
    background-image: black;
    cursor: pointer;
    display: inline-block;
    margin-bottom: 0px;
}

    .iconitos{
    position: relative;
    
    }





        </style>
  
        <footer>
        <div class="pie-content">
            <div class="card3"><img class="logito" src="images/logo-bytesync.svg" alt="Bytesync">
            
                
        </div>
            
            <div class="card3"><h3>Horario de atención:</h3>
                <p class="text-pie">Atendendemos de Lunes a Viernes de 8:00AM - 8:00PM .</p></div>
            <div class="card3"><h3>Contáctenos</h3> 
                <div><p class="text-pie" > <a href="tel:+51915173767"> Cel.: 51+ 915 173 767 </a> </p></div>
            
                <div> <a class="correos" href="mailto:cotiza@bytesync.com"> cotiza@bytesync.com </a></div>

               

            </div> 
            <div class="card3">
                <div class="redes-sociales-abajo">
                <h3>Redes sociales</h3> 
                    <a target="_blank" href="#">
                    <div class="face" >
                    <img class="iconitos" src="images/facebook.svg" alt="Icono" width="25" height="25" >  </div>
                    </a>


                    <a target="_blank" href="h#">
                    <div class="insta">
                    <img class="iconitos" src="images/instagram.svg" alt="Icono" width="25" height="25" >
                    </div>
                    </a>

                    <a target="_blank" href="#">
                    <div class="tiktok">
                    <img class="iconitos" src="images/tiktok.svg" alt="Icono" width="25" height="25" >
                    </div>
                    </a>

                </div>
            </div>
        </div>
        <div class="down">
            <p>Copyright ©  2025-2026 "ByteSync" Todos los derechos reservados.</p>
        </div>
    </footer>
      `;
  
      
    }
  }
  
  // Registrar el componente personalizado
  customElements.define('app-footer', AppFooter);