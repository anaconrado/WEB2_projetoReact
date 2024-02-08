import React, { useEffect, useState } from "react";
import { useDrag } from 'react-dnd'



import styles from "./trelo.module.css"

import { FaCaretLeft, FaCaretRight } from "react-icons/fa6";


import planoDeFundo33 from "../../Imagens/Batalhas/Thunderstorm.jpg"
import planoDeFundo44 from "../../Imagens/Batalhas/Clouds.jpg"
import planoDeFundo22 from "../../Imagens/Batalhas/Snow.jpg"
import planoDeFundo11 from "../../Imagens/Batalhas/Clear.jpg"
import Jogador1 from "../../Imagens/Fundos/Fundo Floresta.png"
import Jogador2 from "../../Imagens/Fundos/Fundo Floresta.png"

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




export default function Trelo() {

    //Estruturas de dados

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

const [characterConfig, setCharacterConfig] = useState({
    cabelo: 0,
    pele: 0,
    olho: 0,
    roupa: 0,
    planoDeFundo: 0
});

//Função de load

useEffect(() => {
    const savedConfig = localStorage.getItem('characterConfig');
    if (savedConfig) {
        setCharacterConfig(JSON.parse(savedConfig));
    }
}, []);

    
   
    
    return(
        <div class={styles.limiter}>
        <Menu />
            

		<div class={styles.containerStats100}> 
			
			<div class={styles.wrapStats100}>
				<div class={styles.statsMenu} data-tilt>
                    <div className={styles.characterDisplay}>
                        <img className={styles.planoDeFundo} src={opcoes.planoDeFundo[characterConfig.planoDeFundo]} alt="Background"/>
                        <img className={styles.cabelo} src={opcoes.Cavalheiro.cabelo[characterConfig.cabelo]} alt="Hair"/>
                        <img className={styles.pele} src={opcoes.Cavalheiro.pele[characterConfig.pele]} alt="Skin"/>
                        <img className={styles.olho} src={opcoes.Cavalheiro.olho[characterConfig.olho]} alt="Eyes"/>
                        <img className={styles.roupa} src={opcoes.Cavalheiro.roupa[characterConfig.roupa]} alt="Outfit"/>
                    </div>
					<ul class={styles.statsWindow}>
						<div>
							<a class={styles.namePersono}>Janela de Atributos: </a>
							<a id="name" class={styles.person}>Nome: Notarg</a>
							<a id="level" class={styles.lv}>Level: 1</a>
							<a id="attackDamage" class={styles.attackDamage}>Attack Damage: 10</a>
						</div>
					
						<li>
							<a id="xp" class={styles.xp}>Experience: 0</a>
							<a class={styles.xp}>/</a>
							<a id="xpAmountToLevelUp" class={styles.xp}>100</a>
							<div class={styles.containerXp}>
								<div class={styles.progressXp} ></div>
							</div>
						</li>
						<li >
							<a id="hp">Hp: 100</a>
							<a>/</a>
							<a id="baseHp">100</a>
							<div class={styles.containerHp}>
								<div class={styles.progressHp} ></div>
							</div>
						</li>
				
						<li>
							<a id="stamina">Stamina: 10</a>
							<a>/</a>
							<a id="baseStamina">10</a>
							<div class={styles.containerSt}>
								<div class={styles.progressSt} ></div>
							</div>
						</li>
					</ul>
					
				</div>
				<div class={styles.login100Form}>
					<span class={styles.login100FormTitle}>
						Missions
					</span>
					<ul class={styles.listItems}>
						<li> Missão 1</li>
						<li> Missão 2</li>
						<li> Missão 3</li>
					</ul>
				</div>
					
					
					
			</div>
		</div>

        <div class={styles.containerTrelo}>
			<div class={styles.wrapTreloGrid}>
				<div class={styles.trelo1}>
					<h2 class={styles.titleTrelo}>Distrações</h2>
					<div class={styles.wrapInput100}> {/* sera? */}
                        {/* <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} /> */}

							<input class={styles.input100} type="text" name="pass" placeholder="Nova Tarefa" />
							<span class={styles.focusInput100}></span>

					</div>
					<div class={styles.trelo1Grid} >
						<ul class={styles.listItems} ondrop="drop(event)" ondragover="allowDrop(event)" id="lista1">
							<li draggable="true" ondragstart="drag(event)" id="drag10">Estudar AM</li>
							<li draggable="true" ondragstart="drag(event)" id="drag2">Jogar LoL</li>
						</ul>
					</div>
				</div>
				<div class={styles.trelo2}>
					<h2 class={styles.titleTrelo}>Para fazer</h2>
					<div class={styles.wrapInput100}>
						<input class={styles.input100r} type="text" name="pass" placeholder="Nova Tarefa" />
						<span class={styles.focusInput100r}></span>
					</div>
					<div class={styles.trelo1Grid}>
						<ul class={styles.listItems} ondrop="drop(event)" ondragover="allowDrop(event)" id="lista2">
							<li draggable="true" ondragstart="drag(event)" id="drag1">Fazer almoço</li>
							<li draggable="true" ondragstart="drag(event)" id="drag5">Tomar banho</li>
							<li draggable="true" ondragstart="drag(event)" id="drag6">Lavar louça</li>
							<li draggable="true" ondragstart="drag(event)" id="drag7">Ir à academia</li>
							<li draggable="true" ondragstart="drag(event)" id="drag8">Fazer trabalho de Web2</li>
							<li draggable="true" ondragstart="drag(event)" id="drag4">Toma água</li>
							<li draggable="true" ondragstart="drag(event)" id="drag9">Assitir aula de PPD</li>
							<li draggable="true" ondragstart="drag(event)" id="drag11">Assitir aula de TC</li>
							<li draggable="true" ondragstart="drag(event)" id="drag12">Assitir aula gravada</li>
						</ul>
					</div>
				</div>
				<div class={styles.trelo3}>
					<h2 class={styles.titleTrelo}>Fazendo</h2>
					<div class={styles.wrapInput100}>
                    <input class={styles.input100r} type="text" name="pass" placeholder="Nova Tarefa" />
						<span class={styles.focusInput100r}></span>
					</div>
					<div class={styles.trelo1Grid} >
						<ul class={styles.listItems} ondrop="drop(event)" ondragover="allowDrop(event)" id="lista3">
							<li draggable="true" ondragstart="drag(event)" id="drag3">Apresentar trabalho</li>
						</ul>
					</div>
				</div>
				<div class={styles.trelo4}>
					<h2 class={styles.titleTrelo}>Concluídas</h2>
					<div class={styles.wrapInput100}>
                    <input class={styles.input100r} type="text" name="pass" placeholder="Nova Tarefa" />
						<span class={styles.focusInput100r}></span>
					</div>
					<div class={styles.trelo1Grid} >
						<ul class={styles.listItems}  ondrop="drop(event)" ondragover="allowDrop(event)" id="lista4">
						</ul>
					</div>
				</div>
			</div>
		</div>

	</div>
    );
}