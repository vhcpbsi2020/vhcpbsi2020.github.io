import "./style.css"
import React from 'react';
import { Button, Flex } from 'antd';

const styleButton = {
    backgroundColor: '#506635',
    height: 47,
    fontSize: 23,
    fontWeight: 700,
    borderRadius: 30
}

function PageIbama() {
    return (
        <>

            <div className="div-topo" style={{ textAlign: 'center', fontWeight: 600, display: "flex", flexDirection: 'column' }}>

                <div><h1 style={{ color: "white", fontSize: 50 }}>Serviços:  </h1></div>

                <Flex wrap="wrap" gap="small" className="site-button-ghost-wrapper" style={{ justifyContent: 'center' }}>
                    <a href="https://servicos.ibama.gov.br/licenciamento/consulta_rel_licencia_por_periodo.php" target="_blank">
                        <Button type="primary" danger style={styleButton}>
                            Licenciamento por período
                        </Button>
                    </a>
                    <a href="https://servicos.ibama.gov.br/licenciamento/consulta_rel_licencia_por_ano.php" target="_blank">

                    <Button danger type="primary" style={styleButton} >
                        Licenciamento por ano
                    </Button>
                    </a>
                    <a href="https://www.gov.br/ibama/pt-br/servicos/registros/flora-e-madeira/registro-de-produtos-preservativos-de-madeiras#procedimentos" target="_blank"> 

                    <Button type="primary" style={styleButton}>
                        Certificados
                    </Button>
                    </a>
                    <a href="https://www.gov.br/ibama/pt-br/canais_atendimento/fale-conosco" target="_blank"> 

                    <Button type="primary" style={styleButton}> 
                        Contatos
                    </Button>
                    </a>
                </Flex>
            </div>
        </>
    )
}
export default PageIbama;