exports.getProximoJogo = (req, res) => {
    res.json({
      time: "FURIA",
      adversario: "NAVI",
      data: "2025-05-02",
      hora: "18:00"
    });
  };
  
  exports.getEstatisticas = (req, res) => {
    res.json({
      jogadores: [
        { nome: "KSCERATO", kills: 23, deaths: 15, rating: 1.25 },
        { nome: "arT", kills: 18, deaths: 20, rating: 0.95 }
      ]
    });
  };
  
  exports.getCuriosidade = (req, res) => {
    res.json({
      curiosidade: "O arT é conhecido por ser um dos jogadores mais agressivos do mundo no CS."
    });
  };
  