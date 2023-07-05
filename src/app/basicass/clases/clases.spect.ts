import { Jugador } from "./clases";

describe('pruebas de clase', () => {
    const jugador = new Jugador();

    it('debe regresar 80hp si recibe 20 de daño', () => {
        const res = jugador.reciboDnio(20);
        expect(res).toBe(80);
    });

    it('debe reducir los puntos de vida en 50 si recibe 50 de daño', () => {
        const res = jugador.reciboDnio(50);
        expect(res).toBe(50);
    });
});