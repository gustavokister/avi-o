/** Classe que representa a pessoa que vai viajar. */
class Passageiro {
    constructor(nome, cpf, dataNascimento) {
        this.nome = nome;
        this.cpf = cpf;
        this.dataNascimento = dataNascimento;
        this.estaNoEmbarque = false; // Estado inicial: fora da área de segurança
    }

    /** Simula a entrada na área restrita. */
    realizarCheckInSeguranca() {
        this.estaNoEmbarque = true;
        console.log(this.nome + " passou pela segurança.");
    }
}