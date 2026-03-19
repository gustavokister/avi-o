class Passagem {
    constructor(numero, deOnde, paraOnde, passageiro) {
        this.numero = numero;        
        this.deOnde = deOnde;        
        this.paraOnde = paraOnde; 
        this.dono = passageiro;      
        this.usada = false;          
    }
   
    usarPassagem() {
        this.usada = true;
        console.log(`Passagem ${this.numero} usada por ${this.dono.nome}`);
    }
}
export default Passagem;