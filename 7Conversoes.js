//conversao inplicita 
const numero = 32;

//test de Escopo
//Escopo eu posso fazer um codigo local

var  t1= 3.14;
let  t2= 25;
const  t3= 200;

{
    var t1= 200;
    let t2= 30;
    const t3 = 3.14;

    console.log(t1,t2,t3);
}

    console.log(t1,t2,t3);

    // atençao pois a "var" tem um escopo global 
    //mesmo dentro do escopo o "var" eh mudado tambem para o codigo 