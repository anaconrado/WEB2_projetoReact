import React, { useEffect, useState } from "react";

import styles from "./batalha.module.css"



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

const API_KEY = "493ede756023e48f8ca7833fc3cc9321" // API key for OpenWeatherMap


export default function Batalhar() {

    const [texto, setTexto] = useState("BATALHAR"); // Estado para controlar o texto

    // Controle do Inimigo

    var [XP_E, setXP_E] = useState(12); // Estado para controlar a experiência
    var [XP_AMOUNT_TO_LEVEL_UP_E, setXP_AMOUNT_TO_LEVEL_UP_E] = useState(100); // Estado para controlar a quantidade de experiência necessária para subir de nível
    var [HP_E, setHP_E] = useState(90); // Estado para controlar o HP
    var [HP_E_Max, setHP_Max_E] = useState(100); // Estado para controlar o HP máximo
    var [STAMINA_E, setSTAMINA_E] = useState(6); // Estado para controlar a Stamina
    var [STAMINA_E_Max, setSTAMINA_EMax] = useState(10); // Estado para controlar a Stamina máxima
    var [Level_E, setLevelE] = useState(1); // Estado para controlar o Level
    var [ATTACK_DAMAGE_E, setATTACK_DAMAGE_E] = useState(13); // Estado para controlar o dano do ataque

    // Controle do Player

    var [XP, setXP] = useState(50); // Estado para controlar a experiência
    var [XP_AMOUNT_TO_LEVEL_UP, setXP_AMOUNT_TO_LEVEL_UP] = useState(100); // Estado para controlar a quantidade de experiência necessária para subir de nível
    var [HP, setHP] = useState(100); // Estado para controlar o HP
    var [ HP_Max, setHP_Max] = useState(100); // Estado para controlar o HP máximo
    var [STAMINA, setSTAMINA] = useState(10); // Estado para controlar a Stamina
    var [STAMINA_MAX, setSTAMINA_Max] = useState(10); // Estado para controlar a Stamina máxima
    var [Level, setLevel] = useState(1); // Estado para controlar o Level
    var [ATTACK_DAMAGE, setATTACK_DAMAGE] = useState(19); // Estado para controlar o dano do ataque
    

    // Controle Turno

    var [ Turno, setTurno] = useState(0); // Estado para controlar o Turno
    var [Controle, setControle] = useState(1); // Estado para controlar o Controle


      //Função para Subir de Nível - Player
      const subirDeNivel_P = () => {

        setXP(XP + 100);
        if(XP + 100 >= XP_AMOUNT_TO_LEVEL_UP){
          console.log("Subiu de Nível!");
          setLevel(Level + 1);
          setXP(0);
          setXP_AMOUNT_TO_LEVEL_UP(XP_AMOUNT_TO_LEVEL_UP + 50);
          setHP_Max(HP_Max + 10);
          setHP(HP_Max);
          setSTAMINA_Max(STAMINA_MAX + 10);
          setSTAMINA(STAMINA_MAX);
          setATTACK_DAMAGE(ATTACK_DAMAGE + 5);
        }
      }

      //Função para Subir de Nível - Inimigo
      const subirDeNivel_E = () => {

        setXP_E(XP_E + 100);
        if(XP_E + 100 >= XP_AMOUNT_TO_LEVEL_UP_E){
          setTexto("O INIMIGO SUBIU DE NÍVEL!")
          console.log("Subiu de Nível!");
          setLevelE(Level_E + 1);
          setXP_E(0);
          setXP_AMOUNT_TO_LEVEL_UP_E(XP_AMOUNT_TO_LEVEL_UP_E + 50);
          setHP_Max_E(HP_E_Max + 10);
          setHP_E(HP_E_Max);
          setSTAMINA_EMax(STAMINA_E_Max + 10);
          setSTAMINA_E(STAMINA_E_Max);
          setATTACK_DAMAGE_E(ATTACK_DAMAGE_E + 5);
        }
      }

      const ChamaBatalha = () => {

        console.log(Turno + "CHAMA BAT" + Controle);
        if(Controle == 1){
          console.log("NFONWAFOPWNFPOW");
          ConinuarBatalha();
        }

      }

      const ConinuarBatalha = () => {
        if(HP_E > 0 && HP > 0){

          if(Turno == 0){
            setControle(0);
          iniciarBatalha();

          setTimeout(() => {
            // Coloque aqui a lógica da batalha que deseja executar após o tempo especificado
            setTexto("CLIQUE PARA O PRÓXIMO TURNO");
            setTurno(1)
            console.log(Turno + " WTF" + Controle);
            setControle(1);
          }, 7000); // Tempo em milissegundos

          }else{

            Controle = 0 ;
          iniciarBatalhaInimigo();

          setTimeout(() => {
            // Coloque aqui a lógica da batalha que deseja executar após o tempo especificado
            setTexto("CLIQUE PARA O PRÓXIMO TURNO");
            setTurno(0)
            Controle = 1 ;
          }, 7000); // Tempo em milissegundos

        }
          
            
    
      }
    }

      const iniciarBatalhaInimigo = () => {
       
        if(Turno == 1 ){

          if(STAMINA_E - 2 >= 0){
          console.log("Turno do inimigo");
          setHP(HP - ATTACK_DAMAGE_E);
          setTexto("AGORA É O TURNO DO INIMIGO, ELE IRÁ DAR " + ATTACK_DAMAGE_E + " DE DANO!, VOCÊ ESTÀ COM " + (HP - ATTACK_DAMAGE_E) + " DE VIDA!");
        
          
          console.log("HP do jogador: " + HP);
          setSTAMINA_E(STAMINA_E - 2);
          console.log("Stamina do inimigo: " + (STAMINA_E - 2));
          
          setTimeout(() => {
          // Coloque aqui a lógica da batalha que deseja executar após o tempo especificado
          console.log("Esperar o Dano!");
          }, 3000); // Tempo em milissegundos
          }else{
            setTexto("O INIMIGO NÃO TEM STAMINA SUFICIENTE PARA ATACAR!");
            setSTAMINA_E(STAMINA_E + 1);
          }
          if((HP - ATTACK_DAMAGE_E) > 0){
            setTimeout(() => {
              // Coloque aqui a lógica da batalha que deseja executar após o tempo especificado
              setTexto("VOCÊ ESTÁ VIVO, AGORA É O SEU TURNO!");
              }, 3000); // Tempo em milissegundos
              
          }else{
            setTimeout(() => {
              // Coloque aqui a lógica da batalha que deseja executar após o tempo especificado
              setTexto("VOCÊ PERDEU A BATALHA!");
              subirDeNivel_E();
              }, 3000); // Tempo em milissegundos
            setTimeout(() => {
              // Coloque aqui a lógica da batalha que deseja executar após o tempo especificado
              setTexto("BATALHAR");
           
              }, 3000); 
          }
        }
      }

      // Função para iniciar a batalha
      const iniciarBatalha = () => {

      if(Turno >= 0){

      // Coloque aqui a lógica para a batalha
      console.log("Batalha iniciada!");

      // Variáveis para controlar o turno

      // Atualizar os valores de HP e Stamina
      if(Turno === 0 ){
        if(STAMINA - 2 >= 0){
        console.log("Turno do jogador");
        setHP_E(HP_E - ATTACK_DAMAGE);
        setTexto("AGORA É SEU TURNO, VOCÊ IRÀ DAR " + ATTACK_DAMAGE + " DE DANO!, O INIMIGO ESTÀ COM " + (HP_E - ATTACK_DAMAGE)  + " DE VIDA!");
        console.log("HP do inimigo: " + HP_E);
        setSTAMINA(STAMINA - 2);
        console.log("Stamina do jogador: " + (STAMINA - 2));
        setTimeout(() => {
        // Coloque aqui a lógica da batalha que deseja executar após o tempo especificado
        console.log("Esperar o Dano!");
        }, 3000); // Tempo em milissegundos
      }else{
        setTexto("VOCÊ NÃO TEM STAMINA SUFICIENTE PARA ATACAR!");
        setSTAMINA(STAMINA + 1);
      }
        if((HP_E - ATTACK_DAMAGE) > 0){
          setTimeout(() => {
            // Coloque aqui a lógica da batalha que deseja executar após o tempo especificado
            setTexto("O INIMIGO ESTÁ VIVO, ELE IRÁ ATACAR VOCÊ!");
            }, 3000); // Tempo em milissegundos
        }else{
          setTimeout(() => {
            // Coloque aqui a lógica da batalha que deseja executar após o tempo especificado
            setTexto("VOCÊ VENCEU A BATALHA!");
            subirDeNivel_P();
            }, 2000); // Tempo em milissegundos
            
          setTimeout(() => {
            // Coloque aqui a lógica da batalha que deseja executar após o tempo especificado
            setTexto("BATALHAR");
            
            }, 8000); 
          
        }
      }

      
        


      }
      
  };
    

    

    useEffect(() => {
      const handleBeforeUnload = () => {
        // Coloque aqui o código que deseja executar quando a página for recarregada ou fechada
        console.log("A página está sendo recarregada ou fechada");
        
        

      };
  
      window.addEventListener('beforeunload', handleBeforeUnload);
  
      return () => {
        window.removeEventListener('beforeunload', handleBeforeUnload);
      };
    }, []);

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

    useEffect(() => {
        const savedConfig = localStorage.getItem('characterConfig');
        if (savedConfig) {
            setCharacterConfig(JSON.parse(savedConfig));
        }
    }, []);


    const [weatherBackground, setWeatherBackground] = useState('');

    useEffect(() => {
      // Função para obter os detalhes do clima
      const getWeatherDetails = () => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition((position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
  
            const WEATHER_API_URL = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`;

            console.log("Passou");
  
            // Obter previsão do tempo da API do OpenWeatherMap
            fetch(WEATHER_API_URL)
              .then(response => response.json())
              .then(data => {
                // Obter os detalhes do clima atual
                const weather = data.list[0].weather[0].main;
                console.log(weather)
  
  
                if (weather === "Clear") {
                  setWeatherBackground(planoDeFundo11);
                  console.log("Teste");
                } else if (weather === "Snow") {
                  setWeatherBackground(planoDeFundo22);
                  console.log("Teste2");
                } else if (weather === "Thunderstorm" || weather === "Drizzle" || weather === "Rain") {
                  setWeatherBackground(planoDeFundo33);
                  console.log("Teste3");
                } else if (weather === "Clouds" || weather === "Mist" || weather === "Smoke" || weather === "Haze" || weather === "Dust" || weather === "Fog" || weather === "Sand" || weather ==="Ash" || weather === "Squall" || weather === "Tornado") {
                    setWeatherBackground(planoDeFundo44);
                  console.log("Teste4");
                }
              })
              .catch(() => {
                alert("An error occurred while fetching the weather forecast! Please allow location access and refresh the page.");
              });
          });
        } else {
          alert("Geolocation is not supported by this browser.");
        }
      };
  
      getWeatherDetails();
  
    }, []);


    return (
            
        
        <div className={styles.limiter}>
            <Menu />
          
          <div className={styles.containerBattle}>
            <div className={styles.battleField} id="currentWeatherImage" style={{ backgroundImage: `url(${weatherBackground})` }} >
              <div className={styles.battleFieldPlayer}>
                <div className={styles.battleFieldPlayerName}>
                  <h1 className={styles.battleFieldPlayerNameNick}>Notarg</h1>
                </div>
                <div className={styles.battleFieldEnemyImageAll}>
                    <div className={styles.characterDisplay}>
                        <img className={styles.planoDeFundo} src={opcoes.planoDeFundo[characterConfig.planoDeFundo]} alt="Background"/>
                        <img className={styles.cabelo} src={opcoes.Cavalheiro.cabelo[characterConfig.cabelo]} alt="Hair"/>
                        <img className={styles.pele} src={opcoes.Cavalheiro.pele[characterConfig.pele]} alt="Skin"/>
                        <img className={styles.olho} src={opcoes.Cavalheiro.olho[characterConfig.olho]} alt="Eyes"/>
                        <img className={styles.roupa} src={opcoes.Cavalheiro.roupa[characterConfig.roupa]} alt="Outfit"/>
                    </div>
                </div>
              </div>
              <div className={styles.battleFieldEnemy}>
                <div className={styles.battleFieldEnemyName}>
                  <h1 className={styles.battleFieldPlayerNameNick}>Portix</h1>
                </div>
                <div className={styles.battleFieldEnemyImageAll}>
                    <div className={styles.characterDisplay}>
                        <img className={styles.planoDeFundo} src={opcoes.planoDeFundo[0]} alt="Background"/>
                        <img className={styles.cabelo} src={opcoes.Cavalheiro.cabelo[1]} alt="Hair"/>
                        <img className={styles.pele} src={opcoes.Cavalheiro.pele[1]} alt="Skin"/>
                        <img className={styles.olho} src={opcoes.Cavalheiro.olho[1]} alt="Eyes"/>
                        <img className={styles.roupa} src={opcoes.Cavalheiro.roupa[1]} alt="Outfit"/>
                    </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.buttonBatlle}>
            <button className={styles.buttonBatlleB} button onClick={ChamaBatalha}>
              {texto}
            </button>
          </div>
          <div className={styles.containerStats100}>
            <div className={styles.wrapStats100}>
              <div className={styles.statsMenu} data-tilt>
                <ul className={styles.statsWindow}>
                  <div>
                    <a className={styles.namePersono}>Janela de Atributos: </a>
                    <a id="name" className={styles.person}>Nome: Notarg</a>
                    <a id="level" className={styles.lv}>Level: {Level}</a>
                    <a id="attackDamage" className={styles.attackDamage}>Attack Damage: {ATTACK_DAMAGE}</a>
                  </div>
                  <li>
                    <a id="xp" className={styles.xp}>Experience: {XP}</a>
                    <a className={styles.xp}>/</a>
                    <a id="xpAmountToLevelUp" className={styles.xp}>{XP_AMOUNT_TO_LEVEL_UP}</a>
                    <div className={styles.containerXp} >
                      <div className={styles.progressXp}></div>
                    </div>
                  </li>
                  <li >
                    <a id="hp">Hp: {HP}</a>
                    <a>/</a>
                    <a id="baseHp">{HP_Max}</a>
                    <div className={styles.containerHp}>
                      <div className={styles.progressHp}></div>
                    </div>
                  </li>
                  <li>
                    <a id="stamina">Stamina: {STAMINA}</a>
                    <a>/</a>
                    <a id="baseStamina">{STAMINA_MAX}</a>
                    <div className={styles.containerSt}>
                      <div className={styles.progressSt}></div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className={styles.statsMenu} data-tilt>
                <ul className={styles.statsWindow}>
                  <div>
                    <a className={styles.namePersono}>Janela de Atributos: </a>
                    <a id="nameEnemy" className={styles.person}>Nome: Portix</a>
                    <a id="levelEnemy" className={styles.lv}>Level: {Level_E}</a>
                    <a id="attackDamageEnemy" className={styles.attackDamage}>Attack Damage: {ATTACK_DAMAGE_E}</a>
                  </div>
                  <li>
                    <a id="xpEnemy" className={styles.xp}>Experience: {XP_E}</a>
                    <a className={styles.xp}>/</a>
                    <a id="xpAmountToLevelUpEnemy" className={styles.xp}>{XP_AMOUNT_TO_LEVEL_UP_E}</a>
                    <div className={styles.containerXpEnemy}>
                      <div className={styles.progressXpEnemy}></div>
                    </div>
                  </li>
                  <li >
                    <a id="Enemy">Hp: {HP_E}</a>
                    <a>/</a>
                    <a id="baseHpEnemy">{HP_E_Max}</a>
                    <div className={styles.containerHpEnemy}>
                      <div className={styles.progressHpEnemy}></div>
                    </div>
                  </li>
                  <li>
                    <a id="staminaEnemy">Stamina: {STAMINA_E}</a>
                    <a>/</a>
                    <a id="baseStaminaEnemy">{STAMINA_E_Max}</a>
                    <div className={styles.containerStEnemy}>
                      <div className={styles.progressStEnemy}></div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.fundoFalso}></div>
          </div>
        </div>
      );

}
