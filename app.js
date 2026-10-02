let mode='all';

let session=[];

let idx=0;

let correct=0;

let streak=0;

let sessionBest=0;

let answered=false;


/*
Canonical storage key is now Alegrelingo.

The legacy key is retained ONLY so existing users don't
lose their saved progress after the spelling correction.
*/

const STORAGE_KEY='alegrelingo';

const LEGACY_STORAGE_KEY='alegrelinguo';


let saved=JSON.parse(
localStorage.getItem(STORAGE_KEY)
||
localStorage.getItem(LEGACY_STORAGE_KEY)
||
'{"correct":0,"total":0,"best":0,"mastered":[]}'
);


/*
Automatically migrate existing Alegrelinguo progress
to Alegrelingo.
*/

if(
!localStorage.getItem(STORAGE_KEY)
&&
localStorage.getItem(LEGACY_STORAGE_KEY)
){

localStorage.setItem(
STORAGE_KEY,
JSON.stringify(saved)
);

}


const $=s=>document.querySelector(s);

const $$=s=>document.querySelectorAll(s);


function show(id){

$$('.screen').forEach(
x=>x.classList.remove('active')
);

$('#'+id).classList.add('active');

}


function homeStats(){

$('#learned').textContent=
saved.mastered.length;

$('#accuracy').textContent=
saved.total
?Math.round(saved.correct/saved.total*100)+'%'
:'—';

$('#bestStreak').textContent=
saved.best;

}


homeStats();


$$('.modes button').forEach(
b=>b.onclick=()=>{

$$('.modes button').forEach(
x=>x.classList.remove('selected')
);

b.classList.add('selected');

mode=b.dataset.mode;

}
);


$$('.modes button')[0]
.classList.add('selected');


/*
=========================================================
START SESSION
=========================================================

IMPORTANT:

We DO NOT simply choose 20 random questions.

Questions are first grouped by itemId.

Only ONE question is selected from each itemId.

Therefore a user cannot receive:

Truffle Fries ingredients

and later

Truffle Fries dietary

during the same session.
*/


$('#start').onclick=()=>{

let pool=
mode==='all'
?BANK
:BANK.filter(q=>q.type===mode);


let requested=
+$('#sessionLength').value;


/*
Randomise the entire pool first.
*/

let byItem=new Map();


shuffle(pool).forEach(q=>{

/*
The first question encountered for each menu item wins.

Every subsequent question for the same itemId is ignored
for this session.
*/

if(!byItem.has(q.itemId)){

byItem.set(
q.itemId,
q
);

}

});


let unique=[
...byItem.values()
];


/*
Never exceed the number of genuinely unique menu items.

This means MAX UNIQUE ITEMS will not manufacture repeated
dishes merely to reach 500.
*/

let n=Math.min(
requested,
unique.length
);


session=
shuffle(unique)
.slice(0,n);


idx=0;

correct=0;

streak=0;

sessionBest=0;


show('quiz');

render();

};


/*
=========================================================
RENDER QUESTION
=========================================================
*/


function render(){

answered=false;


let q=session[idx];


$('#progressText').textContent=
`${idx+1} / ${session.length}`;


$('#bar').style.width=
`${idx/session.length*100}%`;


$('#category').textContent=
q.cat.toUpperCase();


$('#difficulty').textContent=
idx<session.length/3
?'CORE'
:'RECALL';


$('#question').textContent=
q.text;


$('#streak').textContent=
streak;


$('#feedback')
.classList.remove('show');


let box=$('#answers');

box.innerHTML='';


q.opts.forEach((o,i)=>{

let b=document.createElement('button');

b.className='answer';

b.innerHTML=
`<i>${'ABCD'[i]}</i><span>${o}</span>`;


b.onclick=()=>answer(
b,
o,
q
);


box.appendChild(b);

});

}


/*
=========================================================
ANSWER QUESTION
=========================================================
*/


function answer(btn,o,q){

if(answered)return;


answered=true;


let ok=
o===q.ans;


saved.total++;


if(ok){

correct++;

streak++;

sessionBest=Math.max(
sessionBest,
streak
);

saved.correct++;


/*
Mastery is currently recorded using the correct answer.

This preserves the behaviour of the existing app.
*/

if(!saved.mastered.includes(q.ans)){

saved.mastered.push(q.ans);

}

}

else{

streak=0;

}


saved.best=Math.max(
saved.best,
streak,
sessionBest
);


localStorage.setItem(
STORAGE_KEY,
JSON.stringify(saved)
);


/*
Disable every answer after selection.
*/

$$('.answer').forEach(b=>{

b.disabled=true;


/*
Highlight the actual correct answer.
*/

if(
b.querySelector('span').textContent
===
q.ans
){

b.classList.add('correct');

}

});


if(!ok){

btn.classList.add('wrong');

}


$('#feedbackTitle').textContent=
ok
?'¡Perfecto! ✓'
:`Not quite — ${q.ans}`;


$('#explanation').textContent=
q.exp;


$('#feedback')
.classList.add('show');


$('#streak').textContent=
streak;

}


/*
=========================================================
NEXT QUESTION
=========================================================
*/


$('#next').onclick=()=>{

idx++;


idx<session.length
?render()
:finish();

};


/*
=========================================================
RESULTS
=========================================================
*/


function finish(){

show('results');


let pct=Math.round(
correct/session.length*100
);


$('#score').textContent=
pct+'%';


$('#correctN').textContent=
correct;


$('#wrongN').textContent=
session.length-correct;


$('#sessionStreak').textContent=
sessionBest;


$('#resultTitle').textContent=
pct>=90
?'Floor ready. 🔥'
:pct>=75
?'Strong shift.'
:'Keep drilling.';


$('#resultCopy').textContent=
pct>=90
?'Excellent menu recall. Keep the details fresh before service.'
:pct>=75
?'Good knowledge — another round will lock in the weaker details.'
:'Focus on the misses, then run another short session.';


homeStats();

}


/*
=========================================================
NAVIGATION
=========================================================
*/


$('#again').onclick=()=>
show('home');


$('#quit').onclick=()=>
show('home');


/*
=========================================================
RESET PROGRESS
=========================================================
*/


$('#reset').onclick=()=>{

if(
confirm(
'Reset all Alegrelingo progress?'
)
){

localStorage.removeItem(
STORAGE_KEY
);

localStorage.removeItem(
LEGACY_STORAGE_KEY
);


saved={
correct:0,
total:0,
best:0,
mastered:[]
};


homeStats();

}

};


console.log(
`Alegrelingo loaded with ${BANK.length} questions.`
);