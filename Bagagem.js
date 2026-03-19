class Bagagem {
    constructor(numeroEtiqueta, cor, peso, dono) {
        this.etiqueta = numeroEtiqueta;
        this.cor = cor;                  
        this.peso = peso;               
        this.dono = dono;                
        this.ondeEsta = "balcão";        
    }

    levarParaEsteira() {
        this.ondeEsta = "esteira";
        console.log(`Mala ${this.etiqueta} (${this.cor}) na esteira!`);
    }
}
export default Bagagem;