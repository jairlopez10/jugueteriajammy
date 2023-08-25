
const productosdb = [
    {
        id: 1,
        titulo: "Kit de Uñas X12 con Brillos",
        precio: 12000,
        descripcion: `¡Fusionamos diversión y creatividad en nuestro kit de uñas encantadoras! Diseñado especialmente para niñas de 3 a 7 años, este kit les brinda la oportunidad de explorar su lado artístico mientras se divierten.

        Con 12 uñas en colores vibrantes y diseños encantadores, cada uña es una pequeña obra maestra lista para ser creada. Desde delicadas flores hasta brillantes estrellas, ¡serán princesitas creativas!
        
        El kit incluye un tubito de pegamento suave y seguro para que las uñas permanezcan en su lugar durante todas las aventuras. Y para el toque final mágico, nuestro frasquito de brillo añade destellos y colores chispeantes a cada creación.`,
        imagenes: [
            {
                tipo: "imagen",
                url: "/producto1a.webp"
            },
            {
                tipo: "imagen",
                url: "/producto1b.webp"
            }
        ],
        status: "disponible",
        colores: "Rosado",
        edad: "+3",
        categoria: "maquillaje",
        genero: "ninas"
    },
    {
        id: 2,
        titulo: "Computador Interactivo con Pantalla y Mouse Unisex",
        precio: 45000,
        descripcion: `¡Descubre el emocionante mundo del aprendizaje con nuestro Computador Interactivo Todo en Uno, equipado con mouse y pantalla digital! Diseñado para preescolares, este juguete cautivante es más que un juego.

        Explora números del 1 al 10, el abecedario y palabras esenciales con diversión interactiva. Con canciones animadas y actividades intuitivas de suma y resta, cada momento se convierte en una lección emocionante.
        
        Colores vibrantes y personajes adorables hacen que el aprendizaje sea divertido. Los botones grandes y el mouse fácil de usar garantizan una inmersión sin complicaciones.
        
        Este computador educativo es una herramienta valiosa que fomenta el desarrollo cognitivo. ¡Cada toque en las teclas crea un futuro de conocimiento!`,
        imagenes: [
            {
                tipo: "imagen",
                url: "/producto2a.webp"
            },
            {
                tipo: "imagen",
                url: "/producto2b.webp"
            },
            {
                tipo: "imagen",
                url: "producto2c.webp"
            },
            {
                tipo: "video",
                url: "producto2d.mp4"
            }
        ],
        status: "disponible",
        colores: "Rosado, Azul",
        edad: "+3",
        categoria: "educativo",
        genero: "ninas"
    },
    {
        id: 3,
        titulo: "Computador Interactivo 130 Actividades",
        precio: 10000,
        descripcion: `Descubre un mundo de aprendizaje interactivo con nuestro Computador Interactivo 130 Actividades. Diseñado para inspirar y enseñar, este juguete educativo es una experiencia completa.

        Desde letras y música hasta un reloj funcional, los niños explorarán un abanico de habilidades. Rellena palabras, deletrea, sumérgete en matemáticas y disfruta de juegos educativos, todo con el uso del mouse y el teclado interactivo. Este computador, con conexión a corriente, brinda horas de diversión y aprendizaje sin fin.
        
        Con su pantalla digital interactiva y actividades atractivas, tu pequeño estará inmerso en un mundo educativo emocionante. Prepárate para ver cómo su conocimiento y confianza se expanden mientras exploran este maravilloso mundo de oportunidades!`,
        imagenes: [
            {
                tipo: "imagen",
                url: "/producto3a.webp"
            },
            {
                tipo: "imagen",
                url: "/producto3b.webp"
            },
            {
                tipo: "imagen",
                url: "producto3c.webp"
            }
        ],
        status: "disponible",
        colores: "Azul, Rosado",
        edad: "+3",
        categoria: "educativo",
        genero: "unisex"
    },
    {
        id: 4,
        titulo: "Barbie +10 Vestidos con Hija, Bicicleta y Accesorios",
        precio: 23000,
        descripcion: `¡Diversión sin fin espera con este set único de Barbie con 10 vestidos impresionantes, para que ella pueda deslumbrar en cualquier ocasión. Pero eso no es todo, ¡también viene con su hija lista para un emocionante paseo en bicicleta!

        Explora un mundo de moda y creatividad mientras vistes a Barbie en los vestidos más elegantes y a la moda. Cada vestido está diseñado para reflejar su estilo único y personalidad. Además, el set incluye accesorios esenciales como cepillos y espejos, ¡para que Barbie y su hija estén siempre listas para el día!`,
        imagenes: [
            {
                tipo: "imagen",
                url: "/producto4a.webp"
            }
        ],
        status: "disponible",
        colores: "Rosado",
        edad: "+3",
        categoria: "munecas",
        genero: "ninas"
    },
    {
        id: 5,
        titulo: "Pistola de Burbujas Dinosaurio Rex",
        precio: 49000,
        descripcion: `¡Diversión prehistórica te espera con nuestra Pistola de Burbujas Dinosaurio Rex! Este juguete único combina la emoción de las burbujas con el estilo del legendario tiranosaurio rex.

        Con su diseño de dinosaurio rex en colores vibrantes, esta pistola de burbujas ofrece una experiencia mágica para niños de todas las edades. Incluye dos frascos de burbujas para que la diversión comience de inmediato. Y lo mejor de todo, ¡puedes recargarla fácilmente con jabón de la casa para que la diversión nunca termine!
        
        El juego interactivo se vuelve más emocionante a medida que los niños disparan burbujas y ven cómo flotan en el aire, creando momentos de asombro y risas. Además, esta increíble pistola de burbujas viene en una maleta en forma de cabeza de dinosaurio rex, que no solo es un almacenamiento conveniente, sino también un accesorio impresionante para la habitación de tu pequeño!`,
        imagenes: [
            {
                tipo: "imagen",
                url: "/producto5a.webp"
            },
            {
                tipo: "video",
                url: "producto5b.mp4"
            }
            
        ],
        status: "disponible",
        colores: "Verde, Azul",
        edad: "+3",
        categoria: "punteria",
        genero: "ninos"
    },
    {
        id: 6,
        titulo: "Dinosaurio Rex con Movimiento, Luces, Sonido",
        precio: 17000,
        descripcion: `¡Transporta a tu pequeño a la era de los dinosaurios con nuestro Dinosaurio Rex! Este magnífico amigo prehistórico está lleno de emocionantes luces brillantes, sonidos realistas y un movimiento fascinante en su cuerpo, garras y cola, este dinosaurio cobra vida en las manos de tu hijo. Cada paso es una aventura asombrosa mientras el dinosaurio camina y se balancea con autenticidad, creando momentos de maravilla y diversión.
        
        La interacción es clave: los niños adorarán activar los sonidos y movimientos con solo tocar un botón. Y para potenciar la diversión, este dinosaurio es fácil de alimentar. Simplemente coloca 3 pilas AA y estarás listo para la acción!`,
        imagenes: [
            {
                tipo: "imagen",
                url: "/producto6a.webp"
            },
            {
                tipo: "imagen",
                url: "/producto6b.webp"
            },
            {
                tipo: "video",
                url: "producto6c.mp4"
            }
        ],
        status: "disponible",
        colores: "Verde",
        edad: "+3",
        categoria: "dinosaurios",
        genero: "ninos"
    },
    {
        id: 7,
        titulo: "Dinosaurio Huevo Sorpresa, Luces, Movimiento y Sonido",
        precio: 17000,
        descripcion: `¡Sumérgete en una emocionante expedición prehistórica con nuestro Dinosaurio Huevo Sorpresa con luces brillantes, sonidos realistas y movimientos cautivadores que cobran vida en su cuerpo y cabeza. Pero aquí está la verdadera maravilla: este dinosaurio también tiene una sorpresa bajo la manga (o en este caso, bajo sus patas). ¡Bota huevos de plástico en cada paso, creando momentos de anticipación y emoción!

        Este dinosaurio es una fuente inagotable de diversión. Además, para que la diversión nunca termine, funciona con 3 pilas AA. Ideal para los apasionados por los dinosaurios y los amantes de la aventura!`,
        imagenes: [
            {
                tipo: "imagen",
                url: "/producto7a.webp"
            },
            {
                tipo: "video",
                url: "producto7b.mp4"
            }
        ],
        status: "disponible",
        colores: "Amarillo, Verde",
        edad: "+3",
        categoria: "dinosaurios",
        genero: "ninos"
    },
    {
        id: 8,
        titulo: "Barbie +6 Vestidos + 2 Hijas + Pony",
        precio: 17000,
        descripcion: `¡Crea mágicas historias con nuestro Set de Barbie Familia y Amigos! Este encantador conjunto incluye una Barbie radiante con una selección de 6 elegantes vestidos, ¡siempre lista para cualquier ocasión!

        Pero eso no es todo, ¡también presentamos a las adorables hijas de Barbie! Con 2 hijas llenas de personalidad y estilo, las posibilidades de juego se multiplican. Desde aventuras familiares hasta tardes de diversión, esta familia está lista para todo.
        
        Y para añadir un toque aún más especial, el set incluye un pony encantador para las hijas. Paseos en la naturaleza o puro juego imaginativo, este pony es la compañía perfecta para las pequeñas!`,
        imagenes: [
            {
                tipo: "imagen",
                url: "/producto8a.webp"
            }
        ],
        status: "disponible",
        colores: "Rosado",
        edad: "+3",
        categoria: "munecas",
        genero: "ninas"
    },
    {
        id: 9,
        titulo: "Coleccion de 4 Carros de Impulso y Choque",
        precio: 17000,
        descripcion: `¡Prepárate para la emoción con nuestro Set de 4 Carros Saltarines de Impulso! Este conjunto es la definición de diversión y acción en cada vuelta.

        Cada carro de impulso está diseñado para la velocidad y la adrenalina. Cuando chocan con obstáculos, ¡prepárate para el asombro! Estos carros saltan y dan vueltas en el aire, llevando la emoción al siguiente nivel.
        
        Desafía la gravedad y crea tu propia pista de acrobacias. Con cada choque, los carros te sorprenderán con su capacidad para realizar saltos increíbles y vueltas emocionantes!`,
        imagenes: [
            {
                tipo: "imagen",
                url: "/producto9a.webp"
            },
            {
                tipo: "video",
                url: "/producto9b.mp4"
            }
        ],
        status: "disponible",
        colores: "Azul, Morado, Naranja, Negro",
        edad: "+3",
        categoria: "carros-impulso",
        genero: "ninos"
    },
    {
        id: 10,
        titulo: "Carro de Pila con Vapor, Luces y Sonido",
        precio: 17000,
        descripcion: `¡Desata la emoción con nuestro Carro de Pila Nitro Xtreme! Este vehículo de próxima generación combina estilo y rendimiento en una experiencia única.

        Con luces brillantes y sonidos realistas, este carro cobra vida en tus manos. Pero aquí está la verdadera maravilla: la parte trasera del carro emite vapor de agua, creando un efecto asombroso similar al nitro. La adrenalina se dispara cuando ves cómo este carro se desplaza con velocidad y estilo, dejando un rastro de vapor en su estela.
        
        Este Carro de Pila Nitro Xtreme funciona con 3 pilas AA (no incluidas), y ya sea en interiores o en exteriores, te lleva a un mundo de acción y aventura!`,
        imagenes: [
            {
                tipo: "imagen",
                url: "/producto10a.webp"
            },
            {
                tipo: "imagen",
                url: "/producto10b.webp"
            },
            {
                tipo: "video",
                url: "/producto10c.mp4"
            }
        ],
        status: "disponible",
        colores: "Rojo, Amarillo",
        edad: "+3",
        categoria: "carros-impulso",
        genero: "ninos"
    },
    {
        id: 11,
        titulo: "Perro Interactivo Ladra y Juega",
        precio: 17000,
        descripcion: `¡Trae a casa la alegría con nuestro Perro Interactivo Ladra y Juega! Este adorable compañero peludo está listo para llenar tu hogar de risas y diversión.

        Acariciar o aplaudir desencadena una respuesta emocionante: este perro ladra alegremente y mueve su cola con entusiasmo. ¡Cada interacción es una muestra de afecto y amistad!
        
        Pero eso no es todo, nuestro perro tiene más trucos bajo la manga. Con un botón especial, puedes activar su modo de movimiento. Prepárate para verlo caminar con gracia, mover la cola y emitir ladridos juguetones mientras se desplaza por la habitación! (Funciona con 3 Pilas AA)`,
        imagenes: [
            {
                tipo: "imagen",
                url: "/producto11a.webp"
            },
            {
                tipo: "imagen",
                url: "/producto11b.webp"
            },
            {
                tipo: "video",
                url: "/producto11c.mp4"
            }
        ],
        status: "disponible",
        colores: "Amarillo, Negro",
        edad: "+3",
        categoria: "mascotas",
        genero: "unisex"
    },
    {
        id: 12,
        titulo: "Pista de Carros Neon Xtreme",
        precio: 17000,
        descripcion: `¡Sumérgete en la emoción de la velocidad y la luz con nuestra Pista de Carros Neon Xtreme! Esta pista asombrosa lleva la diversión al siguiente nivel con su diseño iluminado que brilla intensamente en la oscuridad.

        Cada giro y vuelta en la pista se convierte en un espectáculo visual emocionante mientras los carros recorren las curvas resplandecientes, ¡incluyendo 3 vueltas de 360 grados que aumentarán la adrenalina! Y lo mejor de todo, el set incluye un carro eléctrico incluido que es recargable por USB. Simplemente conecta y carga para estar listo para la acción. Prepárate para carreras emocionantes y momentos inolvidables!`,
        imagenes: [
            {
                tipo: "imagen",
                url: "/producto12a.webp"
            }
        ],
        status: "disponible",
        colores: "Neon",
        edad: "+3",
        categoria: "carros-impulso",
        genero: "ninos"
    },
    {
        id: 13,
        titulo: "Gimnasio de Actividades para Bebe",
        precio: 17000,
        descripcion: `¡Estimula el crecimiento y la diversión con nuestro Gimnasio de Bebés Sonidos y Juguetes! Este espacio de juego interactivo está diseñado para ofrecer a tu bebé una experiencia llena de aprendizaje y entretenimiento.

        Con sonidos suaves y alegres, el gimnasio crea un ambiente envolvente que captura la atención y curiosidad de tu bebé. Además, el arco sobre la cabeza del bebé está decorado con juguetes colgantes que invitan a la exploración. Tu bebé podrá recostarse cómodamente mientras se sumerge en el mundo de los colores, formas y texturas!`,
        imagenes: [
            {
                tipo: "imagen",
                url: "/producto13a.webp"
            }
        ],
        status: "disponible",
        colores: "Verde",
        edad: "+0",
        categoria: "didacticos",
        genero: "unisex"
    },
    {
        id: 14,
        titulo: "Carro a Control Remoto con Efecto Vapor",
        precio: 17000,
        descripcion: `¡Acelera hacia la diversión con nuestro Carro a Control Remoto con Efecto Vapor! Este impresionante vehículo combina la emoción de la velocidad con un toque de magia gracias a su capacidad para lanzar vapor de agua, ¡simulando un efecto de nitro!

        Equipado con luces brillantes y sonidos realistas, este carro se convierte en una experiencia multisensorial que cautivará a los entusiastas de todas las edades. Su diseño llamativo y su potente rendimiento hacen que cada giro sea una aventura emocionante.
        
        Y lo mejor de todo, este carro es de batería recargable. Conéctalo y carga para estar listo para la acción en poco tiempo!`,
        imagenes: [
            {
                tipo: "imagen",
                url: "/producto14a.webp"
            },
            {
                tipo: "imagen",
                url: "/producto14b.webp"
            },
            {
                tipo: "video",
                url: "/producto14c.mp4"
            }
        ],
        status: "disponible",
        colores: "Rojo, Morado",
        edad: "+3",
        categoria: "carros-control",
        genero: "ninos"
    },
    {
        id: 15,
        titulo: "Carro a Control Remoto Estilo Ferrari",
        precio: 17000,
        descripcion: `¡Experimenta la emoción de la velocidad con nuestro Carro a Control Remoto Ferrari! Este vehículo de alta calidad captura la elegancia y la potencia de un Ferrari, ofreciéndote una experiencia de conducción excepcional.

        Con detalles auténticos y un diseño elegante que emula la estética icónica de Ferrari, este carro a control remoto es un deleite visual y funcional. Equipado con batería recargable, simplemente conéctalo para recargarlo y estar listo para dominar la pista una vez más.
        
        Controla cada giro y maniobra con el control remoto intuitivo, permitiendo que te conviertas en el conductor de tu propia aventura!`,
        imagenes: [
            {
                tipo: "imagen",
                url: "/producto15a.webp"
            },
            {
                tipo: "imagen",
                url: "/producto15b.webp"
            }
        ],
        status: "disponible",
        colores: "Amarillo, Rojo",
        edad: "+6",
        categoria: "carros-control",
        genero: "ninos"
    },
    {
        id: 16,
        titulo: "Carro a Control Remoto (Bidireccional)",
        precio: 17000,
        descripcion: `¡Experimenta la emoción de la velocidad y el lujo con nuestro Carro a Control Remoto Estilo Ferrari! Este vehículo excepcional captura la elegancia y la potencia en un diseño compacto y emocionante.

        Con detalles auténticos y un diseño que emula la icónica estética de Ferrari, este carro a control remoto es un deleite visual y funcional. Equipado con batería recargable, simplemente conéctalo para recargarlo y estar listo para desafiar la pista una vez más. Este carro solo se mueve hacia adelante o hacia atrás, brindando una experiencia de conducción única.`,
        imagenes: [
            {
                tipo: "imagen",
                url: "/producto16a.webp"
            },
            {
                tipo: "imagen",
                url: "/producto16b.webp"
            }
        ],
        status: "disponible",
        colores: "Grafiti, Negro",
        edad: "+3",
        categoria: "carros-control",
        genero: "ninos"
    },
    {
        id: 17,
        titulo: "Coche Plastico + Muñeca Baby + Tetero",
        precio: 17000,
        descripcion: `¡Lleva la diversión en movimiento a un nivel superior con nuestro Coche Paseador de Plástico con Muñeca y Tetero Incluidos! Este conjunto encantador combina la emoción del juego con la imaginación, permitiendo a los niños crear sus propias historias mientras se embarcan en emocionantes aventuras.

        El coche paseador de plástico está diseñado con detalles realistas y colores vibrantes que capturan la atención y la creatividad. Y lo mejor de todo, viene con una muñeca incluida, perfecta para sentarla en el coche, además de un tetero para cuidar y alimentar a la muñeca durante los paseos!`,
        imagenes: [
            {
                tipo: "imagen",
                url: "/producto17a.webp"
            }
        ],
        status: "disponible",
        colores: "Rosada",
        edad: "+3",
        categoria: "munecas",
        genero: "ninas"
    },
    {
        id: 18,
        titulo: "Maleta Doctor Unisex",
        precio: 17000,
        descripcion: `¡Inspira el juego creativo y el aprendizaje con nuestra Maleta de Doctor para Niñ@s! Este emocionante conjunto brinda a los pequeños médicos y médicas en ciernes la oportunidad de explorar el emocionante mundo de la medicina y el cuidado de la salud.

        La maleta está diseñada con colores vibrantes y detalles realistas que capturan la atención y fomentan la imaginación. Dentro de ella, encontrarás herramientas esenciales para el juego de roles médicos, como un estetoscopio de juguete, un termómetro y otros accesorios que les permiten a los niñ@s asumir el papel de médico o enfermero mientras atienden a sus pacientes imaginarios!`,
        imagenes: [
            {
                tipo: "imagen",
                url: "/producto18a.webp"
            },
            {
                tipo: "imagen",
                url: "/producto18b.webp"
            }
        ],
        status: "disponible",
        colores: "Azul, Rosada",
        edad: "+3",
        categoria: "doctor-cocina",
        genero: "unisex"
    },
    {
        id: 19,
        titulo: "Dragon a Control Remoto con Vapor y Huevos",
        precio: 17000,
        descripcion: `¡Desata la magia y la emoción con nuestro Dragón Control Remoto Interactivo! Este majestuoso ser escamoso trae consigo una experiencia llena de asombro y aventura.

        Con solo un toque en el control remoto, este dragón cobra vida. Sus movimientos fluidos y realistas te transportarán a un mundo de fantasía. Pero aquí está lo increíble: este dragón también lanza huevos por su cola y emite humo por su boca, añadiendo un toque de sorpresa y emoción a cada momento.
        
        Las luces brillantes en sus alas y cuerpo iluminan el camino mientras el dragón se desplaza. Este no es solo un juguete, es una experiencia sensorial y visual que lleva la imaginación a nuevas alturas!`,
        imagenes: [
            {
                tipo: "imagen",
                url: "/producto19a.webp" 
            }
        ],
        status: "disponible",
        colores: "Naranja, Verde",
        edad: "+6",
        categoria: "dinosaurios",
        genero: "ninos"
    },
    {
        id: 20,
        titulo: "Perro Colores con Movimiento y Sonido",
        precio: 17000,
        descripcion: `¡Trae a casa la alegría y la compañía con nuestro Perro con Movimiento! Este adorable compañero peludo está listo para llenar tu hogar de risas y diversión.

        Con movimientos realistas en su cuerpo y cola, este perro cobra vida en tus manos. ¡Cada movimiento y giro es una muestra de afecto y entusiasmo! Y no te pierdas su toque final: el perro también ladra con emoción, creando una experiencia de juego verdaderamente inmersiva.
        
        Este Perro funciona con 2 pilas AA, lo que lo convierte en un juguete listo para la diversión en cualquier momento!`,
        imagenes: [
            {
                tipo: "imagen",
                url: "/producto20a.webp" 
            },
            {
                tipo: "imagen",
                url: "/producto20b.webp" 
            },
            {
                tipo: "imagen",
                url: "/producto20c.webp" 
            },
            {
                tipo: "imagen",
                url: "/producto20d.webp"
            },
            {
                tipo: "video",
                url: "/producto20e.mp4"
            }
        ],
        status: "disponible",
        colores: "Rosado, Morado, Azul",
        edad: "+3",
        categoria: "mascotas",
        genero: "unisex"
    },
    {
        id: 21,
        titulo: "Trailer Dinosaurio con Vapor + Dinosaurios + Herramientas",
        precio: 17000,
        descripcion: `¡Embárcate en una emocionante aventura prehistórica con nuestro Trailer Dinosaurio! Este conjunto único combina la diversión del juego de dinosaurios con un toque de magia y acción.

        El trailer está diseñado con una cabeza de dinosaurio que emana vapor de agua por la boca, creando un efecto asombroso que transporta a los niños a tiempos antiguos. Pero eso no es todo: dentro del trailer, encontrarás 7 diferentes dinosaurios listos para explorar, cada uno con detalles realistas que estimulan la imaginación.
        
        Incluso mejor, este conjunto incluye una herramienta especial que permite a los niños armar y desarmar todo el trailer, fomentando habilidades de construcción y juego creativo!`,
        imagenes: [
            {
                tipo: "imagen",
                url: "/producto21a.webp" 
            },
            {
                tipo: "imagen",
                url: "/producto21b.webp" 
            },
            {
                tipo: "video",
                url: "/producto21c.mp4"
            }
        ],
        status: "disponible",
        colores: "Cafe",
        edad: "+3",
        categoria: "dinosaurios",
        genero: "ninos"
    },
    {
        id: 22,
        titulo: "Camioneta Jeep a Control Remoto Safari",
        precio: 17000,
        descripcion: `¡Embárcate en una emocionante expedición con nuestra Camioneta Jeep a Control Remoto Estilo Safari! Este vehículo excepcional combina la emoción de la aventura con el estilo icónico de un safari, brindándote una experiencia de juego llena de diversión y imaginación.

        Diseñada con detalles realistas y colores vibrantes que capturan la esencia del safari, esta camioneta Jeep a control remoto es más que un simple juguete. Equipada con batería recargable, simplemente conéctala para recargarla y estar lista para explorar nuevas tierras.
        
        El control remoto intuitivo te permite dirigir tu camioneta Jeep con facilidad, mientras te sumerges en una aventura llena de giros, curvas y emocionantes desafíos!`,
        imagenes: [
            {
                tipo: "imagen",
                url: "/producto22a.webp" 
            }
        ],
        status: "disponible",
        colores: "Safari",
        edad: "+6",
        categoria: "carros-control",
        genero: "ninos"
    },
    {
        id: 23,
        titulo: "Escabadora con Movimiento, Luces y Sonido",
        precio: 17000,
        descripcion: `¡Embárcate en una emocionante expedición con nuestra Camioneta Jeep a Control Remoto Estilo Safari! Este vehículo excepcional combina la emoción de la aventura con el estilo icónico de un safari, brindándote una experiencia de juego llena de diversión y imaginación.

        Diseñada con detalles realistas y colores vibrantes que capturan la esencia del safari, esta camioneta Jeep a control remoto es más que un simple juguete. Equipada con batería recargable, simplemente conéctala para recargarla y estar lista para explorar nuevas tierras.
        
        El control remoto intuitivo te permite dirigir tu camioneta Jeep con facilidad, mientras te sumerges en una aventura llena de giros, curvas y emocionantes desafíos!`,
        imagenes: [
            {
                tipo: "imagen",
                url: "/producto23a.webp" 
            },
            {
                tipo: "video",
                url: "/producto23b.mp4" 
            }
        ],
        status: "disponible",
        colores: "Amarilla",
        edad: "+3",
        categoria: "carros-impulso",
        genero: "unisex"
    },
    {
        id: 24,
        titulo: "Slime con Sorpresa de los Vengadores",
        precio: 17000,
        descripcion: `¡Doble diversión en un solo frasco con nuestro Frasco de Slime con Sorpresa de los Vengadores! Este emocionante paquete combina la satisfacción sensorial del slime con la emoción de desenterrar una sorpresa especial.

        Dentro del frasco, encontrarás una textura de slime suave y colorida que brinda una experiencia táctil única y relajante. Pero eso no es todo: ¡sumérgete en la emoción cuando descubras una sorpresa especial de los Vengadores en su interior! Este juguete también funciona como un llamativo llavero que podrás llevar contigo a donde quieras.`,
        imagenes: [
            {
                tipo: "imagen",
                url: "/producto24a.webp" 
            }
        ],
        status: "disponible",
        colores: "Surtidos (Thor, Spiderman, Capitan America, Iron Man, Hulk, Batman)",
        edad: "+3",
        categoria: "didacticos",
        genero: "ninos"
    },
    {
        id: 25,
        titulo: "Slime con Sorpresa de Mario Bros",
        precio: 17000,
        descripcion: `¡Doble diversión en un solo frasco con nuestro Frasco de Slime con Sorpresa de Mario Bros! Este emocionante paquete combina la satisfacción sensorial del slime con la emoción de desenterrar una sorpresa especial.

        Dentro del frasco, encontrarás una textura de slime suave y colorida que brinda una experiencia táctil única y relajante. Pero eso no es todo: ¡sumérgete en la emoción cuando descubras una sorpresa especial de Mario Bros en su interior! Este juguete también funciona como un llamativo llavero que podrás llevar contigo a donde quieras.`,
        imagenes: [
            {
                tipo: "imagen",
                url: "/producto25a.webp" 
            }
        ],
        status: "disponible",
        colores: "Surtidos (Mario, Luigi)",
        edad: "+3",
        categoria: "didacticos",
        genero: "unisex"
    },
    {
        id: 26,
        titulo: "Slime con Sorpresa de Paw Patrol",
        precio: 17000,
        descripcion: `¡Doble diversión en un solo frasco con nuestro Frasco de Slime con Sorpresa de Paw Patrol! Este emocionante paquete combina la satisfacción sensorial del slime con la emoción de desenterrar una sorpresa especial.

        Dentro del frasco, encontrarás una textura de slime suave y colorida que brinda una experiencia táctil única y relajante. Pero eso no es todo: ¡sumérgete en la emoción cuando descubras una sorpresa especial de Paw Patrol en su interior! Este juguete también funciona como un llamativo llavero que podrás llevar contigo a donde quieras.`,
        imagenes: [
            {
                tipo: "imagen",
                url: "/producto26a.webp" 
            }
        ],
        status: "disponible",
        colores: "Surtidos (Zuma, Marshall, Chase, Skay, Rubble)",
        edad: "+3",
        categoria: "didacticos",
        genero: "unisex"
    },
    {
        id: 29,
        titulo: "Slime con Sorpresa de Princesas Disney",
        precio: 17000,
        descripcion: `¡Doble diversión en un solo frasco con nuestro Frasco de Slime con Sorpresa de Princesas de Disney! Este emocionante paquete combina la satisfacción sensorial del slime con la emoción de desenterrar una sorpresa especial.

        Dentro del frasco, encontrarás una textura de slime suave y colorida que brinda una experiencia táctil única y relajante. Pero eso no es todo: ¡sumérgete en la emoción cuando descubras una sorpresa especial de Princesas de Disney en su interior! Este juguete también funciona como un llamativo llavero que podrás llevar contigo a donde quieras.`,
        imagenes: [
            {
                tipo: "imagen",
                url: "/producto29a.webp" 
            }
        ],
        status: "disponible",
        colores: "Surtidos (Sirenita, Blanca Nieves, Rapunzel, Cenicienta, Bella)",
        edad: "+3",
        categoria: "didacticos",
        genero: "ninas"
    },
    {
        id: 27,
        titulo: "Slime con Sorpresa de Princesas Grande",
        precio: 17000,
        descripcion: `¡Doble diversión en un solo frasco con nuestro Frasco de Slime con Sorpresa de Princesas! Este emocionante paquete combina la satisfacción sensorial del slime con la emoción de desenterrar una sorpresa especial.

        Dentro del frasco, encontrarás una textura de slime suave y colorida que brinda una experiencia táctil única y relajante. Pero eso no es todo: ¡sumérgete en la emoción cuando descubras una sorpresa especial de Princesas en su interior! Este juguete también funciona como un llamativo llavero que podrás llevar contigo a donde quieras.`,
        imagenes: [
            {
                tipo: "imagen",
                url: "/producto27a.webp" 
            }
        ],
        status: "disponible",
        colores: "Amarillo, Rosado, Verde, Rojo, Morado, Azul",
        edad: "+3",
        categoria: "didacticos",
        genero: "ninas"
    },
    {
        id: 28,
        titulo: "Slime con Sorpresa de Vengadores Grande",
        precio: 17000,
        descripcion: `¡Doble diversión en un solo frasco con nuestro Frasco de Slime con Sorpresa de Vengadores! Este emocionante paquete combina la satisfacción sensorial del slime con la emoción de desenterrar una sorpresa especial.

        Dentro del frasco, encontrarás una textura de slime suave y colorida que brinda una experiencia táctil única y relajante. Pero eso no es todo: ¡sumérgete en la emoción cuando descubras una sorpresa especial de Vengadores en su interior! Este juguete también funciona como un llamativo llavero que podrás llevar contigo a donde quieras.`,
        imagenes: [
            {
                tipo: "imagen",
                url: "/producto28a.webp" 
            }
        ],
        status: "disponible",
        colores: "Morado, Rojo, Rosado, Azul, Verde, Amarillo",
        edad: "+3",
        categoria: "didacticos",
        genero: "ninos"
    },
    {
        id: 30,
        titulo: "Bumble Bee Bailarin, Luces y Sonido",
        precio: 17000,
        descripcion: `¡Lleva la diversión a un nivel vibrante con nuestro Bumble Bee Bailarín! Este juguete encantador combina movimiento, luces y sonidos en una experiencia llena de alegría y entretenimiento.

        Observa con asombro mientras el Bumble Bee cobra vida con movimientos animados y cautivadores. Sus luces brillantes iluminan su camino mientras realiza sus pasos de baile únicos, y su sonido alegre añade una banda sonora emocionante a cada movimiento.
        
        Este Bumble Bee Bailarín es impulsado por 3 pilas AA.`,
        imagenes: [
            {
                tipo: "imagen",
                url: "/producto30a.webp" 
            },
            {
                tipo: "video",
                url: "/producto30b.mp4" 
            }
        ],
        status: "disponible",
        colores: "Amarillo",
        edad: "+3",
        categoria: "carros-impulso",
        genero: "ninos"
    },
    {
        id: 31,
        titulo: "Mesa Proyector + Tanque de Agua + 8 Rompecabezas + 12 Marcadores + Sellos",
        precio: 17000,
        descripcion: `¡Despierta la creatividad y la diversión con nuestro Set de Mesa Proyector y Actividades Todo en Uno! Este conjunto emocionante ofrece una amplia gama de experiencias interactivas y creativas, perfectas para horas de entretenimiento y aprendizaje.

        Con el proyector integrado, los niños podrán sumergirse en un mundo de imágenes y sonidos sorprendentes y emocionantes. El set incluye 12 marcadores que les permitirán crear obras maestras únicas, así como un tablero borrable para dar rienda suelta a su creatividad una y otra vez. Ademas, para una pausa refrescante, el set también incluye un tanque de agua con una copa para servirla, añadiendo un toque de realismo y diversión. Los 8 rompecabezas, 2 sellos con tinta y 4 discos de proyección ofrecen una amplia variedad de actividades para mantener a los niños comprometidos y estimulados!`,
        imagenes: [
            {
                tipo: "imagen",
                url: "/producto31a.webp" 
            },
            {
                tipo: "video",
                url: "/producto31b.mp4" 
            }
        ],
        status: "disponible",
        colores: "Amarillo",
        edad: "+3",
        categoria: "didacticos",
        genero: "unisex"
    },
    {
        id: 32,
        titulo: "Computador Interactivo Unisex",
        precio: 17000,
        descripcion: `¡Descubre el emocionante mundo del aprendizaje con nuestro Computador Interactivo, diseñado para preescolares, este juguete cautivante es más que un juego.

        Explora números del 1 al 10, el abecedario y palabras esenciales, operaciones matematicas con diversión interactiva. Con canciones animadas y actividades intuitivas de suma y resta, cada momento se convierte en una lección emocionante.
        
        Colores vibrantes y personajes adorables hacen que el aprendizaje sea divertido. Este computador educativo es una herramienta valiosa que fomenta el desarrollo cognitivo. ¡Cada toque en las teclas crea un futuro de conocimiento!`,
        imagenes: [
            {
                tipo: "imagen",
                url: "/producto32a.webp" 
            },
            {
                tipo: "imagen",
                url: "/producto32b.webp" 
            },
            {
                tipo: "imagen",
                url: "/producto32c.webp" 
            },
            {
                tipo: "imagen",
                url: "/producto32d.webp" 
            },
            {
                tipo: "video",
                url: "/producto32e.mp4" 
            }
        ],
        status: "disponible",
        colores: "Rosado, Azul",
        edad: "+3",
        categoria: "educativo",
        genero: "unisex"
    },
    {
        id: 33,
        titulo: "Patito Bailarin Burbujeante",
        precio: 17000,
        descripcion: `¡Conoce a nuestro Patito Bailarín Burbujeante, el compañero de diversión definitivo para tus pequeños! Este encantador juguete combina la magia de la música, el baile y las burbujas para brindar horas interminables de entretenimiento.

        Nuestro Patito Bailarín no solo se mueve al ritmo de melodías alegres, sino que también lanza burbujas mágicas que agregarán un toque de fantasía a cada juego. Imagina la emoción en los ojos de tus niños mientras ven cómo las burbujas flotan y giran a su alrededor!`,
        imagenes: [
            {
                tipo: "imagen",
                url: "/producto33a.webp" 
            },
            {
                tipo: "video",
                url: "/producto33b.mp4" 
            }
        ],
        status: "disponible",
        colores: "Amarillo",
        edad: "+3",
        categoria: "didacticos",
        genero: "unisex"
    },
    {
        id: 34,
        titulo: "Carro Loco de Pila",
        precio: 17000,
        descripcion: `¡Presentamos el Carro Loco de Pila, la máxima aventura sobre ruedas para los pequeños exploradores! Este carro innovador lleva la diversión a un nivel completamente nuevo con su capacidad de girar las llantas delanteras a 360 grados, lo que significa giros emocionantes y maniobras sorprendentes en todas direcciones.

        Con luces brillantes y sonidos cautivadores, el Carro Loco de Pila crea un espectáculo visual y auditivo que cautivará la imaginación de tus niños!`,
        imagenes: [
            {
                tipo: "imagen",
                url: "/producto34a.webp" 
            },
            {
                tipo: "imagen",
                url: "/producto34b.webp" 
            },
            {
                tipo: "video",
                url: "/producto34c.mp4"
            }
        ],
        status: "disponible",
        colores: "Azul, Naranja",
        edad: "+3",
        categoria: "carros-impulso",
        genero: "ninos"
    }
];


export default productosdb;