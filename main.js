//declaração de variaveis
var count = 0;
var genero = "";
var duracao = "";
var origem = "";
var status = "";
var epoca = "";
var finalAnime = "";
var link = "";

//função usada no botão no momento do click
function send() {
  var error = true;
  console.log(count);
  const inputUser = document.getElementById("answer").value;
  const containerChat = document.getElementById("chat");
  const textUser = document.createElement("p");
  textUser.className = "textUser";

  textUser.innerHTML = inputUser;
  containerChat.append(textUser);

  let arrayInput = inputUser.toLowerCase().split(" ");

  const wordsKeyNacionality = [
    "japonês",
    "japoneses",
    "chinês",
    "chineses",
    "Coreano",
    "Coreanos",
  ];

  // cada if serve como uma maneira de filtrar o que o user escreveu de forma que funcione caso tenha relação com a aplicação
  if (count == 4) {
    for (let i = 0; i < arrayInput.length; i++) {
      let words = arrayInput[i];
      if (
        words == wordsKeyNacionality[0] ||
        words == wordsKeyNacionality[1] ||
        words == wordsKeyNacionality[2] ||
        words == wordsKeyNacionality[3] ||
        words == wordsKeyNacionality[4] ||
        words == wordsKeyNacionality[5]
      ) {
        if (
          words == wordsKeyNacionality[0] ||
          words == wordsKeyNacionality[1]
        ) {
          origem = "japão";
        } else if (
          words == wordsKeyNacionality[2] ||
          words == wordsKeyNacionality[3]
        ) {
          origem = "china";
        } else {
          origem = "coreia";
        }
        error = false;
        chooseAnime();
        const textFour = document.createElement("p");
        textFour.innerHTML = `Nossa recomendação para você é <a href=${link}>${finalAnime}</a><br><img src="${img}" class="imgAnime"/>`;
        containerChat.append(textFour);
        containerChat.append(imagem);
      }
    }
  }

  const wordsKeyStatus = ["finalizados", "completos", "andamento"];

  if (count == 3) {
    for (let i = 0; i < arrayInput.length; i++) {
      let words = arrayInput[i];
      if (
        words == wordsKeyStatus[0] ||
        words == wordsKeyStatus[1] ||
        words == wordsKeyStatus[2]
      ) {
        if (words == wordsKeyStatus[2]) {
          status = "andamento";
        } else {
          status = "finalizado";
        }
        error = false;
        const textThree = document.createElement("p");
        textThree.innerHTML =
          "Você tem interesse em ver obras Japoneses, Chineses, Coreanos?";
        containerChat.append(textThree);
        count++;
        console.log(status);
      }
    }
  }

  const wordsKeyOld = ["recentes", "novos", "antigos"];

  if (count == 2) {
    for (let i = 0; i < arrayInput.length; i++) {
      let words = arrayInput[i];
      if (
        words == wordsKeyOld[0] ||
        words == wordsKeyOld[1] ||
        words == wordsKeyOld[2]
      ) {
        if (words == wordsKeyOld[2]) {
          epoca = "antigo";
        } else {
          epoca = "novo";
        }
        error = false;
        const textTwo = document.createElement("p");
        textTwo.innerHTML = "Voce gosta de obras em andamento ou finalizadas?";
        containerChat.append(textTwo);
        count++;
        console.log(epoca);
      }
    }
  }

  const wordsKeyLong = [
    "curtos",
    "longos",
    "curto",
    "longo",
    "grande",
    "pequeno",
  ];

  if (count == 1) {
    for (let i = 0; i < arrayInput.length; i++) {
      let words = arrayInput[i];
      if (
        words == wordsKeyLong[0] ||
        words == wordsKeyLong[1] ||
        words == wordsKeyLong[2] ||
        words == wordsKeyLong[3] ||
        words == wordsKeyLong[4] ||
        words == wordsKeyLong[5]
      ) {
        if (
          words == wordsKeyLong[0] ||
          words == wordsKeyLong[2] ||
          words == wordsKeyLong[5]
        ) {
          duracao = "curto";
        } else {
          duracao = "longo";
        }
        error = false;
        const textTwo = document.createElement("p");
        textTwo.innerHTML = "Você gosta de animes de antigos ou mais novos?";
        containerChat.append(textTwo);
        count++;
        console.log(duracao);
      }
    }
  }

  const wordsKeyGen = ["aventura", "comedia", "ação", "terror"];

  if (count == 0) {
    for (let i = 0; i < arrayInput.length; i++) {
      let words = arrayInput[i];
      if (
        words == wordsKeyGen[0] ||
        words == wordsKeyGen[1] ||
        words == wordsKeyGen[2] ||
        words == wordsKeyGen[3]
      ) {
        error = false;
        genero = arrayInput[i];
        const textOne = document.createElement("p");
        textOne.innerHTML = "Você gosta de animes curtos ou longos?";
        containerChat.append(textOne);
        count++;
        console.log(genero);
      }
    }
  }

  if (error == true) {
    const textError = document.createElement("p");
    textError.innerHTML = "Escreva algo valido";
    textError.className = "textError";
    containerChat.append(textError);
  }
}

//função que vai ser usada para escolher o anime
function chooseAnime() {
  let animes = [
    {
      nome: "Bleach",
      genero: "ação",
      duracao: "longo",
      origem: "japão",
      status: "andamento",
      epoca: "novo",
      link: "https://myanimelist.net/anime/269/Bleach",
      img: "./imgs/bleach.jpg",
    },
    {
      nome: "Cavaleiros Do Zodiaco",
      genero: "ação",
      duracao: "longo",
      origem: "japão",
      status: "finalizado",
      epoca: "antigo",
      link: "https://myanimelist.net/anime/1254/Saint_Seiya?q=saint&cat=anime",
      img: "./imgs/cdz.jpg",
    },
    {
      nome: "Chainsaw Man",
      genero: "ação",
      duracao: "curto",
      origem: "japão",
      status: "andamento",
      epoca: "novo",
      link: "https://myanimelist.net/anime/44511/Chainsaw_Man",
      img: "./imgs/chainsawman.jpg",
    },
    {
      nome: "Konosuba",
      genero: "comedia",
      duracao: "curto",
      origem: "japão",
      status: "andamento",
      epoca: "novo",
      link: "https://myanimelist.net/anime/30831/Kono_Subarashii_Sekai_ni_Shukufuku_wo?q=konosuba&cat=anime",
      img: "./imgs/konosuba.jpg",
    },
    {
      nome: "Another",
      genero: "terror",
      duracao: "curto",
      origem: "japão",
      status: "finalizado",
      epoca: "antigo",
      link: "https://myanimelist.net/anime/11111/Another?q=another&cat=anime",
      img: "./imgs/another.jpg",
    },
    {
      nome: "Dungeon ni Deai",
      genero: "aventura",
      duracao: "longo",
      origem: "japão",
      status: "andamento",
      epoca: "novo",
      link: "https://myanimelist.net/anime/28121/Dungeon_ni_Deai_wo_Motomeru_no_wa_Machigatteiru_Darou_ka?q=dugeon%20ni%20&cat=anime",
      img: "./imgs/dugeon.jpg",
    },
    {
      nome: "Mo Dao Zu Shi",
      genero: "aventura",
      duracao: "curto",
      origem: "china",
      status: "finalizado",
      epoca: "novo",
      link: "https://myanimelist.net/anime/37208/Mo_Dao_Zu_Shi?q=mo%20dao%20zo%20shi&cat=anime",
      img: "./imgs/modaozushi.jpg",
    },
  ];

  //filtra os animes com as caracteristicas que o user quer
  anime = animes.filter((animeEscolhido) => {
    if (
      animeEscolhido.genero == genero &&
      animeEscolhido.duracao == duracao &&
      animeEscolhido.origem == origem &&
      animeEscolhido.status == status &&
      animeEscolhido.epoca == epoca
    ) {
      console.log(animeEscolhido.nome);
      return animeEscolhido;
    }
  });

  finalAnime = JSON.stringify(anime[0].nome);
  link = JSON.stringify(anime[0].link);
  img = JSON.stringify(anime[0].img).replace(/"/g, "");
}

const button = document.getElementById("button-addon2");

button.addEventListener("click", send);
