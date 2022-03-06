import React from "react";
import { Button, ButtonIcon, ButtonLink } from "./Button.styled";

const ButtonComponent = () => {
    return (
        <>
            <ButtonLink>
                <Button>
                    <ButtonIcon />
                    Conectar carteira
                </Button>
            </ButtonLink>
        </>
    );
};

export default ButtonComponent;
