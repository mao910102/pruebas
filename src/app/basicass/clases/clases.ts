export class Jugador {
    hp: number;

    constructor() {
        this.hp = 100;
    }


    reciboDnio (danio : number){
        if(danio >= this.hp){
           return this.hp = 0;
        }else {
            return this.hp = this.hp - danio;
        }

        return this.hp;
    }
}