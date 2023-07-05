import { incrementar } from "./numeros"



describe('pruebas de numeros', ()=>{
    it('debe de retornar 100, si el número ingresado es mayor a 100'), ()=>{
        const res = incrementar(300)
        expect(res).toBe(100)
    }

    it('debe ingresar el número  + 1 si no es mayor a 100'), ()=>{
        const res = incrementar(59)
        expect(res).toBe(60)
    }
})