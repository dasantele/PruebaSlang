
//función para calcular los n grams de un string
function calculateNGrams ( cadena , n) {

    var nGrams = []
    var centinela = false
    //Se revisa que la palabra no sea más pequeña que n
    if(n > cadena.length)
    {
        return "the word is too short for that n"
    }
    else{
        //Algoritmo para encontrar los nGrams
        for (let i = 0; i < cadena.length && centinela==false; i++) {
        
        nGrams[i]= cadena.substring(i,i+n)
        if((i+n) == cadena.length)
            {
            centinela =true;
            }   
        }
    }
    return nGrams
}
//función para el n-gram más repetido
function mostFrequentNGram(cadena, n){
    var nGrams = []
    var centinela = false
    //Se revisa que la palabra no sea más pequeña que n
    if(n > cadena.length)
    {
        return "the word is too short for that n"
    }
    else{
        //Algoritmo para encontrar los nGrams
        for (let i = 0; i < cadena.length && centinela==false; i++) {
        
        nGrams[i]= cadena.substring(i,i+n)
        if((i+n) == cadena.length)
        {
            centinela =true;
        }   
        }
        var MostR = []

        //Algoritmo para encontrar el nGram más repetido complejidad n^2
        for (let i = 0; i < nGrams.length; i++) {
            centinela = false
            var cadenaAux = cadena
            while (centinela==false) {
                //Se cuenta cuantas veces esta el nGram en la cadena
                if(cadenaAux.search(nGrams[i])!=-1)
                {
                    cadenaAux=cadenaAux.replace(nGrams[i])
                    MostR[i]++
                }
                else{
                    centinela=true
                } 
            }
            
        }
        var mayor=0
        for (let i = 0; i < MostR.length-1; i++) {
            if(MostR[i]>MostR[i+1])
            {
                mayor=i
            }
        }
        return nGrams[mayor]
    }

}

console.log(mostFrequentNGram("to be or not to be", 2))