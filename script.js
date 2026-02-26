class Voo {
    constructor(codigo, origem, destino, horario) {
        this.codigo = codigo;
        this.origem = origem;
        this.destino = destino;
        this.horario = horario;
        this.status = "No Pátio";
        this.altitude = 0;
    }

    atualizarStatus() {
        document.getElementById('txt-codigo').innerText = this.codigo;
        document.getElementById('txt-rota').innerText = this.origem + " -> " + this.destino;
        document.getElementById('txt-horario').innerText = this.horario;
        document.getElementById('txt-altitude').innerText = this.altitude;
        
        const spanStatus = document.getElementById('txt-status');
        const img = document.getElementById('aviao');

        spanStatus.innerText = this.status;

        if (this.altitude > 0) {
            spanStatus.className = "status-voo";
            img.style.bottom = (this.altitude / 50) + "px";
            img.style.left = "150px"; 
        } else {
            spanStatus.className = "status-chao";
            img.style.bottom = "0px";
            // Note: Não mexemos no img.style.left aqui para ele não voltar de ré
        }
    }

    decolar() {
        this.status = "Em Voo";
        this.altitude += 100;
        this.atualizarStatus();
    }

    subir() {
        if (this.altitude > 0) {
            this.altitude += 1000;
            this.atualizarStatus();
        }
    }

    pousar() {
        this.status = "Pousado";
        this.altitude = 0;
        this.atualizarStatus();
    }
}

const meuVoo = new Voo("XP-2024", "São Paulo", "Rio", "14:00");
meuVoo.atualizarStatus();