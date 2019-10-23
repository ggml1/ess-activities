function Triangulo(a,b,c) {
  this.a = a;
  this.b = b;
  this.c = c;
}

  
Triangulo.prototype.toString = function () {
  return `Lado A ${this.a}, Lado B ${this.b}, Lado C ${this.c}`
};

Triangulo.prototype.valido = function() {
  if (this.a === null || this.b === null || this.c === null) {
    return false
  }
  if (this.a === undefined || this.b === undefined || this.c === undefined) {
    return false
  }
  if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
    return false;
  }
  if (this.a + this.b > this.c && this.a + this.c > this.b && this.b + this.c > this.a) return true
  return false
};

Triangulo.prototype.tipo = function() {
  if (!this.valido()) {
    return "Triangulo invalido"
  }
  if (this.a === this.b) {
    if (this.a === this.c) return "Equilatero"
    return "Isosceles"
  }
  if (this.a === this.c || this.b === this.c) return "Isosceles"
  return "Escaleno"
};


module.exports = Triangulo;