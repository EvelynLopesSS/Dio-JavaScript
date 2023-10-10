const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque;

    switch (this.tipo) {
      case "mago":
        ataque = "usou magia";
        break;
      case "guerreiro":
        ataque = "usou espada";
        break;
      case "monge":
        ataque = "usou artes marciais";
        break;
      case "ninja":
        ataque = "usou shuriken";
        break;
      default:
        ataque = "atacou";
    }

    console.log(`${this.nome} atacou usando ${ataque}`);
  }
}

let herois = [
  {
    nome: "Eldron Thunderblade",
    idade: 500,
    tipo: "mago",
  },
  {
    nome: "Aragorn",
    idade: 30,
    tipo: "guerreiro",
  },
  {
    nome: "Starshimmer",
    idade: 35,
    tipo: "monge",
  },
  {
    nome: "Hattori",
    idade: 40,
    tipo: "ninja",
  },
];

const heroisInstancias = herois.map((heroi) => new Heroi(heroi.nome, heroi.idade, heroi.tipo));

console.log("Escolha um herói para atacar:");
heroisInstancias.forEach((heroi, index) => {
  console.log(`${index + 1}: ${heroi.nome} (${heroi.tipo})`);
});

rl.question('Digite o número do herói escolhido: ', (numeroHeroi) => {
  const escolhaHeroi = heroisInstancias[numeroHeroi - 1];

  if (escolhaHeroi) {
    escolhaHeroi.atacar();
  } else {
    console.log("Herói não encontrado.");
  }

  rl.close();
});
