const chai = require('chai')
const chaiHttp = require('chai-http')
const server = require('../index')

const QUERY_URL = '/converterTemperatura'

chai.use(chaiHttp)

let should = chai.should()

describe('Verificar se sao tratados tipos invalidos', () => {
    it('Teste: "de" invalido', (done) => {
        chai.request(server).get(QUERY_URL + '?valor=30&de=@&para=C').end((err, res) => {
          should.not.exist(err)
          res.should.have.status(200)
          res.text.should.be.equal('Dados invalidos!')
          done();
        })
    });
    it('Teste: "para" invalido', (done) => {
      chai.request(server).get(QUERY_URL + '?valor=30&de=C&para=@').end((err, res) => {
        should.not.exist(err)
        res.should.have.status(200)
        res.text.should.be.equal('Dados invalidos!')
        done();
      })
    });
    it('Teste: "de" e "para" invalidos', (done) => {
      chai.request(server).get(QUERY_URL + '?valor=30&de=@&para=@').end((err, res) => {
        should.not.exist(err)
        res.should.have.status(200)
        res.text.should.be.equal('Dados invalidos!')
        done();
      })
    });
    it('Teste: "de" nao definido', (done) => {
      chai.request(server).get(QUERY_URL + '?valor=30&de=&para=C').end((err, res) => {
        should.not.exist(err)
        res.should.have.status(200)
        res.text.should.be.equal('Dados invalidos!')
        done();
      })
    });
    it('Teste: "para" nao definido', (done) => {
      chai.request(server).get(QUERY_URL + '?valor=30&de=C&para=').end((err, res) => {
        should.not.exist(err)
        res.should.have.status(200)
        res.text.should.be.equal('Dados invalidos!')
        done();
      })
    });
    it('Teste: "de" e "para" nao definidos', (done) => {
      chai.request(server).get(QUERY_URL + '?valor=30&de=&para=').end((err, res) => {
        should.not.exist(err)
        res.should.have.status(200)
        res.text.should.be.equal('Dados invalidos!')
        done();
      })
    });
});

describe('Verificar se sao tratados inputs de temperatura invalidos', () => {
  it('Teste: temperatura contendo letras', (done) => {
      chai.request(server).get(QUERY_URL + '?valor=a30b&de=C&para=C').end((err, res) => {
        should.not.exist(err)
        res.should.have.status(200)
        res.text.should.be.equal('Dados invalidos!')
        done();
      })
  });
  it('Teste: temperatura contendo simbolos especiais', (done) => {
    chai.request(server).get(QUERY_URL + '?valor=@30b&de=C&para=C').end((err, res) => {
      should.not.exist(err)
      res.should.have.status(200)
      res.text.should.be.equal('Dados invalidos!')
      done();
    })
  });
});

describe('Verificar URLs malformadas', () => {
  it('Teste: URL contendo apenas tag "valor"', (done) => {
      chai.request(server).get(QUERY_URL + '?valor=a30b').end((err, res) => {
        should.not.exist(err)
        res.should.have.status(200)
        res.text.should.be.equal('Dados invalidos!')
        done();
      })
  });
  it('Teste: URL contendo apenas tag "de"', (done) => {
    chai.request(server).get(QUERY_URL + '?de=a30b').end((err, res) => {
      should.not.exist(err)
      res.should.have.status(200)
      res.text.should.be.equal('Dados invalidos!')
      done();
    })
  });
  it('Teste: URL contendo apenas tag "para"', (done) => {
    chai.request(server).get(QUERY_URL + '?para=a30b').end((err, res) => {
      should.not.exist(err)
      res.should.have.status(200)
      res.text.should.be.equal('Dados invalidos!')
      done();
    })
  });
  it('Teste: URL sem tag valor', (done) => {
    chai.request(server).get(QUERY_URL + '?de=a30b&para=230').end((err, res) => {
      should.not.exist(err)
      res.should.have.status(200)
      res.text.should.be.equal('Dados invalidos!')
      done();
    })
  });
  it('Teste: URL sem tag "de"', (done) => {
    chai.request(server).get(QUERY_URL + '?valor=30&para=a30b').end((err, res) => {
      should.not.exist(err)
      res.should.have.status(200)
      res.text.should.be.equal('Dados invalidos!')
      done();
    })
  });
  it('Teste: URL sem tag "para"', (done) => {
    chai.request(server).get(QUERY_URL + '?valor=30&de=a30b').end((err, res) => {
      should.not.exist(err)
      res.should.have.status(200)
      res.text.should.be.equal('Dados invalidos!')
      done();
    })
  });
  it('Teste: URL sem tags', (done) => {
    chai.request(server).get(QUERY_URL + '?').end((err, res) => {
      should.not.exist(err)
      res.should.have.status(200)
      res.text.should.be.equal('Dados invalidos!')
      done();
    })
  });
});

describe('Verificar se a conversao eh feita corretamente', () => {
    it('Teste: de Celsius para Kelvin', (done) => {
      chai.request(server).get(QUERY_URL + '?valor=0&de=C&para=K').end((err, res) => {
        should.not.exist(err)
        res.should.have.status(200)
        res.text.should.be.equal('273.15')
        done();
      })
    });
    it('Teste: de Celsius para Fahrenheit', (done) => {
      chai.request(server).get(QUERY_URL + '?valor=30&de=C&para=F').end((err, res) => {
        should.not.exist(err)
        res.should.have.status(200)
        res.text.should.be.equal('86')
        done();
      })
    });
    it('Teste: de Celsius para Celsius', (done) => {
      chai.request(server).get(QUERY_URL + '?valor=30&de=C&para=C').end((err, res) => {
        should.not.exist(err)
        res.should.have.status(200)
        res.text.should.be.equal('30')
        done();
      })
    });
    it('Teste: de Fahrenheit para Celsius', (done) => {
      chai.request(server).get(QUERY_URL + '?valor=86&de=F&para=C').end((err, res) => {
        should.not.exist(err)
        res.should.have.status(200)
        res.text.should.be.equal('30')
        done();
      })
    });
    it('Teste: de Fahrenheit para Kelvin', (done) => {
      chai.request(server).get(QUERY_URL + '?valor=32&de=F&para=K').end((err, res) => {
        should.not.exist(err)
        res.should.have.status(200)
        res.text.should.be.equal('273.15')
        done();
      })
    });
    it('Teste: de Fahrenheit para Fahrenheit', (done) => {
      chai.request(server).get(QUERY_URL + '?valor=86&de=F&para=F').end((err, res) => {
        should.not.exist(err)
        res.should.have.status(200)
        res.text.should.be.equal('86')
        done();
      })
    });
    it('Teste: de Kelvin para Celsius', (done) => {
      chai.request(server).get(QUERY_URL + '?valor=273.15&de=K&para=C').end((err, res) => {
        should.not.exist(err)
        res.should.have.status(200)
        res.text.should.be.equal('0')
        done();
      })
    });
    it('Teste: de Kelvin para Fahrenheit', (done) => {
      chai.request(server).get(QUERY_URL + '?valor=273.15&de=K&para=F').end((err, res) => {
        should.not.exist(err)
        res.should.have.status(200)
        res.text.should.be.equal('32')
        done();
      })
    });
    it('Teste: de Kelvin para Kelvin', (done) => {
      chai.request(server).get(QUERY_URL + '?valor=32&de=K&para=K').end((err, res) => {
        should.not.exist(err)
        res.should.have.status(200)
        res.text.should.be.equal('32')
        done();
      })
    });
});