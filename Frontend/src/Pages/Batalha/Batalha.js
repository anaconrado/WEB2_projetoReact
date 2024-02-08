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
            <button className={styles.buttonBatlleB}>
              BATALHAR
            </button>
          </div>
          <div className={styles.containerStats100}>
            <div className={styles.wrapStats100}>
              <div className={styles.statsMenu} data-tilt>
                <ul className={styles.statsWindow}>
                  <div>
                    <a className={styles.namePersono}>Janela de Atributos: </a>
                    <a id="name" className={styles.person}>Nome: Notarg</a>
                    <a id="level" className={styles.lv}>Level: 1</a>
                    <a id="attackDamage" className={styles.attackDamage}>Attack Damage: 10</a>
                  </div>
                  <li>
                    <a id="xp" className={styles.xp}>Experience: 0</a>
                    <a className={styles.xp}>/</a>
                    <a id="xpAmountToLevelUp" className={styles.xp}>100</a>
                    <div className={styles.containerXp}>
                      <div className={styles.progressXp}></div>
                    </div>
                  </li>
                  <li >
                    <a id="hp">Hp: 100</a>
                    <a>/</a>
                    <a id="baseHp">100</a>
                    <div className={styles.containerHp}>
                      <div className={styles.progressHp}></div>
                    </div>
                  </li>
                  <li>
                    <a id="stamina">Stamina: 10</a>
                    <a>/</a>
                    <a id="baseStamina">10</a>
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
                    <a id="levelEnemy" className={styles.lv}>Level: 1</a>
                    <a id="attackDamageEnemy" className={styles.attackDamage}>Attack Damage: 12</a>
                  </div>
                  <li>
                    <a id="xpEnemy" className={styles.xp}>Experience: 12</a>
                    <a className={styles.xp}>/</a>
                    <a id="xpAmountToLevelUpEnemy" className={styles.xp}>100</a>
                    <div className={styles.containerXpEnemy}>
                      <div className={styles.progressXpEnemy}></div>
                    </div>
                  </li>
                  <li >
                    <a id="Enemy">Hp: 90</a>
                    <a>/</a>
                    <a id="baseHpEnemy">100</a>
                    <div className={styles.containerHpEnemy}>
                      <div className={styles.progressHpEnemy}></div>
                    </div>
                  </li>
                  <li>
                    <a id="staminaEnemy">Stamina: 6</a>
                    <a>/</a>
                    <a id="baseStaminaEnemy">10</a>
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
