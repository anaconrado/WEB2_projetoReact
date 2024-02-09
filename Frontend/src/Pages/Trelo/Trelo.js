import React, { useEffect, useState } from "react";
import { useDrag } from 'react-dnd'
import * as ReactDOM from 'react-dom';



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
import Card from "./TreloCard.js"
import { useCharacter } from '../../context/CharacterContext.js';





export default function Trelo() {
	//Drag and Drop
	var baseHp = 100;
		var attackDamage = 10;
		var baseStamina = 10;
		var xpAmountToLevelUp = 100;
		var level = 1;
		var xp = 0;
		var stamina = 10;
		var hp = 100;
		var teste = "teste";
		var cardList = [];

	const { characterData, updateCharacterPart } = useCharacter();
	const { characterConfig, characterStats } = characterData;

	const planoDeFundoMap = {
		0: planoDeFundo1,
		1: planoDeFundo2,
		2: planoDeFundo3,
	  };
	  
	  const cabeloMap = {
		0: Cabelo1,
		1: Cabelo2,
		2: Cabelo3,
		3: Cabelo4,
	  };
	  
	  const olhoMap = {
		0: Olhos1,
		1: Olhos2,
		2: Olhos3,
		3: Olhos4,
		4: Olhos5,
		5: Olhos6,
	  };
	  
	  const peleMap = {
		0: Pele1,
		1: Pele2,
		2: Pele3,
		3: Pele4,
	  };
	  
	  const roupaMap = {
		0: Roupa1,
		1: Roupa2,
		2: Roupa3,
		3: Roupa4,
		4: Roupa5,
		5: Roupa6,
	  };

	  const planoDeFundoImg = planoDeFundoMap[characterConfig.planoDeFundo];
	  const cabeloImg = cabeloMap[characterConfig.cabelo];
	  const peleImg = peleMap[characterConfig.pele];
	  const olhoImg = olhoMap[characterConfig.olho];
	  const roupaImg = roupaMap[characterConfig.roupa];
		
	function createCard(nome, nomeLista)
		{
			// Create card and appends to lista1
			console.log(nome.target.parentElement.parentElement.className);
			// cardList.push(<Card string={nome.target.value}/>)
			// console.log(cardList)
			var card = document.createElement("li");
			card.draggable = true;
			card.ondragstart = function(e) {drag(e)};
			card.id = "drag" + (document.getElementById(nomeLista).childElementCount + 1);
			// card.innerHTML = nome.target.value;
			card.appendChild(document.createTextNode(nome.target.value));
			nome.target.value = "";
			document.getElementById(nomeLista).appendChild(card);

			if(nomeLista === "lista1")
			{
				// if(level > 1 || xp > 4)
					xp -= 5;
			}
			else if(nomeLista === "lista4")
			{
				xp += 20;
			}

			
			if(xp < 0 && level > 1)
			{
				LevelDown();
				return;
			}
				
			
			if(xp >= xpAmountToLevelUp)
			{
				LevelUp();
			}
			else
				UpdateXP();
		}

		function _handleKeyDown(e, nomeLista){
			if (e.key === 'Enter') {	
			  return createCard(e, nomeLista);
			}
		  }
		

		function allowDrop(ev) {
			ev.preventDefault();
		}

		function drag(ev) {
			ev.dataTransfer.setData("text", ev.target.id);
		}

		function drop(ev) {
			ev.preventDefault();
			var data = ev.dataTransfer.getData("text");
			var element = document.getElementById(data);
			var parent = element.parentElement.id;
			console.log(parent + " " + ev.target.id);
			var target = ev.target;
			if(target.id.includes("drag"))
				target = target.parentElement;
			if(target.id === parent || target.id === element.id)
				return;

			target.appendChild(element);
			
			if(parent === "lista1")
			{
				xp += 5;
			}
			else if(parent === "lista4")
			{
				xp -= 20;
			}
			
			if(target.id === "lista1")
			{
				// if(level > 1 || xp > 4)
					xp -= 5;
			}
			else if(target.id === "lista4")
			{
				xp += 20;
			}
			
			if(xp < 0 && level > 1)
			{
				LevelDown();
				return;
			}
				
			
			if(xp >= xpAmountToLevelUp)
			{
				LevelUp();
			}
			else
				UpdateXP();
			
		}
		
		function LevelUp()
		{
			const newStats = {
				attackDamage: characterData.characterStats.attackDamage + 2,
				xp: characterData.characterStats.xp - characterData.characterStats.xpAmountToLevelUp,
				xpAmountToLevelUp: characterData.characterStats.xpAmountToLevelUp + 30,
				hp: baseHp + 10,
				stamina: baseStamina, 
				level: characterData.characterStats.level + 1,
			};
	
			updateCharacterPart('characterStats', newStats);
			if(!(level % 2))
				baseStamina++; 

			UpdateStats();
		}
		
		function LevelDown()
		{
			const newStats = {
				attackDamage: characterData.characterStats.attackDamage - 2,
				xp: characterData.characterStats.xp + characterData.characterStats.xpAmountToLevelUp,
				xpAmountToLevelUp: characterData.characterStats.xpAmountToLevelUp - 30,
				hp: baseHp, 
				stamina: baseStamina,
				level: characterData.characterStats.level - 1,
			};
	
			updateCharacterPart('characterStats', newStats);
			if((level % 2))
				baseStamina--; 
		}
		
		function UpdateXP()
		{
			if(xp < 0) return;
			document.getElementById("xp").innerHTML = "Experiência: " + xp;
			document.getElementById("xpAmountToLevelUp").innerHTML = xpAmountToLevelUp;
		}
		function UpdateStats()
		{
			// Update Level, Hp, Stamina and Dano text
			document.getElementById("xp").innerHTML = "Experiência: " + xp;
			document.getElementById("xpAmountToLevelUp").innerHTML = xpAmountToLevelUp;
			document.getElementById("level").innerHTML = "Level: " + level;
			document.getElementById("hp").innerHTML = "HP: " + hp;
			document.getElementById("baseHp").innerHTML = baseHp;
			document.getElementById("stamina").innerHTML = "Stamina: " + stamina;
			document.getElementById("baseStamina").innerHTML = baseStamina;
			document.getElementById("attackDamage").innerHTML = "Dano: " + attackDamage;
		}

		function FinishMission(e)
		{
			// gain xp and disable button
			xp += 20;
			document.getElementById("xp").innerHTML = "Experiência: " + xp;
			document.getElementById("xpAmountToLevelUp").innerHTML = xpAmountToLevelUp;
			e.target.parentElement.innerHTML = "Mission Completed";
			console.log("FinishMission");
		}

		function FailMission(e)
		{
			xp -= 20;
			document.getElementById("xp").innerHTML = "Experiência: " + xp;
			document.getElementById("xpAmountToLevelUp").innerHTML = xpAmountToLevelUp;
			e.target.parentElement.innerHTML = "Mission Failed";
			console.log("FinishMission");
		}


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

/*
useEffect(() => {
    const savedConfig = localStorage.getItem('characterConfig');
    if (savedConfig) {
		updateCharacterPart('characterConfig', newConfig);
    }
}, []);


*/
   
    
    return(
        <div class={styles.limiter}>
        <Menu />
            

		<div class={styles.containerStats100}> 
			
			<div class={styles.wrapStats100}>
				<div class={styles.statsMenu} data-tilt>
                    <div className={styles.characterDisplay}>
						<img className={styles.planoDeFundo} src={planoDeFundoImg} alt="Background" />
						<img className={styles.cabelo} src={cabeloImg} alt="Cabelo" />
						<img className={styles.pele} src={peleImg} alt="Pele" />
						<img className={styles.olho} src={olhoImg} alt="Olhos" />
						<img className={styles.roupa} src={roupaImg} alt="Roupa" />
                    </div>
					<ul class={styles.statsWindow}>
						<div>
							<a class={styles.namePersono}>Janela de Atributos: </a>
							<a id="name" class={styles.person}>Nome: Notarg</a>
							<a id="level" class={styles.lv}>Level: 1</a>
							<a id="attackDamage" class={styles.attackDamage}>Dano: 10</a>
						</div>
					
						<li>
							<a id="xp" class={styles.xp}>Experiência: 0</a>
							<a class={styles.xp}>/</a>
							<a id="xpAmountToLevelUp" class={styles.xp}>100</a>
							{/* <div class={styles.containerXp}>
								<div class={styles.progressXp} ></div>
							</div> */}
						</li>
						<li >
							<a id="hp">Hp: 100</a>
							<a>/</a>
							<a id="baseHp">100</a>
							{/* <div class={styles.containerHp}>
								<div class={styles.progressHp} ></div>
							</div> */}
						</li>
				
						<li>
							<a id="stamina">Stamina: 10</a>
							<a>/</a>
							<a id="baseStamina">10</a>
							{/* <div class={styles.containerSt}>
								<div class={styles.progressSt} ></div>
							</div> */}
						</li>
					</ul>
					
				</div>
				<div class={styles.login100Form}>
					<span class={styles.login100FormTitle}>
						Missões
					</span>
					<ul class={styles.listItems}>
						<li> Lavar Banheiro <button className={styles.treloButton} onClick={(e) => FinishMission(e)}>V</button><button className={styles.treloButton2} onClick={(e) => FailMission(e)}>X</button></li>
						<li> Tomar Banho <button className={styles.treloButton} onClick={(e) => FinishMission(e)}>V</button><button className={styles.treloButton2} onClick={(e) => FailMission(e)}>X</button></li>
						<li> Entregar Trabalho <button className={styles.treloButton} onClick={(e) => FinishMission(e)}>V</button><button className={styles.treloButton2} onClick={(e) => FailMission(e)}>X</button></li>
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

							<input class={styles.input100} type="text" name="pass" placeholder="Nova Tarefa" onKeyDown={(e) => _handleKeyDown(e, "lista1")}/>
							<span class={styles.focusInput100}></span>

					</div>
					<div class={styles.trelo1Grid} >
						<ul class={styles.listItems} onDrop={(e) => drop(e)} onDragOver={(e) => allowDrop(e)} id="lista1">
							<li draggable="true" onDragStart={(e) => drag(e)} id="drag10">Estudar AM</li>
							<li draggable="true" onDragStart={(e) => drag(e)} id="drag2">Jogar LoL</li>
						</ul>
					</div>
				</div>
				<div class={styles.trelo2}>
					<h2 class={styles.titleTrelo}>Para fazer</h2>
					<div class={styles.wrapInput100}>
						<input class={styles.input100r} type="text" name="pass" placeholder="Nova Tarefa" onKeyDown={(e) => _handleKeyDown(e, "lista2")}/>
						<span class={styles.focusInput100r}></span>
					</div>
					<div class={styles.trelo1Grid}>
						<ul class={styles.listItems} onDrop={(e) => drop(e)} onDragOver={(e) => allowDrop(e)}  id="lista2">
							{/* <Card string={teste}/> */}
							{cardList}
							<li draggable="true" onDragStart={(e) => drag(e)} id="drag1">Fazer almoço</li>
							<li draggable="true" onDragStart={(e) => drag(e)} id="drag5">Tomar banho</li>
							<li draggable="true" onDragStart={(e) => drag(e)} id="drag6">Lavar louça</li>
							<li draggable="true" onDragStart={(e) => drag(e)} id="drag7">Ir à academia</li>
							<li draggable="true" onDragStart={(e) => drag(e)} id="drag8">Fazer trabalho de Web2</li>
							<li draggable="true" onDragStart={(e) => drag(e)} id="drag4">Toma água</li>
							<li draggable="true" onDragStart={(e) => drag(e)} id="drag9">Assitir aula de PPD</li>
							<li draggable="true" onDragStart={(e) => drag(e)} id="drag11">Assitir aula de TC</li>
							<li draggable="true" onDragStart={(e) => drag(e)} id="drag12">Assitir aula gravada</li>
						</ul>
					</div>
				</div>
				<div class={styles.trelo3}>
					<h2 class={styles.titleTrelo}>Fazendo</h2>
					<div class={styles.wrapInput100}>
                    <input class={styles.input100r} type="text" name="pass" placeholder="Nova Tarefa" onKeyDown={(e) => _handleKeyDown(e, "lista3")}/>
						<span class={styles.focusInput100r}></span>
					</div>
					<div class={styles.trelo1Grid} >
						<ul class={styles.listItems} onDrop={(e) => drop(e)} onDragOver={(e) => allowDrop(e)} id="lista3">
							<li draggable="true" onDragStart={(e) => drag(e)} id="drag3">Apresentar trabalho</li>
						</ul>
					</div>
				</div>
				<div class={styles.trelo4}>
					<h2 class={styles.titleTrelo}>Concluídas</h2>
					<div class={styles.wrapInput100}>
                    <input class={styles.input100r} type="text" name="pass" placeholder="Nova Tarefa" onKeyDown={(e) => _handleKeyDown(e, "lista4")}/>
						<span class={styles.focusInput100r}></span>
					</div>
					<div class={styles.trelo1Grid} >
						<ul class={styles.listItems}  onDrop={(e) => drop(e)} onDragOver={(e) => allowDrop(e)}id="lista4">
						</ul>
					</div>
				</div>
			</div>
		</div>

	</div>
    );
}