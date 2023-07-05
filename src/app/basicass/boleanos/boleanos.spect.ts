import { usuarioIngresado } from "./boleanos";


describe('Pruebas de boleanos', () => {
    it('debe retornar true', () => {
        const res = usuarioIngresado()
    expect(res).toBeTruthy(true);
  });

})