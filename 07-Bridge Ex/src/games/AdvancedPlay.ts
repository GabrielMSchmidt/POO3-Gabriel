import IConsole from "../consoles/interfaces/IConsole";
import Play from "./Play";

export default class AdvancedPlay extends Play{
    constructor(consoles: IConsole){
        super(consoles);
    }

    challange(): void{
        console.log("Desafio Iniciado no Jogo.");
    }
}