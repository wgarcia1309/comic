import { Injectable } from '@angular/core';

@Injectable()
export class HeroService {

    //private hero:any[]=
    private hero:Hero[]=
        [
            {
              id:0,
              nombre: "Aquaman",
              bio: "El poder más reconocido de Aquaman es la capacidad telepática para comunicarse con la vida marina, la cual puede convocar a grandes distancias.",
              img: "assets/img/aquaman.png",
              aparicion: "1941-11-01",
              tipo:"heroe",
              casa:"DC", 
            },
            {
              id:1,
              nombre: "Batman",
              bio: "Los rasgos principales de Batman se resumen en «destreza física, habilidades deductivas y obsesión». La mayor parte de las características básicas de los cómics han variado por las diferentes interpretaciones que le han dado al personaje.",
              img: "assets/img/batman.png",
              aparicion: "1939-05-01",
              tipo:"heroe",
              casa:"DC"
            },
            {
              id:2,
              nombre: "Daredevil",
              bio: "Al haber perdido la vista, los cuatro sentidos restantes de Daredevil fueron aumentados por la radiación a niveles superhumanos, en el accidente que tuvo cuando era niño. A pesar de su ceguera, puede \"ver\" a través de un \"sexto sentido\" que le sirve como un radar similar al de los murciélagos.",
              img: "assets/img/daredevil.png",
              aparicion: "1964-01-01",
              tipo:"heroe",
              casa: "Marvel"
            },
            {
              id:3,
              nombre: "Hulk",
              bio: "Su principal poder es su capacidad de aumentar su fuerza hasta niveles prácticamente ilimitados a la vez que aumenta su furia. Dependiendo de qué personalidad de Hulk esté al mando en ese momento (el Hulk Banner es el más débil, pero lo compensa con su inteligencia).",
              img: "assets/img/hulk.png",
              aparicion: "1962-05-01",
              tipo:"heroe",
              casa:"Marvel"
            },
            {
              id:4,
              nombre: "Linterna Verde",
              bio: "Poseedor del anillo de poder que posee la capacidad de crear manifestaciones de luz sólida mediante la utilización del pensamiento. Es alimentado por la Llama Verde (revisada por escritores posteriores como un poder místico llamado Starheart), una llama mágica contenida en dentro de un orbe (el orbe era en realidad un meteorito verde de metal que cayó a la Tierra, el cual encontró un fabricante de lámparas llamado Chang)",
              img: "assets/img/linterna-verde.png",
              aparicion: "1940-06-01",
              tipo:"heroe",
              casa: "DC"
            },
            {
              id:5,
              nombre: "Spider-Man",
              bio: "Tras ser mordido por una araña radiactiva, obtuvo los siguientes poderes sobrehumanos, una gran fuerza, agilidad, poder trepar por paredes. La fuerza de Spider-Man le permite levantar 10 toneladas o más. Gracias a esta gran fuerza Spider-Man puede realizar saltos íncreibles. Un \"sentido arácnido\", que le permite saber si un peligro se cierne sobre él, antes de que suceda. En ocasiones este puede llevar a Spider-Man al origen del peligro.",
              img: "assets/img/spiderman.png",
              aparicion: "1962-08-01",
              tipo:"heroe",
              casa: "Marvel"
            },
            {
              id:6,
              nombre: "Wolverine",
              bio: "En el universo ficticio de Marvel, Wolverine posee poderes regenerativos que pueden curar cualquier herida, por mortal que ésta sea, además ese mismo poder hace que sea inmune a cualquier enfermedad existente en la Tierra y algunas extraterrestres . Posee también una fuerza sobrehumana, que si bien no se compara con la de otros superhéroes como Hulk, sí sobrepasa la de cualquier humano.",
              img: "assets/img/wolverine.png",
              aparicion: "1974-11-01",
              tipo:"heroe",
              casa: "Marvel"
            },
            { 
              id:7,
              nombre: "Manta Negra",
              bio: "Era un joven autista que se crió en Baltimore, Maryland, y le gustaba jugar junto al mar. En su juventud fue secuestrado y obligado a trabajar en un barco. En un momento dado, al parecer, vio a Aquaman con sus amigos delfines y trató de pedir ayuda, pero no le vio. Por último, se vio obligado a defenderse, matando a uno de sus torturadores en el barco con un cuchillo. Odia el mar, que no tiene emociones.Como adulto, él diseñó un traje (principalmente un traje negro con el casco de ojos saltones que era capaz de disparar rayos destructores de sus ojos) y desarrolló alta tecnología sumergible, inspirada en las rayas mantas negras.",
              img: "assets/img/mantra.png",
              aparicion: "1967-09-01",
              tipo:"villano",
              casa: "DC"
            },
            { 
              id:8,
              nombre: "Bane",
              bio: "Bane nació en la ficticia República Caribeña de Santa Prisca, en una prisión llamada Peña Dura. Su padre, Edmund Dorrance, había sido un revolucionario y se había escapado del Sistema de la Corte de Santa Prisca. Sin embargo, el gobierno corrupto decretó que el hijo de Dorrance debía servir el resto de la sentencia del hombre, y por lo tanto la infancia y la vida adulta de Bane se gastaron en el ámbito penitenciario amoral. A pesar de su encierro, sus habilidades naturales le permitieron desarrollar talentos extraordinarios dentro de los muros de la prisión. Leyó todos los libros que tenía a su alcance, se ejercitó en el gimnasio de la prisión, y aprendió a pelear sin piedad. A pesar de sus circunstancias, se encontró con varios maestros de varias clases durante su encarcelamiento, que van desde la condena endurecida de un anciano sacerdote jesuita, bajo cuya tutela aparentemente recibió una educación clásica.",
              img: "assets/img/bane.png",
              aparicion: "1993-01-01",
              tipo:"villano",
              casa: "DC"
            },
            {
              id:9,
              nombre: "Bullseye",
              bio: 'Creció en el Bronx, donde vivía con su hermano y su padre abusivo. La principal forma de recreación de su hermano era jugar con rifles, lo que llevó a Bullseye a convertirse en un tirador experto. Cuando tenía 10 años, su hermano comenzó un incendio en su casa en un intento fallido de matar a su padre. Poco después, Bullseye se colocó en un hogar de acogida, y se convirtió en un jugador de béisbol en la escuela secundaria. Bullseye era un lanzador extremadamente talentoso, y se le ofreció una beca, pero en cambio optó por ingresar a las ligas menores. Después de tres juegos, fue convocado para jugar un juego de las Grandes Ligas agotado. No se había rendido ningún golpe en todo el juego, y en la parte inferior de la novena entrada con dos outs, se aburrió y le pidió al entrenador que lo sacara del juego. El entrenador se negó, e insistió en que terminara el juego. El bateador del equipo contrario se burló de él, acusándolo de cobardía. Bullseye le lanzó la pelota a la cabeza, matándolo. Cuando la pelota golpeó, solo dijo una palabra: "Bullseye". Fue excluido del béisbol profesional y condenado por homicidio involuntario.',
              img: "assets/img/bullseye.png",
              aparicion: "1976-01-01",
              tipo:"villano",
              casa: "Marvel"
            },
            {
              id:10,
              nombre: "Lider",
              bio: "Nacido como Samuel Sterns en Boise, Idaho, trabajó para una planta química en una pequeña categoría. Mientras se mueven materiales radioactivos a un área de almacenamiento subterráneo, algunos de los materiales radioactivos explotan, bombardeando a Sterns con radiación gamma. Se recupera y descubre que la radiación lo ha cambiado de un ser humano común a una entidad súper inteligente de piel verde con un cerebro de gran tamaño alojado en un cráneo elevado.5​Como es el caso con la mayoría de los individuos mutados por radiación gamma desde el principio, se dice que el conjunto particular de características de las esternas adquiridas por la exposición a la misma son resultado de un deseo subconsciente; en su caso, el deseo de ser tan inteligente como su hermano Philip, que era físico y trabajaba en las mismas instalaciones. Llamándose a sí mismo el Líder, Sterns se embarca en varios esquemas delictivos ambiciosos, con Hulk como su principal enemigo, respaldado consistentemente por un ejército autoconstruido de Humanoides plásticos súper fuertes y prácticamente invulnerables. ",
              img: "assets/img/lider.png",
              aparicion:  "1961-12-01",
              tipo:"villano",
              casa: "Marvel"
            },
            {
              id:11,
              nombre: "Siniestro",
              bio: "Siniestro nacería en el Planeta Korugar en donde los habitantes tenían la piel roja. Al ser muy fuerte y valiente sería elegido por los Guardianes para que se convirtiera en un Linterna Verde, el aceptaría y sería entrenado por Abin Sur quien luego moriría y encargaría a Siniestro enseñarle a su sucesor, Hal Jordan.Sus ganas por proteger su planeta lo llevaron a conquistarlo. Los Guardianes ignoraron esto hasta que Hal Jordan lo delataria entonces Siniestro sería llevado a la prisión de Qward.En la prisión, Siniestro crearía un anillo amarillo y escaparia.",
              img: "assets/img/siniestro.png",
              aparicion:  "1961-07-01",
              tipo:"villano",
              casa: "DC"
            },
            {
              id:12,
              nombre: "Doctor Octopus",
              bio: "Hijo de una madre dominante y un padre brusco Otto Octavius fue un reconocido doctor en física nuclear, investigador e inventor científico. Octavius diseñó un arnes pectotal con cuatro tentáculos articulados y metálicos de titanio resistentes a la radiación, dotados de gran fuerza y precisión, de los que se valdría para manipular elementos radiactivos a distancia.Tras un accidente en el laboratorio, varios líquidos radiactivos orgánicos explotaron y fusionaron su arnes al cuerpo de Octavius, quien adquirió el poder de moverlos a voluntad, usando sólo el pensamiento. El accidente también provocó daños cerebrales, lo cual se ha interpretado como una causa de que el cerebro tuviese que dirigir cuatro nuevas extremidades. Con esa mentalidad desquiciada, Octavius comenzó a dedicarse al crimen, bajo el nombre de Doctor Octopus, en referencia a sus ocho extremidades, como los pulpos.",
              img: "assets/img/drOcto.png",
              aparicion:  "1963-06-01",
              tipo:"villano",
              casa: "Marvel"
            },
            {
              id:13,
              nombre: "Magneto",
              bio: "Es conocido como uno de los mutantes más poderosos de Marvel Comics, contando con la habilidad de controlar el magnetismo. Además, es uno de los personajes más complejos moralmente no sólo en Marvel, sino de todos los cómics estadounidenses. Un judío sobreviviente al Holocausto, cuyas acciones son conducidas por el propósito de proteger la raza mutante de sufrir un destino similar. ",
              img: "assets/img/magneto.png",
              aparicion:  "1963-09-01",
              tipo:"villano",
              casa: "Marvel"
            },

    ];

    constructor(){
        console.log("Servicio listo para usar!!");
    }

    //getHeros()
    getHeros():Hero[]{
      let heroArr: Hero[] = [];
      for (let hero of this.hero) {
        if (hero.tipo == "heroe") {
          heroArr.push(hero);
        }
      }
        return heroArr;
    }


    getVillains(): Hero[] {
      let villainArr: Hero[] = [];
      for (let hero of this.hero) {
        if (hero.tipo == "villano") {
          villainArr.push(hero);
        }
      }
      return villainArr;
    }

    getHero(id:number){
        return this.hero[id];   
    }

    buscarHeroe(palabra:string):Hero[]{
      let heroArr:Hero[] = [];
      palabra = palabra.toLowerCase();
      for( let hero of this.hero){
        let nombre = hero.nombre.toLowerCase();
        if(nombre.indexOf(palabra)>=0){
           heroArr.push(hero);
        }
      }
      return heroArr;
    }

}

export interface Hero{
    id:number,
    nombre:string,
    bio:string,
    img:string,
    aparicion:string,
    casa:string,
    tipo:string
}