class Aeronave {
    constructor(nome, quantosCabe) {
        this.nome = nome;          
        this.placa = "PP-ABC";     
        this.assentos = quantosCabe; 
        this.pronta = false;        
    }
    abastecer() {
        this.pronta = true;
        console.log(`${this.nome} abastecido e pronto!`);
    }
}
export default Aeronave;