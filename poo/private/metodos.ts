class Exemplo {
    // Método que não retorna um valor (void)
    metodoSemRetorno(): void {
        console.log("Este método não retorna um valor.");
    }

    // Método que retorna um número (number)
    metodoComRetornoNumber(): number {
        return 42;
    }

    // Método que retorna uma string (string)
    metodoComRetornoString(): string {
        return "Olá, mundo!";
    }

    // Método que retorna um booleano (boolean)
    metodoComRetornoBoolean(): boolean {
        return true;
    }

    // Método que retorna um array de números (number[])
    metodoComRetornoArray(): number[] {
        return [1, 2, 3, 4, 5];
    }
}

const exemplo = new Exemplo();

exemplo.metodoSemRetorno(); // Chama o método sem retorno

const numero: number = exemplo.metodoComRetornoNumber(); // Chama o método com retorno de número
console.log(numero); // Imprime o número (42)

const texto: string = exemplo.metodoComRetornoString(); // Chama o método com retorno de string
console.log(texto); // Imprime a string ("Olá, mundo!")

const booleano: boolean = exemplo.metodoComRetornoBoolean(); // Chama o método com retorno de booleano
console.log(booleano); // Imprime o booleano (true)

const arrayNumeros: number[] = exemplo.metodoComRetornoArray(); // Chama o método com retorno de array de números
console.log(arrayNumeros); // Imprime o array ([1, 2, 3, 4, 5])
