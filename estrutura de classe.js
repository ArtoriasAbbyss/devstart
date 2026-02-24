class Atleta {
    constructor(nome, idade, peso, altura, notas) {
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.notas = notas;
    }

    // 1. Calcula categoria
    calculaCategoria() {
        if (this.idade >= 9 && this.idade <= 11) {
            return "Infantil";
        } else if (this.idade >= 12 && this.idade <= 13) {
            return "Juvenil";
        } else if (this.idade >= 14 && this.idade <= 15) {
            return "Intermediário";
        } else if (this.idade >= 16 && this.idade <= 30) {
            return "Adulto";
        } else {
            return "Sem categoria";
        }
    }

    // 2. Calcula IMC
    calculaIMC() {
        return this.peso / (this.altura * this.altura);
    }

    // 3. Calcula média válida (metodologia do Projeto Certificação 1)
    calculaMediaValida() {
        // Ordena notas
        let notasOrdenadas = this.notas.sort((a, b) => a - b);
        // Remove menor e maior
        notasOrdenadas = notasOrdenadas.slice(1, notasOrdenadas.length - 1);
        // Calcula média
        let soma = notasOrdenadas.reduce((total, nota) => total + nota, 0);
        return soma / notasOrdenadas.length;
    }

    // Métodos de obtenção
    obtemNomeAtleta() {
        return this.nome;
    }

    obtemIdadeAtleta() {
        return this.idade;
    }

    obtemPesoAtleta() {
        return this.peso;
    }

    obtemNotasAtleta() {
        return this.notas;
    }

    obtemCategoria() {
        return this.calculaCategoria();
    }

    obtemIMC() {
        return this.calculaIMC();
    }

    obtemMediaValida() {
        return this.calculaMediaValida();
    }
}
