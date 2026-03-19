class CompanhiaAerea {
    constructor(nome) {
        this.nome = nome;       
        this.voosHoje = 0;       
        this.aviões = [];          
    }

    fezVoo() {
        this.voosHoje++;
        console.log(`${this.nome} fez ${this.voosHoje} voos hoje!`);
    }
}
export default Companhia;