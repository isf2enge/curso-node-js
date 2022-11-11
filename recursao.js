 let expi = function (x,y){ //Função recursiva,para calcular exponencial

    if (x == 1) {
            return y

    }
    else {
        y *= y
        return expi(x-1,y)
    }

};
module.exports  = expi;