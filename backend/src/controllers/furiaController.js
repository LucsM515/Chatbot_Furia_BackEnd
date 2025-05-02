exports.getProximoJogo = (req, res) => {
  res.json([
    {
      time: "FURIA",
      adversario: "The MongolZ",
      data: "2025-04-09",
      hora: "09:50"
    },
    {
      time: "FURIA",
      adversario: "Virtus.pro",
      data: "2025-04-08",
      hora: "06:05"
    },
    {
      time: "FURIA",
      adversario: "Complexity",
      data: "2025-04-07",
      hora: "11:05"
    },
    {
      time: "FURIA",
      adversario: "Apogee",
      data: "2025-04-06",
      hora: "12:35"
    },
    {
      time: "FURIA",
      adversario: "M80",
      data: "2025-03-22",
      hora: "10:25"
    },
    {
      time: "FURIA",
      adversario: "NAVI",
      data: "2025-03-20",
      hora: "16:45"
    }
  ]);
};
  
  exports.getEstatisticas = (req, res) => {
    res.json({
      jogadores: [
        { nome: "Fallen", kills: 35036, deaths: 31013, kill_death: 1.13, kill_round: 0.68, round_with_kills: 23919 },
        { nome: "Yuurih", kills: 26322, deaths: 22696, kill_death: 1.16, kill_round: 0.74, round_with_kills: 17613 },
        { nome: "YEKINDAR", kills: 28269, deaths: 26878, kill_death: 1.05, kill_round: 0.73, round_with_kills: 18536 },
        { nome: "KSCERATO", kills: 24346, deaths: 19411, kill_death: 1.25, kill_round: 0.73, round_with_kills: 16257 },
        { nome: "Molodoy", kills: 2582, deaths: 1908, kill_death: 1.35, kill_round: 0.81, round_with_kills: 1688 }
      ]
    });
  };
  
  exports.getCuriosidade = (req, res) => {
    res.json({
      curiosidade: "A organização foi eleita por dois anos consecutivos, em 2020 e 2021, como a melhor organização de esportes eletrônicos no Prêmio eSports Brasi"
    });
  };

  exports.getJogadores = (req, res) => {
    res.json({
      jogadores: [
        { nome: "Fallen", nacionalidade: "Brasileiro", idade: 33, nome_original: "Gabriel Toledo" },
        { nome: "Yuurih", nacionalidade: "Brasileiro", idade: 24, nome_original: "Yuri" },
        { nome: "YEKINDAR", nacionalidade: "Letão", idade: 23, nome_original: "Mareks Gaļinskis" },
        { nome: "KSCERATO", nacionalidade: "Brasileiro", idade: 23, nome_original: "Kaike Cerato" },
        { nome: "Molodoy", nacionalidade: "Cazaquistanês", idade: 20, nome_original: "Danil Golubenko" }
      ]
    });
  };
  
  