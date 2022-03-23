// Task - 1
function CountSpaces()
{
    let sentence = prompt("Please, enter the sentence (Task-1) : ").split('');
    let count = 0;
    sentence.forEach(x => x == ' ' ? count++ : x);
    return count;
}

let numberArray = [3, 4, 1, 9, 7, 12, 6, 10, 8, 11];
let wordArray = ['word1','word2','word3','word4','word5'];
document.getElementById("info").innerHTML=`<h3 class="font-light">Entered Number Array - [${numberArray}]</h3><br /><h3 class="font-light">Entered Word Array - [${wordArray}]</h3>`

// Task - 2
function Average(array=numberArray)
{
    let avgNumber = array.reduce((a, b) => a + b) / array.length;
    return avgNumber;
}

// Task - 3
function EvenNumbers(array=numberArray)
{
    let evenNumbersArray = array.filter(x=>x%2==0);
    return evenNumbersArray;
}

// Task - 4
function largerThanAvgNumber(array=numberArray)
{
    let avgNumber = array.reduce((a, b) => a + b) / array.length;
    let largerThanAvgNumberArr = array.filter(x => x > avgNumber);
    return largerThanAvgNumberArr;
}

// Task - 5
function ArrayToWord(array=wordArray)
{
    return array.join(',').toString();
}

// Task - 6
function reverseArray(array=wordArray)
{
    return array.reverse();
}

// Task - 7
function SameElementsArray(array1=['word1', 'word2', 'word3'], array2=['word4', 'word3', 'word1', 'word5'])
{
    let newArray = [];
    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array2.length; j++) {
                if (array1[i] == array2[j])
                    newArray.push(array1[i]);
        }
    }
    return newArray;
}

// Task - 8

function ArrayStartWithChar(array=['ana','baba','nene','dayi','ata','bibi','xala'], char='b')
{
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if(array[i][0]==char)
        newArray.push(array[i]);
    }
    return newArray;
}

// Task - 9

function CountOfWords(word="Mehemmed")
{
    let wordsArray = word.toLowerCase().split('');
    let uniqueWordsArray = wordsArray.filter((element, index) => {
        return wordsArray.indexOf(element) === index;
    });
    let count = 0;
    for (let i = 0; i < uniqueWordsArray.length; i++) {
        for (let j = 0; j < wordsArray.length; j++) {
            if(uniqueWordsArray[i]==wordsArray[j])
                count++;
        }
        console.log(`Count of char ${uniqueWordsArray[i]} - ${count}`);
        count=0;
    }
}

function RunFunction()
{
    let sel = document.getElementById("selectTag");
    let value = sel.options[sel.selectedIndex].value;
    let result = document.getElementById("result");
    switch(value)
    {
        case '1': let tmp = CountSpaces(); console.log(tmp); result.textContent += " Count of spaces : " + tmp; break;
        case '2': console.log(Average()); result.textContent += " Average of Number Array : " + Average(); break;
        case '3': console.log(EvenNumbers()); result.textContent += ` Even numbers of Number Array : [${EvenNumbers()}]`; break;
        case '4': console.log(largerThanAvgNumber()); result.textContent += ` Larger numbers from average of Number Array : [${largerThanAvgNumber()}]`; break;
        case '5': console.log(ArrayToWord()); result.textContent += " Word Array to word with delimiter (,) : " + ArrayToWord(); break;
        case '6': console.log(reverseArray()); result.textContent += ` Reverse of Word Array : [${reverseArray()}]`; break;
        case '7': console.log(SameElementsArray()); result.textContent += ` Same elements of Array1 and Array2 : [${SameElementsArray()}]`; break;
        case '8': console.log(ArrayStartWithChar()); result.textContent += ` Array that elements start with specific character : [${ArrayStartWithChar()}]`; break;
        case '8': CountOfWords(); result.textContent += " Count of characters of 'Mehemmed' word LOOK AT THE CONSOLE! "; break;
    }
}