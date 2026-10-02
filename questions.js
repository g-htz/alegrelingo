 const items=[
['Charred sweet corn dip','food',['charred sweet corn','cotija cheese','sour cream','tortilla chips'],['V'],'Entradas'],
['Molcajete guacamole','food',['avocado','pico de gallo','coriander','lime','tortilla chips'],['VG','GF'],'Entradas'],
['Agave & ponzu oyster','food',['Sydney rock oyster','agave','ponzu'],['GF'],'Crudo'],
['Margarita oyster','food',['Sydney rock oyster','margarita dressing'],['GF'],'Crudo'],
['Campechana tostada','food',['seafood','tomato','avocado','tostada'],[],'Crudo'],
['Scallop verde','food',['scallop','verde dressing'],['GF'],'Crudo'],
['Tuna sashimi tostada','food',['tuna sashimi','tostada'],[],'Crudo'],
['Clásico ceviche','food',['market fish','citrus','chilli','coriander'],['GF'],'Crudo'],
['Oven grilled haloumi','food',['haloumi'],['V','GF'],'Entradas'],
['Street-style chicken carnita taco','food',['chicken carnita','tortilla'],[],'Tacos'],
['Authentic lamb birria taco','food',['lamb birria','tortilla','consomé'],[],'Tacos'],
['Baja style fish taco','food',['fish','tortilla'],[],'Tacos'],
['Mayan-spiced Skull Island tiger prawns','food',['Skull Island tiger prawns','Mayan spices'],['GF'],'Mar'],
['Cape Grim striploin','food',['Cape Grim striploin'],['GF'],'Parrilla'],
['Chauvel MB7+ chuck tail flap','food',['Chauvel MB7+ chuck tail flap'],['GF'],'Parrilla'],
['Lamb barbacoa','food',['slow-cooked lamb'],['GF'],'Parrilla'],
['Bannockburn chicken','food',['Bannockburn chicken'],['GF'],'Parrilla'],
['Roasted kipfler potatoes','food',['kipfler potatoes'],['VG','GF'],'Sides'],
['Ensalada verde','food',['green salad'],['VG','GF'],'Sides'],
['Chargrilled broccolini','food',['broccolini'],['VG','GF'],'Sides'],
['Truffle fries','food',['fries','truffle'],['V','GF'],'Sides'],
['Carlota Cake','food',['lime','cream','biscuit'],['V'],'Dessert'],
['White chocolate custard','food',['white chocolate','custard'],['V','GF'],'Dessert'],
['Deconstructed corn cheesecake','food',['corn','cheesecake'],['V'],'Dessert'],

['Passionfruit Martini','drinks',['vodka','passionfruit','lime juice','vanilla'],[],'Signature Cocktail'],
['Guava Sour','drinks',['vodka','Licor 43','guava syrup','mango','lemon juice','egg white'],[],'Signature Cocktail'],
['Añejo Ritual','drinks',['El Tequileño Añejo','Nixta corn liqueur','agave syrup','aromatic bitters','smoked at the table'],[],'Signature Cocktail'],
['Alegre Carajillo','drinks',['El Tequileño Blanco','Licor 43','Tia Maria','espresso','vanilla cream float'],[],'Signature Margarita'],
['Sol de Tulum','drinks',['El Tequileño Blanco','Aperol','lime juice','pineapple juice','passionfruit','agave','Australian bitters'],[],'Signature Margarita'],
['Conchas Chinas','drinks',['El Tequileño Blanco','Massenez chilli liqueur','orange & guava juice','passionfruit','agave syrup'],[],'Signature Margarita'],
['Coco Fresita','drinks',['1800 Coconut Tequila','strawberry purée','lime juice'],[],'Signature Margarita'],
['Flor de Piña','drinks',['El Tequileño Blanco','Vedrenne triple sec','lime juice','pineapple juice','hibiscus syrup'],[],'Signature Margarita'],
['Classic Margarita','drinks',['El Tequileño Blanco','Cointreau','lime juice'],[],'Classic'],
['Paloma','drinks',['El Tequileño Blanco','lime juice','grapefruit soda'],[],'Classic'],
['Hibiscus Sangria','drinks',['red wine','brandy','Triple Sec','hibiscus','spices','fresh fruits'],[],'To Share'],
['Vida de la Fiesta','drinks',['Don Julio Reposado','Chinola mango liqueur','blueberry syrup','passionfruit','lime juice','coconut milk','pink grapefruit soda'],[],'To Share'],
['Charred Mango','drinks',['Sammy Piquant non-alcoholic smoky agave spirit','mango syrup','lime juice'],[],'Mocktail'],
['Tropical Sunset','drinks',['pineapple','guava','lemon juice','passionfruit','strawberry purée'],[],'Mocktail'],
['Guava Mirage','drinks',['guava syrup and juice','alcohol-free sparkling wine'],[],'Mocktail'],
['La Coqueta','drinks',['strawberry purée','coconut syrup','lime juice','soda'],[],'Mocktail']
];

const banquets={
Experience:[
'Charred sweet corn dip',
'Agave & ponzu oyster',
'Campechana tostada',
'Street-style chicken carnita taco',
'Mayan-spiced Skull Island tiger prawns',
'Cape Grim striploin',
'Roasted kipfler potatoes',
'Carlota Cake'
],

Signature:[
'Molcajete guacamole',
'Scallop verde',
'Tuna sashimi tostada',
'Authentic lamb birria taco',
'Street-style chicken carnita taco',
'Mayan-spiced Skull Island tiger prawns',
'Chauvel MB7+ chuck tail flap',
'Roasted kipfler potatoes',
'Ensalada verde',
'White chocolate custard'
],

"Chef's Selection":[
'Molcajete guacamole',
'Margarita oyster',
'Clásico ceviche',
'Oven grilled haloumi',
'Baja style fish taco',
'Street-style chicken carnita taco',
'Lamb barbacoa',
'Bannockburn chicken',
'Chargrilled broccolini',
'Roasted kipfler potatoes',
'Deconstructed corn cheesecake'
]
};

const pick=a=>a[Math.floor(Math.random()*a.length)];

const shuffle=a=>[...a].sort(()=>Math.random()-.5);

const norm=x=>x
.toLowerCase()
.replace(/[’']/g,"'")
.trim();

const itemObjects=items.map((x,i)=>({
id:`item-${i}`,
name:x[0],
type:x[1],
ings:x[2],
tags:x[3],
section:x[4]
}));

function otherNames(type,name){
return shuffle(
itemObjects
.filter(x=>x.type===type&&x.name!==name)
.map(x=>x.name)
).slice(0,3);
}

function safeIngredientDistractors(item,answer){

/*
A distractor is only allowed when it is NOT another
ingredient belonging to the current dish.

This prevents questions from having two technically
correct answers.
*/

const forbidden=new Set(item.ings.map(norm));

forbidden.add(norm(answer));

const pool=[
...new Set(
itemObjects
.filter(x=>x.type===item.type&&x.id!==item.id)
.flatMap(x=>x.ings)
)
]
.filter(x=>!forbidden.has(norm(x)));

return shuffle(pool).slice(0,3);
}

function buildQuestions(){

let q=[];

itemObjects.forEach(item=>{

let {
id,
name,
type,
ings,
tags,
section
}=item;

if(ings.length){

ings.forEach((ing,j)=>{

let wrong=safeIngredientDistractors(item,ing);

if(wrong.length===3){

q.push({
itemId:id,
type,
cat:section,
text:`Which ingredient belongs to ${name}?`,
ans:ing,
opts:shuffle([ing,...wrong]),
exp:`${name} includes ${ings.join(', ')}.`
});

}

});

const descriptions=[
shuffle(ings).slice(0,Math.min(3,ings.length)),
shuffle(ings).slice(0,Math.min(2,ings.length))
];

descriptions.forEach(parts=>{

if(parts.length){

q.push({
itemId:id,
type,
cat:section,
text:`Which menu item is described by: ${parts.join(', ')}?`,
ans:name,
opts:shuffle([name,...otherNames(type,name)]),
exp:`Those components belong to ${name}.`
});

}

});

}

if(type==='food'&&tags.length){

tags.forEach(tag=>{

let candidates=shuffle(
itemObjects.filter(
x=>
x.type==='food' &&
x.id!==id &&
!x.tags.includes(tag)
)
)
.slice(0,3)
.map(x=>x.name);

if(candidates.length===3){

q.push({
itemId:id,
type:'dietary',
cat:'Dietary',
text:`According to the published menu tags, which item is tagged ${tag}?`,
ans:name,
opts:shuffle([name,...candidates]),
exp:`${name} is published with: ${tags.join(', ')}. Always follow venue allergy procedure.`
});

}

});

}

});

Object.entries(banquets).forEach(([b,arr])=>

arr.forEach(name=>{

let match=itemObjects.find(x=>x.name===name);

let itemId=match
?match.id
:`banquet-${b}-${name}`;

let others=shuffle(
Object.entries(banquets)
.filter(([k])=>k!==b)
.flatMap(([,v])=>v)
.filter(x=>!arr.includes(x))
).slice(0,3);

if(others.length===3){

q.push({
itemId,
type:'banquet',
cat:`${b} Banquet`,
text:`Which item appears on the ${b} Banquet?`,
ans:name,
opts:shuffle([name,...others]),
exp:`${name} is listed on the ${b} shared banquet.`
});

}

})

);

/*
Create wording variants so the overall bank remains
500 questions.

IMPORTANT:
All variants retain the SAME itemId.

That means the quiz engine can still guarantee that
one menu item appears only once during a session.
*/

const templates=[

t=>t,

t=>t
.replace(
'Which ingredient belongs to',
'What is an ingredient in'
)
.replace(
'Which menu item is described by:',
'Identify the item with'
)
.replace(
'According to the published menu tags, which item is tagged',
'Which published menu item carries the tag'
)
.replace(
'Which item appears on',
'Which dish is included in'
),

t=>t
.replace(
'Which ingredient belongs to',
'Which component is served with'
)
.replace(
'Which menu item is described by:',
'Match these components to a menu item:'
)
.replace(
'According to the published menu tags, which item is tagged',
'Which item is published as'
)
.replace(
'Which item appears on',
'Which menu item is part of'
)

];

let out=[];
let seen=new Set();

for(
let pass=0;
out.length<500;
pass++
){

for(const x of shuffle(q)){

let y={
...x,
text:templates[pass%templates.length](x.text),
opts:shuffle(x.opts)
};

let k=y.text+'|'+y.ans;

if(!seen.has(k)){

seen.add(k);

out.push(y);

}

if(out.length===500)break;

}

if(pass>20)break;

}

return out.slice(0,500);

}

const BANK=buildQuestions();