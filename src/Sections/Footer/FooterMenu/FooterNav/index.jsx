import React from "react";
import FooterList from "./FooterMenu";
import StyledNavWrapper from "./styled";

const NavWrapper = () => {
    return (
        <>
            <StyledNavWrapper>
                <FooterList title="Empresa" link1="Sobre" link2="Serviços" link3="Time" link4="Carreira"/>
                <FooterList title="Mapa" link1="Galeria" link2="Populares" link3="Vendas" link4="Contato"/>
                <FooterList title="Links" link1="FAQs" link2="Termos" link3="Política" link4="Ajuda"/>
            </StyledNavWrapper>
        </>
    );
};

export default NavWrapper;
