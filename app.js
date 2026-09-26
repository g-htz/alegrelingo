const items=[
// Food
['Molcajete guacamole','food',['candied jalapeño','chunky salsa roja','coriander','corn chips'],['GF','DF','NF','V','VE'],'Buen Provecho'],
['Charred sweet corn dip','food',['pickled jalapeño','chipotle mayo','smoked paprika','coriander','lemon juice','corn chips'],['GF','DF','NF','V','VE'],'Buen Provecho'],
['Oven grilled haloumi','food',['guajillo & miso butter','agave reduction','pepita chilli ash','chives'],['GF','NF','V'],'Buen Provecho'],
["Jack’s Creek MB4+ tri-tip skewer",'food',['grilled eggplant','beef jus','herb mayo','smoked chimichurri','mixed mustard'],['GF','DF','NF'],'Buen Provecho'],
['Grilled bone marrow','food',['spiced tortilla ash sauce','yuzu mayo','amarillo chilli emulsion','jalapeño','charred tostadas'],['GF','DF','NF'],'Buen Provecho'],
['Cactus aguachile','food',['citrus-cured cactus','baby heirloom tomatoes','Spanish onion','charred avocado','micro coriander'],['GF','DF','NF','V','VE'],'Crudo'],
['Scallop verde','food',['yuzu leche de tigre','compressed green grapes','jalapeño','kiwi','finger lime','bonito flakes','confit garlic oil'],['GF','DF','NF'],'Crudo'],
['Clásico ceviche','food',['cured kingfish','smoked leche de tigre','heirloom tomato','cucumber','torched avocado','onion','crispy corn','green oil'],['GF','DF','NF'],'Crudo'],
['Campechana tostada','food',['citrus-compressed octopus & prawns','jalapeño aioli','smoky guajillo oil','baby heirloom tomatoes','Spanish onion','cured cucumber'],['GF','DF','NF'],'Crudo'],
['Tuna carpaccio','food',['salsa macha','house-made ponzu','pickled eschalots','capers','salted cucumber','kosho-yuzu mayo','taro chips'],['GF','DF','NF'],'Crudo'],
['Passionfruit salmon ceviche','food',['citrus vinaigrette','avocado','capers','eschalots','cayenne chilli','herb oil','salmon roe','sweet potato chips'],['GF','DF','NF'],'Crudo'],
['Kimbara wagyu rib-eye taco','food',['avocado','salsa verde','crispy mozzarella & quemada','charred & pickled onions','coriander'],['GF','NF','DFO'],'Tacos'],
['Authentic lamb birria taco','food',['melted cheese','morita salsa','fresh onion','coriander','consommé'],['GF','NF','DFO'],'Tacos'],
['Street-style chicken carnita taco','food',['salsa verde','fresh guacamole','cured onion','fresh pineapple','coriander'],['GF','DF','NF'],'Tacos'],
['Baja style fish taco','food',['nixtamal corn masa-battered fish','chipotle mayo','tobiko','pico de gallo','avocado'],['GF','DF','NF'],'Tacos'],
['Gobernador taco','food',['ajillo-marinated prawns','pickled cabbage','crispy cheese','jalapeño mayo','crispy shallots'],['GF','NF','DFO'],'Tacos'],
['Masa-battered eggplant taco','food',['apple cabbage','green mayo','grilled capsicum','confit garlic salsa'],['GF','DF','V','VE'],'Tacos'],
['Cape Grim striploin MB2+','food',['mole madre','fresh lime'],['GF','DF','NF'],'Al Carbon'],
['Murray Cod','food',['guajillo jus','green & red peppercorns','crispy capers','burnt apple purée','fresh jalapeño & mint salad'],['GF','DF','NF'],'Al Carbon'],
['Mayan-spiced Skull Island tiger prawns','food',['chipotle Mayan sauce','chunky salsa verde','fresh lemon'],['GF','NF','DFO'],'Al Carbon'],
['Bannockburn chicken','food',['red mojo','verde salsa','herb salad'],['GF','DF','NF'],'Al Carbon'],
['Lamb barbacoa','food',['14-hour slow-cooked lamb shoulder','barbacoa sauce','house pickles','salsas taqueras','fresh tortillas'],['GF','DF','NF'],'Al Carbon'],
['Adobo rojo fire roasted lamb rack','food',['roasted celeriac purée','jalapeño labneh','pepita chilli ash'],['GF','DF','NF'],'Al Carbon'],
['Grilled butternut pumpkin','food',['mole madre','smoked chimichurri','caramelised pepitas','fresh mint salad'],['GF','DF','NF','V','VE'],'Al Carbon'],
['Truffle fries','food',['mixed spices','manchego cheese','chives','truffle oil','chipotle mayo'],['GF','NF','DFO','V','VEO'],'Acompañantes'],
['Chargrilled corn','food',['black garlic & spicy truffle mayo','manchego cheese','chives'],['GF','NF','V','VEO'],'Acompañantes'],
['Chargrilled broccolini','food',['roasted cauliflower purée','spiced dressing','roasted pepitas'],['GF','DF','NF','V','VE'],'Acompañantes'],
['Roasted kipfler potatoes','food',['guajillo oil','smoked cheese sauce'],['GF','NF','DFO','V','VEO'],'Acompañantes'],
['Ensalada verde','food',['lechuga','green beans','sliced onion','compressed watermelon','radish','charred jalapeño dressing','queso fresco'],['GF','NF','DFO','V','VEO'],'Acompañantes'],
['Deconstructed corn cheesecake','food',['corn ice-cream','corn husk meringue'],['GF','NF','V'],'Postre'],
['Spiced chocolate mousse','food',['coffee-soaked biscuit','miso-corn butter','cacao soil','Mexican vanilla bean ice cream','orange salt'],['GF','NF','V'],'Postre'],
['White chocolate custard','food',['silky caramel','mango foam'],['GF','NF','V'],'Postre'],
['Ancient churro','food',['blend of cheeses','chocolate mousse','truffle oil'],['NF','V'],'Postre'],
['Carlota Cake','food',['creamy lime-infused Maria biscuits','lemon curd','lime zest'],['NF','V'],'Postre'],
['Coconut sorbet','food',['coconut tapioca','coconut crisps','chocolate salsa'],['GF','DF','NF','V','VE'],'Postre'],
// Drinks
['Temptation','drinks',['Four Pillars Dry Gin','Bénédictine herbal liqueur','cucumber juice','rosemary syrup','lime juice','egg white'],[],'Signature Cocktail'],
['Paraiso Sour','drinks',['Belvedere Vodka','Licor 43','guava syrup','mango','lemon juice','egg white'],[],'Signature Cocktail'],
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
const banquets={Experience:['Charred sweet corn dip','Agave & ponzu oyster','Campechana tostada','Street-style chicken carnita taco','Mayan-spiced Skull Island tiger prawns','Cape Grim striploin','Roasted kipfler potatoes','Carlota Cake'],Signature:['Molcajete guacamole','Scallop verde','Tuna sashimi tostada','Authentic lamb birria taco','Street-style chicken carnita taco','Mayan-spiced Skull Island tiger prawns','Chauvel MB7+ chuck tail flap','Roasted kipfler potatoes','Ensalada verde','White chocolate custard'],"Chef's Selection":['Molcajete guacamole','Margarita oyster','Clásico ceviche','Oven grilled haloumi','Baja style fish taco','Street-style chicken carnita taco','Lamb barbacoa','Bannockburn chicken','Chargrilled broccolini','Roasted kipfler potatoes','Deconstructed corn cheesecake']};
const pick=a=>a[Math.floor(Math.random()*a.length)], shuffle=a=>[...a].sort(()=>Math.random()-.5); function otherNames(type,name){return shuffle(items.filter(x=>x[1]===type&&x[0]!==name).map(x=>x[0])).slice(0,3)}
function buildQuestions(){let q=[]; items.forEach(it=>{let [name,type,ings,tags,section]=it; if(ings.length){ings.slice(0,3).forEach(ing=>{let wrong=shuffle(items.filter(x=>x[1]===type&&x[0]!==name).flatMap(x=>x[2]).filter(x=>x!==ing)).slice(0,3);q.push({type,cat:section,text:`Which ingredient belongs to ${name}?`,ans:ing,opts:shuffle([ing,...wrong]),exp:`${name} includes ${ings.join(', ')}.`})}); q.push({type,cat:section,text:`Which menu item is described by: ${shuffle(ings).slice(0,3).join(', ')}?`,ans:name,opts:shuffle([name,...otherNames(type,name)]),exp:`Those components belong to ${name}.`});}
if(type==='food'&&tags.length){let tag=pick(tags);let candidates=shuffle(items.filter(x=>x[1]==='food'&&x[0]!==name&&!(x[3]||[]).includes(tag))).slice(0,3).map(x=>x[0]);if(candidates.length===3)q.push({type:'dietary',cat:'Dietary',text:`According to the published menu tags, which item is tagged ${tag}?`,ans:name,opts:shuffle([name,...candidates]),exp:`${name} is published with: ${tags.join(', ')}. Always follow venue allergy procedure.`})}});
Object.entries(banquets).forEach(([b,arr])=>arr.forEach(name=>{let others=shuffle(Object.entries(banquets).filter(([k])=>k!==b).flatMap(([,v])=>v).filter(x=>!arr.includes(x))).slice(0,3);if(others.length===3)q.push({type:'banquet',cat:`${b} Banquet`,text:`Which item appears on the ${b} Banquet?`,ans:name,opts:shuffle([name,...others]),exp:`${name} is listed on the ${b} shared banquet.`})}));
// generate variants until exactly 250, de-duplicating prompt+answer
let base=[...q], out=[], seen=new Set(); while(out.length<250){for(let x of shuffle(base)){let k=x.text+'|'+x.ans;if(!seen.has(k)){seen.add(k);out.push(x)} if(out.length===250)break} if(out.length<250){base=base.map(x=>({...x,text:x.text.replace('Which ingredient belongs to','What is an ingredient in').replace('Which menu item is described by:','Identify the item with').replace('Which item appears on','Which dish is included in')}));seen.clear()}}
return out.slice(0,250)}
const BANK=buildQuestions(); let mode='all',session=[],idx=0,correct=0,streak=0,sessionBest=0,answered=false; let saved=JSON.parse(localStorage.getItem('alegrelinguo')||'{"correct":0,"total":0,"best":0,"mastered":[]}');
const $=s=>document.querySelector(s), $$=s=>document.querySelectorAll(s); function show(id){$$('.screen').forEach(x=>x.classList.remove('active'));$('#'+id).classList.add('active')} function homeStats(){$('#learned').textContent=saved.mastered.length;$('#accuracy').textContent=saved.total?Math.round(saved.correct/saved.total*100)+'%':'—';$('#bestStreak').textContent=saved.best}
homeStats();$$('.modes button').forEach(b=>b.onclick=()=>{$$('.modes button').forEach(x=>x.classList.remove('selected'));b.classList.add('selected');mode=b.dataset.mode});$$('.modes button')[0].classList.add('selected');
$('#start').onclick=()=>{let pool=mode==='all'?BANK:BANK.filter(q=>q.type===mode);let n=Math.min(+$ ('#sessionLength').value,pool.length);session=shuffle(pool).slice(0,n);idx=correct=streak=sessionBest=0;show('quiz');render()};
function render(){answered=false;let q=session[idx];$('#progressText').textContent=`${idx+1} / ${session.length}`;$('#bar').style.width=`${idx/session.length*100}%`;$('#category').textContent=q.cat.toUpperCase();$('#difficulty').textContent=idx<session.length/3?'CORE':'RECALL';$('#question').textContent=q.text;$('#streak').textContent=streak;$('#feedback').classList.remove('show');let box=$('#answers');box.innerHTML='';q.opts.forEach((o,i)=>{let b=document.createElement('button');b.className='answer';b.innerHTML=`<i>${'ABCD'[i]}</i><span>${o}</span>`;b.onclick=()=>answer(b,o,q);box.appendChild(b)})}
function answer(btn,o,q){if(answered)return;answered=true;let ok=o===q.ans;saved.total++; if(ok){correct++;streak++;sessionBest=Math.max(sessionBest,streak);saved.correct++; if(!saved.mastered.includes(q.ans))saved.mastered.push(q.ans)}else streak=0;saved.best=Math.max(saved.best,streak,sessionBest);localStorage.setItem('alegrelinguo',JSON.stringify(saved));$$('.answer').forEach(b=>{b.disabled=true;if(b.querySelector('span').textContent===q.ans)b.classList.add('correct')});if(!ok)btn.classList.add('wrong');$('#feedbackTitle').textContent=ok?'¡Perfecto! ✓':`Not quite — ${q.ans}`;$('#explanation').textContent=q.exp;$('#feedback').classList.add('show');$('#streak').textContent=streak}
$('#next').onclick=()=>{idx++;idx<session.length?render():finish()}; function finish(){show('results');let pct=Math.round(correct/session.length*100);$('#score').textContent=pct+'%';$('#correctN').textContent=correct;$('#wrongN').textContent=session.length-correct;$('#sessionStreak').textContent=sessionBest;$('#resultTitle').textContent=pct>=90?'Floor ready. 🔥':pct>=75?'Strong shift.':'Keep drilling.';$('#resultCopy').textContent=pct>=90?'Excellent menu recall. Keep the details fresh before service.':pct>=75?'Good knowledge — another round will lock in the weaker details.':'Focus on the misses, then run another short session.';homeStats()}
$('#again').onclick=()=>show('home');$('#quit').onclick=()=>show('home');$('#reset').onclick=()=>{if(confirm('Reset all Alegrelinguo progress?')){localStorage.removeItem('alegrelinguo');saved={correct:0,total:0,best:0,mastered:[]};homeStats()}};
console.log(`Alegrelinguo loaded with ${BANK.length} questions.`)
