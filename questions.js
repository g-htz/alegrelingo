const items=[
// Spring 2026 food menu — rebuilt from Alegre's published Spring menu PDF
['Molcajete guacamole','food',['candied jalapeño','chunky salsa roja','coriander','corn chips'],['GF','DF','NF','V','VE'],'Buen Provecho'],
['Charred sweet corn dip','food',['pickled jalapeño','chipotle mayo','smoked paprika','coriander','lemon juice','corn chips'],['GF','DF','NF','V','VE'],'Buen Provecho'],
['Oven grilled haloumi','food',['guajillo & miso butter','agave reduction','pepita chilli ash','chives'],['GF','NF','V'],'Buen Provecho'],
["Jack’s Creek MB4+ tri-tip beef skewer",'food',['grilled eggplant','beef jus','herb mayo','smoked chimichurri','mixed mustard'],['GF','DF','NF'],'Buen Provecho'],
['Sydney Rock oyster — Natural','food',['lemon wedge'],['GF','DF','NF'],'Oysters'],
['Sydney Rock oyster — Margarita','food',['chilli lime granita','finger lime'],['GF','DF','NF'],'Oysters'],
['Sydney Rock oyster — Agave & ponzu','food',['agave & ponzu vinaigrette','finger lime'],['GF','DF','NF'],'Oysters'],
['Citrus-cured cactus aguachile','food',['baby heirloom tomatoes','Spanish onion','charred avocado','micro coriander'],['GF','DF','NF','V','VE'],'Crudo'],
['Cured scallop aguachile','food',['miso citrus aguachile','candied lime gel','finger lime','lemon myrtle oil'],['GF','DF','NF'],'Crudo'],
['Coconut-cured kingfish ceviche','food',['red chilli','Spanish onion','coconut tiger’s milk'],['GF','DF','NF'],'Crudo'],
['Ajillo & citrus compressed prawn tostada','food',['jalapeño & wasabi aioli','smoky guajillo oil','baby heirloom tomatoes','Spanish onion','cured cucumber'],['GF','DF','NF'],'Crudo'],
['Spicy tuna tartare','food',['ají amarillo emulsion','confit garlic & jalapeño paste','pickled jicama','mandarin ice cream','ponzu','green oil','eschalot','finger lime'],['GF','DF','NF'],'Crudo'],
['Passionfruit salmon ceviche','food',['citrus vinaigrette','avocado','capers','eschalots','cayenne chilli','herb oil','salmon roe','sweet potato chips'],['GF','DF','NF'],'Crudo'],
['Kimbara wagyu rib eye taco','food',['avocado','salsa verde & quemada','charred pickled onion','coriander','consommé'],['GF','DF','NF'],'Tacos'],
['Authentic lamb birria taco','food',['melted cheese','morita salsa','fresh onion','coriander','consommé'],['GF','NF','DFO'],'Tacos'],
['Street-style chicken carnita taco','food',['salsa verde','fresh guacamole','cured onion','fresh pineapple','coriander'],['GF','DF','NF'],'Tacos'],
['Baja style fish taco','food',['nixtamal corn masa-battered fish','chipotle mayo','tobiko','pico de gallo','avocado'],['GF','DF','NF'],'Tacos'],
['Ajillo prawn taco','food',['ajillo-marinated prawns','pickled cabbage','jalapeño mayo','grilled capsicum & confit garlic salsa','crispy shallots'],['GF','DF','NF'],'Tacos'],
['Masa-battered eggplant taco','food',['apple cabbage','green mayo','grilled capsicum & confit garlic salsa'],['GF','DF','NF','V','VE'],'Tacos'],
['Premium wagyu tomahawk Tajima MB6+','food',['guajillo-miso butter','smoked chimichurri','mixed mild mustard','jus','fresh lime'],['GF','NF','DFO'],'Al Carbón — Steak'],
['Premium 800g wagyu rib eye Tajima MB5+','food',['guajillo-miso butter','smoked chimichurri','mixed mild mustard','jus','fresh lime'],['GF','NF','DFO'],'Al Carbón — Steak'],
['Premium 500g bone-in striploin Chauvel MB7+','food',['guajillo-miso butter','smoked chimichurri','mixed mild mustard','jus','fresh lime'],['GF','NF','DFO'],'Al Carbón — Steak'],
['Premium 250g chuck tail flap Chauvel MB7+','food',['guajillo-miso butter','smoked chimichurri','mixed mild mustard','jus','fresh lime'],['GF','NF','DFO'],'Al Carbón — Steak'],
['Premium 300g cube roll True North MB8-9+','food',['guajillo-miso butter','smoked chimichurri','mixed mild mustard','jus','fresh lime'],['GF','NF','DFO'],'Al Carbón — Steak'],
['300g Cape Grim striploin MB4+','food',['mole madre','fresh lime'],['GF','DF','NF'],'Al Carbón — Steak'],
['Grilled butterflied baby barramundi','food',['fresh herb green mole','peach & chilli butter','candied ancho chilli'],['GF','NF','DFO'],'Al Carbón'],
['Mayan-spiced king prawns','food',['chipotle Mayan sauce','chunky salsa verde','fresh lemon'],['GF','NF','DFO'],'Al Carbón'],
['Bannockburn chicken','food',['red mojo','verde salsa','herb salad'],['GF','DF','NF'],'Al Carbón'],
['Lamb barbacoa','food',['14-hour slow-cooked lamb shoulder','barbacoa sauce','house pickles','salsas taqueras','fresh tortillas'],['GF','DF','NF'],'Al Carbón'],
['Grilled butternut pumpkin','food',['mole madre','smoked chimichurri','caramelised pepitas','fresh mint salad'],['GF','DF','NF','V','VE'],'Al Carbón'],
['Truffle fries','food',['mixed spices','manchego cheese','chives','truffle oil','chipotle mayo'],['GF','NF','DFO','V','VEO'],'Acompañantes'],
['Chargrilled corn','food',['black garlic & spicy truffle mayo','manchego cheese','chives'],['GF','NF','DFO','V','VEO'],'Acompañantes'],
['Chargrilled broccolini','food',['roasted cauliflower purée','spiced dressing','roasted pepitas'],['GF','DF','NF','V','VE'],'Acompañantes'],
['Roasted kipfler potatoes','food',['guajillo oil','smoked cheese sauce'],['GF','NF','DFO','V','VEO'],'Acompañantes'],
['Leaf salad','food',['radicchio & mixed leaves','peach & miso dressing','compressed citrus','watermelon','feta','cranberries','ancho chilli','candied pepitas'],['GF','NF','DFO','V','VEO'],'Acompañantes'],
['Piña Colada','food',['coconut mousse','coconut biscuit','passionfruit','mango sorbet','cognac-caramelised pineapple'],['GF','NF','V'],'Postre'],
['Cacao','food',['spiced chocolate mousse','coffee-soaked biscuit','miso-corn butter','cacao soil','Mexican vanilla bean ice cream','orange salt'],['GF','NF','V'],'Postre'],
['White Chocolate Custard','food',['silky caramel','mango foam'],['GF','NF','V'],'Postre'],
['Buñuelo','food',['strawberry & shiso ice cream','fresh strawberries & mint compote','crispy shard'],['NF','V'],'Postre'],
['Corn Panna Cotta','food',['crispy tuile','fresh berry compote'],['NF','V'],'Postre'],
['Coconut Sorbet','food',['mango tapioca','fresh diced mango'],['GF','DF','NF','V','VE'],'Postre'],
// Current Spring beverage menu — sourced from WEB-BEV-MENU-SPRING.pdf
['Temptation', 'drinks', ['Four Pillars Dry Gin', 'Bénédictine herbal liqueur', 'cold-pressed cucumber juice', 'house-made rosemary syrup', 'fresh lime juice', 'egg white'], [], 'Signature Cocktail'],
['Paraíso Sour', 'drinks', ['Belvedere Vodka', 'Licor 43', 'guava syrup', 'mango juice', 'lemon juice', 'egg white'], [], 'Signature Cocktail'],
['Añejo Ritual', 'drinks', ['El Tequileño Añejo', 'Nixta corn liqueur', 'agave syrup', 'Australian bitters', 'Fee Brothers Old Fashioned bitters', 'smoked at the table'], [], 'Signature Cocktail'],
['Alegre en Tulum', 'drinks', ['jalapeño-infused El Tequileño Blanco', 'cold-pressed watermelon juice', 'fresh lime juice', 'Monin watermelon syrup', 'mint-infused sugar syrup'], [], 'Signature Margarita'],
['Mango Picante', 'drinks', ['El Tequileño Blanco', 'Massenez Chilli Liqueur', 'mango purée', 'mango juice', 'fresh lime juice'], [], 'Signature Margarita'],
['Fresas y Crema', 'drinks', ['El Tequileño Blanco', 'Cazcabel Coconut Tequila', 'strawberry purée', 'coconut cream', 'fresh lime juice', 'salted cream topping', 'served frozen'], [], 'Signature Margarita'],
['Ola Dorada', 'drinks', ['El Tequileño Blanco', 'Aperol', 'fresh lime juice', 'pineapple juice', 'fresh passionfruit', 'agave', 'Australian bitters'], [], 'Signature Margarita'],
['Flor de Piña', 'drinks', ['El Tequileño Blanco', 'Vedrenne triple sec', 'fresh lime juice', 'pineapple juice', 'house-made hibiscus syrup'], [], 'Signature Margarita'],
['Margarita', 'drinks', ['El Tequileño Blanco', 'Cointreau', 'lime juice'], [], 'Classic'],
['Paloma', 'drinks', ['El Tequileño Blanco', 'lime juice', 'grapefruit soda'], [], 'Classic'],
['Hibiscus Sangria', 'drinks', ['red wine', 'brandy', 'Triple Sec', 'hibiscus', 'spices', 'fresh fruits'], [], 'To Share'],
['Vida de la Fiesta', 'drinks', ['Don Julio Reposado', 'Chinola mango liqueur', 'blueberry syrup', 'fresh passionfruit', 'fresh lime juice', 'coconut milk', 'Fever Tree Pink Grapefruit soda'], [], 'To Share'],
['Mango de Fuego', 'drinks', ['Barnes & Brown non-alcoholic agave spirit', 'mango purée', 'mango juice', 'fresh lime juice'], [], 'Mocktail'],
['Tropical Sunset', 'drinks', ['pineapple juice', 'guava juice', 'lemon juice', 'fresh passionfruit', 'house-made strawberry purée'], [], 'Mocktail'],
['Guava Mirage', 'drinks', ['guava syrup', 'guava juice', 'alcohol-free sparkling wine'], [], 'Mocktail'],
['La Coqueta', 'drinks', ['house-made strawberry purée', 'Monin coconut syrup', 'fresh lime juice', 'soda'], [], 'Mocktail']
];
const banquets={'Experience': ['Charred sweet corn dip', 'Sydney Rock oyster — Agave & ponzu', 'Ajillo & citrus compressed prawn tostada', 'Street-style chicken carnita taco', 'Mayan-spiced king prawns', '300g Cape Grim striploin MB4+', 'Roasted kipfler potatoes', 'Piña Colada'], 'Signature': ['Molcajete guacamole', 'Cured scallop aguachile', 'Spicy tuna tartare', 'Authentic lamb birria taco', 'Street-style chicken carnita taco', 'Mayan-spiced king prawns', 'Premium 250g chuck tail flap Chauvel MB7+', 'Roasted kipfler potatoes', 'Leaf salad', 'White Chocolate Custard'], "Chef's Selection": ['Molcajete guacamole', 'Sydney Rock oyster — Margarita', 'Coconut-cured kingfish ceviche', 'Oven grilled haloumi', 'Baja style fish taco', 'Street-style chicken carnita taco', 'Lamb barbacoa', 'Bannockburn chicken', 'Chargrilled broccolini', 'Roasted kipfler potatoes', 'Cacao']};
const pick=a=>a[Math.floor(Math.random()*a.length)], shuffle=a=>[...a].sort(()=>Math.random()-.5);
const norm=x=>x.toLowerCase().replace(/[’']/g,"'").trim();

const SPRING_NEW_NAMES = new Set(['Sydney Rock oyster — Natural', 'Sydney Rock oyster — Margarita', 'Sydney Rock oyster — Agave & ponzu', 'Cured scallop aguachile', 'Coconut-cured kingfish ceviche', 'Ajillo & citrus compressed prawn tostada', 'Spicy tuna tartare', 'Ajillo prawn taco', 'Premium wagyu tomahawk Tajima MB6+', 'Premium 800g wagyu rib eye Tajima MB5+', 'Premium 500g bone-in striploin Chauvel MB7+', 'Premium 250g chuck tail flap Chauvel MB7+', 'Premium 300g cube roll True North MB8-9+', 'Grilled butterflied baby barramundi', 'Leaf salad', 'Piña Colada', 'Buñuelo', 'Corn Panna Cotta', 'Alegre en Tulum', 'Mango Picante', 'Fresas y Crema', 'Ola Dorada', 'Mango de Fuego']);
const itemObjects=items.map((x,i)=>({id:`item-${i}`,name:x[0],type:x[1],ings:x[2],tags:x[3],section:x[4]}));
function otherNames(type,name){return shuffle(itemObjects.filter(x=>x.type===type&&x.name!==name).map(x=>x.name)).slice(0,3)}
function safeIngredientDistractors(item,answer){
  // A distractor is allowed only if it is NOT anywhere in the current dish.
  const forbidden=new Set(item.ings.map(norm)); forbidden.add(norm(answer));
  const pool=[...new Set(itemObjects.filter(x=>x.type===item.type&&x.id!==item.id).flatMap(x=>x.ings))]
    .filter(x=>!forbidden.has(norm(x)));
  return shuffle(pool).slice(0,3);
}
function buildQuestions(){let q=[];
 itemObjects.forEach(item=>{let {id,name,type,ings,tags,section}=item;
  if(ings.length){
   ings.forEach((ing,j)=>{let wrong=safeIngredientDistractors(item,ing);if(wrong.length===3)q.push({itemId:id,type,cat:section,text:`Which ingredient belongs to ${name}?`,ans:ing,opts:shuffle([ing,...wrong]),exp:`${name} includes ${ings.join(', ')}.`})});
   const descriptions=[shuffle(ings).slice(0,Math.min(3,ings.length)),shuffle(ings).slice(0,Math.min(2,ings.length))];
   descriptions.forEach(parts=>{if(parts.length)q.push({itemId:id,type,cat:section,text:`Which menu item is described by: ${parts.join(', ')}?`,ans:name,opts:shuffle([name,...otherNames(type,name)]),exp:`Those components belong to ${name}.`})});
  }
  if(type==='food'&&tags.length){tags.forEach(tag=>{let candidates=shuffle(itemObjects.filter(x=>x.type==='food'&&x.id!==id&&!x.tags.includes(tag))).slice(0,3).map(x=>x.name);if(candidates.length===3)q.push({itemId:id,type:'dietary',cat:'Dietary',text:`According to the published menu tags, which item is tagged ${tag}?`,ans:name,opts:shuffle([name,...candidates]),exp:`${name} is published with: ${tags.join(', ')}. Always follow venue allergy procedure.`})})}
 });
 Object.entries(banquets).forEach(([b,arr])=>arr.forEach(name=>{let match=itemObjects.find(x=>x.name===name);let itemId=match?match.id:`banquet-${b}-${name}`;let others=shuffle(Object.entries(banquets).filter(([k])=>k!==b).flatMap(([,v])=>v).filter(x=>!arr.includes(x))).slice(0,3);if(others.length===3)q.push({itemId,type:'banquet',cat:`${b} Banquet`,text:`Which item appears on the ${b} Banquet?`,ans:name,opts:shuffle([name,...others]),exp:`${name} is listed on the ${b} shared banquet.`})}));
 // Add wording variants to retain a 500-question bank; sessions still enforce unique itemId.
 const templates=[
  t=>t,
  t=>t.replace('Which ingredient belongs to','What is an ingredient in').replace('Which menu item is described by:','Identify the item with').replace('According to the published menu tags, which item is tagged','Which published menu item carries the tag').replace('Which item appears on','Which dish is included in'),
  t=>t.replace('Which ingredient belongs to','Which component is served with').replace('Which menu item is described by:','Match these components to a menu item:').replace('According to the published menu tags, which item is tagged','Which item is published as').replace('Which item appears on','Which menu item is part of')
 ];
 let out=[],seen=new Set(); for(let pass=0;out.length<500;pass++){for(const x of shuffle(q)){let y={...x,text:templates[pass%templates.length](x.text),opts:shuffle(x.opts)};let k=y.text+'|'+y.ans;if(!seen.has(k)){seen.add(k);out.push(y)}if(out.length===500)break} if(pass>20)break}
 return out.slice(0,500)
}
const BANK=buildQuestions().map(q=>({...q, springNew: itemObjects.some(i=>i.id===q.itemId && SPRING_NEW_NAMES.has(i.name))}));
