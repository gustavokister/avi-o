class PortaoEmbarque {
    constructor(numero) {
        this.numero = numero;      
        this.aberto = false;       
        this.pessoasFila = 0;
    }

    abrir() {
        this.aberto = true;
        console.log(`PORTÃO ${this.numero} ABERTO! Pode embarcar!`);
    }

    chamar10pessoas() {
        this.pessoasFila += 10;
        console.log(`Chamando 10 pessoas pro portão ${this.numero}!`);
    }
}
export default Portao;