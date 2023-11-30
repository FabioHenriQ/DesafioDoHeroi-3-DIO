class Heroi{
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo.toLowerCase();
    }
    
    atacar(){
        if (this.tipo == "guerreiro") {
            console.log(`o ${this.tipo} atacou usando a espada!`);
        } else if (this.tipo == "mago") {
            console.log(`o ${this.tipo} atacou usando magia!`);
        } else if (this.tipo == "monge") {
            console.log(`o ${this.tipo} atacou usando artes marciais!`);
        } else if (this.tipo == "ninja") {
            console.log(`o ${this.tipo} atacou usando shuriken!`);
        }
    }
}

let eu = new Heroi("Felipão", 20, "ninja");
eu.atacar();