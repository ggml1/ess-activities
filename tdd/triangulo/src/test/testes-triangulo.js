const chai = require('chai');
const Triangulo = require('../triangulo');

const assert = chai.assert;


describe('Verificando se é escaleno', () => {
  it('Teste: Os três lados são diferentes', () => {
    let triangulo = new Triangulo(7, 5, 10)
    assert.equal(triangulo.valido(), true)
    assert.equal(triangulo.tipo(), "Escaleno");
  });

});

describe('Verificando se é equilatero', () => {
  it('Teste: Os três lados são iguais', () => {
    let triangulo = new Triangulo(5, 5, 5)
    assert.equal(triangulo.valido(), true)
    assert.equal(triangulo.tipo(), "Equilatero");
  });
});

describe('Verificando se é isósceles', () => {
  it('Teste: Lados a e b iguais', () => {
    let triangulo = new Triangulo(7, 7, 10)
    assert.equal(triangulo.valido(), true)
    assert.equal(triangulo.tipo(), "Isosceles");
  });
  it('Teste: Lados b e c iguais', () => {
    let triangulo = new Triangulo(10, 7, 7)
    assert.equal(triangulo.valido(), true)
    assert.equal(triangulo.tipo(), "Isosceles");
  });
  it('Teste: Lados a e c iguais', () => {
    let triangulo = new Triangulo(7, 10, 7)
    assert.equal(triangulo.valido(), true)
    assert.equal(triangulo.tipo(), "Isosceles");
  });
});

describe('Verificando se os tamanhos lados são válidos', () => {
  it('Teste: Lado com valor que viola validade do triângulo ', () => {
    let triangulo = new Triangulo(100, 10, 10)
    assert.equal(triangulo.valido(), false);
  });
});

describe('Verificando se o programa trata lados com valores nulos', () => {
  it('Teste: Lado a eh nulo', () => {
    let triangulo = new Triangulo(null, 10, 10)
    assert.equal(triangulo.valido(), false)
    assert.equal(triangulo.tipo(), "Triangulo invalido")
  });
  it('Teste: Lado b eh nulo', () => {
    let triangulo = new Triangulo(10, null, 10)
    assert.equal(triangulo.valido(), false)
    assert.equal(triangulo.tipo(), "Triangulo invalido")
  });
  it('Teste: Lado c eh nulo', () => {
    let triangulo = new Triangulo(10, 10, null)
    assert.equal(triangulo.valido(), false)
    assert.equal(triangulo.tipo(), "Triangulo invalido")
  });
  it('Teste: Lado a eh zero', () => {
    let triangulo = new Triangulo(0, 10, 10)
    assert.equal(triangulo.valido(), false)
    assert.equal(triangulo.tipo(), "Triangulo invalido")
  });
  it('Teste: Lado b eh zero', () => {
    let triangulo = new Triangulo(10, 0, 10)
    assert.equal(triangulo.valido(), false)
    assert.equal(triangulo.tipo(), "Triangulo invalido")
  });
  it('Teste: Lado c eh zero', () => {
    let triangulo = new Triangulo(10, 10, 0)
    assert.equal(triangulo.valido(), false)
    assert.equal(triangulo.tipo(), "Triangulo invalido")
  });
});

describe('Verificando se o programa trata lados com valores indefinidos', () => {
  it('Teste: Lado a com valor indefinido', () => {
    let triangulo = new Triangulo(undefined, 10, 10)
    assert.equal(triangulo.valido(), false)
    assert.equal(triangulo.tipo(), "Triangulo invalido")
  });
  it('Teste: Lado b com valor indefinido', () => {
    let triangulo = new Triangulo(10, undefined, 10)
    assert.equal(triangulo.valido(), false)
    assert.equal(triangulo.tipo(), "Triangulo invalido")
  });
  it('Teste: Lado c com valor indefinido', () => {
    let triangulo = new Triangulo(10, 10, undefined)
    assert.equal(triangulo.valido(), false)
    assert.equal(triangulo.tipo(), "Triangulo invalido")
  });
});

describe('Verificando se o programa trata lados com valor negativo', () => {
  it('Teste: Lado a tem valor negativo', () => {
    let triangulo = new Triangulo(-5, 10, 10)
    assert.equal(triangulo.valido(), false)
    assert.equal(triangulo.tipo(), "Triangulo invalido")
  });
  it('Teste: Lado b tem valor negativo', () => {
    let triangulo = new Triangulo(10, -5, 10)
    assert.equal(triangulo.valido(), false)
    assert.equal(triangulo.tipo(), "Triangulo invalido")
  });
  it('Teste: Lado c tem valor negativo', () => {
    let triangulo = new Triangulo(10, 10, -5)
    assert.equal(triangulo.valido(), false)
    assert.equal(triangulo.tipo(), "Triangulo invalido")
  });
});
