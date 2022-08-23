function newFunction(name, age, country){

    var name = name || 'oscar';
    var age = age || 32;
    var country = country || 'Col';

    console.log(name, age, country);

}

newFunction();

 function newFunction2(name = 'robert', age = 32, country = 'Co'){
    console.log(`name, ${age}, country`);
 }

 newFunction2();

 