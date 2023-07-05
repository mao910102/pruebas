import { mensaje } from "./string"



describe('pruebas de string', () => {
    it('debe de retornar una cadena', () => {
       const resp = mensaje('Mauricio');
       expect( typeof resp).toBe( 'string');
    })

    it('debe de retornar un saludo con el nombre enviado', () => {
        const name = 'Mauricio';	
        const resp = mensaje(name);
        expect(resp).toContain( name);
     })
})