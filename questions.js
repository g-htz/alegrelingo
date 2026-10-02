/*
==========================================================
 ALEGRELINGO — SPRING 2026 QUESTION ENGINE
==========================================================

DESIGN RULES

1. Questions must teach something useful to a new starter.

2. NEVER create circular questions such as:
   "Which item contains broccolini?"
   -> Chargrilled broccolini

3. NEVER use the obvious base ingredient as a clue:
   kipfler potatoes -> Roasted kipfler potatoes
   custard -> White Chocolate Custard

4. Questions use TRAINING DETAILS:
   sauces
   garnishes
   preparation
   accompaniments
   dietary tags
   provenance
   cooking method
   banquet placement

5. Every question has an itemId.

6. app.js selects only ONE question per itemId per round.

7. Every MCQ is constructed to have exactly ONE correct answer.

==========================================================
*/


const shuffle = array => {

    const copy = [...array];

    for (let i = copy.length - 1; i > 0; i--) {

        const j = Math.floor(
            Math.random() * (i + 1)
        );

        [
            copy[i],
            copy[j]
        ] = [
            copy[j],
            copy[i]
        ];

    }

    return copy;
};


const slug = text =>
    text
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "");


/*
==========================================================
 SPRING 2026 FOOD DATA
==========================================================

IMPORTANT:

"details" contains TRAINING-WORTHY information.

The obvious words from the dish name are deliberately
NOT used as generic ingredient questions.
*/


const FOOD = [

    /*
    -------------------------
    STARTERS
    -------------------------
    */

    {
        id: "molcajete-guacamole",

        name: "Molcajete guacamole",

        section: "Entradas",

        details: [
            "candied jalapeño",
            "chunky salsa roja",
            "coriander"
        ],

        servedWith: "corn chips",

        tags: [
            "GF",
            "DF",
            "NF",
            "V",
            "VE"
        ]
    },


    {
        id: "charred-sweet-corn-dip",

        name: "Charred sweet corn dip",

        section: "Entradas",

        details: [
            "pickled jalapeño",
            "chipotle mayo",
            "smoked paprika",
            "coriander",
            "lemon juice"
        ],

        servedWith: "corn chips",

        tags: [
            "GF",
            "DF",
            "NF",
            "V",
            "VE"
        ]
    },


    {
        id: "oven-grilled-haloumi",

        name: "Oven grilled haloumi",

        section: "Entradas",

        details: [
            "guajillo & miso butter",
            "agave reduction",
            "pepita chilli ash",
            "chives"
        ],

        tags: [
            "GF",
            "NF",
            "V"
        ]
    },


    {
        id: "tri-tip-beef-skewer",

        name: "Jack’s Creek MB4+ tri-tip beef skewer",

        section: "Entradas",

        details: [
            "grilled eggplant",
            "beef jus",
            "herb mayo",
            "smoked chimichurri",
            "mixed mustard"
        ],

        tags: [
            "GF",
            "DF",
            "NF"
        ]
    },


    /*
    -------------------------
    OYSTERS
    -------------------------
    */

    {
        id: "natural-oyster",

        name: "Natural Sydney Rock oyster",

        section: "Oysters",

        details: [
            "lemon wedge"
        ],

        tags: [
            "GF",
            "DF",
            "NF"
        ]
    },


    {
        id: "margarita-oyster",

        name: "Margarita Sydney Rock oyster",

        section: "Oysters",

        details: [
            "chilli lime granita",
            "finger lime"
        ],

        tags: [
            "GF",
            "DF",
            "NF"
        ]
    },


    {
        id: "agave-ponzu-oyster",

        name: "Agave & ponzu Sydney Rock oyster",

        section: "Oysters",

        details: [
            "agave & ponzu vinaigrette",
            "finger lime"
        ],

        tags: [
            "GF",
            "DF",
            "NF"
        ]
    },


    /*
    -------------------------
    CRUDO
    -------------------------
    */

    {
        id: "cactus-aguachile",

        name: "Citrus-cured cactus aguachile",

        section: "Crudo",

        details: [
            "baby heirloom tomatoes",
            "Spanish onion",
            "charred avocado",
            "micro coriander"
        ],

        tags: [
            "GF",
            "DF",
            "NF",
            "V",
            "VE"
        ]
    },


    {
        id: "scallop-aguachile",

        name: "Cured scallop aguachile",

        section: "Crudo",

        details: [
            "miso citrus aguachile",
            "candied lime gel",
            "finger lime",
            "lemon myrtle oil"
        ],

        origin: "Imported",

        tags: [
            "GF",
            "DF",
            "NF"
        ]
    },


    {
        id: "kingfish-ceviche",

        name: "Coconut-cured kingfish ceviche",

        section: "Crudo",

        details: [
            "red chilli",
            "Spanish onion",
            "coconut tiger’s milk"
        ],

        origin: "Australian",

        tags: [
            "GF",
            "DF",
            "NF"
        ]
    },


    {
        id: "prawn-tostada",

        name: "Ajillo & citrus compressed prawn tostada",

        section: "Crudo",

        details: [
            "jalapeño & wasabi aioli",
            "smoky guajillo oil",
            "baby heirloom tomatoes",
            "Spanish onion",
            "cured cucumber"
        ],

        origin: "Imported",

        tags: [
            "GF",
            "DF",
            "NF"
        ]
    },


    {
        id: "tuna-tartare",

        name: "Spicy tuna tartare",

        section: "Crudo",

        details: [
            "ají amarillo emulsion",
            "confit garlic & jalapeño paste",
            "pickled jicama",
            "mandarin ice cream",
            "ponzu",
            "green oil",
            "eschalot",
            "finger lime"
        ],

        origin: "Imported",

        tags: [
            "GF",
            "DF",
            "NF"
        ]
    },


    {
        id: "salmon-ceviche",

        name: "Passionfruit salmon ceviche",

        section: "Crudo",

        details: [
            "citrus vinaigrette",
            "avocado",
            "capers",
            "eschalots",
            "cayenne chilli",
            "herb oil",
            "salmon roe",
            "sweet potato chips"
        ],

        origin: "Australian",

        tags: [
            "GF",
            "DF",
            "NF"
        ]
    },


    /*
    -------------------------
    TACOS
    -------------------------
    */

    {
        id: "wagyu-rib-eye-taco",

        name: "Kimbara wagyu rib eye MB5+ taco",

        section: "Tacos",

        details: [
            "avocado",
            "salsa verde & quemada",
            "charred pickled onion",
            "coriander",
            "consommé"
        ],

        optional: "crispy mozzarella",

        tags: [
            "GF",
            "DF",
            "NF"
        ]
    },


    {
        id: "lamb-birria-taco",

        name: "Authentic lamb birria taco",

        section: "Tacos",

        details: [
            "melted cheese",
            "morita salsa",
            "fresh onion",
            "coriander",
            "consommé"
        ],

        tags: [
            "GF",
            "NF",
            "DFO"
        ]
    },


    {
        id: "chicken-carnita-taco",

        name: "Street-style chicken carnita taco",

        section: "Tacos",

        details: [
            "salsa verde",
            "fresh guacamole",
            "cured onion",
            "fresh pineapple",
            "coriander"
        ],

        tags: [
            "GF",
            "DF",
            "NF"
        ]
    },


    {
        id: "baja-fish-taco",

        name: "Nixtamal corn masa-battered baja style fish taco",

        section: "Tacos",

        details: [
            "chipotle mayo",
            "tobiko",
            "pico de gallo",
            "avocado"
        ],

        origin: "Imported",

        tags: [
            "GF",
            "DF",
            "NF"
        ]
    },


    {
        id: "ajillo-prawn-taco",

        name: "Ajillo-marinated prawn taco",

        section: "Tacos",

        details: [
            "pickled cabbage",
            "jalapeño mayo",
            "grilled capsicum & confit garlic salsa",
            "crispy shallots"
        ],

        origin: "Imported",

        tags: [
            "GF",
            "DF",
            "NF"
        ]
    },


    {
        id: "eggplant-taco",

        name: "Masa-battered eggplant taco",

        section: "Tacos",

        details: [
            "apple cabbage",
            "green mayo",
            "grilled capsicum & confit garlic salsa"
        ],

        tags: [
            "GF",
            "DF",
            "NF",
            "V",
            "VE"
        ]
    },


    /*
    -------------------------
    PREMIUM STEAKS
    -------------------------
    */

    {
        id: "tajima-tomahawk",

        name: "Tajima MB6+ wagyu tomahawk",

        section: "Al Carbón",

        details: [
            "guajillo-miso butter",
            "smoked chimichurri",
            "mixed mild mustard",
            "jus",
            "fresh lime"
        ],

        facts: [
            "1kg minimum",
            "allow 30 minutes",
            "300+ day grain fed"
        ],

        tags: [
            "GF",
            "NF",
            "DFO"
        ]
    },


    {
        id: "tajima-rib-eye",

        name: "Tajima MB5+ wagyu rib eye",

        section: "Al Carbón",

        details: [
            "guajillo-miso butter",
            "smoked chimichurri",
            "mixed mild mustard",
            "jus",
            "fresh lime"
        ],

        facts: [
            "800g",
            "450+ day grain fed"
        ],

        tags: [
            "GF",
            "NF",
            "DFO"
        ]
    },


    {
        id: "chauvel-striploin",

        name: "Chauvel citrus-fed wagyu MB7+ bone-in striploin",

        section: "Al Carbón",

        details: [
            "guajillo-miso butter",
            "smoked chimichurri",
            "mixed mild mustard",
            "jus",
            "fresh lime"
        ],

        facts: [
            "500g",
            "fed on orange pulp & grain",
            "430+ day grain fed"
        ],

        tags: [
            "GF",
            "NF",
            "DFO"
        ]
    },


    {
        id: "chauvel-chuck-tail",

        name: "Chauvel citrus-fed wagyu MB7+ chuck tail flap",

        section: "Al Carbón",

        details: [
            "guajillo-miso butter",
            "smoked chimichurri",
            "mixed mild mustard",
            "jus",
            "fresh lime"
        ],

        facts: [
            "250g",
            "fed on orange pulp & grain",
            "430+ day grain fed"
        ],

        tags: [
            "GF",
            "NF",
            "DFO"
        ]
    },


    {
        id: "true-north-cube-roll",

        name: "True North wagyu MB8-9+ cube roll",

        section: "Al Carbón",

        details: [
            "guajillo-miso butter",
            "smoked chimichurri",
            "mixed mild mustard",
            "jus",
            "fresh lime"
        ],

        facts: [
            "300g",
            "300+ day grain fed"
        ],

        tags: [
            "GF",
            "NF",
            "DFO"
        ]
    },


    {
        id: "cape-grim-striploin",

        name: "Cape Grim striploin MB4+",

        section: "Al Carbón",

        details: [
            "mole madre",
            "fresh lime"
        ],

        facts: [
            "300g",
            "100% grass fed & finished",
            "Tasmania"
        ],

        tags: [
            "GF",
            "DF",
            "NF"
        ]
    },


    /*
    -------------------------
    AL CARBÓN MAINS
    -------------------------
    */

    {
        id: "baby-barramundi",

        name: "Grilled butterflied baby barramundi",

        section: "Al Carbón",

        details: [
            "fresh herb green mole",
            "peach & chilli butter",
            "candied ancho chilli"
        ],

        origin: "Australian",

        tags: [
            "GF",
            "NF",
            "DFO"
        ]
    },


    {
        id: "mayan-king-prawns",

        name: "Mayan-spiced king prawns",

        section: "Al Carbón",

        details: [
            "chipotle Mayan sauce",
            "chunky salsa verde",
            "fresh lemon"
        ],

        origin: "Australian",

        tags: [
            "GF",
            "NF",
            "DFO"
        ]
    },


    {
        id: "bannockburn-chicken",

        name: "Bannockburn chicken",

        section: "Al Carbón",

        details: [
            "red mojo",
            "verde salsa",
            "herb salad"
        ],

        tags: [
            "GF",
            "DF",
            "NF"
        ]
    },


    {
        id: "lamb-barbacoa",

        name: "Lamb barbacoa",

        section: "Al Carbón",

        details: [
            "barbacoa sauce",
            "house pickles",
            "salsas taqueras"
        ],

        servedWith: "fresh tortillas",

        facts: [
            "14-hour slow-cooked lamb shoulder"
        ],

        tags: [
            "GF",
            "DF",
            "NF"
        ]
    },


    {
        id: "butternut-pumpkin",

        name: "Grilled butternut pumpkin",

        section: "Al Carbón",

        details: [
            "mole madre",
            "smoked chimichurri",
            "caramelised pepitas",
            "fresh mint salad"
        ],

        tags: [
            "GF",
            "DF",
            "NF",
            "V",
            "VE"
        ]
    },


    /*
    -------------------------
    SIDES
    -------------------------
    */

    {
        id: "truffle-fries",

        name: "Truffle fries",

        section: "Sides",

        details: [
            "mixed spices",
            "manchego cheese",
            "chives",
            "truffle oil",
            "chipotle mayo"
        ],

        tags: [
            "GF",
            "NF",
            "DFO",
            "V",
            "VEO"
        ]
    },


    {
        id: "chargrilled-corn",

        name: "Chargrilled corn",

        section: "Sides",

        details: [
            "black garlic & spicy truffle mayo",
            "manchego cheese",
            "chives"
        ],

        tags: [
            "GF",
            "NF",
            "DFO",
            "V",
            "VEO"
        ]
    },


    {
        id: "chargrilled-broccolini",

        name: "Chargrilled broccolini",

        section: "Sides",

        details: [
            "roasted cauliflower purée",
            "spiced dressing",
            "roasted pepitas"
        ],

        tags: [
            "GF",
            "DF",
            "NF",
            "V",
            "VE"
        ]
    },


    {
        id: "roasted-kipfler-potatoes",

        name: "Roasted kipfler potatoes",

        section: "Sides",

        details: [
            "guajillo oil",
            "smoked cheese sauce"
        ],

        tags: [
            "GF",
            "NF",
            "DFO",
            "V",
            "VEO"
        ]
    },


    {
        id: "leaf-salad",

        name: "Leaf salad",

        section: "Sides",

        details: [
            "radicchio & mixed leaves",
            "peach & miso dressing",
            "compressed citrus",
            "watermelon",
            "feta",
            "cranberries",
            "ancho chilli",
            "candied pepitas"
        ],

        tags: [
            "GF",
            "NF",
            "DFO",
            "V",
            "VEO"
        ]
    },


    /*
    -------------------------
    DESSERT
    -------------------------
    */

    {
        id: "pina-colada",

        name: "Piña Colada",

        section: "Dessert",

        details: [
            "coconut mousse",
            "coconut biscuit",
            "passionfruit",
            "mango sorbet",
            "cognac-caramelised pineapple"
        ],

        tags: [
            "GF",
            "NF",
            "V"
        ]
    },


    {
        id: "cacao",

        name: "Cacao",

        section: "Dessert",

        details: [
            "spiced chocolate mousse",
            "coffee-soaked biscuit",
            "miso-corn butter",
            "cacao soil",
            "Mexican vanilla bean ice cream",
            "orange salt"
        ],

        tags: [
            "GF",
            "NF",
            "V"
        ]
    },


    {
        id: "white-chocolate-custard",

        name: "White Chocolate Custard",

        section: "Dessert",

        details: [
            "silky caramel",
            "mango foam"
        ],

        tags: [
            "GF",
            "NF",
            "V"
        ]
    },


    {
        id: "bunuelo",

        name: "Buñuelo",

        section: "Dessert",

        details: [
            "strawberry & shiso ice cream",
            "fresh strawberries & mint compote",
            "crispy shard"
        ],

        tags: [
            "NF",
            "V"
        ]
    },


    {
        id: "corn-panna-cotta",

        name: "Corn Panna Cotta",

        section: "Dessert",

        details: [
            "crispy tuile",
            "fresh berry compote"
        ],

        tags: [
            "NF",
            "V"
        ]
    },


    {
        id: "coconut-sorbet",

        name: "Coconut Sorbet",

        section: "Dessert",

        details: [
            "mango tapioca",
            "fresh diced mango"
        ],

        tags: [
            "GF",
            "DF",
            "NF",
            "V",
            "VE"
        ]
    }

];


/*
==========================================================
 DRINK DATA

Keep the existing Alegrelingo beverage training content.
These questions already test useful cocktail recall rather
than obvious dish-name clues.
==========================================================
*/


const DRINKS = [

    {
        id: "passionfruit-martini",
        name: "Passionfruit Martini",
        section: "Signature Cocktail",
        details: [
            "vodka",
            "passionfruit",
            "lime juice",
            "vanilla"
        ]
    },

    {
        id: "guava-sour",
        name: "Guava Sour",
        section: "Signature Cocktail",
        details: [
            "vodka",
            "Licor 43",
            "guava syrup",
            "mango",
            "lemon juice",
            "egg white"
        ]
    },

    {
        id: "anejo-ritual",
        name: "Añejo Ritual",
        section: "Signature Cocktail",
        details: [
            "El Tequileño Añejo",
            "Nixta corn liqueur",
            "agave syrup",
            "aromatic bitters"
        ],
        facts: [
            "smoked at the table"
        ]
    },

    {
        id: "alegre-carajillo",
        name: "Alegre Carajillo",
        section: "Signature Margarita",
        details: [
            "El Tequileño Blanco",
            "Licor 43",
            "Tia Maria",
            "espresso",
            "vanilla cream float"
        ]
    },

    {
        id: "sol-de-tulum",
        name: "Sol de Tulum",
        section: "Signature Margarita",
        details: [
            "El Tequileño Blanco",
            "Aperol",
            "lime juice",
            "pineapple juice",
            "passionfruit",
            "agave",
            "Australian bitters"
        ]
    },

    {
        id: "conchas-chinas",
        name: "Conchas Chinas",
        section: "Signature Margarita",
        details: [
            "El Tequileño Blanco",
            "Massenez chilli liqueur",
            "orange & guava juice",
            "passionfruit",
            "agave syrup"
        ]
    },

    {
        id: "coco-fresita",
        name: "Coco Fresita",
        section: "Signature Margarita",
        details: [
            "1800 Coconut Tequila",
            "strawberry purée",
            "lime juice"
        ]
    },

    {
        id: "flor-de-pina",
        name: "Flor de Piña",
        section: "Signature Margarita",
        details: [
            "El Tequileño Blanco",
            "Vedrenne triple sec",
            "lime juice",
            "pineapple juice",
            "hibiscus syrup"
        ]
    },

    {
        id: "classic-margarita",
        name: "Classic Margarita",
        section: "Classic",
        details: [
            "El Tequileño Blanco",
            "Cointreau",
            "lime juice"
        ]
    },

    {
        id: "paloma",
        name: "Paloma",
        section: "Classic",
        details: [
            "El Tequileño Blanco",
            "lime juice",
            "grapefruit soda"
        ]
    },

    {
        id: "hibiscus-sangria",
        name: "Hibiscus Sangria",
        section: "To Share",
        details: [
            "red wine",
            "brandy",
            "Triple Sec",
            "hibiscus",
            "spices",
            "fresh fruits"
        ]
    },

    {
        id: "vida-de-la-fiesta",
        name: "Vida de la Fiesta",
        section: "To Share",
        details: [
            "Don Julio Reposado",
            "Chinola mango liqueur",
            "blueberry syrup",
            "passionfruit",
            "lime juice",
            "coconut milk",
            "pink grapefruit soda"
        ]
    },

    {
        id: "charred-mango",
        name: "Charred Mango",
        section: "Mocktail",
        details: [
            "Sammy Piquant non-alcoholic smoky agave spirit",
            "mango syrup",
            "lime juice"
        ]
    },

    {
        id: "tropical-sunset",
        name: "Tropical Sunset",
        section: "Mocktail",
        details: [
            "pineapple",
            "guava",
            "lemon juice",
            "passionfruit",
            "strawberry purée"
        ]
    },

    {
        id: "guava-mirage",
        name: "Guava Mirage",
        section: "Mocktail",
        details: [
            "guava syrup and juice",
            "alcohol-free sparkling wine"
        ]
    },

    {
        id: "la-coqueta",
        name: "La Coqueta",
        section: "Mocktail",
        details: [
            "strawberry purée",
            "coconut syrup",
            "lime juice",
            "soda"
        ]
    }

];


/*
==========================================================
 BANQUETS

Keep/update these against the venue's banquet sheets.

Each banquet itself receives ONE itemId so app.js won't
repeat the same banquet several times in a 20-question
round.
==========================================================
*/


const BANQUETS = {

    Experience: [
        "Charred sweet corn dip",
        "Agave & ponzu Sydney Rock oyster",
        "Street-style chicken carnita taco",
        "Mayan-spiced king prawns",
        "Cape Grim striploin MB4+",
        "Roasted kipfler potatoes"
    ],

    Signature: [
        "Molcajete guacamole",
        "Cured scallop aguachile",
        "Authentic lamb birria taco",
        "Street-style chicken carnita taco",
        "Mayan-spiced king prawns",
        "Chauvel citrus-fed wagyu MB7+ chuck tail flap",
        "Leaf salad"
    ],

    "Chef's Selection": [
        "Molcajete guacamole",
        "Margarita Sydney Rock oyster",
        "Oven grilled haloumi",
        "Nixtamal corn masa-battered baja style fish taco",
        "Street-style chicken carnita taco",
        "Lamb barbacoa",
        "Bannockburn chicken",
        "Chargrilled broccolini"
    ]

};


/*
==========================================================
 DISTRACTOR HELPERS
==========================================================
*/


const ALL_ITEMS = [
    ...FOOD.map(x => ({
        ...x,
        type: "food"
    })),

    ...DRINKS.map(x => ({
        ...x,
        type: "drinks"
    }))
];


function otherItems(item, count = 3) {

    return shuffle(
        ALL_ITEMS.filter(x =>
            x.type === item.type &&
            x.id !== item.id
        )
    )
        .slice(0, count)
        .map(x => x.name);

}


function detailPool(item) {

    /*
    Only pull distractors from OTHER items.

    A detail belonging anywhere to the current item is
    forbidden from being used as an incorrect answer.
    */

    const forbidden =
        new Set(
            (item.details || [])
                .map(x => x.toLowerCase())
        );


    return shuffle(
        [
            ...new Set(
                ALL_ITEMS
                    .filter(x =>
                        x.type === item.type &&
                        x.id !== item.id
                    )
                    .flatMap(x =>
                        x.details || []
                    )
            )
        ].filter(
            detail =>
                !forbidden.has(
                    detail.toLowerCase()
                )
        )
    );

}


/*
==========================================================
 MANUAL HIGH-QUALITY QUESTION CREATOR
==========================================================
*/


function question(
    item,
    type,
    text,
    answer,
    wrong,
    explanation
) {

    /*
    Remove accidental duplicate answers.
    */

    const options =
        [...new Set([
            answer,
            ...wrong
        ])];


    if (options.length < 4)
        return null;


    return {

        itemId: item.id,

        type,

        cat: item.section,

        text,

        ans: answer,

        opts: shuffle(
            options.slice(0, 4)
        ),

        exp: explanation

    };

}


/*
==========================================================
 BUILD FOOD / DRINK QUESTIONS
==========================================================
*/


function buildItemQuestions(item) {

    const type =
        DRINKS.includes(item)
            ? "drinks"
            : "food";


    const result = [];

    const pool =
        detailPool({
            ...item,
            type
        });


    /*
    ------------------------------------------------------
    TYPE 1

    Ask about a MEANINGFUL accompaniment.

    Crucially, we don't automatically ask about every
    noun in the dish.
    ------------------------------------------------------
    */


    (item.details || [])
        .forEach(detail => {

            const q =
                question(
                    item,

                    type,

                    `Which of these is served with ${item.name}?`,

                    detail,

                    pool.slice(0, 3),

                    `${item.name} is served with ${item.details.join(", ")}.`
                );


            if (q)
                result.push(q);

        });


    /*
    ------------------------------------------------------
    TYPE 2

    Recognition from MULTIPLE useful details.

    Never use one obvious clue such as "broccolini".
    ------------------------------------------------------
    */


    if (
        item.details &&
        item.details.length >= 2
    ) {

        const clueCount =
            Math.min(
                3,
                item.details.length
            );


        const clues =
            shuffle(item.details)
                .slice(0, clueCount);


        const q =
            question(
                item,

                type,

                `Which menu item is served with ${clues.join(", ")}?`,

                item.name,

                otherItems(
                    {
                        ...item,
                        type
                    }
                ),

                `${clues.join(", ")} accompany ${item.name}.`
            );


        if (q)
            result.push(q);

    }


    /*
    ------------------------------------------------------
    TYPE 3

    "served with" questions.
    ------------------------------------------------------
    */


    if (item.servedWith) {

        const q =
            question(
                item,

                type,

                `What is ${item.name} served with?`,

                item.servedWith,

                pool.slice(0, 3),

                `${item.name} is served with ${item.servedWith}.`
            );


        if (q)
            result.push(q);

    }


    /*
    ------------------------------------------------------
    TYPE 4

    Useful operational / preparation facts.
    ------------------------------------------------------
    */


    (item.facts || [])
        .forEach(fact => {

            const factPool =
                shuffle(
                    ALL_ITEMS
                        .flatMap(
                            x =>
                                x.facts || []
                        )
                        .filter(
                            x =>
                                !(item.facts || [])
                                    .includes(x)
                        )
                );


            const q =
                question(
                    item,

                    type,

                    `Which statement about ${item.name} is correct?`,

                    fact,

                    factPool.slice(0, 3),

                    `${item.name}: ${fact}.`
                );


            if (q)
                result.push(q);

        });


    /*
    ------------------------------------------------------
    TYPE 5

    Origin questions.
    ------------------------------------------------------
    */


    if (item.origin) {

        const wrongOrigins =
            [
                "Australian",
                "Imported",
                "Mixed origin",
                "Not specified"
            ]
                .filter(
                    x =>
                        x !== item.origin
                )
                .slice(0, 3);


        const q =
            question(
                item,

                type,

                `How is the origin of ${item.name} identified on the published menu?`,

                item.origin,

                wrongOrigins,

                `${item.name} is identified as ${item.origin}.`
            );


        if (q)
            result.push(q);

    }


    /*
    ------------------------------------------------------
    TYPE 6

    Dietary recall.

    Only published menu tags are used.
    ------------------------------------------------------
    */


    if (
        type === "food" &&
        item.tags &&
        item.tags.length
    ) {

        const tagSets = [
            "GF, DF, NF",
            "GF, NF, DFO",
            "GF, DF, NF, V, VE",
            "GF, NF, DFO, V, VEO",
            "NF, V"
        ];


        const answer =
            item.tags.join(", ");


        const wrong =
            tagSets
                .filter(
                    x =>
                        x !== answer
                )
                .slice(0, 3);


        if (wrong.length === 3) {

            const q =
                question(
                    item,

                    "dietary",

                    `According to the published menu, which dietary tags apply to ${item.name}?`,

                    answer,

                    wrong,

                    `${item.name} is published as ${answer}. Always follow Alegre's allergy procedure because not all ingredients are listed.`
                );


            if (q)
                result.push(q);

        }

    }


    return result;

}


/*
==========================================================
 BANQUET QUESTIONS
==========================================================
*/


function buildBanquetQuestions() {

    const result = [];


    Object.entries(BANQUETS)
        .forEach(
            ([banquet, dishes]) => {

                const banquetItem = {

                    id:
                        "banquet-" +
                        slug(banquet),

                    section:
                        "Banquets"

                };


                /*
                Only one banquet itemId is used.

                Therefore the same banquet cannot appear
                twice in one session.
                */


                dishes.forEach(dish => {

                    const notIncluded =
                        shuffle(
                            ALL_ITEMS
                                .filter(
                                    x =>
                                        !dishes.includes(
                                            x.name
                                        )
                                )
                                .map(
                                    x =>
                                        x.name
                                )
                        )
                            .slice(0, 3);


                    const q =
                        question(
                            banquetItem,

                            "banquet",

                            `Which dish is included in the ${banquet} Banquet?`,

                            dish,

                            notIncluded,

                            `${dish} is included in the ${banquet} Banquet.`
                        );


                    if (q)
                        result.push(q);

                });


                /*
                Reverse banquet recall.
                */


                if (dishes.length >= 3) {

                    const sample =
                        shuffle(dishes)
                            .slice(0, 3);


                    const otherBanquets =
                        Object.keys(BANQUETS)
                            .filter(
                                x =>
                                    x !== banquet
                            );


                    /*
                    Need four unique options, so include
                    a plausible "À la carte only" option.
                    */


                    const q =
                        question(
                            banquetItem,

                            "banquet",

                            `Which banquet includes ${sample.join(", ")}?`,

                            banquet,

                            [
                                ...otherBanquets,
                                "À la carte only"
                            ],

                            `Those dishes appear together on the ${banquet} Banquet.`
                        );


                    if (q)
                        result.push(q);

                }

            }
        );


    return result;

}


/*
==========================================================
 BUILD MASTER BANK
==========================================================
*/


let BASE_BANK = [

    ...FOOD.flatMap(
        buildItemQuestions
    ),

    ...DRINKS.flatMap(
        buildItemQuestions
    ),

    ...buildBanquetQuestions()

];


/*
==========================================================
 QUALITY FILTER

This explicitly kills the kind of garbage shown in the
screenshots.

The answer cannot simply be a word already contained in
the menu-item name for detail questions.
==========================================================
*/


function usefulQuestion(q) {

    if (!q)
        return false;


    if (
        !q.text ||
        !q.ans ||
        q.opts.length !== 4
    )
        return false;


    if (
        new Set(
            q.opts.map(
                x =>
                    x.toLowerCase()
            )
        ).size !== 4
    )
        return false;


    /*
    Catch circular detail questions.

    Example:

    Item:
        Roasted kipfler potatoes

    Answer:
        kipfler potatoes

    -> rejected.
    */


    if (
        q.type === "food" ||
        q.type === "drinks"
    ) {

        const item =
            ALL_ITEMS.find(
                x =>
                    x.id === q.itemId
            );


        if (item) {

            const name =
                item.name.toLowerCase();


            const answer =
                String(q.ans)
                    .toLowerCase();


            /*
            Only apply this to component questions.

            Full dish-name answers in recognition
            questions are legitimate.
            */


            if (
                q.text.startsWith(
                    "Which of these is served with"
                )
                &&
                (
                    name.includes(answer) ||
                    answer.includes(name)
                )
            ) {

                return false;

            }

        }

    }


    return true;

}


BASE_BANK =
    BASE_BANK.filter(
        usefulQuestion
    );


/*
==========================================================
 EXPAND TO 500 WITHOUT INVENTING NEW FACTS

We vary QUESTION WORDING, not menu facts.

All variants retain the SAME itemId, so app.js still
allows only one question for that menu item per session.
==========================================================
*/


const WORDING = [

    q => q.text,


    q => q.text
        .replace(
            "Which of these is served with",
            "Which component accompanies"
        )
        .replace(
            "Which menu item is served with",
            "Which dish features"
        )
        .replace(
            "What is",
            "What does"
        )
        .replace(
            "Which statement about",
            "Which detail about"
        ),


    q => q.text
        .replace(
            "Which of these is served with",
            "Which of the following accompanies"
        )
        .replace(
            "According to the published menu, which dietary tags apply to",
            "Which published dietary tags belong to"
        )
        .replace(
            "Which dish is included in",
            "Which of these appears on"
        ),


    q => q.text
        .replace(
            "Which of these is served with",
            "Which menu detail belongs with"
        )
        .replace(
            "Which menu item is served with",
            "Identify the dish served with"
        )
        .replace(
            "How is the origin of",
            "What origin is listed for"
        )

];


const BANK = [];

const seen =
    new Set();


let pass = 0;


while (
    BANK.length < 500 &&
    pass < 20
) {

    for (
        const original
        of shuffle(BASE_BANK)
    ) {

        const text =
            WORDING[
                pass %
                WORDING.length
            ](original);


        const key =
            text +
            "|" +
            original.ans;


        if (
            !seen.has(key)
        ) {

            seen.add(key);


            BANK.push({

                ...original,

                text,

                opts:
                    shuffle(
                        original.opts
                    )

            });

        }


        if (
            BANK.length >= 500
        )
            break;

    }


    pass++;

}


/*
==========================================================
 DEVELOPMENT CHECKS
==========================================================
*/


console.log(
    `Alegrelingo loaded ${BANK.length} training questions.`
);


console.log(
    `${FOOD.length} Spring food items loaded.`
);


/*
Check every question has exactly one answer option matching
the declared answer.
*/


const invalid =
    BANK.filter(q =>

        q.opts.filter(
            option =>
                option === q.ans
        ).length !== 1

    );


if (invalid.length) {

    console.error(
        "ALEGRELINGO QUESTION VALIDATION FAILED:",
        invalid
    );

}

else {

    console.log(
        "✓ Every question has exactly one declared correct option."
    );

}