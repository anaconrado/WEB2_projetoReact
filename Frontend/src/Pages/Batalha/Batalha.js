import React, { useEffect, useState } from "react";

import styles from "./batalha.module.css"

import { FaCaretLeft, FaCaretRight } from "react-icons/fa6";

import planoDeFundo1 from "../../Assets/Personagem/PlanoDeFundo/Tela Batalha Chuvosa.jpg"
import planoDeFundo2 from "../../Assets/Personagem/PlanoDeFundo/Tela Batalha Nublado.jpg"
import planoDeFundo3 from "../../Assets/Personagem/PlanoDeFundo/Tela Tabalha Neve.jpg"
import planoDeFundo4 from "../../Assets/Personagem/PlanoDeFundo/Tela Batalha.jpg"


import Menu from "../../Components/Menu/Menu.js"

const API_KEY = "493ede756023e48f8ca7833fc3cc9321" // API key for OpenWeatherMap


export default function Batalhar() {

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
  
  
                if (weather === "Clear") {
                  setWeatherBackground(planoDeFundo1);
                  console.log("Teste");
                } else if (weather === "Snow") {
                  setWeatherBackground(planoDeFundo2);
                  console.log("Teste2");
                } else if (weather === "Thunderstorm" || weather === "Drizzle" || weather === "Rain") {
                  setWeatherBackground(planoDeFundo3);
                  console.log("Teste3");
                } else if (weather === "Clouds" || weather === "Mist" || weather === "Smoke" || weather === "Haze" || weather === "Dust" || weather === "Fog" || weather === "Sand" || weather ==="Ash" || weather === "Squall" || weather === "Tornado") {
                    setWeatherBackground("url('../../Assets/Personagem/PlanoDeFundo/Tela Batalha.jpg')");
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
            <div className={styles.battleField} id="currentWeatherImage" style={{ backgroundImage: weatherBackground }} >
              <div className={styles.battleFieldPlayer}>
                <div className={styles.battleFieldPlayerName}>
                  <h1 className={styles.battleFieldPlayerNameNick}>Notarg</h1>
                </div>
                <div className={styles.battleFieldPlayerImage}>
                  <img className={styles.battleFieldEnemyImageAll} src="" alt="Player 1" />
                </div>
              </div>
              <div className={styles.battleFieldEnemy}>
                <div className={styles.battleFieldEnemyName}>
                  <h1 className={styles.battleFieldPlayerNameNick}>Portix</h1>
                </div>
                <div className={styles.battleFieldEnemyImage}>
                  <img className={styles.battleFieldEnemyImageAll} src="../../Assets/Personagem/PlanoDeFundo/Tela Batalha.jpg" alt="Player 1" />
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
