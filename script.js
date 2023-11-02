class heroiCaracteristicas{
    constructor(nome, idade, tipo, ataque){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
        this.ataque = this.atacar()
    }

    atacar(){

        if(this.tipo === "mago"){
            this.ataque = "magia"
        } else if(this.tipo === "guerreiro"){
            this.ataque = "espada"
        } else if(this.tipo === "monge"){
            this.ataque = "artes marciais"
        } else {
            this.ataque = "shiruken"
        }

        return this.ataque
    }

    escrever(){
        console.log("O " + this.tipo + " de nome " + this.nome + " e idade " + this.idade + " atacou usando " + this.ataque)
    }
}

let herois = [
    {nome: "Jake", idade: 15, tipo: "mago"},
    {nome: "Yanna", idade: 23, tipo: "ninja"},
    {nome: "Dan", idade: 20, tipo: "guerreiro"}
]

for(const heroi of herois){
    let personagem = heroi.nome
    
    personagem = new heroiCaracteristicas(heroi.nome, heroi.idade, heroi.tipo)
    personagem.escrever()
}