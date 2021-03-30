const dataBase = [
    {
        id:10000,
        title:"Scott Scale RC 900WC",
        description:"Para aspirar al título mundial hace falta una máquina de calidad mundial. Ligera, rígida y rápida; esto es lo que te ofrece la Scale RC 900 World Cup. Repleta de componentes de calidad y con toda la magia del carbono, con la World Cup dejarás de ser el seguidor número uno de Nino Schurter para quizás pasar a disputar el maillot de líder. La bicicleta está preparada; ¿y tú? El tiempo lo dirá.",
        price:1190430,
        pictureUrl:"../images/bicicletas/mtb/scale-rc-wc-2020-300x300.jpg",
        stock:3,
        section:"bicicletas",
    },
    {
        id:10001,
        title:"Scott Spark RC 900",
        description:"Hazte con la Spark RC Team Issue AXS si quieres hacer realidad tu sueño de participar en un campeonato del mundo. El cuadro más rápido del mercado, un grupo sin cables de 12 velocidades de SRAM y componentes Syncros: es una combinación perfecta para participar en carreras los fines de semana o para intentar poner el pie en tu primera prueba de copa del mundo.",
        price:1109056,
        pictureUrl:"../images/bicicletas/mtb/spark-rc-300x300.jpg",
        name:"",
        stock:2,
        section:"bicicletas",
    },
    {
        id:10002,
        title:"Scott Scale RC 900 Team",
        description:"Con la Scale RC Team de SCOTT podrás prepararte para superar tus mejores registros de velocidad en carretera. Diseñada para competir con la élite, la Scale RC Team viene con horquilla RockShox SID, transmisión SRAM Eagle y componentes Syncros en un paquete que no deja indiferente.",
        price:678198,
        pictureUrl:"../images/bicicletas/mtb/scale-rc-900-team-300x300.jpg",
        stock:1,
        section:"bicicletas",
    },
    {
        id:10003,
        title:"Scott Scale 930",
        description:"La serie Scale 930 de SCOTT tiene un cuadro de fibra de carbono superligero. La combinación de suspensión FOX, transmisión SRAM Eagle y componentes Syncros produce una bicicleta de competición ligera y eficiente.",
        price:470724,
        pictureUrl:"../images/bicicletas/mtb/scale-930-300x300.jpg",
        stock:10,
        section:"bicicletas",
    },
    {
        id:20000,
        title:"Syncros Belcarra 1.0 Cut Out",
        description:"Nuestro asiento orientado a la máxima performance, el Belcarra V 1.0 es parte de nuestro concepto V-CONCEPT trabajado junto a nuestros corredores con diseño específico que adapta la pelvis y lumbares para permitir una posición aero más agresiva. Sus rieles de carbono permiten un bajo peso de solo 160grs.",
        price:24600,
        pictureUrl:"../images/accesorios/asientos/belcarra-1.0-cutout-300x300.jpg",
        stock:5,
        section:"accesorios",
    },
    {
        id:20001,
        title:"Syncros XR 1.0 Carbono",
        description:"Gracias a la combinación de los raíles de carbono ligeros y las carcasas inyectadas, estos sillines XR1.0 utilizan la cantidad justa de acolchado para mantener el confort en las salidas largas sin añadir volumen. Está disponible en 2 anchos diferentes, así que tienes asegurado un ajuste perfecto.",
        price:23358,
        pictureUrl:"../images/accesorios/asientos/xr1.0-carbono-300x300.jpg",
        stock:3,
        section:"accesorios",
    },
    {   id:20002,
        title:"Syncros Belcarra 1.5 Cut Out",
        description:"Nuestro sillín diseñado para ofrecer lo máximo en prestaciones, el Belcarra V 1.5, forma parte de nuestro programa V-Concept, desarrollado para los ciclistas más flexibles, especialmente en la zona pélvica y lumbar, que suelen montar en una posición aerodinámica más agresiva. Una vez montados en la bici, adoptan una postura con una forma parecida a la V, de ahí su nombre. Estos ciclistas se sientan sobre la parte delantera del sillín, apoyados sobre las ramas púbicas. En términos generales, la postura de conducción es más baja y requiere un sillín con una forma ligeramente diferente. El modelo 1.5 incluye nuestros rieles huecos de titanio para ofrecer comodidad con un peso ligero.",
        price:15900,
        pictureUrl:"../images/accesorios/asientos/belcarra-1.5-cutout-300x300.jpg",
        stock:5,
        section:"accesorios"
    },
    {   id:20003,
        title:"Syncros Belcarra RR 2.0 Channel",
        description:"",
        price:11920,
        pictureUrl:"../images/accesorios/asientos/belcarra-rr-2.0-channel-300x300.jpg",
        stock:5,
        section:"accesorios"
    },
    {
        id:30100,
        title:"Scott Cadence",
        description:"El Cadence PLUS se ha diseñado y desarrollado para nuestros ciclistas de carretera y triatletas de élite. Hemos aplicado nuestros amplios conocimientos técnicos en aerodinámica para fabricar uno de los cascos más rápidos y ventilados de su categoría. Para ello hemos optimizado el flujo de aire tanto por fuera como por dentro del casco. El sistema MIPS con tecnología SCOTT AIR ofrece las ventajas del sistema de protección encefálica MIPS e incluye un diseño exclusivo que mejora aún más la ventilación. Con el Cadence PLUS, mantendrás la cabeza fría… y protegida.",
        price:25781,
        pictureUrl:"../images/indumentaria/cascos/scott-cadence-300x300.jpg",
        stock:3,
        section:"indumentaria"
    },
    {
        id:30101,
        title:"Scott Centric Plus Mips",
        description:"El Centric PLUS se ha diseñado y desarrollado para nuestros ciclistas de carretera y de montaña de élite. Hemos aplicado nuestros amplios conocimientos técnicos en aerodinámica para fabricar uno de los cascos más rápidos y ventilados de su categoría. Para ello hemos optimizado el flujo de aire tanto por fuera como por dentro del casco. El sistema MIPS® con tecnología SCOTT AIR ofrece las ventajas del sistema de protección encefálica MIPS® e incluye un diseño exclusivo que mejora aún más la ventilación. Con el Centric PLUS, mantendrás la cabeza fría… y protegida.",
        price:24976,
        pictureUrl:"../images/indumentaria/cascos/scott-centric-300x300.jpg",
        stock:2,
        section:"indumentaria"
    },
    {
        id:30102,
        title:"Scott Fuga Plus Red",
        description:"El Fuga PLUS es el casco perfecto para corredores de XC y de carretera que buscan un casco de altas prestaciones. Incluye el sistema de protección encefálica MIPS, el ajuste HALO 3D, la mejor ventilación de su categoría y una visera desmontable para alternar entre carretera y MTB.",
        price:22175,
        pictureUrl:"../images/indumentaria/cascos/scott-fuga-300x300.jpg",
        stock:4,
        section:"indumentaria"
    },
    {
        id:30103,
        title:"Scott Vanish",
        description:"",
        price:20589,
        pictureUrl:"../images/indumentaria/cascos/scott-vanish-300x300.jpg",
        stock:2,
        section:"indumentaria"},
]

export default dataBase