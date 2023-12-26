
// getElementById and getElmenetByClassName


/*  //                              document.getElementById ('title').setAttribute('class', 'test')
undefined
    //                              document.getElementById('titile')
null
    //                              document.getElementById('title')
<h1 id="title" class="test">

    //                               const title = document.getElementById('title')
undefined
    //                              title.style = "red"
"red"
    //                              title.style.backgroundColor = "green"
"green"
    //                               title.style.padding ="15px"
"15px"
    //                               title.style.margin ="15px"
"15px"
    //                                title.style.margin ="15px"
"15px"
    //                               title.style.margin ="25px"
"25px"
    //                               title
<h1 id="title" class="test" style="background-color: green;…ng: 15px; margin: 25px;">

      //                              title.textContent
"DOM Learning with Mir Niyazul Haque"
      //                               title.innerText
"DOM Learning with Mir Niyazul Haque"
      //                               title.innerHTML
"DOM Learning with Mir Niyazul Haque"

​

*/





//       QuerySelector 


/*
document.querySelector('ul')
<ul>

let myul = document.querySelector('ul')
undefined
myul.querySelector('li')
<li>

const turnGreen = myul.querySelector('li')
undefined
turnGreen.style.backgroundColor = "red"
"red"
turnGreen.style.padding="17px"
"17px"
turnGreen.style.padding="10px"
"10px"
turnGreen.style.padding="3px"
"3px"
turnGreen.style.padding="0.2px"
"0.2px"
turnGreen.innerText="hello"
"hello"

*/


// QuerySelectorAll  -> Returns a NodeList 

/*



document.querySelectorAll('ul')
NodeList [ ul
 ]

templist
Uncaught ReferenceError: templist is not defined
    <anonymous> debugger eval code:1
debugger eval code:1:1
const tempList = document.querySelectorAll('li')
undefined
tempList
NodeList(4) [ li, li, li, li
 ]
​
0: <li>​
1: <li>​
2: <li>​
3: <li>
​
length: 4
​
<prototype>: NodeListPrototype { item: item(), keys: keys(), values: values(), … }

tempList[0].style.backgroundColor="red"
"red"
tempList.forEach(function (l){
l.style.backgroundColor="Black"
})
undefined
tempList.forEach(function (l){
l.style.backgroundColor="pink"
})
undefined

*/

//      HTMLCOllection to Array for better query and operations 

/*

document.getElementsByClassName('list-item')
HTMLCollection { 0: li.list-item, 1: li.list-item, 2: li.list-item, 3: li.list-item, 4: li.list-item
, length: 5 }

const tempClassList = document.getElementsByClassName ('list-item')
undefined
tempClassList
HTMLCollection { 0: li.list-item, 1: li.list-item, 2: li.list-item, 3: li.list-item, 4: li.list-item
, length: 5 }

Array.from(tempClassList)
Array(5) [ li.list-item, li.list-item, li.list-item, li.list-item, li.list-item
 ]

tempClassList
HTMLCollection { 0: li.list-item, 1: li.list-item, 2: li.list-item, 3: li.list-item, 4: li.list-item
, length: 5 }

const convertedArray = Array.from(tempClassList)
undefined
convertedArray
Array(5) [ li.list-item, li.list-item, li.list-item, li.list-item, li.list-item
 ]

convertedArray.forEach(function(li){
li.style.backgroundColor="red"
})
undefined

​


*/