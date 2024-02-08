import React, { useState } from "react";

import styles from "./costumizacao.module.css"

import { FaCaretLeft, FaCaretRight } from "react-icons/fa6";

import planoDeFundo1 from "../../Assets/Personagem/PlanoDeFundo/Tela Batalha Chuvosa.jpg"
import planoDeFundo2 from "../../Assets/Personagem/PlanoDeFundo/Tela Batalha Nublado.jpg"
import planoDeFundo3 from "../../Assets/Personagem/PlanoDeFundo/Tela Tabalha Neve.jpg"
import planoDeFundo4 from "../../Assets/Personagem/PlanoDeFundo/Tela Batalha.jpg"

import Menu from "../../Components/Menu/Menu.js"



export default function Costumizacao() {

    
    const opcoes = {
        /*
        cabelo: [prefixoImagens + '/Cabelo/cabeloLoiro.png', prefixoImagens + '/Cabelo/cabeloPreto.png', prefixoImagens + '/Cabelo/cabeloCastanho.png'],
        pele: [prefixoImagens + '/Pele/peleClara.png', prefixoImagens + '/Pele/peleMedia.png', prefixoImagens + '/Pele/peleEscura.png'],
        olho: [prefixoImagens + 'Olho/olho.png'],
        */
        planoDeFundo: [planoDeFundo1, planoDeFundo2, planoDeFundo3, planoDeFundo4]
    };

    const [currentOptions, setCurrentOptions] = useState({
        /*
        cabelo: 0,
        pele: 0,
        olho: 0,
        */
        planoDeFundo: 0
    });

    const changeCharacter = (parte, direction) => {
        setCurrentOptions(prevOptions => ({
            ...prevOptions,
            [parte]: direction === 'next'
                ? (prevOptions[parte] + 1) % opcoes[parte].length
                : (prevOptions[parte] - 1 + opcoes[parte].length) % opcoes[parte].length
        }));
    };

    const renderCustomizationCategory = (parte, categoria) => (
        <div className={styles.categoria}>
            <FaCaretLeft className={styles.iconeSeta} onClick={() => changeCharacter(parte, 'prev')}/>
            <h1>{categoria}</h1>
            <FaCaretRight className={styles.iconeSeta} onClick={() => changeCharacter(parte, 'next')}/>
        </div>
    );

    /*
    

    function salvaPersonagem() {
        for (var part in currentOption) {
            if (currentOption.hasOwnProperty(part)) {
                localStorage.setItem(part, currentOption[part]);
            }
        }
        console.log('Character saved!');
    }
    */
    
    return(
        <div className={styles.costumizacaoContainer}>
            <Menu/>
            <div className={styles.costumizacaoWrap}>
                <div className={styles.leftContainer}>
                    <img src={opcoes.planoDeFundo[currentOptions.planoDeFundo]} alt="Background" className={styles.planoDeFundo}/>
                </div>
                <div className={styles.rigthContainer}>
                    {renderCustomizationCategory('planoDeFundo', 'Plano de Fundo')}
                    {renderCustomizationCategory('pele', 'Cor de Pele')}
                    {renderCustomizationCategory('roupa', 'Roupa')}
                    {renderCustomizationCategory('cabelo', 'Cor do olho')}
                    {renderCustomizationCategory('cabelo', 'Estilo de Cabelo')}
                    <button className={styles.botaoSalvar}> SALVAR </button>
                </div>
            </div>
        </div>
    );
}