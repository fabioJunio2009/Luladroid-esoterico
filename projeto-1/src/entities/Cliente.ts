export class Cliente{
    private _nome: string;
    constructor(nome: string){
        this._nome = nome;
    } 

    get nome(){
        return `${this._nome}`
    }
    set nome(newName){
        if(!newName){throw new Error("Valor inválido, esqueceu de por um novo nome")}
        this._nome = newName
    }
}