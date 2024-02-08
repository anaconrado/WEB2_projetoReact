import React, { useState } from "react";

import styles from "./costumizacao.module.css"

import { FaCaretLeft, FaCaretRight } from "react-icons/fa6";

import planoDeFundo1 from "../../Assets/Personagem/PlanoDeFundo/Tela Batalha Chuvosa.jpg"
import planoDeFundo2 from "../../Assets/Personagem/PlanoDeFundo/Tela Batalha Nublado.jpg"
import planoDeFundo3 from "../../Assets/Personagem/PlanoDeFundo/Tela Tabalha Neve.jpg"
import planoDeFundo4 from "../../Assets/Personagem/PlanoDeFundo/Tela Batalha.jpg"

import Menu from "../../Components/Menu/Menu.js"



export default function Trelo() {

    
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
        <div class={styles.limiter}>

		<div class={styles.containerStats100}> 
			
			<div class={styles.wrapStats100}>
				<div class={styles.statsMenu} data-tilt>
					<img src="Imagens/Logo/Logo.png" alt="IMG" />
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
					<ul class="list-items">
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
				<div class={styles.trelo1}>
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
				<div class="trelo3">
					<h2 class="title-trelo">Fazendo</h2>
					<div class="wrap-input100 validate-input">
						{/* <input class="input100" type="text" name="pass" placeholder="Nova Tarefa"> */}
						<span class="focus-input100"></span>
					</div>
					<div class="trelo3-grid" >
						<ul class="list-items" ondrop="drop(event)" ondragover="allowDrop(event)" id="lista3">
							<li draggable="true" ondragstart="drag(event)" id="drag3">Apresentar trabalho</li>
						</ul>
					</div>
				</div>
				<div class="trelo4">
					<h2 class="title-trelo">Concluídas</h2>
					<div class="wrap-input100 validate-input">
						{/* <input class="input100r" type="text" name="pass" placeholder="Nova Tarefa"> */}
						<span class="focus-input100r"></span>
					</div>
					<div class="trelo4-grid" >
						<ul class="list-items" ondrop="drop(event)" ondragover="allowDrop(event)" id="lista4">
						</ul>
					</div>
				</div>
			</div>
		</div>

	</div>
    );
}