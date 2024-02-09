import React, { useState } from "react";

import styles from "./costumizacao.module.css"
import { useCharacter } from '../../context/CharacterContext.js';

import { FaCaretLeft, FaCaretRight } from "react-icons/fa6";

import planoDeFundo1 from "../../Imagens/Fundos/Fundo Floresta.png"
import planoDeFundo2 from "../../Imagens/Fundos/Fundo Madeira.png"
import planoDeFundo3 from "../../Imagens/Fundos/Fundo Noturno.png"

import Cabelo1 from "../../Imagens/Cavalheiro/CabeloC/BotasAzuis.png"
import Cabelo2 from "../../Imagens/Cavalheiro/CabeloC/BotasNormais.png"
import Cabelo3 from "../../Imagens/Mago/Cabelo/BarbaCinza.png"
import Cabelo4 from "../../Imagens/Mago/Cabelo/BarbaVemelha.png"

import Olhos1 from "../../Imagens/Cavalheiro/OlhosC/EspadaCinza.png"
import Olhos2 from "../../Imagens/Cavalheiro/OlhosC/EspadaRoxa.png"
import Olhos3 from "../../Imagens/Cavalheiro/OlhosC/EspadaVermelha.png"
import Olhos4 from "../../Imagens/Mago/Olhos/OlhosAzuis.png"
import Olhos5 from "../../Imagens/Mago/Olhos/OlhosVerdes.png"
import Olhos6 from "../../Imagens/Mago/Olhos/OlhosVermelhos.png"

import Pele1 from "../../Imagens/Cavalheiro/PeleC/ArmaduraCinza.png"
import Pele2 from "../../Imagens/Cavalheiro/PeleC/ArmaduraVermelha.png"
import Pele3 from "../../Imagens/Mago/Pele/Pele1.png"
import Pele4 from "../../Imagens/Mago/Pele/Pele2.png"

import Roupa1 from "../../Imagens/Cavalheiro/RoupaC/EscudoNormal.png"
import Roupa2 from "../../Imagens/Cavalheiro/RoupaC/EscudoPreto.png"
import Roupa3 from "../../Imagens/Cavalheiro/RoupaC/EscudoRoxo.png"
import Roupa4 from "../../Imagens/Mago/Roupas/RoupaLaranja.png"
import Roupa5 from "../../Imagens/Mago/Roupas/RoupaVerde.png"
import Roupa6 from "../../Imagens/Mago/Roupas/RoupaVermelha.png"


import Menu from "../../Components/Menu/Menu.js"



export default function Costumizacao() {

    const [characterType, setCharacterType] = useState('Cavalheiro');
    const { characterData, updateCharacterPart } = useCharacter();

    
    const opcoes = {
        Cavalheiro: {
            cabelo: [Cabelo1, Cabelo2],
            pele: [Pele1, Pele2],
            olho: [Olhos1, Olhos2, Olhos3, Olhos4, Olhos5, Olhos6],
            roupa: [Roupa1, Roupa2, Roupa3],
        },
        Mago: {
            cabelo: [Cabelo3, Cabelo4],
            pele: [Pele3, Pele4],
            olho: [Olhos1, Olhos2, Olhos3, Olhos4, Olhos5, Olhos6],
            roupa: [Roupa4, Roupa5, Roupa6],
        },
        planoDeFundo: [planoDeFundo1, planoDeFundo2, planoDeFundo3]
    };

    const [currentOptions, setCurrentOptions] = useState({
        cabelo: 0,
        pele: 0,
        olho: 0,
        roupa: 0,
        planoDeFundo: 0
    });

    const switchCharacterType = (type) => {
        setCharacterType(type);
        setCurrentOptions({
            cabelo: 0,
            pele: 0,
            olho: 0,
            roupa: 0,
            planoDeFundo: currentOptions.planoDeFundo 
        });
    };

    const changeCharacter = (parte, direction) => {
        if (parte === 'planoDeFundo') {
            setCurrentOptions(prevOptions => ({
                ...prevOptions,
                [parte]: direction === 'next'
                    ? (prevOptions[parte] + 1) % opcoes[parte].length
                    : (prevOptions[parte] - 1 + opcoes[parte].length) % opcoes[parte].length
            }));
        } else {
            setCurrentOptions(prevOptions => ({
                ...prevOptions,
                [parte]: direction === 'next'
                    ? (prevOptions[parte] + 1) % opcoes[characterType][parte].length
                    : (prevOptions[parte] - 1 + opcoes[characterType][parte].length) % opcoes[characterType][parte].length
            }));
        }
    };

    const saveCharacterConfig = () => {
        updateCharacterPart('characterConfig', currentOptions);
    };

    // const saveCharacterConfig = () => {
    //     const configToSave = JSON.stringify(currentOptions);
    //     localStorage.setItem('characterConfig', configToSave);
    //   };

    const renderCustomizationCategory = (parte, categoria) => (
        <div className={styles.categoria}>
            <FaCaretLeft className={styles.iconeSeta} onClick={() => changeCharacter(parte, 'prev')}/>
            <h1 className={styles.header}>{categoria}</h1>
            <FaCaretRight className={styles.iconeSeta} onClick={() => changeCharacter(parte, 'next')}/>
        </div>
    );
    
    return(
        <div className={styles.costumizacaoContainer}>
            <Menu />
            <div className={styles.costumizacaoWrap}>
                <div className={styles.leftContainer}>
                    <img src={opcoes.planoDeFundo[currentOptions.planoDeFundo]} alt="Background" className={styles.planoDeFundo}/>
                    {Object.keys(opcoes[characterType]).map(part => (
                        part !== 'planoDeFundo' && <img key={part} src={opcoes[characterType][part][currentOptions[part]]} alt={part} className={styles[part]}/>
                    ))}
                </div>
                <div className={styles.rightContainer}>
                    <div className={styles.characterTypeSelector}>
                        <button className={styles.botaoType} onClick={() => switchCharacterType('Cavalheiro')}>Cavalheiro</button>
                        <button className={styles.botaoType} onClick={() => switchCharacterType('Mago')}>Mago</button>
                    </div>
                    {renderCustomizationCategory('planoDeFundo', 'plano de fundo')}
                    {Object.keys(opcoes[characterType]).map(part => (
                        renderCustomizationCategory(part, part)
                    ))}
                    <button className={styles.botaoSalvar} onClick={saveCharacterConfig}>SALVAR</button>
                </div>
            </div>
        </div>
    );
}