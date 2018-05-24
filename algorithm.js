//TO DO:
//crossover


main();

function Individual(){
  this.fitness=0;
  this.numeroGeni=8;
  this.chromosome=[];
  this.sex=0;
  this.crossoverGenes=[];
  function generateSexAndChromosome(){
    for(var i=0; i<this.numeroGeni; i++){
      this.chromosome[i].push(Math.round(Math.random()));//assegna valore random tra 0 e 1
    }
    this.sex=Math.round(Math.random());
  }

  /*function crossover(){
    if(populaton[i].sex==0)
      var i=3;
    else
      var i=0;

    for(i<Math.round(numeroGeni/2); i++){
      crossoverGenes[i].push(chromosome(i));
    }
      return crossoverGenes;
  }*/

  function calculateFitness(){
    for(var i=0; i<subject.chromosome.length(); i++){
      if (subject.chromosome[i]==1)
        this.fitness++;
    }
  }

  function mutation(){
    if(Math.round(Math.random()*100)>=93){
      for(var i=2; i<5; i++){
        if(chromosome[i]==0)
          chromosome[i]=1;
        else
          chromosome[i]=0;
      }
    }
  }

//FINE OGGETTO
}


//MAIN
function main(){

  population=[];
  //riempi popolazione + inizializzazioni
  for(int i=0; i<15; i++){
    individuo= new Individual();
    individuo.generateSexAndChromosome();
    individuo.calculateFitness;
    population.push(individuo);
  }
  bestFitted=new Individual();
  generations=0;
  isMutato=0;

  //INIZIO SIMULAZIONE
  do{
    calculateBestFitted();
    generations++;
  }while(bestFitted.fitness!=8);

  alert(generations);
}


function calculateBestFitted(){
  for(var i=0; i<population.length(); i++){
    if(population[i].fitness>bestFitted)
      bestFitted=population[i];
  }
}
