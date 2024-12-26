let availableKeywords = [
    'Bulbasaur',
];

const resultsBox = document.querySelector(".result-box");
const inputBox = document.getElementById("input-box");

inputBox.onkeyup = function(){
    let result = [];
    let input = inputBox.value;
    if(input.length){
        result = availableKeywords.filter((keyword)=>{
           return keyword.toLocaleLowerCase().includes(input.toLocaleLowerCase());
        });
        console.log(result);
    }
    display(result);

    if(!result.length){
        resultsBox.innerHTML = '';
    }
}

function display(result){
    const content = result.map((list)=>{
        return "<li onclick=selectInput(this)>" + list + "</li>";
    });

    resultsBox.innerHTML = "<ul>" + content.join('') + "</ul>";
}

function selectInput(list){
    inputBox.value = list.innerHTML
    resultsBox.innerHTML = '';
}

const button = document.getElementById('checkButton');
button.addEventListener('click', function() {
    const input = document.getElementById('input-box').value;

    if (input === "Bulbasaur") {
        Bulbasaur();
    }
    
});

document.addEventListener('DOMContentLoaded', function() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');

    checkboxes.forEach(checkbox => {
        const pokemon = checkbox.getAttribute('data-pokemon');
        const checked = localStorage.getItem(pokemon) === 'true';
        checkbox.checked = checked;
    });

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            localStorage.setItem(checkbox.getAttribute('data-pokemon'), checkbox.checked);
        });
    });
});

const checkboxes = document.querySelectorAll('#pokemon-checkbox');
const numberChange = document.getElementById('numberchange');

const savedCount = localStorage.getItem('checkedCount');
if (savedCount) {
    numberChange.textContent = savedCount;
    checkboxes.forEach((checkbox, index) => {
        checkbox.checked = savedCount > index;
    });
}

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        const checkedCount = Array.from(checkboxes).filter(checkbox => checkbox.checked).length;
        numberChange.textContent = checkedCount;
        localStorage.setItem('checkedCount', checkedCount);
    });
});

const checkboxesnormal = document.querySelectorAll('.pokemon-checkbox-normal');
const numberChangenormal = document.getElementById('numberchangenormal');

const savedCountnormal = localStorage.getItem('checkedCountnormal');
if (savedCountnormal) {
    numberChangenormal.textContent = savedCountnormal;
    checkboxesnormal.forEach((checkbox, index) => {
        checkbox.checked = savedCountnormal > index;
    });
}

checkboxesnormal.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        const checkedCountnormal = Array.from(checkboxesnormal).filter(checkbox => checkbox.checked).length;
        numberChangenormal.textContent = checkedCountnormal;
        localStorage.setItem('checkedCountnormal', checkedCountnormal);
    });
});

const checkboxesshadow = document.querySelectorAll('.pokemon-checkbox-shadow');
const numberChangeshadow = document.getElementById('numberchangeshadow');

const savedCountshadow = localStorage.getItem('checkedCountshadow');
if (savedCountshadow) {
    numberChangeshadow.textContent = savedCountshadow;
    checkboxesshadow.forEach((checkbox, index) => {
        checkbox.checked = savedCountshadow > index;
    });
}

checkboxesshadow.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        const checkedCountshadow = Array.from(checkboxesshadow).filter(checkbox => checkbox.checked).length;
        numberChangeshadow.textContent = checkedCountshadow;
        localStorage.setItem('checkedCountshadow', checkedCountshadow);
    });
});

const checkboxesshinyperfect = document.querySelectorAll('.pokemon-checkbox-shinyperfect');
const numberChangeshinyperfect = document.getElementById('numberchangeshinyperfect');

const savedCountshinyperfect = localStorage.getItem('checkedCountshinyperfect');
if (savedCountshinyperfect) {
    numberChangeshinyperfect.textContent = savedCountshinyperfect;
    checkboxesshinyperfect.forEach((checkbox, index) => {
        checkbox.checked = savedCountshinyperfect > index;
    });
}

checkboxesshinyperfect.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        const checkedCountshinyperfect = Array.from(checkboxesshinyperfect).filter(checkbox => checkbox.checked).length;
        numberChangeshinyperfect.textContent = checkedCountshinyperfect;
        localStorage.setItem('checkedCountshinyperfect', checkedCountshinyperfect);
    });
});

const checkboxesperfectlucky = document.querySelectorAll('.pokemon-checkbox-perfectlucky');
const numberChangeperfectlucky = document.getElementById('numberchangeperfectlucky');

const savedCountperfectlucky = localStorage.getItem('checkedCountperfectlucky');
if (savedCountperfectlucky) {
    numberChangeperfectlucky.textContent = savedCountperfectlucky;
    checkboxesperfectlucky.forEach((checkbox, index) => {
        checkbox.checked = savedCountperfectlucky > index;
    });
}

checkboxesperfectlucky.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        const checkedCountperfectlucky = Array.from(checkboxesperfectlucky).filter(checkbox => checkbox.checked).length;
        numberChangeperfectlucky.textContent = checkedCountperfectlucky;
        localStorage.setItem('checkedCountperfectlucky', checkedCountperfectlucky);
    });
});

const checkboxesshinylucky = document.querySelectorAll('.pokemon-checkbox-shinylucky');
const numberChangeshinylucky = document.getElementById('numberchangeshinylucky');

const savedCountshinylucky = localStorage.getItem('checkedCountshinylucky');
if (savedCountshinylucky) {
    numberChangeshinylucky.textContent = savedCountshinylucky;
    checkboxesshinylucky.forEach((checkbox, index) => {
        checkbox.checked = savedCountshinylucky > index;
    });
}

checkboxesshinylucky.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        const checkedCountshinylucky = Array.from(checkboxesshinylucky).filter(checkbox => checkbox.checked).length;
        numberChangeshinylucky.textContent = checkedCountshinylucky;
        localStorage.setItem('checkedCountshinylucky', checkedCountshinylucky);
    });
});

const checkboxesshinyluckyperfect = document.querySelectorAll('.pokemon-checkbox-shinyluckyperfect');
const numberChangeshinyluckyperfect = document.getElementById('numberchangeshinyluckyperfect');

const savedCountshinyluckyperfect = localStorage.getItem('checkedCountshinyluckyperfect');
if (savedCountshinyluckyperfect) {
    numberChangeshinyluckyperfect.textContent = savedCountshinyluckyperfect;
    checkboxesshinyluckyperfect.forEach((checkbox, index) => {
        checkbox.checked = savedCountshinyluckyperfect > index;
    });
}

checkboxesshinyluckyperfect.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        const checkedCountshinyluckyperfect = Array.from(checkboxesshinyluckyperfect).filter(checkbox => checkbox.checked).length;
        numberChangeshinyluckyperfect.textContent = checkedCountshinyluckyperfect;
        localStorage.setItem('checkedCountshinyluckyperfect', checkedCountshinyluckyperfect);
    });
});

const checkboxescostumeshinyperfect = document.querySelectorAll('.pokemon-checkbox-costumeshinyperfect');
const numberChangecostumeshinyperfect = document.getElementById('numberchangecostumeshinyperfect');

const savedCountcostumeshinyperfect = localStorage.getItem('checkedCountcostumeshinyperfect');
if (savedCountcostumeshinyperfect) {
    numberChangecostumeshinyperfect.textContent = savedCountcostumeshinyperfect;
    checkboxescostumeshinyperfect.forEach((checkbox, index) => {
        checkbox.checked = savedCountcostumeshinyperfect > index;
    });
}

checkboxescostumeshinyperfect.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        const checkedCountcostumeshinyperfect = Array.from(checkboxescostumeshinyperfect).filter(checkbox => checkbox.checked).length;
        numberChangecostumeshinyperfect.textContent = checkedCountcostumeshinyperfect;
        localStorage.setItem('checkedCountcostumeshinyperfect', checkedCountcostumeshinyperfect);
    });
});

const checkboxespurifiedshiny = document.querySelectorAll('.pokemon-checkbox-purifiedshiny');
const numberChangepurifiedshiny = document.getElementById('numberchangepurifiedshiny');

const savedCountpurifiedshiny = localStorage.getItem('checkedCountpurifiedshiny');
if (savedCountpurifiedshiny) {
    numberChangepurifiedshiny.textContent = savedCountpurifiedshiny;
    checkboxespurifiedshiny.forEach((checkbox, index) => {
        checkbox.checked = savedCountpurifiedshiny > index;
    });
}

checkboxespurifiedshiny.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        const checkedCountpurifiedshiny = Array.from(checkboxespurifiedshiny).filter(checkbox => checkbox.checked).length;
        numberChangepurifiedshiny.textContent = checkedCountpurifiedshiny;
        localStorage.setItem('checkedCountpurifiedshiny', checkedCountpurifiedshiny);
    });
});

const checkboxesgigantamax = document.querySelectorAll('.pokemon-checkbox-gigantamax');
const numberChangegigantamax = document.getElementById('numberchangegigantamax');

const savedCountgigantamax = localStorage.getItem('checkedCountgigantamax');
if (savedCountgigantamax) {
    numberChangegigantamax.textContent = savedCountgigantamax;
    checkboxesgigantamax.forEach((checkbox, index) => {
        checkbox.checked = savedCountgigantamax > index;
    });
}

checkboxesgigantamax.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        const checkedCountgigantamax = Array.from(checkboxesgigantamax).filter(checkbox => checkbox.checked).length;
        numberChangegigantamax.textContent = checkedCountgigantamax;
        localStorage.setItem('checkedCountgigantamax', checkedCountgigantamax);
    });
});

const checkboxesgigantamaxperfectshiny = document.querySelectorAll('.pokemon-checkbox-gigantamaxperfectshiny');
const numberChangegigantamaxperfectshiny = document.getElementById('numberchangegigantamaxperfectshiny');

const savedCountgigantamaxperfectshiny = localStorage.getItem('checkedCountgigantamaxperfectshiny');
if (savedCountgigantamaxperfectshiny) {
    numberChangegigantamaxperfectshiny.textContent = savedCountgigantamaxperfectshiny;
    checkboxesgigantamaxperfectshiny.forEach((checkbox, index) => {
        checkbox.checked = savedCountgigantamaxperfectshiny > index;
    });
}

checkboxesgigantamaxperfectshiny.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        const checkedCountgigantamaxperfectshiny = Array.from(checkboxesgigantamaxperfectshiny).filter(checkbox => checkbox.checked).length;
        numberChangegigantamaxperfectshiny.textContent = checkedCountgigantamaxperfectshiny;
        localStorage.setItem('checkedCountgigantamaxperfectshiny', checkedCountgigantamaxperfectshiny);
    });
});

const checkboxesimperfectshinyshadow = document.querySelectorAll('.pokemon-checkbox-imperfectshinyshadow');
const numberChangeimperfectshinyshadow = document.getElementById('numberchangeimperfectshinyshadow');

const savedCountimperfectshinyshadow = localStorage.getItem('checkedCountimperfectshinyshadow');
if (savedCountimperfectshinyshadow) {
    numberChangeimperfectshinyshadow.textContent = savedCountimperfectshinyshadow;
    checkboxesimperfectshinyshadow.forEach((checkbox, index) => {
        checkbox.checked = savedCountimperfectshinyshadow > index;
    });
}

checkboxesimperfectshinyshadow.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        const checkedCountimperfectshinyshadow = Array.from(checkboxesimperfectshinyshadow).filter(checkbox => checkbox.checked).length;
        numberChangeimperfectshinyshadow.textContent = checkedCountimperfectshinyshadow;
        localStorage.setItem('checkedCountimperfectshinyshadow', checkedCountimperfectshinyshadow);
    });
});

const checkboxeslocationbackgroundshinyperfect = document.querySelectorAll('.pokemon-checkbox-locationbackgroundshinyperfect');
const numberChangelocationbackgroundshinyperfect = document.getElementById('numberchangelocationbackgroundshinyperfect');

const savedCountlocationbackgroundshinyperfect = localStorage.getItem('checkedCountlocationbackgroundshinyperfect');
if (savedCountlocationbackgroundshinyperfect) {
    numberChangelocationbackgroundshinyperfect.textContent = savedCountlocationbackgroundshinyperfect;
    checkboxeslocationbackgroundshinyperfect.forEach((checkbox, index) => {
        checkbox.checked = savedCountlocationbackgroundshinyperfect > index;
    });
}

checkboxeslocationbackgroundshinyperfect.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        const checkedCountlocationbackgroundshinyperfect = Array.from(checkboxeslocationbackgroundshinyperfect).filter(checkbox => checkbox.checked).length;
        numberChangelocationbackgroundshinyperfect.textContent = checkedCountlocationbackgroundshinyperfect;
        localStorage.setItem('checkedCountlocationbackgroundshinyperfect', checkedCountlocationbackgroundshinyperfect);
    });
});

const checkboxesspecialbackgroundshiny = document.querySelectorAll('.pokemon-checkbox-specialbackgroundshiny');
const numberChangespecialbackgroundshiny = document.getElementById('numberchangespecialbackgroundshiny');

const savedCountspecialbackgroundshiny = localStorage.getItem('checkedCountspecialbackgroundshiny');
if (savedCountspecialbackgroundshiny) {
    numberChangespecialbackgroundshiny.textContent = savedCountspecialbackgroundshiny;
    checkboxesspecialbackgroundshiny.forEach((checkbox, index) => {
        checkbox.checked = savedCountspecialbackgroundshiny > index;
    });
}

checkboxesspecialbackgroundshiny.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        const checkedCountspecialbackgroundshiny = Array.from(checkboxesspecialbackgroundshiny).filter(checkbox => checkbox.checked).length;
        numberChangespecialbackgroundshiny.textContent = checkedCountspecialbackgroundshiny;
        localStorage.setItem('checkedCountspecialbackgroundshiny', checkedCountspecialbackgroundshiny);
    });
});

const checkboxesperfect = document.querySelectorAll('.pokemon-checkbox-perfect');
const numberChangeperfect = document.getElementById('numberchangeperfect');

const savedCountperfect = localStorage.getItem('checkedCountperfect');
if (savedCountperfect) {
    numberChangeperfect.textContent = savedCountperfect;
    checkboxesperfect.forEach((checkbox, index) => {
        checkbox.checked = savedCountperfect > index;
    });
}

checkboxesperfect.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        const checkedCountperfect = Array.from(checkboxesperfect).filter(checkbox => checkbox.checked).length;
        numberChangeperfect.textContent = checkedCountperfect;
        localStorage.setItem('checkedCountperfect', checkedCountperfect);
    });
});

const checkboxesdynamax = document.querySelectorAll('.pokemon-checkbox-dynamax');
const numberChangedynamax = document.getElementById('numberchangedynamax');

const savedCountdynamax = localStorage.getItem('checkedCountdynamax');
if (savedCountdynamax) {
    numberChangedynamax.textContent = savedCountdynamax;
    checkboxesdynamax.forEach((checkbox, index) => {
        checkbox.checked = savedCountdynamax > index;
    });
}

checkboxesdynamax.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        const checkedCountdynamax = Array.from(checkboxesdynamax).filter(checkbox => checkbox.checked).length;
        numberChangedynamax.textContent = checkedCountdynamax;
        localStorage.setItem('checkedCountdynamax', checkedCountdynamax);
    });
});

const checkboxesperfectshadow = document.querySelectorAll('.pokemon-checkbox-perfectshadow');
const numberChangeperfectshadow = document.getElementById('numberchangeperfectshadow');

const savedCountperfectshadow = localStorage.getItem('checkedCountperfectshadow');
if (savedCountperfectshadow) {
    numberChangeperfectshadow.textContent = savedCountperfectshadow;
    checkboxesperfectshadow.forEach((checkbox, index) => {
        checkbox.checked = savedCountperfectshadow > index;
    });
}

checkboxesperfectshadow.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        const checkedCountperfectshadow = Array.from(checkboxesperfectshadow).filter(checkbox => checkbox.checked).length;
        numberChangeperfectshadow.textContent = checkedCountperfectshadow;
        localStorage.setItem('checkedCountperfectshadow', checkedCountperfectshadow);
    });
});

const checkboxesshinyshadow = document.querySelectorAll('.pokemon-checkbox-shinyshadow');
const numberChangeshinyshadow = document.getElementById('numberchangeshinyshadow');

const savedCountshinyshadow = localStorage.getItem('checkedCountshinyshadow');
if (savedCountshinyshadow) {
    numberChangeshinyshadow.textContent = savedCountshinyshadow;
    checkboxesshinyshadow.forEach((checkbox, index) => {
        checkbox.checked = savedCountshinyshadow > index;
    });
}

checkboxesshinyshadow.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        const checkedCountshinyshadow = Array.from(checkboxesshinyshadow).filter(checkbox => checkbox.checked).length;
        numberChangeshinyshadow.textContent = checkedCountshinyshadow;
        localStorage.setItem('checkedCountshinyshadow', checkedCountshinyshadow);
    });
});

const checkboxesshinyshadowperfect = document.querySelectorAll('.pokemon-checkbox-shinyshadowperfect');
const numberChangeshinyshadowperfect = document.getElementById('numberchangeshinyshadowperfect');

const savedCountshinyshadowperfect = localStorage.getItem('checkedCountshinyshadowperfect');
if (savedCountshinyshadowperfect) {
    numberChangeshinyshadowperfect.textContent = savedCountshinyshadowperfect;
    checkboxesshinyshadowperfect.forEach((checkbox, index) => {
        checkbox.checked = savedCountshinyshadowperfect > index;
    });
}

checkboxesshinyshadowperfect.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        const checkedCountshinyshadowperfect = Array.from(checkboxesshinyshadowperfect).filter(checkbox => checkbox.checked).length;
        numberChangeshinyshadowperfect.textContent = checkedCountshinyshadowperfect;
        localStorage.setItem('checkedCountshinyshadowperfect', checkedCountshinyshadowperfect);
    });
});

const checkboxescostume = document.querySelectorAll('.pokemon-checkbox-costume');
const numberChangecostume = document.getElementById('numberchangecostume');

const savedCountcostume = localStorage.getItem('checkedCountcostume');
if (savedCountcostume) {
    numberChangecostume.textContent = savedCountcostume;
    checkboxescostume.forEach((checkbox, index) => {
        checkbox.checked = savedCountcostume > index;
    });
}

checkboxescostume.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        const checkedCountcostume = Array.from(checkboxescostume).filter(checkbox => checkbox.checked).length;
        numberChangecostume.textContent = checkedCountcostume;
        localStorage.setItem('checkedCountcostume', checkedCountcostume);
    });
});

const checkboxescostumeperfect = document.querySelectorAll('.pokemon-checkbox-costumeperfect');
const numberChangecostumeperfect = document.getElementById('numberchangecostumeperfect');

const savedCountcostumeperfect = localStorage.getItem('checkedCountcostumeperfect');
if (savedCountcostumeperfect) {
    numberChangecostumeperfect.textContent = savedCountcostumeperfect;
    checkboxescostumeperfect.forEach((checkbox, index) => {
        checkbox.checked = savedCountcostumeperfect > index;
    });
}

checkboxescostumeperfect.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        const checkedCountcostumeperfect = Array.from(checkboxescostumeperfect).filter(checkbox => checkbox.checked).length;
        numberChangecostumeperfect.textContent = checkedCountcostumeperfect;
        localStorage.setItem('checkedCountcostumeperfect', checkedCountcostumeperfect);
    });
});

const checkboxespurifiedperfect = document.querySelectorAll('.pokemon-checkbox-purifiedperfect');
const numberChangepurifiedperfect = document.getElementById('numberchangepurifiedperfect');

const savedCountpurifiedperfect = localStorage.getItem('checkedCountpurifiedperfect');
if (savedCountpurifiedperfect) {
    numberChangepurifiedperfect.textContent = savedCountpurifiedperfect;
    checkboxespurifiedperfect.forEach((checkbox, index) => {
        checkbox.checked = savedCountpurifiedperfect > index;
    });
}

checkboxespurifiedperfect.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        const checkedCountpurifiedperfect = Array.from(checkboxespurifiedperfect).filter(checkbox => checkbox.checked).length;
        numberChangepurifiedperfect.textContent = checkedCountpurifiedperfect;
        localStorage.setItem('checkedCountpurifiedperfect', checkedCountpurifiedperfect);
    });
});

const checkboxesgigantamaxshiny = document.querySelectorAll('.pokemon-checkbox-gigantamaxshiny');
const numberChangegigantamaxshiny = document.getElementById('numberchangegigantamaxshiny');

const savedCountgigantamaxshiny = localStorage.getItem('checkedCountgigantamaxshiny');
if (savedCountgigantamaxshiny) {
    numberChangegigantamaxshiny.textContent = savedCountgigantamaxshiny;
    checkboxesgigantamaxshiny.forEach((checkbox, index) => {
        checkbox.checked = savedCountgigantamaxshiny > index;
    });
}

checkboxesgigantamaxshiny.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        const checkedCountgigantamaxshiny = Array.from(checkboxesgigantamaxshiny).filter(checkbox => checkbox.checked).length;
        numberChangegigantamaxshiny.textContent = checkedCountgigantamaxshiny;
        localStorage.setItem('checkedCountgigantamaxshiny', checkedCountgigantamaxshiny);
    });
});

const checkboxesimperfect = document.querySelectorAll('.pokemon-checkbox-imperfect');
const numberChangeimperfect = document.getElementById('numberchangeimperfect');

const savedCountimperfect = localStorage.getItem('checkedCountimperfect');
if (savedCountimperfect) {
    numberChangeimperfect.textContent = savedCountimperfect;
    checkboxesimperfect.forEach((checkbox, index) => {
        checkbox.checked = savedCountimperfect > index;
    });
}

checkboxesimperfect.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        const checkedCountimperfect = Array.from(checkboxesimperfect).filter(checkbox => checkbox.checked).length;
        numberChangeimperfect.textContent = checkedCountimperfect;
        localStorage.setItem('checkedCountimperfect', checkedCountimperfect);
    });
});

const checkboxeslocationbackground = document.querySelectorAll('.pokemon-checkbox-locationbackground');
const numberChangelocationbackground = document.getElementById('numberchangelocationbackground');

const savedCountlocationbackground = localStorage.getItem('checkedCountlocationbackground');
if (savedCountlocationbackground) {
    numberChangelocationbackground.textContent = savedCountlocationbackground;
    checkboxeslocationbackground.forEach((checkbox, index) => {
        checkbox.checked = savedCountlocationbackground > index;
    });
}

checkboxeslocationbackground.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        const checkedCountlocationbackground = Array.from(checkboxeslocationbackground).filter(checkbox => checkbox.checked).length;
        numberChangelocationbackground.textContent = checkedCountlocationbackground;
        localStorage.setItem('checkedCountlocationbackground', checkedCountlocationbackground);
    });
});

const checkboxeslocationbackgroundperfect = document.querySelectorAll('.pokemon-checkbox-locationbackgroundperfect');
const numberChangelocationbackgroundperfect = document.getElementById('numberchangelocationbackgroundperfect');

const savedCountlocationbackgroundperfect = localStorage.getItem('checkedCountlocationbackgroundperfect');
if (savedCountlocationbackgroundperfect) {
    numberChangelocationbackgroundperfect.textContent = savedCountlocationbackgroundperfect;
    checkboxeslocationbackgroundperfect.forEach((checkbox, index) => {
        checkbox.checked = savedCountlocationbackgroundperfect > index;
    });
}

checkboxeslocationbackgroundperfect.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        const checkedCountlocationbackgroundperfect = Array.from(checkboxeslocationbackgroundperfect).filter(checkbox => checkbox.checked).length;
        numberChangelocationbackgroundperfect.textContent = checkedCountlocationbackgroundperfect;
        localStorage.setItem('checkedCountlocationbackgroundperfect', checkedCountlocationbackgroundperfect);
    });
});

const checkboxespecialbackgroundshinyperfect = document.querySelectorAll('.pokemon-checkbox-specialbackgroundshinyperfect');
const numberChangespecialbackgroundshinyperfect = document.getElementById('numberchangespecialbackgroundshinyperfect');

const savedCountspecialbackgroundshinyperfect = localStorage.getItem('checkedCountspecialbackgroundshinyperfect');
if (savedCountspecialbackgroundshinyperfect) {
    numberChangespecialbackgroundshinyperfect.textContent = savedCountspecialbackgroundshinyperfect;
    checkboxespecialbackgroundshinyperfect.forEach((checkbox, index) => {
        checkbox.checked = savedCountspecialbackgroundshinyperfect > index;
    });
}

checkboxespecialbackgroundshinyperfect.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        const checkedCountspecialbackgroundshinyperfect = Array.from(checkboxespecialbackgroundshinyperfect).filter(checkbox => checkbox.checked).length;
        numberChangespecialbackgroundshinyperfect.textContent = checkedCountspecialbackgroundshinyperfect;
        localStorage.setItem('checkedCountspecialbackgroundshinyperfect', checkedCountspecialbackgroundshinyperfect);
    });
});

const checkboxesshiny = document.querySelectorAll('.pokemon-checkbox-shiny');
const numberChangeshiny = document.getElementById('numberchangeshiny');

const savedCountshiny = localStorage.getItem('checkedCountshiny');
if (savedCountshiny) {
    numberChangeshiny.textContent = savedCountshiny;
    checkboxesshiny.forEach((checkbox, index) => {
        checkbox.checked = savedCountshiny > index;
    });
}

checkboxesshiny.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        const checkedCountshiny = Array.from(checkboxesshiny).filter(checkbox => checkbox.checked).length;
        numberChangeshiny.textContent = checkedCountshiny;
        localStorage.setItem('checkedCountshiny', checkedCountshiny);
    });
});

const checkboxeslucky = document.querySelectorAll('.pokemon-checkbox-lucky');
const numberChangelucky = document.getElementById('numberchangelucky');

const savedCountlucky = localStorage.getItem('checkedCountlucky');
if (savedCountlucky) {
    numberChangelucky.textContent = savedCountlucky;
    checkboxeslucky.forEach((checkbox, index) => {
        checkbox.checked = savedCountlucky > index;
    });
}

checkboxeslucky.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        const checkedCountlucky = Array.from(checkboxeslucky).filter(checkbox => checkbox.checked).length;
        numberChangelucky.textContent = checkedCountlucky;
        localStorage.setItem('checkedCountlucky', checkedCountlucky);
    });
});

const checkboxesperfectdynamax = document.querySelectorAll('.pokemon-checkbox-perfectdynamax');
const numberChangeperfectdynamax = document.getElementById('numberchangeperfectdynamax');

const savedCountperfectdynamax = localStorage.getItem('checkedCountperfectdynamax');
if (savedCountperfectdynamax) {
    numberChangeperfectdynamax.textContent = savedCountperfectdynamax;
    checkboxesperfectdynamax.forEach((checkbox, index) => {
        checkbox.checked = savedCountperfectdynamax > index;
    });
}

checkboxesperfectdynamax.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        const checkedCountperfectdynamax = Array.from(checkboxesperfectdynamax).filter(checkbox => checkbox.checked).length;
        numberChangeperfectdynamax.textContent = checkedCountperfectdynamax;
        localStorage.setItem('checkedCountperfectdynamax', checkedCountperfectdynamax);
    });
});

const checkboxesshinydynamax = document.querySelectorAll('.pokemon-checkbox-shinydynamax');
const numberChangeshinydynamax = document.getElementById('numberchangeshinydynamax');

const savedCountshinydynamax = localStorage.getItem('checkedCountshinydynamax');
if (savedCountshinydynamax) {
    numberChangeshinydynamax.textContent = savedCountshinydynamax;
    checkboxesshinydynamax.forEach((checkbox, index) => {
        checkbox.checked = savedCountshinydynamax > index;
    });
}

checkboxesshinydynamax.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        const checkedCountshinydynamax = Array.from(checkboxesshinydynamax).filter(checkbox => checkbox.checked).length;
        numberChangeshinydynamax.textContent = checkedCountshinydynamax;
        localStorage.setItem('checkedCountshinydynamax', checkedCountshinydynamax);
    });
});

const checkboxesshinydynamaxperfect = document.querySelectorAll('.pokemon-checkbox-shinydynamaxperfect');
const numberChangeshinydynamaxperfect = document.getElementById('numberchangeshinydynamaxperfect');

const savedCountshinydynamaxperfect = localStorage.getItem('checkedCountshinydynamaxperfect');
if (savedCountshinydynamaxperfect) {
    numberChangeshinydynamaxperfect.textContent = savedCountshinydynamaxperfect;
    checkboxesshinydynamaxperfect.forEach((checkbox, index) => {
        checkbox.checked = savedCountshinydynamaxperfect > index;
    });
}

checkboxesshinydynamaxperfect.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        const checkedCountshinydynamaxperfect = Array.from(checkboxesshinydynamaxperfect).filter(checkbox => checkbox.checked).length;
        numberChangeshinydynamaxperfect.textContent = checkedCountshinydynamaxperfect;
        localStorage.setItem('checkedCountshinydynamaxperfect', checkedCountshinydynamaxperfect);
    });
});

const checkboxescostumeshiny = document.querySelectorAll('.pokemon-checkbox-costumeshiny');
const numberChangecostumeshiny = document.getElementById('numberchangecostumeshiny');

const savedCountcostumeshiny = localStorage.getItem('checkedCountcostumeshiny');
if (savedCountcostumeshiny) {
    numberChangecostumeshiny.textContent = savedCountcostumeshiny;
    checkboxescostumeshiny.forEach((checkbox, index) => {
        checkbox.checked = savedCountcostumeshiny > index;
    });
}

checkboxescostumeshiny.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        const checkedCountcostumeshiny = Array.from(checkboxescostumeshiny).filter(checkbox => checkbox.checked).length;
        numberChangecostumeshiny.textContent = checkedCountcostumeshiny;
        localStorage.setItem('checkedCountcostumeshiny', checkedCountcostumeshiny);
    });
});

const checkboxespurified = document.querySelectorAll('.pokemon-checkbox-purified');
const numberchangepurified = document.getElementById('numberchangepurified');

const savedCountpurified = localStorage.getItem('checkedCountpurified');
if (savedCountpurified) {
    numberchangepurified.textContent = savedCountpurified;
    checkboxespurified.forEach((checkbox, index) => {
        checkbox.checked = savedCountpurified > index;
    });
}

checkboxespurified.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        const checkedCountpurified = Array.from(checkboxespurified).filter(checkbox => checkbox.checked).length;
        numberchangepurified.textContent = checkedCountpurified;
        localStorage.setItem('checkedCountpurified', checkedCountpurified);
    });
});

const checkboxespurifiedshinyperfect = document.querySelectorAll('.pokemon-checkbox-purifiedshinyperfect');
const numberchangepurifiedshinyperfect = document.getElementById('numberchangepurifiedshinyperfect');

const savedCountpurifiedshinyperfect = localStorage.getItem('checkedCountpurifiedshinyperfect');
if (savedCountpurifiedshinyperfect) {
    numberchangepurifiedshinyperfect.textContent = savedCountpurifiedshinyperfect;
    checkboxespurifiedshinyperfect.forEach((checkbox, index) => {
        checkbox.checked = savedCountpurifiedshinyperfect > index;
    });
}

checkboxespurifiedshinyperfect.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        const checkedCountpurifiedshinyperfect = Array.from(checkboxespurifiedshinyperfect).filter(checkbox => checkbox.checked).length;
        numberchangepurifiedshinyperfect.textContent = checkedCountpurifiedshinyperfect;
        localStorage.setItem('checkedCountpurifiedshinyperfect', checkedCountpurifiedshinyperfect);
    });
});

const checkboxescgigantamaxperfect = document.querySelectorAll('.pokemon-checkbox-gigantamaxperfect');
const numberchangegigantamaxperfect = document.getElementById('numberchangegigantamaxperfect');

const savedCountgigantamaxperfect = localStorage.getItem('checkedCountgigantamaxperfect');
if (savedCountgigantamaxperfect) {
    numberchangegigantamaxperfect.textContent = savedCountgigantamaxperfect;
    checkboxescgigantamaxperfect.forEach((checkbox, index) => {
        checkbox.checked = savedCountgigantamaxperfect > index;
    });
}

checkboxescgigantamaxperfect.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        const checkedCountgigantamaxperfect = Array.from(checkboxescgigantamaxperfect).filter(checkbox => checkbox.checked).length;
        numberchangegigantamaxperfect.textContent = checkedCountgigantamaxperfect;
        localStorage.setItem('checkedCountgigantamaxperfect', checkedCountgigantamaxperfect);
    });
});

const checkboxescimperfectshiny = document.querySelectorAll('.pokemon-checkbox-imperfectshiny');
const numberchangeimperfectshiny = document.getElementById('numberchangeimperfectshiny');

const savedCountimperfectshiny = localStorage.getItem('checkedCountimperfectshiny');
if (savedCountimperfectshiny) {
    numberchangeimperfectshiny.textContent = savedCountimperfectshiny;
    checkboxescimperfectshiny.forEach((checkbox, index) => {
        checkbox.checked = savedCountimperfectshiny > index;
    });
}

checkboxescimperfectshiny.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        const checkedCountimperfectshiny = Array.from(checkboxescimperfectshiny).filter(checkbox => checkbox.checked).length;
        numberchangeimperfectshiny.textContent = checkedCountimperfectshiny;
        localStorage.setItem('checkedCountimperfectshiny', checkedCountimperfectshiny);
    });
});

const checkboxesclocationbackgroundshiny = document.querySelectorAll('.pokemon-checkbox-locationbackgroundshiny');
const numberchangelocationbackgroundshiny = document.getElementById('numberchangelocationbackgroundshiny');

const savedCountlocationbackgroundshiny = localStorage.getItem('checkedCountlocationbackgroundshiny');
if (savedCountlocationbackgroundshiny) {
    numberchangelocationbackgroundshiny.textContent = savedCountlocationbackgroundshiny;
    checkboxesclocationbackgroundshiny.forEach((checkbox, index) => {
        checkbox.checked = savedCountlocationbackgroundshiny > index;
    });
}

checkboxesclocationbackgroundshiny.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        const checkedCountlocationbackgroundshiny = Array.from(checkboxesclocationbackgroundshiny).filter(checkbox => checkbox.checked).length;
        numberchangelocationbackgroundshiny.textContent = checkedCountlocationbackgroundshiny;
        localStorage.setItem('checkedCountlocationbackgroundshiny', checkedCountlocationbackgroundshiny);
    });
});

const checkboxesclocationspecialbackground = document.querySelectorAll('.pokemon-checkbox-locationspecialbackground');
const numberchangelocationspecialbackground = document.getElementById('numberchangelocationspecialbackground');

const savedCountlocationspecialbackground = localStorage.getItem('checkedCountlocationspecialbackground');
if (savedCountlocationspecialbackground) {
    numberchangelocationspecialbackground.textContent = savedCountlocationspecialbackground;
    checkboxesclocationspecialbackground.forEach((checkbox, index) => {
        checkbox.checked = savedCountlocationspecialbackground > index;
    });
}

checkboxesclocationspecialbackground.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        const checkedCountlocationspecialbackground = Array.from(checkboxesclocationspecialbackground).filter(checkbox => checkbox.checked).length;
        numberchangelocationspecialbackground.textContent = checkedCountlocationspecialbackground;
        localStorage.setItem('checkedCountlocationspecialbackground', checkedCountlocationspecialbackground);
    });
});

const checkboxesclocationspecialbackgroundperfect = document.querySelectorAll('.pokemon-checkbox-locationspecialbackgroundperfect');
const numberchangelocationspecialbackgroundperfect = document.getElementById('numberchangelocationspecialbackgroundperfect');

const savedCountlocationspecialbackgroundperfect = localStorage.getItem('checkedCountlocationspecialbackgroundperfect');
if (savedCountlocationspecialbackgroundperfect) {
    numberchangelocationspecialbackgroundperfect.textContent = savedCountlocationspecialbackgroundperfect;
    checkboxesclocationspecialbackgroundperfect.forEach((checkbox, index) => {
        checkbox.checked = savedCountlocationspecialbackgroundperfect > index;
    });
}

checkboxesclocationspecialbackgroundperfect.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        const checkedCountlocationspecialbackgroundperfect = Array.from(checkboxesclocationspecialbackgroundperfect).filter(checkbox => checkbox.checked).length;
        numberchangelocationspecialbackgroundperfect.textContent = checkedCountlocationspecialbackgroundperfect;
        localStorage.setItem('checkedCountlocationspecialbackgroundperfect', checkedCountlocationspecialbackgroundperfect);
    });
});

function Normal() {
    document.getElementById("pokemon-list").style.display = "block";
    document.getElementById("pokemon-list-perfect").style.display = "none";
    document.getElementById("pokemon-list-shadow").style.display = "none";
    document.getElementById("pokemon-list-dynamax").style.display = "none";
    document.getElementById("pokemon-list-lucky").style.display = "none";
    document.getElementById("pokemon-list-shiny").style.display = "none";
    document.getElementById("big-pokemoncount-container").style.display = "none";
    document.getElementById("title-container").style.display = "none";
    document.getElementById("pokemon-list-shinylucky").style.display = "none";
    document.getElementById("pokemon-list-shinyluckyperfect").style.display = "none";
    document.getElementById("pokemon-list-costumeshiny").style.display = "none";
    document.getElementById("pokemon-list-purifiedshiny").style.display = "none";
    document.getElementById("pokemon-list-gigantamax").style.display = "none";
    document.getElementById("pokemon-list-perfectlucky").style.display = "none";
    document.getElementById("pokemon-list-shinyperfect").style.display = "none";
    document.getElementById("pokemon-list-locationspecialbackgroundperfect").style.display = "none";
    document.getElementById("pokemon-list-locationspecialbackground").style.display = "none";
    document.getElementById("pokemon-list-locationbackgroundshiny").style.display = "none";
    document.getElementById("pokemon-list-imperfectshiny").style.display = "none";
    document.getElementById("pokemon-list-gigantamaxperfect").style.display = "none";
    document.getElementById("pokemon-list-purifiedshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-purified").style.display = "none";
    document.getElementById("pokemon-list-shinydynamaxperfect").style.display = "none";
    document.getElementById("pokemon-list-shinydynamax").style.display = "none";
    document.getElementById("pokemon-list-perfectdynamax").style.display = "none";
    document.getElementById("pokemon-list-specialbackgroundshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-locationbackgroundperfect").style.display = "none";
    document.getElementById("pokemon-list-locationbackground").style.display = "none";
    document.getElementById("pokemon-list-imperfect").style.display = "none";
    document.getElementById("pokemon-list-gigantamaxshiny").style.display = "none";
    document.getElementById("pokemon-list-purifiedperfect").style.display = "none";
    document.getElementById("pokemon-list-costumeshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-costumeperfect").style.display = "none";
    document.getElementById("pokemon-list-costume").style.display = "none";
    document.getElementById("pokemon-list-shinyshadowperfect").style.display = "none";
    document.getElementById("pokemon-list-shinyshadow").style.display = "none";
    document.getElementById("pokemon-list-perfectshadow").style.display = "none";
    document.getElementById("pokemon-list-specialbackgroundshiny").style.display = "none";
    document.getElementById("pokemon-list-locationbackgroundshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-imperfectshinyshadow").style.display = "none";
    document.getElementById("pokemon-list-gigantamaxperfectshiny").style.display = "none";
    document.getElementById("Bulbasaur-container").style.display = "none";
    document.getElementById("mega-container").style.display = "block";
    document.getElementById("Bot-container").style.display = "none";
}

function Perfect() {
    document.getElementById("pokemon-list").style.display = "none";
    document.getElementById("pokemon-list-perfect").style.display = "block";
    document.getElementById("pokemon-list-shadow").style.display = "none";
    document.getElementById("pokemon-list-dynamax").style.display = "none";
    document.getElementById("pokemon-list-lucky").style.display = "none";
    document.getElementById("pokemon-list-shiny").style.display = "none";
    document.getElementById("big-pokemoncount-container").style.display = "none";
    document.getElementById("title-container").style.display = "none";
    document.getElementById("pokemon-list-shinylucky").style.display = "none";
    document.getElementById("pokemon-list-shinyluckyperfect").style.display = "none";
    document.getElementById("pokemon-list-costumeshiny").style.display = "none";
    document.getElementById("pokemon-list-purifiedshiny").style.display = "none";
    document.getElementById("pokemon-list-gigantamax").style.display = "none";
    document.getElementById("pokemon-list-perfectlucky").style.display = "none";
    document.getElementById("pokemon-list-shinyperfect").style.display = "none";
    document.getElementById("pokemon-list-locationspecialbackgroundperfect").style.display = "none";
    document.getElementById("pokemon-list-locationspecialbackground").style.display = "none";
    document.getElementById("pokemon-list-locationbackgroundshiny").style.display = "none";
    document.getElementById("pokemon-list-imperfectshiny").style.display = "none";
    document.getElementById("pokemon-list-gigantamaxperfect").style.display = "none";
    document.getElementById("pokemon-list-purifiedshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-purified").style.display = "none";
    document.getElementById("pokemon-list-shinydynamaxperfect").style.display = "none";
    document.getElementById("pokemon-list-shinydynamax").style.display = "none";
    document.getElementById("pokemon-list-perfectdynamax").style.display = "none";
    document.getElementById("pokemon-list-specialbackgroundshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-locationbackgroundperfect").style.display = "none";
    document.getElementById("pokemon-list-locationbackground").style.display = "none";
    document.getElementById("pokemon-list-imperfect").style.display = "none";
    document.getElementById("pokemon-list-gigantamaxshiny").style.display = "none";
    document.getElementById("pokemon-list-purifiedperfect").style.display = "none";
    document.getElementById("pokemon-list-costumeshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-costumeperfect").style.display = "none";
    document.getElementById("pokemon-list-costume").style.display = "none";
    document.getElementById("pokemon-list-shinyshadowperfect").style.display = "none";
    document.getElementById("pokemon-list-shinyshadow").style.display = "none";
    document.getElementById("pokemon-list-perfectshadow").style.display = "none";
    document.getElementById("pokemon-list-specialbackgroundshiny").style.display = "none";
    document.getElementById("pokemon-list-locationbackgroundshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-imperfectshinyshadow").style.display = "none";
    document.getElementById("pokemon-list-gigantamaxperfectshiny").style.display = "none";
    document.getElementById("Bulbasaur-container").style.display = "none";
    document.getElementById("mega-container").style.display = "block";
    document.getElementById("Bot-container").style.display = "none";
}

function Shadow() {
    document.getElementById("pokemon-list").style.display = "none";
    document.getElementById("pokemon-list-perfect").style.display = "none";
    document.getElementById("pokemon-list-shadow").style.display = "block";
    document.getElementById("pokemon-list-dynamax").style.display = "none";
    document.getElementById("pokemon-list-lucky").style.display = "none";
    document.getElementById("pokemon-list-shiny").style.display = "none";
    document.getElementById("big-pokemoncount-container").style.display = "none";
    document.getElementById("title-container").style.display = "none";
    document.getElementById("pokemon-list-shinylucky").style.display = "none";
    document.getElementById("pokemon-list-shinyluckyperfect").style.display = "none";
    document.getElementById("pokemon-list-costumeshiny").style.display = "none";
    document.getElementById("pokemon-list-purifiedshiny").style.display = "none";
    document.getElementById("pokemon-list-gigantamax").style.display = "none";
    document.getElementById("pokemon-list-perfectlucky").style.display = "none";
    document.getElementById("pokemon-list-shinyperfect").style.display = "none";
    document.getElementById("pokemon-list-locationspecialbackgroundperfect").style.display = "none";
    document.getElementById("pokemon-list-locationspecialbackground").style.display = "none";
    document.getElementById("pokemon-list-locationbackgroundshiny").style.display = "none";
    document.getElementById("pokemon-list-imperfectshiny").style.display = "none";
    document.getElementById("pokemon-list-gigantamaxperfect").style.display = "none";
    document.getElementById("pokemon-list-purifiedshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-purified").style.display = "none";
    document.getElementById("pokemon-list-shinydynamaxperfect").style.display = "none";
    document.getElementById("pokemon-list-shinydynamax").style.display = "none";
    document.getElementById("pokemon-list-perfectdynamax").style.display = "none";
    document.getElementById("pokemon-list-specialbackgroundshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-locationbackgroundperfect").style.display = "none";
    document.getElementById("pokemon-list-locationbackground").style.display = "none";
    document.getElementById("pokemon-list-imperfect").style.display = "none";
    document.getElementById("pokemon-list-gigantamaxshiny").style.display = "none";
    document.getElementById("pokemon-list-purifiedperfect").style.display = "none";
    document.getElementById("pokemon-list-costumeshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-costumeperfect").style.display = "none";
    document.getElementById("pokemon-list-costume").style.display = "none";
    document.getElementById("pokemon-list-shinyshadowperfect").style.display = "none";
    document.getElementById("pokemon-list-shinyshadow").style.display = "none";
    document.getElementById("pokemon-list-perfectshadow").style.display = "none";
    document.getElementById("pokemon-list-specialbackgroundshiny").style.display = "none";
    document.getElementById("pokemon-list-locationbackgroundshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-imperfectshinyshadow").style.display = "none";
    document.getElementById("pokemon-list-gigantamaxperfectshiny").style.display = "none";
    document.getElementById("Bulbasaur-container").style.display = "none";
    document.getElementById("mega-container").style.display = "block";
    document.getElementById("Bot-container").style.display = "none";
}

function Dynamax() {
    document.getElementById("pokemon-list").style.display = "none";
    document.getElementById("pokemon-list-perfect").style.display = "none";
    document.getElementById("pokemon-list-shadow").style.display = "none";
    document.getElementById("pokemon-list-dynamax").style.display = "block";
    document.getElementById("pokemon-list-lucky").style.display = "none";
    document.getElementById("pokemon-list-shiny").style.display = "none";
    document.getElementById("big-pokemoncount-container").style.display = "none";
    document.getElementById("title-container").style.display = "none";
    document.getElementById("pokemon-list-shinylucky").style.display = "none";
    document.getElementById("pokemon-list-shinyluckyperfect").style.display = "none";
    document.getElementById("pokemon-list-costumeshiny").style.display = "none";
    document.getElementById("pokemon-list-purifiedshiny").style.display = "none";
    document.getElementById("pokemon-list-gigantamax").style.display = "none";
    document.getElementById("pokemon-list-perfectlucky").style.display = "none";
    document.getElementById("pokemon-list-shinyperfect").style.display = "none";
    document.getElementById("pokemon-list-locationspecialbackgroundperfect").style.display = "none";
    document.getElementById("pokemon-list-locationspecialbackground").style.display = "none";
    document.getElementById("pokemon-list-locationbackgroundshiny").style.display = "none";
    document.getElementById("pokemon-list-imperfectshiny").style.display = "none";
    document.getElementById("pokemon-list-gigantamaxperfect").style.display = "none";
    document.getElementById("pokemon-list-purifiedshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-purified").style.display = "none";
    document.getElementById("pokemon-list-shinydynamaxperfect").style.display = "none";
    document.getElementById("pokemon-list-shinydynamax").style.display = "none";
    document.getElementById("pokemon-list-perfectdynamax").style.display = "none";
    document.getElementById("pokemon-list-specialbackgroundshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-locationbackgroundperfect").style.display = "none";
    document.getElementById("pokemon-list-locationbackground").style.display = "none";
    document.getElementById("pokemon-list-imperfect").style.display = "none";
    document.getElementById("pokemon-list-gigantamaxshiny").style.display = "none";
    document.getElementById("pokemon-list-purifiedperfect").style.display = "none";
    document.getElementById("pokemon-list-costumeshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-costumeperfect").style.display = "none";
    document.getElementById("pokemon-list-costume").style.display = "none";
    document.getElementById("pokemon-list-shinyshadowperfect").style.display = "none";
    document.getElementById("pokemon-list-shinyshadow").style.display = "none";
    document.getElementById("pokemon-list-perfectshadow").style.display = "none";
    document.getElementById("pokemon-list-specialbackgroundshiny").style.display = "none";
    document.getElementById("pokemon-list-locationbackgroundshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-imperfectshinyshadow").style.display = "none";
    document.getElementById("pokemon-list-gigantamaxperfectshiny").style.display = "none";
    document.getElementById("Bulbasaur-container").style.display = "none";
    document.getElementById("mega-container").style.display = "block";
    document.getElementById("Bot-container").style.display = "none";
}

function Lucky() {
    document.getElementById("pokemon-list").style.display = "none";
    document.getElementById("pokemon-list-perfect").style.display = "none";
    document.getElementById("pokemon-list-shadow").style.display = "none";
    document.getElementById("pokemon-list-dynamax").style.display = "none";
    document.getElementById("pokemon-list-lucky").style.display = "block";
    document.getElementById("pokemon-list-shiny").style.display = "none";
    document.getElementById("big-pokemoncount-container").style.display = "none";
    document.getElementById("title-container").style.display = "none";
    document.getElementById("pokemon-list-shinylucky").style.display = "none";
    document.getElementById("pokemon-list-shinyluckyperfect").style.display = "none";
    document.getElementById("pokemon-list-costumeshiny").style.display = "none";
    document.getElementById("pokemon-list-purifiedshiny").style.display = "none";
    document.getElementById("pokemon-list-gigantamax").style.display = "none";
    document.getElementById("pokemon-list-perfectlucky").style.display = "none";
    document.getElementById("pokemon-list-shinyperfect").style.display = "none";
    document.getElementById("pokemon-list-locationspecialbackgroundperfect").style.display = "none";
    document.getElementById("pokemon-list-locationspecialbackground").style.display = "none";
    document.getElementById("pokemon-list-locationbackgroundshiny").style.display = "none";
    document.getElementById("pokemon-list-imperfectshiny").style.display = "none";
    document.getElementById("pokemon-list-gigantamaxperfect").style.display = "none";
    document.getElementById("pokemon-list-purifiedshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-purified").style.display = "none";
    document.getElementById("pokemon-list-shinydynamaxperfect").style.display = "none";
    document.getElementById("pokemon-list-shinydynamax").style.display = "none";
    document.getElementById("pokemon-list-perfectdynamax").style.display = "none";
    document.getElementById("pokemon-list-specialbackgroundshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-locationbackgroundperfect").style.display = "none";
    document.getElementById("pokemon-list-locationbackground").style.display = "none";
    document.getElementById("pokemon-list-imperfect").style.display = "none";
    document.getElementById("pokemon-list-gigantamaxshiny").style.display = "none";
    document.getElementById("pokemon-list-purifiedperfect").style.display = "none";
    document.getElementById("pokemon-list-costumeshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-costumeperfect").style.display = "none";
    document.getElementById("pokemon-list-costume").style.display = "none";
    document.getElementById("pokemon-list-shinyshadowperfect").style.display = "none";
    document.getElementById("pokemon-list-shinyshadow").style.display = "none";
    document.getElementById("pokemon-list-perfectshadow").style.display = "none";
    document.getElementById("pokemon-list-specialbackgroundshiny").style.display = "none";
    document.getElementById("pokemon-list-locationbackgroundshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-imperfectshinyshadow").style.display = "none";
    document.getElementById("pokemon-list-gigantamaxperfectshiny").style.display = "none";
    document.getElementById("Bulbasaur-container").style.display = "none";
    document.getElementById("mega-container").style.display = "block";
    document.getElementById("Bot-container").style.display = "none";
}

function Shiny() {
    document.getElementById("pokemon-list").style.display = "none";
    document.getElementById("pokemon-list-perfect").style.display = "none";
    document.getElementById("pokemon-list-shadow").style.display = "none";
    document.getElementById("pokemon-list-dynamax").style.display = "none";
    document.getElementById("pokemon-list-lucky").style.display = "none";
    document.getElementById("pokemon-list-shiny").style.display = "block";
    document.getElementById("big-pokemoncount-container").style.display = "none";
    document.getElementById("title-container").style.display = "none";
    document.getElementById("pokemon-list-shinylucky").style.display = "none";
    document.getElementById("pokemon-list-shinyluckyperfect").style.display = "none";
    document.getElementById("pokemon-list-costumeshiny").style.display = "none";
    document.getElementById("pokemon-list-purifiedshiny").style.display = "none";
    document.getElementById("pokemon-list-gigantamax").style.display = "none";
    document.getElementById("pokemon-list-perfectlucky").style.display = "none";
    document.getElementById("pokemon-list-shinyperfect").style.display = "none";
    document.getElementById("pokemon-list-locationspecialbackgroundperfect").style.display = "none";
    document.getElementById("pokemon-list-locationspecialbackground").style.display = "none";
    document.getElementById("pokemon-list-locationbackgroundshiny").style.display = "none";
    document.getElementById("pokemon-list-imperfectshiny").style.display = "none";
    document.getElementById("pokemon-list-gigantamaxperfect").style.display = "none";
    document.getElementById("pokemon-list-purifiedshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-purified").style.display = "none";
    document.getElementById("pokemon-list-shinydynamaxperfect").style.display = "none";
    document.getElementById("pokemon-list-shinydynamax").style.display = "none";
    document.getElementById("pokemon-list-perfectdynamax").style.display = "none";
    document.getElementById("pokemon-list-specialbackgroundshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-locationbackgroundperfect").style.display = "none";
    document.getElementById("pokemon-list-locationbackground").style.display = "none";
    document.getElementById("pokemon-list-imperfect").style.display = "none";
    document.getElementById("pokemon-list-gigantamaxshiny").style.display = "none";
    document.getElementById("pokemon-list-purifiedperfect").style.display = "none";
    document.getElementById("pokemon-list-costumeshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-costumeperfect").style.display = "none";
    document.getElementById("pokemon-list-costume").style.display = "none";
    document.getElementById("pokemon-list-shinyshadowperfect").style.display = "none";
    document.getElementById("pokemon-list-shinyshadow").style.display = "none";
    document.getElementById("pokemon-list-perfectshadow").style.display = "none";
    document.getElementById("pokemon-list-specialbackgroundshiny").style.display = "none";
    document.getElementById("pokemon-list-locationbackgroundshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-imperfectshinyshadow").style.display = "none";
    document.getElementById("pokemon-list-gigantamaxperfectshiny").style.display = "none";
    document.getElementById("Bulbasaur-container").style.display = "none";
    document.getElementById("mega-container").style.display = "block";
    document.getElementById("Bot-container").style.display = "none";
}

function ShinyLucky() {
    document.getElementById("pokemon-list").style.display = "none";
    document.getElementById("pokemon-list-perfect").style.display = "none";
    document.getElementById("pokemon-list-shadow").style.display = "none";
    document.getElementById("pokemon-list-dynamax").style.display = "none";
    document.getElementById("pokemon-list-lucky").style.display = "none";
    document.getElementById("pokemon-list-shiny").style.display = "none";
    document.getElementById("big-pokemoncount-container").style.display = "none";
    document.getElementById("title-container").style.display = "none";
    document.getElementById("pokemon-list-shinyluckyperfect").style.display = "none";
    document.getElementById("pokemon-list-costumeshiny").style.display = "none";
    document.getElementById("pokemon-list-purifiedshiny").style.display = "none";
    document.getElementById("pokemon-list-gigantamax").style.display = "none";
    document.getElementById("pokemon-list-perfectlucky").style.display = "none";
    document.getElementById("pokemon-list-shinyperfect").style.display = "none";
    document.getElementById("pokemon-list-locationspecialbackgroundperfect").style.display = "none";
    document.getElementById("pokemon-list-locationspecialbackground").style.display = "none";
    document.getElementById("pokemon-list-locationbackgroundshiny").style.display = "none";
    document.getElementById("pokemon-list-imperfectshiny").style.display = "none";
    document.getElementById("pokemon-list-gigantamaxperfect").style.display = "none";
    document.getElementById("pokemon-list-purifiedshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-purified").style.display = "none";
    document.getElementById("pokemon-list-shinydynamaxperfect").style.display = "none";
    document.getElementById("pokemon-list-shinydynamax").style.display = "none";
    document.getElementById("pokemon-list-perfectdynamax").style.display = "none";
    document.getElementById("pokemon-list-specialbackgroundshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-locationbackgroundperfect").style.display = "none";
    document.getElementById("pokemon-list-locationbackground").style.display = "none";
    document.getElementById("pokemon-list-imperfect").style.display = "none";
    document.getElementById("pokemon-list-gigantamaxshiny").style.display = "none";
    document.getElementById("pokemon-list-purifiedperfect").style.display = "none";
    document.getElementById("pokemon-list-costumeshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-costumeperfect").style.display = "none";
    document.getElementById("pokemon-list-costume").style.display = "none";
    document.getElementById("pokemon-list-shinyshadowperfect").style.display = "none";
    document.getElementById("pokemon-list-shinyshadow").style.display = "none";
    document.getElementById("pokemon-list-perfectshadow").style.display = "none";
    document.getElementById("pokemon-list-specialbackgroundshiny").style.display = "none";
    document.getElementById("pokemon-list-locationbackgroundshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-imperfectshinyshadow").style.display = "none";
    document.getElementById("pokemon-list-gigantamaxperfectshiny").style.display = "none";
    document.getElementById("pokemon-list-shinylucky").style.display = "block";
    document.getElementById("Bulbasaur-container").style.display = "none";
    document.getElementById("mega-container").style.display = "block";
    document.getElementById("Bot-container").style.display = "none";
}

function ShinyLuckyPerfect() {
    document.getElementById("pokemon-list").style.display = "none";
    document.getElementById("pokemon-list-perfect").style.display = "none";
    document.getElementById("pokemon-list-shadow").style.display = "none";
    document.getElementById("pokemon-list-dynamax").style.display = "none";
    document.getElementById("pokemon-list-lucky").style.display = "none";
    document.getElementById("pokemon-list-shiny").style.display = "none";
    document.getElementById("big-pokemoncount-container").style.display = "none";
    document.getElementById("title-container").style.display = "none";
    document.getElementById("pokemon-list-shinylucky").style.display = "none";
    document.getElementById("pokemon-list-costumeshiny").style.display = "none";
    document.getElementById("pokemon-list-purifiedshiny").style.display = "none";
    document.getElementById("pokemon-list-gigantamax").style.display = "none";
    document.getElementById("pokemon-list-perfectlucky").style.display = "none";
    document.getElementById("pokemon-list-shinyperfect").style.display = "none";
    document.getElementById("pokemon-list-locationspecialbackgroundperfect").style.display = "none";
    document.getElementById("pokemon-list-locationspecialbackground").style.display = "none";
    document.getElementById("pokemon-list-locationbackgroundshiny").style.display = "none";
    document.getElementById("pokemon-list-imperfectshiny").style.display = "none";
    document.getElementById("pokemon-list-gigantamaxperfect").style.display = "none";
    document.getElementById("pokemon-list-purifiedshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-purified").style.display = "none";
    document.getElementById("pokemon-list-shinydynamaxperfect").style.display = "none";
    document.getElementById("pokemon-list-shinydynamax").style.display = "none";
    document.getElementById("pokemon-list-perfectdynamax").style.display = "none";
    document.getElementById("pokemon-list-specialbackgroundshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-locationbackgroundperfect").style.display = "none";
    document.getElementById("pokemon-list-locationbackground").style.display = "none";
    document.getElementById("pokemon-list-imperfect").style.display = "none";
    document.getElementById("pokemon-list-gigantamaxshiny").style.display = "none";
    document.getElementById("pokemon-list-purifiedperfect").style.display = "none";
    document.getElementById("pokemon-list-costumeshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-costumeperfect").style.display = "none";
    document.getElementById("pokemon-list-costume").style.display = "none";
    document.getElementById("pokemon-list-shinyshadowperfect").style.display = "none";
    document.getElementById("pokemon-list-shinyshadow").style.display = "none";
    document.getElementById("pokemon-list-perfectshadow").style.display = "none";
    document.getElementById("pokemon-list-specialbackgroundshiny").style.display = "none";
    document.getElementById("pokemon-list-locationbackgroundshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-imperfectshinyshadow").style.display = "none";
    document.getElementById("pokemon-list-gigantamaxperfectshiny").style.display = "none";
    document.getElementById("pokemon-list-shinyluckyperfect").style.display = "block";
    document.getElementById("Bulbasaur-container").style.display = "none";
    document.getElementById("mega-container").style.display = "block";
    document.getElementById("Bot-container").style.display = "none";
}

function ShinyCostume() {
    document.getElementById("pokemon-list").style.display = "none";
    document.getElementById("pokemon-list-perfect").style.display = "none";
    document.getElementById("pokemon-list-shadow").style.display = "none";
    document.getElementById("pokemon-list-dynamax").style.display = "none";
    document.getElementById("pokemon-list-lucky").style.display = "none";
    document.getElementById("pokemon-list-shiny").style.display = "none";
    document.getElementById("big-pokemoncount-container").style.display = "none";
    document.getElementById("title-container").style.display = "none";
    document.getElementById("pokemon-list-shinylucky").style.display = "none";
    document.getElementById("pokemon-list-shinyluckyperfect").style.display = "none";
    document.getElementById("pokemon-list-purifiedshiny").style.display = "none";
    document.getElementById("pokemon-list-gigantamax").style.display = "none";
    document.getElementById("pokemon-list-perfectlucky").style.display = "none";
    document.getElementById("pokemon-list-shinyperfect").style.display = "none";
    document.getElementById("pokemon-list-locationspecialbackgroundperfect").style.display = "none";
    document.getElementById("pokemon-list-locationspecialbackground").style.display = "none";
    document.getElementById("pokemon-list-locationbackgroundshiny").style.display = "none";
    document.getElementById("pokemon-list-imperfectshiny").style.display = "none";
    document.getElementById("pokemon-list-gigantamaxperfect").style.display = "none";
    document.getElementById("pokemon-list-purifiedshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-purified").style.display = "none";
    document.getElementById("pokemon-list-shinydynamaxperfect").style.display = "none";
    document.getElementById("pokemon-list-shinydynamax").style.display = "none";
    document.getElementById("pokemon-list-perfectdynamax").style.display = "none";
    document.getElementById("pokemon-list-specialbackgroundshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-locationbackgroundperfect").style.display = "none";
    document.getElementById("pokemon-list-locationbackground").style.display = "none";
    document.getElementById("pokemon-list-imperfect").style.display = "none";
    document.getElementById("pokemon-list-gigantamaxshiny").style.display = "none";
    document.getElementById("pokemon-list-purifiedperfect").style.display = "none";
    document.getElementById("pokemon-list-costumeshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-costumeperfect").style.display = "none";
    document.getElementById("pokemon-list-costume").style.display = "none";
    document.getElementById("pokemon-list-shinyshadowperfect").style.display = "none";
    document.getElementById("pokemon-list-shinyshadow").style.display = "none";
    document.getElementById("pokemon-list-perfectshadow").style.display = "none";
    document.getElementById("pokemon-list-specialbackgroundshiny").style.display = "none";
    document.getElementById("pokemon-list-locationbackgroundshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-imperfectshinyshadow").style.display = "none";
    document.getElementById("pokemon-list-gigantamaxperfectshiny").style.display = "none";
    document.getElementById("pokemon-list-costumeshiny").style.display = "block";
    document.getElementById("Bulbasaur-container").style.display = "none";
    document.getElementById("mega-container").style.display = "block";
    document.getElementById("Bot-container").style.display = "none";
}

function ShinyPurified() {
    document.getElementById("pokemon-list").style.display = "none";
    document.getElementById("pokemon-list-perfect").style.display = "none";
    document.getElementById("pokemon-list-shadow").style.display = "none";
    document.getElementById("pokemon-list-dynamax").style.display = "none";
    document.getElementById("pokemon-list-lucky").style.display = "none";
    document.getElementById("pokemon-list-shiny").style.display = "none";
    document.getElementById("big-pokemoncount-container").style.display = "none";
    document.getElementById("title-container").style.display = "none";
    document.getElementById("pokemon-list-shinylucky").style.display = "none";
    document.getElementById("pokemon-list-shinyluckyperfect").style.display = "none";
    document.getElementById("pokemon-list-costumeshiny").style.display = "none";
    document.getElementById("pokemon-list-gigantamax").style.display = "none";
    document.getElementById("pokemon-list-perfectlucky").style.display = "none";
    document.getElementById("pokemon-list-shinyperfect").style.display = "none";
    document.getElementById("pokemon-list-locationspecialbackgroundperfect").style.display = "none";
    document.getElementById("pokemon-list-locationspecialbackground").style.display = "none";
    document.getElementById("pokemon-list-locationbackgroundshiny").style.display = "none";
    document.getElementById("pokemon-list-imperfectshiny").style.display = "none";
    document.getElementById("pokemon-list-gigantamaxperfect").style.display = "none";
    document.getElementById("pokemon-list-purifiedshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-purified").style.display = "none";
    document.getElementById("pokemon-list-shinydynamaxperfect").style.display = "none";
    document.getElementById("pokemon-list-shinydynamax").style.display = "none";
    document.getElementById("pokemon-list-perfectdynamax").style.display = "none";
    document.getElementById("pokemon-list-specialbackgroundshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-locationbackgroundperfect").style.display = "none";
    document.getElementById("pokemon-list-locationbackground").style.display = "none";
    document.getElementById("pokemon-list-imperfect").style.display = "none";
    document.getElementById("pokemon-list-gigantamaxshiny").style.display = "none";
    document.getElementById("pokemon-list-purifiedperfect").style.display = "none";
    document.getElementById("pokemon-list-costumeshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-costumeperfect").style.display = "none";
    document.getElementById("pokemon-list-costume").style.display = "none";
    document.getElementById("pokemon-list-shinyshadowperfect").style.display = "none";
    document.getElementById("pokemon-list-shinyshadow").style.display = "none";
    document.getElementById("pokemon-list-perfectshadow").style.display = "none";
    document.getElementById("pokemon-list-specialbackgroundshiny").style.display = "none";
    document.getElementById("pokemon-list-locationbackgroundshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-imperfectshinyshadow").style.display = "none";
    document.getElementById("pokemon-list-gigantamaxperfectshiny").style.display = "none";
    document.getElementById("pokemon-list-purifiedshiny").style.display = "block";
    document.getElementById("Bulbasaur-container").style.display = "none";
    document.getElementById("mega-container").style.display = "block";
    document.getElementById("Bot-container").style.display = "none";
}

function Gigantamax() {
    document.getElementById("pokemon-list").style.display = "none";
    document.getElementById("pokemon-list-perfect").style.display = "none";
    document.getElementById("pokemon-list-shadow").style.display = "none";
    document.getElementById("pokemon-list-dynamax").style.display = "none";
    document.getElementById("pokemon-list-lucky").style.display = "none";
    document.getElementById("pokemon-list-shiny").style.display = "none";
    document.getElementById("big-pokemoncount-container").style.display = "none";
    document.getElementById("title-container").style.display = "none";
    document.getElementById("pokemon-list-shinylucky").style.display = "none";
    document.getElementById("pokemon-list-shinyluckyperfect").style.display = "none";
    document.getElementById("pokemon-list-costumeshiny").style.display = "none";
    document.getElementById("pokemon-list-purifiedshiny").style.display = "none";
    document.getElementById("pokemon-list-perfectlucky").style.display = "none";
    document.getElementById("pokemon-list-shinyperfect").style.display = "none";
    document.getElementById("pokemon-list-locationspecialbackgroundperfect").style.display = "none";
    document.getElementById("pokemon-list-locationspecialbackground").style.display = "none";
    document.getElementById("pokemon-list-locationbackgroundshiny").style.display = "none";
    document.getElementById("pokemon-list-imperfectshiny").style.display = "none";
    document.getElementById("pokemon-list-gigantamaxperfect").style.display = "none";
    document.getElementById("pokemon-list-purifiedshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-purified").style.display = "none";
    document.getElementById("pokemon-list-shinydynamaxperfect").style.display = "none";
    document.getElementById("pokemon-list-shinydynamax").style.display = "none";
    document.getElementById("pokemon-list-perfectdynamax").style.display = "none";
    document.getElementById("pokemon-list-specialbackgroundshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-locationbackgroundperfect").style.display = "none";
    document.getElementById("pokemon-list-locationbackground").style.display = "none";
    document.getElementById("pokemon-list-imperfect").style.display = "none";
    document.getElementById("pokemon-list-gigantamaxshiny").style.display = "none";
    document.getElementById("pokemon-list-purifiedperfect").style.display = "none";
    document.getElementById("pokemon-list-costumeshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-costumeperfect").style.display = "none";
    document.getElementById("pokemon-list-costume").style.display = "none";
    document.getElementById("pokemon-list-shinyshadowperfect").style.display = "none";
    document.getElementById("pokemon-list-shinyshadow").style.display = "none";
    document.getElementById("pokemon-list-perfectshadow").style.display = "none";
    document.getElementById("pokemon-list-specialbackgroundshiny").style.display = "none";
    document.getElementById("pokemon-list-locationbackgroundshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-imperfectshinyshadow").style.display = "none";
    document.getElementById("pokemon-list-gigantamaxperfectshiny").style.display = "none";
    document.getElementById("pokemon-list-gigantamax").style.display = "block";
    document.getElementById("Bulbasaur-container").style.display = "none";
    document.getElementById("mega-container").style.display = "block";
    document.getElementById("Bot-container").style.display = "none";
}

function ShinyGigantamaxPerfect() {
    document.getElementById("pokemon-list").style.display = "none";
    document.getElementById("pokemon-list-perfect").style.display = "none";
    document.getElementById("pokemon-list-shadow").style.display = "none";
    document.getElementById("pokemon-list-dynamax").style.display = "none";
    document.getElementById("pokemon-list-lucky").style.display = "none";
    document.getElementById("pokemon-list-shiny").style.display = "none";
    document.getElementById("big-pokemoncount-container").style.display = "none";
    document.getElementById("title-container").style.display = "none";
    document.getElementById("pokemon-list-shinylucky").style.display = "none";
    document.getElementById("pokemon-list-shinyluckyperfect").style.display = "none";
    document.getElementById("pokemon-list-costumeshiny").style.display = "none";
    document.getElementById("pokemon-list-purifiedshiny").style.display = "none";
    document.getElementById("pokemon-list-gigantamax").style.display = "none";
    document.getElementById("pokemon-list-perfectlucky").style.display = "none";
    document.getElementById("pokemon-list-shinyperfect").style.display = "none";
    document.getElementById("pokemon-list-locationspecialbackgroundperfect").style.display = "none";
    document.getElementById("pokemon-list-locationspecialbackground").style.display = "none";
    document.getElementById("pokemon-list-locationbackgroundshiny").style.display = "none";
    document.getElementById("pokemon-list-imperfectshiny").style.display = "none";
    document.getElementById("pokemon-list-gigantamaxperfect").style.display = "none";
    document.getElementById("pokemon-list-purifiedshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-purified").style.display = "none";
    document.getElementById("pokemon-list-shinydynamaxperfect").style.display = "none";
    document.getElementById("pokemon-list-shinydynamax").style.display = "none";
    document.getElementById("pokemon-list-perfectdynamax").style.display = "none";
    document.getElementById("pokemon-list-specialbackgroundshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-locationbackgroundperfect").style.display = "none";
    document.getElementById("pokemon-list-locationbackground").style.display = "none";
    document.getElementById("pokemon-list-imperfect").style.display = "none";
    document.getElementById("pokemon-list-gigantamaxshiny").style.display = "none";
    document.getElementById("pokemon-list-purifiedperfect").style.display = "none";
    document.getElementById("pokemon-list-costumeshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-costumeperfect").style.display = "none";
    document.getElementById("pokemon-list-costume").style.display = "none";
    document.getElementById("pokemon-list-shinyshadowperfect").style.display = "none";
    document.getElementById("pokemon-list-shinyshadow").style.display = "none";
    document.getElementById("pokemon-list-perfectshadow").style.display = "none";
    document.getElementById("pokemon-list-specialbackgroundshiny").style.display = "none";
    document.getElementById("pokemon-list-locationbackgroundshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-imperfectshinyshadow").style.display = "none";
    document.getElementById("pokemon-list-gigantamaxperfectshiny").style.display = "block";
    document.getElementById("Bulbasaur-container").style.display = "none";
    document.getElementById("mega-container").style.display = "block";
    document.getElementById("Bot-container").style.display = "none";
}

function ShinyImperfectShadow() {
    document.getElementById("pokemon-list").style.display = "none";
    document.getElementById("pokemon-list-perfect").style.display = "none";
    document.getElementById("pokemon-list-shadow").style.display = "none";
    document.getElementById("pokemon-list-dynamax").style.display = "none";
    document.getElementById("pokemon-list-lucky").style.display = "none";
    document.getElementById("pokemon-list-shiny").style.display = "none";
    document.getElementById("big-pokemoncount-container").style.display = "none";
    document.getElementById("title-container").style.display = "none";
    document.getElementById("pokemon-list-shinylucky").style.display = "none";
    document.getElementById("pokemon-list-shinyluckyperfect").style.display = "none";
    document.getElementById("pokemon-list-costumeshiny").style.display = "none";
    document.getElementById("pokemon-list-purifiedshiny").style.display = "none";
    document.getElementById("pokemon-list-gigantamax").style.display = "none";
    document.getElementById("pokemon-list-perfectlucky").style.display = "none";
    document.getElementById("pokemon-list-shinyperfect").style.display = "none";
    document.getElementById("pokemon-list-locationspecialbackgroundperfect").style.display = "none";
    document.getElementById("pokemon-list-locationspecialbackground").style.display = "none";
    document.getElementById("pokemon-list-locationbackgroundshiny").style.display = "none";
    document.getElementById("pokemon-list-imperfectshiny").style.display = "none";
    document.getElementById("pokemon-list-gigantamaxperfect").style.display = "none";
    document.getElementById("pokemon-list-purifiedshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-purified").style.display = "none";
    document.getElementById("pokemon-list-shinydynamaxperfect").style.display = "none";
    document.getElementById("pokemon-list-shinydynamax").style.display = "none";
    document.getElementById("pokemon-list-perfectdynamax").style.display = "none";
    document.getElementById("pokemon-list-specialbackgroundshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-locationbackgroundperfect").style.display = "none";
    document.getElementById("pokemon-list-locationbackground").style.display = "none";
    document.getElementById("pokemon-list-imperfect").style.display = "none";
    document.getElementById("pokemon-list-gigantamaxshiny").style.display = "none";
    document.getElementById("pokemon-list-purifiedperfect").style.display = "none";
    document.getElementById("pokemon-list-costumeshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-costumeperfect").style.display = "none";
    document.getElementById("pokemon-list-costume").style.display = "none";
    document.getElementById("pokemon-list-shinyshadowperfect").style.display = "none";
    document.getElementById("pokemon-list-shinyshadow").style.display = "none";
    document.getElementById("pokemon-list-perfectshadow").style.display = "none";
    document.getElementById("pokemon-list-specialbackgroundshiny").style.display = "none";
    document.getElementById("pokemon-list-locationbackgroundshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-gigantamaxperfectshiny").style.display = "none";
    document.getElementById("pokemon-list-imperfectshinyshadow").style.display = "block";
    document.getElementById("Bulbasaur-container").style.display = "none";
    document.getElementById("mega-container").style.display = "block";
    document.getElementById("Bot-container").style.display = "none";
}

function ShinyLocationPerfectBackground() {
    document.getElementById("pokemon-list").style.display = "none";
    document.getElementById("pokemon-list-perfect").style.display = "none";
    document.getElementById("pokemon-list-shadow").style.display = "none";
    document.getElementById("pokemon-list-dynamax").style.display = "none";
    document.getElementById("pokemon-list-lucky").style.display = "none";
    document.getElementById("pokemon-list-shiny").style.display = "none";
    document.getElementById("big-pokemoncount-container").style.display = "none";
    document.getElementById("title-container").style.display = "none";
    document.getElementById("pokemon-list-shinylucky").style.display = "none";
    document.getElementById("pokemon-list-shinyluckyperfect").style.display = "none";
    document.getElementById("pokemon-list-costumeshiny").style.display = "none";
    document.getElementById("pokemon-list-purifiedshiny").style.display = "none";
    document.getElementById("pokemon-list-gigantamax").style.display = "none";
    document.getElementById("pokemon-list-perfectlucky").style.display = "none";
    document.getElementById("pokemon-list-shinyperfect").style.display = "none";
    document.getElementById("pokemon-list-locationspecialbackgroundperfect").style.display = "none";
    document.getElementById("pokemon-list-locationspecialbackground").style.display = "none";
    document.getElementById("pokemon-list-locationbackgroundshiny").style.display = "none";
    document.getElementById("pokemon-list-imperfectshiny").style.display = "none";
    document.getElementById("pokemon-list-gigantamaxperfect").style.display = "none";
    document.getElementById("pokemon-list-purifiedshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-purified").style.display = "none";
    document.getElementById("pokemon-list-shinydynamaxperfect").style.display = "none";
    document.getElementById("pokemon-list-shinydynamax").style.display = "none";
    document.getElementById("pokemon-list-perfectdynamax").style.display = "none";
    document.getElementById("pokemon-list-specialbackgroundshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-locationbackgroundperfect").style.display = "none";
    document.getElementById("pokemon-list-locationbackground").style.display = "none";
    document.getElementById("pokemon-list-imperfect").style.display = "none";
    document.getElementById("pokemon-list-gigantamaxshiny").style.display = "none";
    document.getElementById("pokemon-list-purifiedperfect").style.display = "none";
    document.getElementById("pokemon-list-costumeshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-costumeperfect").style.display = "none";
    document.getElementById("pokemon-list-costume").style.display = "none";
    document.getElementById("pokemon-list-shinyshadowperfect").style.display = "none";
    document.getElementById("pokemon-list-shinyshadow").style.display = "none";
    document.getElementById("pokemon-list-perfectshadow").style.display = "none";
    document.getElementById("pokemon-list-specialbackgroundshiny").style.display = "none";
    document.getElementById("pokemon-list-imperfectshinyshadow").style.display = "none";
    document.getElementById("pokemon-list-gigantamaxperfectshiny").style.display = "none";
    document.getElementById("pokemon-list-locationbackgroundshinyperfect").style.display = "block";
    document.getElementById("Bulbasaur-container").style.display = "none";
    document.getElementById("mega-container").style.display = "block";
    document.getElementById("Bot-container").style.display = "none";
}

function ShinySpecialBackground() {
    document.getElementById("pokemon-list").style.display = "none";
    document.getElementById("pokemon-list-perfect").style.display = "none";
    document.getElementById("pokemon-list-shadow").style.display = "none";
    document.getElementById("pokemon-list-dynamax").style.display = "none";
    document.getElementById("pokemon-list-lucky").style.display = "none";
    document.getElementById("pokemon-list-shiny").style.display = "none";
    document.getElementById("big-pokemoncount-container").style.display = "none";
    document.getElementById("title-container").style.display = "none";
    document.getElementById("pokemon-list-shinylucky").style.display = "none";
    document.getElementById("pokemon-list-shinyluckyperfect").style.display = "none";
    document.getElementById("pokemon-list-costumeshiny").style.display = "none";
    document.getElementById("pokemon-list-purifiedshiny").style.display = "none";
    document.getElementById("pokemon-list-gigantamax").style.display = "none";
    document.getElementById("pokemon-list-perfectlucky").style.display = "none";
    document.getElementById("pokemon-list-shinyperfect").style.display = "none";
    document.getElementById("pokemon-list-locationspecialbackgroundperfect").style.display = "none";
    document.getElementById("pokemon-list-locationspecialbackground").style.display = "none";
    document.getElementById("pokemon-list-locationbackgroundshiny").style.display = "none";
    document.getElementById("pokemon-list-imperfectshiny").style.display = "none";
    document.getElementById("pokemon-list-gigantamaxperfect").style.display = "none";
    document.getElementById("pokemon-list-purifiedshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-purified").style.display = "none";
    document.getElementById("pokemon-list-shinydynamaxperfect").style.display = "none";
    document.getElementById("pokemon-list-shinydynamax").style.display = "none";
    document.getElementById("pokemon-list-perfectdynamax").style.display = "none";
    document.getElementById("pokemon-list-specialbackgroundshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-locationbackgroundperfect").style.display = "none";
    document.getElementById("pokemon-list-locationbackground").style.display = "none";
    document.getElementById("pokemon-list-imperfect").style.display = "none";
    document.getElementById("pokemon-list-gigantamaxshiny").style.display = "none";
    document.getElementById("pokemon-list-purifiedperfect").style.display = "none";
    document.getElementById("pokemon-list-costumeshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-costumeperfect").style.display = "none";
    document.getElementById("pokemon-list-costume").style.display = "none";
    document.getElementById("pokemon-list-shinyshadowperfect").style.display = "none";
    document.getElementById("pokemon-list-shinyshadow").style.display = "none";
    document.getElementById("pokemon-list-perfectshadow").style.display = "none";
    document.getElementById("pokemon-list-locationbackgroundshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-imperfectshinyshadow").style.display = "none";
    document.getElementById("pokemon-list-gigantamaxperfectshiny").style.display = "none";
    document.getElementById("pokemon-list-specialbackgroundshiny").style.display = "block";
    document.getElementById("Bulbasaur-container").style.display = "none";
    document.getElementById("mega-container").style.display = "block";
    document.getElementById("Bot-container").style.display = "none";
}

function ShadowPerfect() {
    document.getElementById("pokemon-list").style.display = "none";
    document.getElementById("pokemon-list-perfect").style.display = "none";
    document.getElementById("pokemon-list-shadow").style.display = "none";
    document.getElementById("pokemon-list-dynamax").style.display = "none";
    document.getElementById("pokemon-list-lucky").style.display = "none";
    document.getElementById("pokemon-list-shiny").style.display = "none";
    document.getElementById("big-pokemoncount-container").style.display = "none";
    document.getElementById("title-container").style.display = "none";
    document.getElementById("pokemon-list-shinylucky").style.display = "none";
    document.getElementById("pokemon-list-shinyluckyperfect").style.display = "none";
    document.getElementById("pokemon-list-costumeshiny").style.display = "none";
    document.getElementById("pokemon-list-purifiedshiny").style.display = "none";
    document.getElementById("pokemon-list-gigantamax").style.display = "none";
    document.getElementById("pokemon-list-perfectlucky").style.display = "none";
    document.getElementById("pokemon-list-shinyperfect").style.display = "none";
    document.getElementById("pokemon-list-locationspecialbackgroundperfect").style.display = "none";
    document.getElementById("pokemon-list-locationspecialbackground").style.display = "none";
    document.getElementById("pokemon-list-locationbackgroundshiny").style.display = "none";
    document.getElementById("pokemon-list-imperfectshiny").style.display = "none";
    document.getElementById("pokemon-list-gigantamaxperfect").style.display = "none";
    document.getElementById("pokemon-list-purifiedshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-purified").style.display = "none";
    document.getElementById("pokemon-list-shinydynamaxperfect").style.display = "none";
    document.getElementById("pokemon-list-shinydynamax").style.display = "none";
    document.getElementById("pokemon-list-perfectdynamax").style.display = "none";
    document.getElementById("pokemon-list-specialbackgroundshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-locationbackgroundperfect").style.display = "none";
    document.getElementById("pokemon-list-locationbackground").style.display = "none";
    document.getElementById("pokemon-list-imperfect").style.display = "none";
    document.getElementById("pokemon-list-gigantamaxshiny").style.display = "none";
    document.getElementById("pokemon-list-purifiedperfect").style.display = "none";
    document.getElementById("pokemon-list-costumeshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-costumeperfect").style.display = "none";
    document.getElementById("pokemon-list-costume").style.display = "none";
    document.getElementById("pokemon-list-shinyshadowperfect").style.display = "none";
    document.getElementById("pokemon-list-shinyshadow").style.display = "none";
    document.getElementById("pokemon-list-specialbackgroundshiny").style.display = "none";
    document.getElementById("pokemon-list-locationbackgroundshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-imperfectshinyshadow").style.display = "none";
    document.getElementById("pokemon-list-gigantamaxperfectshiny").style.display = "none";
    document.getElementById("pokemon-list-perfectshadow").style.display = "block";
    document.getElementById("Bulbasaur-container").style.display = "none";
    document.getElementById("mega-container").style.display = "block";
    document.getElementById("Bot-container").style.display = "none";
}

function ShinyShadow() {
    document.getElementById("pokemon-list").style.display = "none";
    document.getElementById("pokemon-list-perfect").style.display = "none";
    document.getElementById("pokemon-list-shadow").style.display = "none";
    document.getElementById("pokemon-list-dynamax").style.display = "none";
    document.getElementById("pokemon-list-lucky").style.display = "none";
    document.getElementById("pokemon-list-shiny").style.display = "none";
    document.getElementById("big-pokemoncount-container").style.display = "none";
    document.getElementById("title-container").style.display = "none";
    document.getElementById("pokemon-list-shinylucky").style.display = "none";
    document.getElementById("pokemon-list-shinyluckyperfect").style.display = "none";
    document.getElementById("pokemon-list-costumeshiny").style.display = "none";
    document.getElementById("pokemon-list-purifiedshiny").style.display = "none";
    document.getElementById("pokemon-list-gigantamax").style.display = "none";
    document.getElementById("pokemon-list-perfectlucky").style.display = "none";
    document.getElementById("pokemon-list-shinyperfect").style.display = "none";
    document.getElementById("pokemon-list-locationspecialbackgroundperfect").style.display = "none";
    document.getElementById("pokemon-list-locationspecialbackground").style.display = "none";
    document.getElementById("pokemon-list-locationbackgroundshiny").style.display = "none";
    document.getElementById("pokemon-list-imperfectshiny").style.display = "none";
    document.getElementById("pokemon-list-gigantamaxperfect").style.display = "none";
    document.getElementById("pokemon-list-purifiedshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-purified").style.display = "none";
    document.getElementById("pokemon-list-shinydynamaxperfect").style.display = "none";
    document.getElementById("pokemon-list-shinydynamax").style.display = "none";
    document.getElementById("pokemon-list-perfectdynamax").style.display = "none";
    document.getElementById("pokemon-list-specialbackgroundshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-locationbackgroundperfect").style.display = "none";
    document.getElementById("pokemon-list-locationbackground").style.display = "none";
    document.getElementById("pokemon-list-imperfect").style.display = "none";
    document.getElementById("pokemon-list-gigantamaxshiny").style.display = "none";
    document.getElementById("pokemon-list-purifiedperfect").style.display = "none";
    document.getElementById("pokemon-list-costumeshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-costumeperfect").style.display = "none";
    document.getElementById("pokemon-list-costume").style.display = "none";
    document.getElementById("pokemon-list-shinyshadowperfect").style.display = "none";
    document.getElementById("pokemon-list-perfectshadow").style.display = "none";
    document.getElementById("pokemon-list-specialbackgroundshiny").style.display = "none";
    document.getElementById("pokemon-list-locationbackgroundshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-imperfectshinyshadow").style.display = "none";
    document.getElementById("pokemon-list-gigantamaxperfectshiny").style.display = "none";
    document.getElementById("pokemon-list-shinyshadow").style.display = "block";
    document.getElementById("Bulbasaur-container").style.display = "none";
    document.getElementById("mega-container").style.display = "block";
    document.getElementById("Bot-container").style.display = "none";
}

function ShinyShadowPerfect() {
    document.getElementById("pokemon-list").style.display = "none";
    document.getElementById("pokemon-list-perfect").style.display = "none";
    document.getElementById("pokemon-list-shadow").style.display = "none";
    document.getElementById("pokemon-list-dynamax").style.display = "none";
    document.getElementById("pokemon-list-lucky").style.display = "none";
    document.getElementById("pokemon-list-shiny").style.display = "none";
    document.getElementById("big-pokemoncount-container").style.display = "none";
    document.getElementById("title-container").style.display = "none";
    document.getElementById("pokemon-list-shinylucky").style.display = "none";
    document.getElementById("pokemon-list-shinyluckyperfect").style.display = "none";
    document.getElementById("pokemon-list-costumeshiny").style.display = "none";
    document.getElementById("pokemon-list-purifiedshiny").style.display = "none";
    document.getElementById("pokemon-list-gigantamax").style.display = "none";
    document.getElementById("pokemon-list-perfectlucky").style.display = "none";
    document.getElementById("pokemon-list-shinyperfect").style.display = "none";
    document.getElementById("pokemon-list-locationspecialbackgroundperfect").style.display = "none";
    document.getElementById("pokemon-list-locationspecialbackground").style.display = "none";
    document.getElementById("pokemon-list-locationbackgroundshiny").style.display = "none";
    document.getElementById("pokemon-list-imperfectshiny").style.display = "none";
    document.getElementById("pokemon-list-gigantamaxperfect").style.display = "none";
    document.getElementById("pokemon-list-purifiedshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-purified").style.display = "none";
    document.getElementById("pokemon-list-shinydynamaxperfect").style.display = "none";
    document.getElementById("pokemon-list-shinydynamax").style.display = "none";
    document.getElementById("pokemon-list-perfectdynamax").style.display = "none";
    document.getElementById("pokemon-list-specialbackgroundshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-locationbackgroundperfect").style.display = "none";
    document.getElementById("pokemon-list-locationbackground").style.display = "none";
    document.getElementById("pokemon-list-imperfect").style.display = "none";
    document.getElementById("pokemon-list-gigantamaxshiny").style.display = "none";
    document.getElementById("pokemon-list-purifiedperfect").style.display = "none";
    document.getElementById("pokemon-list-costumeshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-costumeperfect").style.display = "none";
    document.getElementById("pokemon-list-costume").style.display = "none";
    document.getElementById("pokemon-list-shinyshadow").style.display = "none";
    document.getElementById("pokemon-list-perfectshadow").style.display = "none";
    document.getElementById("pokemon-list-specialbackgroundshiny").style.display = "none";
    document.getElementById("pokemon-list-locationbackgroundshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-imperfectshinyshadow").style.display = "none";
    document.getElementById("pokemon-list-gigantamaxperfectshiny").style.display = "none";
    document.getElementById("pokemon-list-shinyshadowperfect").style.display = "block";
    document.getElementById("Bulbasaur-container").style.display = "none";
    document.getElementById("mega-container").style.display = "block";
    document.getElementById("Bot-container").style.display = "none";
}

function Costume() {
    document.getElementById("pokemon-list").style.display = "none";
    document.getElementById("pokemon-list-perfect").style.display = "none";
    document.getElementById("pokemon-list-shadow").style.display = "none";
    document.getElementById("pokemon-list-dynamax").style.display = "none";
    document.getElementById("pokemon-list-lucky").style.display = "none";
    document.getElementById("pokemon-list-shiny").style.display = "none";
    document.getElementById("big-pokemoncount-container").style.display = "none";
    document.getElementById("title-container").style.display = "none";
    document.getElementById("pokemon-list-shinylucky").style.display = "none";
    document.getElementById("pokemon-list-shinyluckyperfect").style.display = "none";
    document.getElementById("pokemon-list-costumeshiny").style.display = "none";
    document.getElementById("pokemon-list-purifiedshiny").style.display = "none";
    document.getElementById("pokemon-list-gigantamax").style.display = "none";
    document.getElementById("pokemon-list-perfectlucky").style.display = "none";
    document.getElementById("pokemon-list-shinyperfect").style.display = "none";
    document.getElementById("pokemon-list-locationspecialbackgroundperfect").style.display = "none";
    document.getElementById("pokemon-list-locationspecialbackground").style.display = "none";
    document.getElementById("pokemon-list-locationbackgroundshiny").style.display = "none";
    document.getElementById("pokemon-list-imperfectshiny").style.display = "none";
    document.getElementById("pokemon-list-gigantamaxperfect").style.display = "none";
    document.getElementById("pokemon-list-purifiedshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-purified").style.display = "none";
    document.getElementById("pokemon-list-shinydynamaxperfect").style.display = "none";
    document.getElementById("pokemon-list-shinydynamax").style.display = "none";
    document.getElementById("pokemon-list-perfectdynamax").style.display = "none";
    document.getElementById("pokemon-list-specialbackgroundshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-locationbackgroundperfect").style.display = "none";
    document.getElementById("pokemon-list-locationbackground").style.display = "none";
    document.getElementById("pokemon-list-imperfect").style.display = "none";
    document.getElementById("pokemon-list-gigantamaxshiny").style.display = "none";
    document.getElementById("pokemon-list-purifiedperfect").style.display = "none";
    document.getElementById("pokemon-list-costumeshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-costumeperfect").style.display = "none";
    document.getElementById("pokemon-list-shinyshadowperfect").style.display = "none";
    document.getElementById("pokemon-list-shinyshadow").style.display = "none";
    document.getElementById("pokemon-list-perfectshadow").style.display = "none";
    document.getElementById("pokemon-list-specialbackgroundshiny").style.display = "none";
    document.getElementById("pokemon-list-locationbackgroundshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-imperfectshinyshadow").style.display = "none";
    document.getElementById("pokemon-list-gigantamaxperfectshiny").style.display = "none";
    document.getElementById("pokemon-list-costume").style.display = "block";
    document.getElementById("Bulbasaur-container").style.display = "none";
    document.getElementById("mega-container").style.display = "block";
    document.getElementById("Bot-container").style.display = "none";
}

function CostumePerfect() {
    document.getElementById("pokemon-list").style.display = "none";
    document.getElementById("pokemon-list-perfect").style.display = "none";
    document.getElementById("pokemon-list-shadow").style.display = "none";
    document.getElementById("pokemon-list-dynamax").style.display = "none";
    document.getElementById("pokemon-list-lucky").style.display = "none";
    document.getElementById("pokemon-list-shiny").style.display = "none";
    document.getElementById("big-pokemoncount-container").style.display = "none";
    document.getElementById("title-container").style.display = "none";
    document.getElementById("pokemon-list-shinylucky").style.display = "none";
    document.getElementById("pokemon-list-shinyluckyperfect").style.display = "none";
    document.getElementById("pokemon-list-costumeshiny").style.display = "none";
    document.getElementById("pokemon-list-purifiedshiny").style.display = "none";
    document.getElementById("pokemon-list-gigantamax").style.display = "none";
    document.getElementById("pokemon-list-perfectlucky").style.display = "none";
    document.getElementById("pokemon-list-shinyperfect").style.display = "none";
    document.getElementById("pokemon-list-locationspecialbackgroundperfect").style.display = "none";
    document.getElementById("pokemon-list-locationspecialbackground").style.display = "none";
    document.getElementById("pokemon-list-locationbackgroundshiny").style.display = "none";
    document.getElementById("pokemon-list-imperfectshiny").style.display = "none";
    document.getElementById("pokemon-list-gigantamaxperfect").style.display = "none";
    document.getElementById("pokemon-list-purifiedshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-purified").style.display = "none";
    document.getElementById("pokemon-list-shinydynamaxperfect").style.display = "none";
    document.getElementById("pokemon-list-shinydynamax").style.display = "none";
    document.getElementById("pokemon-list-perfectdynamax").style.display = "none";
    document.getElementById("pokemon-list-specialbackgroundshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-locationbackgroundperfect").style.display = "none";
    document.getElementById("pokemon-list-locationbackground").style.display = "none";
    document.getElementById("pokemon-list-imperfect").style.display = "none";
    document.getElementById("pokemon-list-gigantamaxshiny").style.display = "none";
    document.getElementById("pokemon-list-purifiedperfect").style.display = "none";
    document.getElementById("pokemon-list-costumeshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-costume").style.display = "none";
    document.getElementById("pokemon-list-shinyshadowperfect").style.display = "none";
    document.getElementById("pokemon-list-shinyshadow").style.display = "none";
    document.getElementById("pokemon-list-perfectshadow").style.display = "none";
    document.getElementById("pokemon-list-specialbackgroundshiny").style.display = "none";
    document.getElementById("pokemon-list-locationbackgroundshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-imperfectshinyshadow").style.display = "none";
    document.getElementById("pokemon-list-gigantamaxperfectshiny").style.display = "none";
    document.getElementById("pokemon-list-costumeperfect").style.display = "block";
    document.getElementById("Bulbasaur-container").style.display = "none";
    document.getElementById("mega-container").style.display = "block";
    document.getElementById("Bot-container").style.display = "none";
}

function ShinyCostumePerfect() {
    document.getElementById("pokemon-list").style.display = "none";
    document.getElementById("pokemon-list-perfect").style.display = "none";
    document.getElementById("pokemon-list-shadow").style.display = "none";
    document.getElementById("pokemon-list-dynamax").style.display = "none";
    document.getElementById("pokemon-list-lucky").style.display = "none";
    document.getElementById("pokemon-list-shiny").style.display = "none";
    document.getElementById("big-pokemoncount-container").style.display = "none";
    document.getElementById("title-container").style.display = "none";
    document.getElementById("pokemon-list-shinylucky").style.display = "none";
    document.getElementById("pokemon-list-shinyluckyperfect").style.display = "none";
    document.getElementById("pokemon-list-costumeshiny").style.display = "none";
    document.getElementById("pokemon-list-purifiedshiny").style.display = "none";
    document.getElementById("pokemon-list-gigantamax").style.display = "none";
    document.getElementById("pokemon-list-perfectlucky").style.display = "none";
    document.getElementById("pokemon-list-shinyperfect").style.display = "none";
    document.getElementById("pokemon-list-locationspecialbackgroundperfect").style.display = "none";
    document.getElementById("pokemon-list-locationspecialbackground").style.display = "none";
    document.getElementById("pokemon-list-locationbackgroundshiny").style.display = "none";
    document.getElementById("pokemon-list-imperfectshiny").style.display = "none";
    document.getElementById("pokemon-list-gigantamaxperfect").style.display = "none";
    document.getElementById("pokemon-list-purifiedshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-purified").style.display = "none";
    document.getElementById("pokemon-list-shinydynamaxperfect").style.display = "none";
    document.getElementById("pokemon-list-shinydynamax").style.display = "none";
    document.getElementById("pokemon-list-perfectdynamax").style.display = "none";
    document.getElementById("pokemon-list-specialbackgroundshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-locationbackgroundperfect").style.display = "none";
    document.getElementById("pokemon-list-locationbackground").style.display = "none";
    document.getElementById("pokemon-list-imperfect").style.display = "none";
    document.getElementById("pokemon-list-gigantamaxshiny").style.display = "none";
    document.getElementById("pokemon-list-purifiedperfect").style.display = "none";
    document.getElementById("pokemon-list-costumeperfect").style.display = "none";
    document.getElementById("pokemon-list-costume").style.display = "none";
    document.getElementById("pokemon-list-shinyshadowperfect").style.display = "none";
    document.getElementById("pokemon-list-shinyshadow").style.display = "none";
    document.getElementById("pokemon-list-perfectshadow").style.display = "none";
    document.getElementById("pokemon-list-specialbackgroundshiny").style.display = "none";
    document.getElementById("pokemon-list-locationbackgroundshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-imperfectshinyshadow").style.display = "none";
    document.getElementById("pokemon-list-gigantamaxperfectshiny").style.display = "none";
    document.getElementById("pokemon-list-costumeshinyperfect").style.display = "block";
    document.getElementById("Bulbasaur-container").style.display = "none";
    document.getElementById("mega-container").style.display = "block";
    document.getElementById("Bot-container").style.display = "none";
}

function PurifiedPerfect() {
    document.getElementById("pokemon-list").style.display = "none";
    document.getElementById("pokemon-list-perfect").style.display = "none";
    document.getElementById("pokemon-list-shadow").style.display = "none";
    document.getElementById("pokemon-list-dynamax").style.display = "none";
    document.getElementById("pokemon-list-lucky").style.display = "none";
    document.getElementById("pokemon-list-shiny").style.display = "none";
    document.getElementById("big-pokemoncount-container").style.display = "none";
    document.getElementById("title-container").style.display = "none";
    document.getElementById("pokemon-list-shinylucky").style.display = "none";
    document.getElementById("pokemon-list-shinyluckyperfect").style.display = "none";
    document.getElementById("pokemon-list-costumeshiny").style.display = "none";
    document.getElementById("pokemon-list-purifiedshiny").style.display = "none";
    document.getElementById("pokemon-list-gigantamax").style.display = "none";
    document.getElementById("pokemon-list-perfectlucky").style.display = "none";
    document.getElementById("pokemon-list-shinyperfect").style.display = "none";
    document.getElementById("pokemon-list-locationspecialbackgroundperfect").style.display = "none";
    document.getElementById("pokemon-list-locationspecialbackground").style.display = "none";
    document.getElementById("pokemon-list-locationbackgroundshiny").style.display = "none";
    document.getElementById("pokemon-list-imperfectshiny").style.display = "none";
    document.getElementById("pokemon-list-gigantamaxperfect").style.display = "none";
    document.getElementById("pokemon-list-purifiedshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-purified").style.display = "none";
    document.getElementById("pokemon-list-shinydynamaxperfect").style.display = "none";
    document.getElementById("pokemon-list-shinydynamax").style.display = "none";
    document.getElementById("pokemon-list-perfectdynamax").style.display = "none";
    document.getElementById("pokemon-list-specialbackgroundshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-locationbackgroundperfect").style.display = "none";
    document.getElementById("pokemon-list-locationbackground").style.display = "none";
    document.getElementById("pokemon-list-imperfect").style.display = "none";
    document.getElementById("pokemon-list-gigantamaxshiny").style.display = "none";
    document.getElementById("pokemon-list-costumeshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-costumeperfect").style.display = "none";
    document.getElementById("pokemon-list-costume").style.display = "none";
    document.getElementById("pokemon-list-shinyshadowperfect").style.display = "none";
    document.getElementById("pokemon-list-shinyshadow").style.display = "none";
    document.getElementById("pokemon-list-perfectshadow").style.display = "none";
    document.getElementById("pokemon-list-specialbackgroundshiny").style.display = "none";
    document.getElementById("pokemon-list-locationbackgroundshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-imperfectshinyshadow").style.display = "none";
    document.getElementById("pokemon-list-gigantamaxperfectshiny").style.display = "none";
    document.getElementById("pokemon-list-purifiedperfect").style.display = "block";
    document.getElementById("Bulbasaur-container").style.display = "none";
    document.getElementById("mega-container").style.display = "block";
    document.getElementById("Bot-container").style.display = "none";
}

function ShinyGigantamax() {
    document.getElementById("pokemon-list").style.display = "none";
    document.getElementById("pokemon-list-perfect").style.display = "none";
    document.getElementById("pokemon-list-shadow").style.display = "none";
    document.getElementById("pokemon-list-dynamax").style.display = "none";
    document.getElementById("pokemon-list-lucky").style.display = "none";
    document.getElementById("pokemon-list-shiny").style.display = "none";
    document.getElementById("big-pokemoncount-container").style.display = "none";
    document.getElementById("title-container").style.display = "none";
    document.getElementById("pokemon-list-shinylucky").style.display = "none";
    document.getElementById("pokemon-list-shinyluckyperfect").style.display = "none";
    document.getElementById("pokemon-list-costumeshiny").style.display = "none";
    document.getElementById("pokemon-list-purifiedshiny").style.display = "none";
    document.getElementById("pokemon-list-gigantamax").style.display = "none";
    document.getElementById("pokemon-list-perfectlucky").style.display = "none";
    document.getElementById("pokemon-list-shinyperfect").style.display = "none";
    document.getElementById("pokemon-list-locationspecialbackgroundperfect").style.display = "none";
    document.getElementById("pokemon-list-locationspecialbackground").style.display = "none";
    document.getElementById("pokemon-list-locationbackgroundshiny").style.display = "none";
    document.getElementById("pokemon-list-imperfectshiny").style.display = "none";
    document.getElementById("pokemon-list-gigantamaxperfect").style.display = "none";
    document.getElementById("pokemon-list-purifiedshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-purified").style.display = "none";
    document.getElementById("pokemon-list-shinydynamaxperfect").style.display = "none";
    document.getElementById("pokemon-list-shinydynamax").style.display = "none";
    document.getElementById("pokemon-list-perfectdynamax").style.display = "none";
    document.getElementById("pokemon-list-specialbackgroundshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-locationbackgroundperfect").style.display = "none";
    document.getElementById("pokemon-list-locationbackground").style.display = "none";
    document.getElementById("pokemon-list-imperfect").style.display = "none";
    document.getElementById("pokemon-list-purifiedperfect").style.display = "none";
    document.getElementById("pokemon-list-costumeshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-costumeperfect").style.display = "none";
    document.getElementById("pokemon-list-costume").style.display = "none";
    document.getElementById("pokemon-list-shinyshadowperfect").style.display = "none";
    document.getElementById("pokemon-list-shinyshadow").style.display = "none";
    document.getElementById("pokemon-list-perfectshadow").style.display = "none";
    document.getElementById("pokemon-list-specialbackgroundshiny").style.display = "none";
    document.getElementById("pokemon-list-locationbackgroundshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-imperfectshinyshadow").style.display = "none";
    document.getElementById("pokemon-list-gigantamaxperfectshiny").style.display = "none";
    document.getElementById("pokemon-list-gigantamaxshiny").style.display = "block";
    document.getElementById("Bulbasaur-container").style.display = "none";
    document.getElementById("mega-container").style.display = "block";
    document.getElementById("Bot-container").style.display = "none";
}

function Imperfect() {
    document.getElementById("pokemon-list").style.display = "none";
    document.getElementById("pokemon-list-perfect").style.display = "none";
    document.getElementById("pokemon-list-shadow").style.display = "none";
    document.getElementById("pokemon-list-dynamax").style.display = "none";
    document.getElementById("pokemon-list-lucky").style.display = "none";
    document.getElementById("pokemon-list-shiny").style.display = "none";
    document.getElementById("big-pokemoncount-container").style.display = "none";
    document.getElementById("title-container").style.display = "none";
    document.getElementById("pokemon-list-shinylucky").style.display = "none";
    document.getElementById("pokemon-list-shinyluckyperfect").style.display = "none";
    document.getElementById("pokemon-list-costumeshiny").style.display = "none";
    document.getElementById("pokemon-list-purifiedshiny").style.display = "none";
    document.getElementById("pokemon-list-gigantamax").style.display = "none";
    document.getElementById("pokemon-list-perfectlucky").style.display = "none";
    document.getElementById("pokemon-list-shinyperfect").style.display = "none";
    document.getElementById("pokemon-list-locationspecialbackgroundperfect").style.display = "none";
    document.getElementById("pokemon-list-locationspecialbackground").style.display = "none";
    document.getElementById("pokemon-list-locationbackgroundshiny").style.display = "none";
    document.getElementById("pokemon-list-imperfectshiny").style.display = "none";
    document.getElementById("pokemon-list-gigantamaxperfect").style.display = "none";
    document.getElementById("pokemon-list-purifiedshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-purified").style.display = "none";
    document.getElementById("pokemon-list-shinydynamaxperfect").style.display = "none";
    document.getElementById("pokemon-list-shinydynamax").style.display = "none";
    document.getElementById("pokemon-list-perfectdynamax").style.display = "none";
    document.getElementById("pokemon-list-specialbackgroundshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-locationbackgroundperfect").style.display = "none";
    document.getElementById("pokemon-list-locationbackground").style.display = "none";
    document.getElementById("pokemon-list-gigantamaxshiny").style.display = "none";
    document.getElementById("pokemon-list-purifiedperfect").style.display = "none";
    document.getElementById("pokemon-list-costumeshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-costumeperfect").style.display = "none";
    document.getElementById("pokemon-list-costume").style.display = "none";
    document.getElementById("pokemon-list-shinyshadowperfect").style.display = "none";
    document.getElementById("pokemon-list-shinyshadow").style.display = "none";
    document.getElementById("pokemon-list-perfectshadow").style.display = "none";
    document.getElementById("pokemon-list-specialbackgroundshiny").style.display = "none";
    document.getElementById("pokemon-list-locationbackgroundshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-imperfectshinyshadow").style.display = "none";
    document.getElementById("pokemon-list-gigantamaxperfectshiny").style.display = "none";
    document.getElementById("pokemon-list-imperfect").style.display = "block";
    document.getElementById("Bulbasaur-container").style.display = "none";
    document.getElementById("mega-container").style.display = "block";
    document.getElementById("Bot-container").style.display = "none";
}

function LocationBackground() {
    document.getElementById("pokemon-list").style.display = "none";
    document.getElementById("pokemon-list-perfect").style.display = "none";
    document.getElementById("pokemon-list-shadow").style.display = "none";
    document.getElementById("pokemon-list-dynamax").style.display = "none";
    document.getElementById("pokemon-list-lucky").style.display = "none";
    document.getElementById("pokemon-list-shiny").style.display = "none";
    document.getElementById("big-pokemoncount-container").style.display = "none";
    document.getElementById("title-container").style.display = "none";
    document.getElementById("pokemon-list-shinylucky").style.display = "none";
    document.getElementById("pokemon-list-shinyluckyperfect").style.display = "none";
    document.getElementById("pokemon-list-costumeshiny").style.display = "none";
    document.getElementById("pokemon-list-purifiedshiny").style.display = "none";
    document.getElementById("pokemon-list-gigantamax").style.display = "none";
    document.getElementById("pokemon-list-perfectlucky").style.display = "none";
    document.getElementById("pokemon-list-shinyperfect").style.display = "none";
    document.getElementById("pokemon-list-locationspecialbackgroundperfect").style.display = "none";
    document.getElementById("pokemon-list-locationspecialbackground").style.display = "none";
    document.getElementById("pokemon-list-locationbackgroundshiny").style.display = "none";
    document.getElementById("pokemon-list-imperfectshiny").style.display = "none";
    document.getElementById("pokemon-list-gigantamaxperfect").style.display = "none";
    document.getElementById("pokemon-list-purifiedshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-purified").style.display = "none";
    document.getElementById("pokemon-list-shinydynamaxperfect").style.display = "none";
    document.getElementById("pokemon-list-shinydynamax").style.display = "none";
    document.getElementById("pokemon-list-perfectdynamax").style.display = "none";
    document.getElementById("pokemon-list-specialbackgroundshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-locationbackgroundperfect").style.display = "none";
    document.getElementById("pokemon-list-imperfect").style.display = "none";
    document.getElementById("pokemon-list-gigantamaxshiny").style.display = "none";
    document.getElementById("pokemon-list-purifiedperfect").style.display = "none";
    document.getElementById("pokemon-list-costumeshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-costumeperfect").style.display = "none";
    document.getElementById("pokemon-list-costume").style.display = "none";
    document.getElementById("pokemon-list-shinyshadowperfect").style.display = "none";
    document.getElementById("pokemon-list-shinyshadow").style.display = "none";
    document.getElementById("pokemon-list-perfectshadow").style.display = "none";
    document.getElementById("pokemon-list-specialbackgroundshiny").style.display = "none";
    document.getElementById("pokemon-list-locationbackgroundshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-imperfectshinyshadow").style.display = "none";
    document.getElementById("pokemon-list-gigantamaxperfectshiny").style.display = "none";
    document.getElementById("pokemon-list-locationbackground").style.display = "block";
    document.getElementById("Bulbasaur-container").style.display = "none";
    document.getElementById("mega-container").style.display = "block";
    document.getElementById("Bot-container").style.display = "none";
}

function LocationBackgroundPerfect() {
    document.getElementById("pokemon-list").style.display = "none";
    document.getElementById("pokemon-list-perfect").style.display = "none";
    document.getElementById("pokemon-list-shadow").style.display = "none";
    document.getElementById("pokemon-list-dynamax").style.display = "none";
    document.getElementById("pokemon-list-lucky").style.display = "none";
    document.getElementById("pokemon-list-shiny").style.display = "none";
    document.getElementById("big-pokemoncount-container").style.display = "none";
    document.getElementById("title-container").style.display = "none";
    document.getElementById("pokemon-list-shinylucky").style.display = "none";
    document.getElementById("pokemon-list-shinyluckyperfect").style.display = "none";
    document.getElementById("pokemon-list-costumeshiny").style.display = "none";
    document.getElementById("pokemon-list-purifiedshiny").style.display = "none";
    document.getElementById("pokemon-list-gigantamax").style.display = "none";
    document.getElementById("pokemon-list-perfectlucky").style.display = "none";
    document.getElementById("pokemon-list-shinyperfect").style.display = "none";
    document.getElementById("pokemon-list-locationspecialbackgroundperfect").style.display = "none";
    document.getElementById("pokemon-list-locationspecialbackground").style.display = "none";
    document.getElementById("pokemon-list-locationbackgroundshiny").style.display = "none";
    document.getElementById("pokemon-list-imperfectshiny").style.display = "none";
    document.getElementById("pokemon-list-gigantamaxperfect").style.display = "none";
    document.getElementById("pokemon-list-purifiedshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-purified").style.display = "none";
    document.getElementById("pokemon-list-shinydynamaxperfect").style.display = "none";
    document.getElementById("pokemon-list-shinydynamax").style.display = "none";
    document.getElementById("pokemon-list-perfectdynamax").style.display = "none";
    document.getElementById("pokemon-list-specialbackgroundshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-locationbackground").style.display = "none";
    document.getElementById("pokemon-list-imperfect").style.display = "none";
    document.getElementById("pokemon-list-gigantamaxshiny").style.display = "none";
    document.getElementById("pokemon-list-purifiedperfect").style.display = "none";
    document.getElementById("pokemon-list-costumeshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-costumeperfect").style.display = "none";
    document.getElementById("pokemon-list-costume").style.display = "none";
    document.getElementById("pokemon-list-shinyshadowperfect").style.display = "none";
    document.getElementById("pokemon-list-shinyshadow").style.display = "none";
    document.getElementById("pokemon-list-perfectshadow").style.display = "none";
    document.getElementById("pokemon-list-specialbackgroundshiny").style.display = "none";
    document.getElementById("pokemon-list-locationbackgroundshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-imperfectshinyshadow").style.display = "none";
    document.getElementById("pokemon-list-gigantamaxperfectshiny").style.display = "none";
    document.getElementById("pokemon-list-locationbackgroundperfect").style.display = "block";
    document.getElementById("Bulbasaur-container").style.display = "none";
    document.getElementById("mega-container").style.display = "block";
    document.getElementById("Bot-container").style.display = "none";
}

function ShinySpecialBackgroundPerfect() {
    document.getElementById("pokemon-list").style.display = "none";
    document.getElementById("pokemon-list-perfect").style.display = "none";
    document.getElementById("pokemon-list-shadow").style.display = "none";
    document.getElementById("pokemon-list-dynamax").style.display = "none";
    document.getElementById("pokemon-list-lucky").style.display = "none";
    document.getElementById("pokemon-list-shiny").style.display = "none";
    document.getElementById("big-pokemoncount-container").style.display = "none";
    document.getElementById("title-container").style.display = "none";
    document.getElementById("pokemon-list-shinylucky").style.display = "none";
    document.getElementById("pokemon-list-shinyluckyperfect").style.display = "none";
    document.getElementById("pokemon-list-costumeshiny").style.display = "none";
    document.getElementById("pokemon-list-purifiedshiny").style.display = "none";
    document.getElementById("pokemon-list-gigantamax").style.display = "none";
    document.getElementById("pokemon-list-perfectlucky").style.display = "none";
    document.getElementById("pokemon-list-shinyperfect").style.display = "none";
    document.getElementById("pokemon-list-locationspecialbackgroundperfect").style.display = "none";
    document.getElementById("pokemon-list-locationspecialbackground").style.display = "none";
    document.getElementById("pokemon-list-locationbackgroundshiny").style.display = "none";
    document.getElementById("pokemon-list-imperfectshiny").style.display = "none";
    document.getElementById("pokemon-list-gigantamaxperfect").style.display = "none";
    document.getElementById("pokemon-list-purifiedshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-purified").style.display = "none";
    document.getElementById("pokemon-list-shinydynamaxperfect").style.display = "none";
    document.getElementById("pokemon-list-shinydynamax").style.display = "none";
    document.getElementById("pokemon-list-perfectdynamax").style.display = "none";
    document.getElementById("pokemon-list-locationbackgroundperfect").style.display = "none";
    document.getElementById("pokemon-list-locationbackground").style.display = "none";
    document.getElementById("pokemon-list-imperfect").style.display = "none";
    document.getElementById("pokemon-list-gigantamaxshiny").style.display = "none";
    document.getElementById("pokemon-list-purifiedperfect").style.display = "none";
    document.getElementById("pokemon-list-costumeshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-costumeperfect").style.display = "none";
    document.getElementById("pokemon-list-costume").style.display = "none";
    document.getElementById("pokemon-list-shinyshadowperfect").style.display = "none";
    document.getElementById("pokemon-list-shinyshadow").style.display = "none";
    document.getElementById("pokemon-list-perfectshadow").style.display = "none";
    document.getElementById("pokemon-list-specialbackgroundshiny").style.display = "none";
    document.getElementById("pokemon-list-locationbackgroundshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-imperfectshinyshadow").style.display = "none";
    document.getElementById("pokemon-list-gigantamaxperfectshiny").style.display = "none";
    document.getElementById("pokemon-list-specialbackgroundshinyperfect").style.display = "block";
    document.getElementById("Bulbasaur-container").style.display = "none";
    document.getElementById("mega-container").style.display = "block";
    document.getElementById("Bot-container").style.display = "none";
}

function DynamaxPerfect() {
    document.getElementById("pokemon-list").style.display = "none";
    document.getElementById("pokemon-list-perfect").style.display = "none";
    document.getElementById("pokemon-list-shadow").style.display = "none";
    document.getElementById("pokemon-list-dynamax").style.display = "none";
    document.getElementById("pokemon-list-lucky").style.display = "none";
    document.getElementById("pokemon-list-shiny").style.display = "none";
    document.getElementById("big-pokemoncount-container").style.display = "none";
    document.getElementById("title-container").style.display = "none";
    document.getElementById("pokemon-list-shinylucky").style.display = "none";
    document.getElementById("pokemon-list-shinyluckyperfect").style.display = "none";
    document.getElementById("pokemon-list-costumeshiny").style.display = "none";
    document.getElementById("pokemon-list-purifiedshiny").style.display = "none";
    document.getElementById("pokemon-list-gigantamax").style.display = "none";
    document.getElementById("pokemon-list-perfectlucky").style.display = "none";
    document.getElementById("pokemon-list-shinyperfect").style.display = "none";
    document.getElementById("pokemon-list-locationspecialbackgroundperfect").style.display = "none";
    document.getElementById("pokemon-list-locationspecialbackground").style.display = "none";
    document.getElementById("pokemon-list-locationbackgroundshiny").style.display = "none";
    document.getElementById("pokemon-list-imperfectshiny").style.display = "none";
    document.getElementById("pokemon-list-gigantamaxperfect").style.display = "none";
    document.getElementById("pokemon-list-purifiedshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-purified").style.display = "none";
    document.getElementById("pokemon-list-shinydynamaxperfect").style.display = "none";
    document.getElementById("pokemon-list-shinydynamax").style.display = "none";
    document.getElementById("pokemon-list-specialbackgroundshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-locationbackgroundperfect").style.display = "none";
    document.getElementById("pokemon-list-locationbackground").style.display = "none";
    document.getElementById("pokemon-list-imperfect").style.display = "none";
    document.getElementById("pokemon-list-gigantamaxshiny").style.display = "none";
    document.getElementById("pokemon-list-purifiedperfect").style.display = "none";
    document.getElementById("pokemon-list-costumeshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-costumeperfect").style.display = "none";
    document.getElementById("pokemon-list-costume").style.display = "none";
    document.getElementById("pokemon-list-shinyshadowperfect").style.display = "none";
    document.getElementById("pokemon-list-shinyshadow").style.display = "none";
    document.getElementById("pokemon-list-perfectshadow").style.display = "none";
    document.getElementById("pokemon-list-specialbackgroundshiny").style.display = "none";
    document.getElementById("pokemon-list-locationbackgroundshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-imperfectshinyshadow").style.display = "none";
    document.getElementById("pokemon-list-gigantamaxperfectshiny").style.display = "none";
    document.getElementById("pokemon-list-perfectdynamax").style.display = "block";
    document.getElementById("Bulbasaur-container").style.display = "none";
    document.getElementById("mega-container").style.display = "block";
    document.getElementById("Bot-container").style.display = "none";
}

function ShinyDynamax() {
    document.getElementById("pokemon-list").style.display = "none";
    document.getElementById("pokemon-list-perfect").style.display = "none";
    document.getElementById("pokemon-list-shadow").style.display = "none";
    document.getElementById("pokemon-list-dynamax").style.display = "none";
    document.getElementById("pokemon-list-lucky").style.display = "none";
    document.getElementById("pokemon-list-shiny").style.display = "none";
    document.getElementById("big-pokemoncount-container").style.display = "none";
    document.getElementById("title-container").style.display = "none";
    document.getElementById("pokemon-list-shinylucky").style.display = "none";
    document.getElementById("pokemon-list-shinyluckyperfect").style.display = "none";
    document.getElementById("pokemon-list-costumeshiny").style.display = "none";
    document.getElementById("pokemon-list-purifiedshiny").style.display = "none";
    document.getElementById("pokemon-list-gigantamax").style.display = "none";
    document.getElementById("pokemon-list-perfectlucky").style.display = "none";
    document.getElementById("pokemon-list-shinyperfect").style.display = "none";
    document.getElementById("pokemon-list-locationspecialbackgroundperfect").style.display = "none";
    document.getElementById("pokemon-list-locationspecialbackground").style.display = "none";
    document.getElementById("pokemon-list-locationbackgroundshiny").style.display = "none";
    document.getElementById("pokemon-list-imperfectshiny").style.display = "none";
    document.getElementById("pokemon-list-gigantamaxperfect").style.display = "none";
    document.getElementById("pokemon-list-purifiedshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-purified").style.display = "none";
    document.getElementById("pokemon-list-shinydynamaxperfect").style.display = "none";
    document.getElementById("pokemon-list-perfectdynamax").style.display = "none";
    document.getElementById("pokemon-list-specialbackgroundshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-locationbackgroundperfect").style.display = "none";
    document.getElementById("pokemon-list-locationbackground").style.display = "none";
    document.getElementById("pokemon-list-imperfect").style.display = "none";
    document.getElementById("pokemon-list-gigantamaxshiny").style.display = "none";
    document.getElementById("pokemon-list-purifiedperfect").style.display = "none";
    document.getElementById("pokemon-list-costumeshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-costumeperfect").style.display = "none";
    document.getElementById("pokemon-list-costume").style.display = "none";
    document.getElementById("pokemon-list-shinyshadowperfect").style.display = "none";
    document.getElementById("pokemon-list-shinyshadow").style.display = "none";
    document.getElementById("pokemon-list-perfectshadow").style.display = "none";
    document.getElementById("pokemon-list-specialbackgroundshiny").style.display = "none";
    document.getElementById("pokemon-list-locationbackgroundshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-imperfectshinyshadow").style.display = "none";
    document.getElementById("pokemon-list-gigantamaxperfectshiny").style.display = "none";
    document.getElementById("pokemon-list-shinydynamax").style.display = "block";
    document.getElementById("Bulbasaur-container").style.display = "none";
    document.getElementById("mega-container").style.display = "block";
    document.getElementById("Bot-container").style.display = "none";
}

function ShinyDynamaxPerfect() {
    document.getElementById("pokemon-list").style.display = "none";
    document.getElementById("pokemon-list-perfect").style.display = "none";
    document.getElementById("pokemon-list-shadow").style.display = "none";
    document.getElementById("pokemon-list-dynamax").style.display = "none";
    document.getElementById("pokemon-list-lucky").style.display = "none";
    document.getElementById("pokemon-list-shiny").style.display = "none";
    document.getElementById("big-pokemoncount-container").style.display = "none";
    document.getElementById("title-container").style.display = "none";
    document.getElementById("pokemon-list-shinylucky").style.display = "none";
    document.getElementById("pokemon-list-shinyluckyperfect").style.display = "none";
    document.getElementById("pokemon-list-costumeshiny").style.display = "none";
    document.getElementById("pokemon-list-purifiedshiny").style.display = "none";
    document.getElementById("pokemon-list-gigantamax").style.display = "none";
    document.getElementById("pokemon-list-perfectlucky").style.display = "none";
    document.getElementById("pokemon-list-shinyperfect").style.display = "none";
    document.getElementById("pokemon-list-locationspecialbackgroundperfect").style.display = "none";
    document.getElementById("pokemon-list-locationspecialbackground").style.display = "none";
    document.getElementById("pokemon-list-locationbackgroundshiny").style.display = "none";
    document.getElementById("pokemon-list-imperfectshiny").style.display = "none";
    document.getElementById("pokemon-list-gigantamaxperfect").style.display = "none";
    document.getElementById("pokemon-list-purifiedshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-purified").style.display = "none";
    document.getElementById("pokemon-list-shinydynamax").style.display = "none";
    document.getElementById("pokemon-list-perfectdynamax").style.display = "none";
    document.getElementById("pokemon-list-specialbackgroundshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-locationbackgroundperfect").style.display = "none";
    document.getElementById("pokemon-list-locationbackground").style.display = "none";
    document.getElementById("pokemon-list-imperfect").style.display = "none";
    document.getElementById("pokemon-list-gigantamaxshiny").style.display = "none";
    document.getElementById("pokemon-list-purifiedperfect").style.display = "none";
    document.getElementById("pokemon-list-costumeshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-costumeperfect").style.display = "none";
    document.getElementById("pokemon-list-costume").style.display = "none";
    document.getElementById("pokemon-list-shinyshadowperfect").style.display = "none";
    document.getElementById("pokemon-list-shinyshadow").style.display = "none";
    document.getElementById("pokemon-list-perfectshadow").style.display = "none";
    document.getElementById("pokemon-list-specialbackgroundshiny").style.display = "none";
    document.getElementById("pokemon-list-locationbackgroundshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-imperfectshinyshadow").style.display = "none";
    document.getElementById("pokemon-list-gigantamaxperfectshiny").style.display = "none";
    document.getElementById("pokemon-list-shinydynamaxperfect").style.display = "block";
    document.getElementById("Bulbasaur-container").style.display = "none";
    document.getElementById("mega-container").style.display = "block";
    document.getElementById("Bot-container").style.display = "none";
}

function Purified() {
    document.getElementById("pokemon-list").style.display = "none";
    document.getElementById("pokemon-list-perfect").style.display = "none";
    document.getElementById("pokemon-list-shadow").style.display = "none";
    document.getElementById("pokemon-list-dynamax").style.display = "none";
    document.getElementById("pokemon-list-lucky").style.display = "none";
    document.getElementById("pokemon-list-shiny").style.display = "none";
    document.getElementById("big-pokemoncount-container").style.display = "none";
    document.getElementById("title-container").style.display = "none";
    document.getElementById("pokemon-list-shinylucky").style.display = "none";
    document.getElementById("pokemon-list-shinyluckyperfect").style.display = "none";
    document.getElementById("pokemon-list-costumeshiny").style.display = "none";
    document.getElementById("pokemon-list-purifiedshiny").style.display = "none";
    document.getElementById("pokemon-list-gigantamax").style.display = "none";
    document.getElementById("pokemon-list-perfectlucky").style.display = "none";
    document.getElementById("pokemon-list-shinyperfect").style.display = "none";
    document.getElementById("pokemon-list-locationspecialbackgroundperfect").style.display = "none";
    document.getElementById("pokemon-list-locationspecialbackground").style.display = "none";
    document.getElementById("pokemon-list-locationbackgroundshiny").style.display = "none";
    document.getElementById("pokemon-list-imperfectshiny").style.display = "none";
    document.getElementById("pokemon-list-gigantamaxperfect").style.display = "none";
    document.getElementById("pokemon-list-purifiedshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-shinydynamaxperfect").style.display = "none";
    document.getElementById("pokemon-list-shinydynamax").style.display = "none";
    document.getElementById("pokemon-list-perfectdynamax").style.display = "none";
    document.getElementById("pokemon-list-specialbackgroundshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-locationbackgroundperfect").style.display = "none";
    document.getElementById("pokemon-list-locationbackground").style.display = "none";
    document.getElementById("pokemon-list-imperfect").style.display = "none";
    document.getElementById("pokemon-list-gigantamaxshiny").style.display = "none";
    document.getElementById("pokemon-list-purifiedperfect").style.display = "none";
    document.getElementById("pokemon-list-costumeshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-costumeperfect").style.display = "none";
    document.getElementById("pokemon-list-costume").style.display = "none";
    document.getElementById("pokemon-list-shinyshadowperfect").style.display = "none";
    document.getElementById("pokemon-list-shinyshadow").style.display = "none";
    document.getElementById("pokemon-list-perfectshadow").style.display = "none";
    document.getElementById("pokemon-list-specialbackgroundshiny").style.display = "none";
    document.getElementById("pokemon-list-locationbackgroundshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-imperfectshinyshadow").style.display = "none";
    document.getElementById("pokemon-list-gigantamaxperfectshiny").style.display = "none";
    document.getElementById("pokemon-list-purified").style.display = "block";
    document.getElementById("Bulbasaur-container").style.display = "none";
    document.getElementById("mega-container").style.display = "block";
    document.getElementById("Bot-container").style.display = "none";
}

function ShinyPurifiedPerfect() {
    document.getElementById("pokemon-list").style.display = "none";
    document.getElementById("pokemon-list-perfect").style.display = "none";
    document.getElementById("pokemon-list-shadow").style.display = "none";
    document.getElementById("pokemon-list-dynamax").style.display = "none";
    document.getElementById("pokemon-list-lucky").style.display = "none";
    document.getElementById("pokemon-list-shiny").style.display = "none";
    document.getElementById("big-pokemoncount-container").style.display = "none";
    document.getElementById("title-container").style.display = "none";
    document.getElementById("pokemon-list-shinylucky").style.display = "none";
    document.getElementById("pokemon-list-shinyluckyperfect").style.display = "none";
    document.getElementById("pokemon-list-costumeshiny").style.display = "none";
    document.getElementById("pokemon-list-purifiedshiny").style.display = "none";
    document.getElementById("pokemon-list-gigantamax").style.display = "none";
    document.getElementById("pokemon-list-perfectlucky").style.display = "none";
    document.getElementById("pokemon-list-shinyperfect").style.display = "none";
    document.getElementById("pokemon-list-locationspecialbackgroundperfect").style.display = "none";
    document.getElementById("pokemon-list-locationspecialbackground").style.display = "none";
    document.getElementById("pokemon-list-locationbackgroundshiny").style.display = "none";
    document.getElementById("pokemon-list-imperfectshiny").style.display = "none";
    document.getElementById("pokemon-list-gigantamaxperfect").style.display = "none";
    document.getElementById("pokemon-list-purified").style.display = "none";
    document.getElementById("pokemon-list-shinydynamaxperfect").style.display = "none";
    document.getElementById("pokemon-list-shinydynamax").style.display = "none";
    document.getElementById("pokemon-list-perfectdynamax").style.display = "none";
    document.getElementById("pokemon-list-specialbackgroundshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-locationbackgroundperfect").style.display = "none";
    document.getElementById("pokemon-list-locationbackground").style.display = "none";
    document.getElementById("pokemon-list-imperfect").style.display = "none";
    document.getElementById("pokemon-list-gigantamaxshiny").style.display = "none";
    document.getElementById("pokemon-list-purifiedperfect").style.display = "none";
    document.getElementById("pokemon-list-costumeshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-costumeperfect").style.display = "none";
    document.getElementById("pokemon-list-costume").style.display = "none";
    document.getElementById("pokemon-list-shinyshadowperfect").style.display = "none";
    document.getElementById("pokemon-list-shinyshadow").style.display = "none";
    document.getElementById("pokemon-list-perfectshadow").style.display = "none";
    document.getElementById("pokemon-list-specialbackgroundshiny").style.display = "none";
    document.getElementById("pokemon-list-locationbackgroundshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-imperfectshinyshadow").style.display = "none";
    document.getElementById("pokemon-list-gigantamaxperfectshiny").style.display = "none";
    document.getElementById("pokemon-list-purifiedshinyperfect").style.display = "block";
    document.getElementById("Bulbasaur-container").style.display = "none";
    document.getElementById("mega-container").style.display = "block";
    document.getElementById("Bot-container").style.display = "none";
}

function GigantamaxPerfect() {
    document.getElementById("pokemon-list").style.display = "none";
    document.getElementById("pokemon-list-perfect").style.display = "none";
    document.getElementById("pokemon-list-shadow").style.display = "none";
    document.getElementById("pokemon-list-dynamax").style.display = "none";
    document.getElementById("pokemon-list-lucky").style.display = "none";
    document.getElementById("pokemon-list-shiny").style.display = "none";
    document.getElementById("big-pokemoncount-container").style.display = "none";
    document.getElementById("title-container").style.display = "none";
    document.getElementById("pokemon-list-shinylucky").style.display = "none";
    document.getElementById("pokemon-list-shinyluckyperfect").style.display = "none";
    document.getElementById("pokemon-list-costumeshiny").style.display = "none";
    document.getElementById("pokemon-list-purifiedshiny").style.display = "none";
    document.getElementById("pokemon-list-gigantamax").style.display = "none";
    document.getElementById("pokemon-list-perfectlucky").style.display = "none";
    document.getElementById("pokemon-list-shinyperfect").style.display = "none";
    document.getElementById("pokemon-list-locationspecialbackgroundperfect").style.display = "none";
    document.getElementById("pokemon-list-locationspecialbackground").style.display = "none";
    document.getElementById("pokemon-list-locationbackgroundshiny").style.display = "none";
    document.getElementById("pokemon-list-imperfectshiny").style.display = "none";
    document.getElementById("pokemon-list-purifiedshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-purified").style.display = "none";
    document.getElementById("pokemon-list-shinydynamaxperfect").style.display = "none";
    document.getElementById("pokemon-list-shinydynamax").style.display = "none";
    document.getElementById("pokemon-list-perfectdynamax").style.display = "none";
    document.getElementById("pokemon-list-specialbackgroundshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-locationbackgroundperfect").style.display = "none";
    document.getElementById("pokemon-list-locationbackground").style.display = "none";
    document.getElementById("pokemon-list-imperfect").style.display = "none";
    document.getElementById("pokemon-list-gigantamaxshiny").style.display = "none";
    document.getElementById("pokemon-list-purifiedperfect").style.display = "none";
    document.getElementById("pokemon-list-costumeshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-costumeperfect").style.display = "none";
    document.getElementById("pokemon-list-costume").style.display = "none";
    document.getElementById("pokemon-list-shinyshadowperfect").style.display = "none";
    document.getElementById("pokemon-list-shinyshadow").style.display = "none";
    document.getElementById("pokemon-list-perfectshadow").style.display = "none";
    document.getElementById("pokemon-list-specialbackgroundshiny").style.display = "none";
    document.getElementById("pokemon-list-locationbackgroundshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-imperfectshinyshadow").style.display = "none";
    document.getElementById("pokemon-list-gigantamaxperfectshiny").style.display = "none";
    document.getElementById("pokemon-list-gigantamaxperfect").style.display = "block";
    document.getElementById("Bulbasaur-container").style.display = "none";
    document.getElementById("mega-container").style.display = "block";
    document.getElementById("Bot-container").style.display = "none";
}

function ShinyImperfect() {
    document.getElementById("pokemon-list").style.display = "none";
    document.getElementById("pokemon-list-perfect").style.display = "none";
    document.getElementById("pokemon-list-shadow").style.display = "none";
    document.getElementById("pokemon-list-dynamax").style.display = "none";
    document.getElementById("pokemon-list-lucky").style.display = "none";
    document.getElementById("pokemon-list-shiny").style.display = "none";
    document.getElementById("big-pokemoncount-container").style.display = "none";
    document.getElementById("title-container").style.display = "none";
    document.getElementById("pokemon-list-shinylucky").style.display = "none";
    document.getElementById("pokemon-list-shinyluckyperfect").style.display = "none";
    document.getElementById("pokemon-list-costumeshiny").style.display = "none";
    document.getElementById("pokemon-list-purifiedshiny").style.display = "none";
    document.getElementById("pokemon-list-gigantamax").style.display = "none";
    document.getElementById("pokemon-list-perfectlucky").style.display = "none";
    document.getElementById("pokemon-list-shinyperfect").style.display = "none";
    document.getElementById("pokemon-list-locationspecialbackgroundperfect").style.display = "none";
    document.getElementById("pokemon-list-locationspecialbackground").style.display = "none";
    document.getElementById("pokemon-list-locationbackgroundshiny").style.display = "none";
    document.getElementById("pokemon-list-gigantamaxperfect").style.display = "none";
    document.getElementById("pokemon-list-purifiedshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-purified").style.display = "none";
    document.getElementById("pokemon-list-shinydynamaxperfect").style.display = "none";
    document.getElementById("pokemon-list-shinydynamax").style.display = "none";
    document.getElementById("pokemon-list-perfectdynamax").style.display = "none";
    document.getElementById("pokemon-list-specialbackgroundshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-locationbackgroundperfect").style.display = "none";
    document.getElementById("pokemon-list-locationbackground").style.display = "none";
    document.getElementById("pokemon-list-imperfect").style.display = "none";
    document.getElementById("pokemon-list-gigantamaxshiny").style.display = "none";
    document.getElementById("pokemon-list-purifiedperfect").style.display = "none";
    document.getElementById("pokemon-list-costumeshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-costumeperfect").style.display = "none";
    document.getElementById("pokemon-list-costume").style.display = "none";
    document.getElementById("pokemon-list-shinyshadowperfect").style.display = "none";
    document.getElementById("pokemon-list-shinyshadow").style.display = "none";
    document.getElementById("pokemon-list-perfectshadow").style.display = "none";
    document.getElementById("pokemon-list-specialbackgroundshiny").style.display = "none";
    document.getElementById("pokemon-list-locationbackgroundshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-imperfectshinyshadow").style.display = "none";
    document.getElementById("pokemon-list-gigantamaxperfectshiny").style.display = "none";
    document.getElementById("pokemon-list-imperfectshiny").style.display = "block";
    document.getElementById("Bulbasaur-container").style.display = "none";
    document.getElementById("mega-container").style.display = "block";
    document.getElementById("Bot-container").style.display = "none";
}

function ShinyLocationBackground() {
    document.getElementById("pokemon-list").style.display = "none";
    document.getElementById("pokemon-list-perfect").style.display = "none";
    document.getElementById("pokemon-list-shadow").style.display = "none";
    document.getElementById("pokemon-list-dynamax").style.display = "none";
    document.getElementById("pokemon-list-lucky").style.display = "none";
    document.getElementById("pokemon-list-shiny").style.display = "none";
    document.getElementById("big-pokemoncount-container").style.display = "none";
    document.getElementById("title-container").style.display = "none";
    document.getElementById("pokemon-list-shinylucky").style.display = "none";
    document.getElementById("pokemon-list-shinyluckyperfect").style.display = "none";
    document.getElementById("pokemon-list-costumeshiny").style.display = "none";
    document.getElementById("pokemon-list-purifiedshiny").style.display = "none";
    document.getElementById("pokemon-list-gigantamax").style.display = "none";
    document.getElementById("pokemon-list-perfectlucky").style.display = "none";
    document.getElementById("pokemon-list-shinyperfect").style.display = "none";
    document.getElementById("pokemon-list-locationspecialbackgroundperfect").style.display = "none";
    document.getElementById("pokemon-list-locationspecialbackground").style.display = "none";
    document.getElementById("pokemon-list-imperfectshiny").style.display = "none";
    document.getElementById("pokemon-list-gigantamaxperfect").style.display = "none";
    document.getElementById("pokemon-list-purifiedshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-purified").style.display = "none";
    document.getElementById("pokemon-list-shinydynamaxperfect").style.display = "none";
    document.getElementById("pokemon-list-shinydynamax").style.display = "none";
    document.getElementById("pokemon-list-perfectdynamax").style.display = "none";
    document.getElementById("pokemon-list-specialbackgroundshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-locationbackgroundperfect").style.display = "none";
    document.getElementById("pokemon-list-locationbackground").style.display = "none";
    document.getElementById("pokemon-list-imperfect").style.display = "none";
    document.getElementById("pokemon-list-gigantamaxshiny").style.display = "none";
    document.getElementById("pokemon-list-purifiedperfect").style.display = "none";
    document.getElementById("pokemon-list-costumeshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-costumeperfect").style.display = "none";
    document.getElementById("pokemon-list-costume").style.display = "none";
    document.getElementById("pokemon-list-shinyshadowperfect").style.display = "none";
    document.getElementById("pokemon-list-shinyshadow").style.display = "none";
    document.getElementById("pokemon-list-perfectshadow").style.display = "none";
    document.getElementById("pokemon-list-specialbackgroundshiny").style.display = "none";
    document.getElementById("pokemon-list-locationbackgroundshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-imperfectshinyshadow").style.display = "none";
    document.getElementById("pokemon-list-gigantamaxperfectshiny").style.display = "none";
    document.getElementById("pokemon-list-locationbackgroundshiny").style.display = "block";
    document.getElementById("Bulbasaur-container").style.display = "none";
    document.getElementById("mega-container").style.display = "block";
    document.getElementById("Bot-container").style.display = "none";
}

function SpecialBackground() {
    document.getElementById("pokemon-list").style.display = "none";
    document.getElementById("pokemon-list-perfect").style.display = "none";
    document.getElementById("pokemon-list-shadow").style.display = "none";
    document.getElementById("pokemon-list-dynamax").style.display = "none";
    document.getElementById("pokemon-list-lucky").style.display = "none";
    document.getElementById("pokemon-list-shiny").style.display = "none";
    document.getElementById("big-pokemoncount-container").style.display = "none";
    document.getElementById("title-container").style.display = "none";
    document.getElementById("pokemon-list-shinylucky").style.display = "none";
    document.getElementById("pokemon-list-shinyluckyperfect").style.display = "none";
    document.getElementById("pokemon-list-costumeshiny").style.display = "none";
    document.getElementById("pokemon-list-purifiedshiny").style.display = "none";
    document.getElementById("pokemon-list-gigantamax").style.display = "none";
    document.getElementById("pokemon-list-perfectlucky").style.display = "none";
    document.getElementById("pokemon-list-shinyperfect").style.display = "none";
    document.getElementById("pokemon-list-locationspecialbackgroundperfect").style.display = "none";
    document.getElementById("pokemon-list-locationbackgroundshiny").style.display = "none";
    document.getElementById("pokemon-list-imperfectshiny").style.display = "none";
    document.getElementById("pokemon-list-gigantamaxperfect").style.display = "none";
    document.getElementById("pokemon-list-purifiedshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-purified").style.display = "none";
    document.getElementById("pokemon-list-shinydynamaxperfect").style.display = "none";
    document.getElementById("pokemon-list-shinydynamax").style.display = "none";
    document.getElementById("pokemon-list-perfectdynamax").style.display = "none";
    document.getElementById("pokemon-list-specialbackgroundshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-locationbackgroundperfect").style.display = "none";
    document.getElementById("pokemon-list-locationbackground").style.display = "none";
    document.getElementById("pokemon-list-imperfect").style.display = "none";
    document.getElementById("pokemon-list-gigantamaxshiny").style.display = "none";
    document.getElementById("pokemon-list-purifiedperfect").style.display = "none";
    document.getElementById("pokemon-list-costumeshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-costumeperfect").style.display = "none";
    document.getElementById("pokemon-list-costume").style.display = "none";
    document.getElementById("pokemon-list-shinyshadowperfect").style.display = "none";
    document.getElementById("pokemon-list-shinyshadow").style.display = "none";
    document.getElementById("pokemon-list-perfectshadow").style.display = "none";
    document.getElementById("pokemon-list-specialbackgroundshiny").style.display = "none";
    document.getElementById("pokemon-list-locationbackgroundshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-imperfectshinyshadow").style.display = "none";
    document.getElementById("pokemon-list-gigantamaxperfectshiny").style.display = "none";
    document.getElementById("pokemon-list-locationspecialbackground").style.display = "block";
    document.getElementById("Bulbasaur-container").style.display = "none";
    document.getElementById("mega-container").style.display = "block";
    document.getElementById("Bot-container").style.display = "none";
}

function SpecialBackgroundPerfect() {
    document.getElementById("pokemon-list").style.display = "none";
    document.getElementById("pokemon-list-perfect").style.display = "none";
    document.getElementById("pokemon-list-shadow").style.display = "none";
    document.getElementById("pokemon-list-dynamax").style.display = "none";
    document.getElementById("pokemon-list-lucky").style.display = "none";
    document.getElementById("pokemon-list-shiny").style.display = "none";
    document.getElementById("big-pokemoncount-container").style.display = "none";
    document.getElementById("title-container").style.display = "none";
    document.getElementById("pokemon-list-shinylucky").style.display = "none";
    document.getElementById("pokemon-list-shinyluckyperfect").style.display = "none";
    document.getElementById("pokemon-list-costumeshiny").style.display = "none";
    document.getElementById("pokemon-list-purifiedshiny").style.display = "none";
    document.getElementById("pokemon-list-gigantamax").style.display = "none";
    document.getElementById("pokemon-list-perfectlucky").style.display = "none";
    document.getElementById("pokemon-list-shinyperfect").style.display = "none";
    document.getElementById("pokemon-list-locationspecialbackground").style.display = "none";
    document.getElementById("pokemon-list-locationbackgroundshiny").style.display = "none";
    document.getElementById("pokemon-list-imperfectshiny").style.display = "none";
    document.getElementById("pokemon-list-gigantamaxperfect").style.display = "none";
    document.getElementById("pokemon-list-purifiedshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-purified").style.display = "none";
    document.getElementById("pokemon-list-shinydynamaxperfect").style.display = "none";
    document.getElementById("pokemon-list-shinydynamax").style.display = "none";
    document.getElementById("pokemon-list-perfectdynamax").style.display = "none";
    document.getElementById("pokemon-list-specialbackgroundshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-locationbackgroundperfect").style.display = "none";
    document.getElementById("pokemon-list-locationbackground").style.display = "none";
    document.getElementById("pokemon-list-imperfect").style.display = "none";
    document.getElementById("pokemon-list-gigantamaxshiny").style.display = "none";
    document.getElementById("pokemon-list-purifiedperfect").style.display = "none";
    document.getElementById("pokemon-list-costumeshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-costumeperfect").style.display = "none";
    document.getElementById("pokemon-list-costume").style.display = "none";
    document.getElementById("pokemon-list-shinyshadowperfect").style.display = "none";
    document.getElementById("pokemon-list-shinyshadow").style.display = "none";
    document.getElementById("pokemon-list-perfectshadow").style.display = "none";
    document.getElementById("pokemon-list-specialbackgroundshiny").style.display = "none";
    document.getElementById("pokemon-list-locationbackgroundshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-imperfectshinyshadow").style.display = "none";
    document.getElementById("pokemon-list-gigantamaxperfectshiny").style.display = "none";
    document.getElementById("pokemon-list-locationspecialbackgroundperfect").style.display = "block";
    document.getElementById("Bulbasaur-container").style.display = "none";
    document.getElementById("mega-container").style.display = "block";
    document.getElementById("Bot-container").style.display = "none";
}

function ShinyPerfect() {
    document.getElementById("pokemon-list").style.display = "none";
    document.getElementById("pokemon-list-perfect").style.display = "none";
    document.getElementById("pokemon-list-shadow").style.display = "none";
    document.getElementById("pokemon-list-dynamax").style.display = "none";
    document.getElementById("pokemon-list-lucky").style.display = "none";
    document.getElementById("pokemon-list-shiny").style.display = "none";
    document.getElementById("big-pokemoncount-container").style.display = "none";
    document.getElementById("title-container").style.display = "none";
    document.getElementById("pokemon-list-shinylucky").style.display = "none";
    document.getElementById("pokemon-list-shinyluckyperfect").style.display = "none";
    document.getElementById("pokemon-list-costumeshiny").style.display = "none";
    document.getElementById("pokemon-list-purifiedshiny").style.display = "none";
    document.getElementById("pokemon-list-gigantamax").style.display = "none";
    document.getElementById("pokemon-list-perfectlucky").style.display = "none";
    document.getElementById("pokemon-list-locationspecialbackgroundperfect").style.display = "none";
    document.getElementById("pokemon-list-locationspecialbackground").style.display = "none";
    document.getElementById("pokemon-list-locationbackgroundshiny").style.display = "none";
    document.getElementById("pokemon-list-imperfectshiny").style.display = "none";
    document.getElementById("pokemon-list-gigantamaxperfect").style.display = "none";
    document.getElementById("pokemon-list-purifiedshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-purified").style.display = "none";
    document.getElementById("pokemon-list-shinydynamaxperfect").style.display = "none";
    document.getElementById("pokemon-list-shinydynamax").style.display = "none";
    document.getElementById("pokemon-list-perfectdynamax").style.display = "none";
    document.getElementById("pokemon-list-specialbackgroundshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-locationbackgroundperfect").style.display = "none";
    document.getElementById("pokemon-list-locationbackground").style.display = "none";
    document.getElementById("pokemon-list-imperfect").style.display = "none";
    document.getElementById("pokemon-list-gigantamaxshiny").style.display = "none";
    document.getElementById("pokemon-list-purifiedperfect").style.display = "none";
    document.getElementById("pokemon-list-costumeshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-costumeperfect").style.display = "none";
    document.getElementById("pokemon-list-costume").style.display = "none";
    document.getElementById("pokemon-list-shinyshadowperfect").style.display = "none";
    document.getElementById("pokemon-list-shinyshadow").style.display = "none";
    document.getElementById("pokemon-list-perfectshadow").style.display = "none";
    document.getElementById("pokemon-list-specialbackgroundshiny").style.display = "none";
    document.getElementById("pokemon-list-locationbackgroundshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-imperfectshinyshadow").style.display = "none";
    document.getElementById("pokemon-list-gigantamaxperfectshiny").style.display = "none";
    document.getElementById("pokemon-list-shinyperfect").style.display = "block";
    document.getElementById("Bulbasaur-container").style.display = "none";
    document.getElementById("mega-container").style.display = "block";
    document.getElementById("Bot-container").style.display = "none";
}

function LuckyPerfect() {
    document.getElementById("pokemon-list").style.display = "none";
    document.getElementById("pokemon-list-perfect").style.display = "none";
    document.getElementById("pokemon-list-shadow").style.display = "none";
    document.getElementById("pokemon-list-dynamax").style.display = "none";
    document.getElementById("pokemon-list-lucky").style.display = "none";
    document.getElementById("pokemon-list-shiny").style.display = "none";
    document.getElementById("big-pokemoncount-container").style.display = "none";
    document.getElementById("title-container").style.display = "none";
    document.getElementById("pokemon-list-shinylucky").style.display = "none";
    document.getElementById("pokemon-list-shinyluckyperfect").style.display = "none";
    document.getElementById("pokemon-list-costumeshiny").style.display = "none";
    document.getElementById("pokemon-list-purifiedshiny").style.display = "none";
    document.getElementById("pokemon-list-gigantamax").style.display = "none";
    document.getElementById("pokemon-list-shinyperfect").style.display = "none";
    document.getElementById("pokemon-list-locationspecialbackgroundperfect").style.display = "none";
    document.getElementById("pokemon-list-locationspecialbackground").style.display = "none";
    document.getElementById("pokemon-list-locationbackgroundshiny").style.display = "none";
    document.getElementById("pokemon-list-imperfectshiny").style.display = "none";
    document.getElementById("pokemon-list-gigantamaxperfect").style.display = "none";
    document.getElementById("pokemon-list-purifiedshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-purified").style.display = "none";
    document.getElementById("pokemon-list-shinydynamaxperfect").style.display = "none";
    document.getElementById("pokemon-list-shinydynamax").style.display = "none";
    document.getElementById("pokemon-list-perfectdynamax").style.display = "none";
    document.getElementById("pokemon-list-specialbackgroundshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-locationbackgroundperfect").style.display = "none";
    document.getElementById("pokemon-list-locationbackground").style.display = "none";
    document.getElementById("pokemon-list-imperfect").style.display = "none";
    document.getElementById("pokemon-list-gigantamaxshiny").style.display = "none";
    document.getElementById("pokemon-list-purifiedperfect").style.display = "none";
    document.getElementById("pokemon-list-costumeshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-costumeperfect").style.display = "none";
    document.getElementById("pokemon-list-costume").style.display = "none";
    document.getElementById("pokemon-list-shinyshadowperfect").style.display = "none";
    document.getElementById("pokemon-list-shinyshadow").style.display = "none";
    document.getElementById("pokemon-list-perfectshadow").style.display = "none";
    document.getElementById("pokemon-list-specialbackgroundshiny").style.display = "none";
    document.getElementById("pokemon-list-locationbackgroundshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-imperfectshinyshadow").style.display = "none";
    document.getElementById("pokemon-list-gigantamaxperfectshiny").style.display = "none";
    document.getElementById("pokemon-list-perfectlucky").style.display = "block";
    document.getElementById("Bulbasaur-container").style.display = "none";
    document.getElementById("mega-container").style.display = "block";
    document.getElementById("Bot-container").style.display = "none";
}

function home() {
    document.getElementById("pokemon-list").style.display = "none";
    document.getElementById("pokemon-list-perfect").style.display = "none";
    document.getElementById("pokemon-list-shadow").style.display = "none";
    document.getElementById("pokemon-list-dynamax").style.display = "none";
    document.getElementById("pokemon-list-lucky").style.display = "none";
    document.getElementById("pokemon-list-shiny").style.display = "none";
    document.getElementById("big-pokemoncount-container").style.display = "flex";
    document.getElementById("title-container").style.display = "block";
    document.getElementById("pokemon-list-shinylucky").style.display = "none";
    document.getElementById("pokemon-list-shinyluckyperfect").style.display = "none";
    document.getElementById("pokemon-list-costumeshiny").style.display = "none";
    document.getElementById("pokemon-list-purifiedshiny").style.display = "none";
    document.getElementById("pokemon-list-gigantamax").style.display = "none";
    document.getElementById("pokemon-list-shinyperfect").style.display = "none";
    document.getElementById("pokemon-list-locationspecialbackgroundperfect").style.display = "none";
    document.getElementById("pokemon-list-locationspecialbackground").style.display = "none";
    document.getElementById("pokemon-list-locationbackgroundshiny").style.display = "none";
    document.getElementById("pokemon-list-imperfectshiny").style.display = "none";
    document.getElementById("pokemon-list-gigantamaxperfect").style.display = "none";
    document.getElementById("pokemon-list-purifiedshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-purified").style.display = "none";
    document.getElementById("pokemon-list-shinydynamaxperfect").style.display = "none";
    document.getElementById("pokemon-list-shinydynamax").style.display = "none";
    document.getElementById("pokemon-list-perfectdynamax").style.display = "none";
    document.getElementById("pokemon-list-specialbackgroundshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-locationbackgroundperfect").style.display = "none";
    document.getElementById("pokemon-list-locationbackground").style.display = "none";
    document.getElementById("pokemon-list-imperfect").style.display = "none";
    document.getElementById("pokemon-list-gigantamaxshiny").style.display = "none";
    document.getElementById("pokemon-list-purifiedperfect").style.display = "none";
    document.getElementById("pokemon-list-costumeshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-costumeperfect").style.display = "none";
    document.getElementById("pokemon-list-costume").style.display = "none";
    document.getElementById("pokemon-list-shinyshadowperfect").style.display = "none";
    document.getElementById("pokemon-list-shinyshadow").style.display = "none";
    document.getElementById("pokemon-list-perfectshadow").style.display = "none";
    document.getElementById("pokemon-list-specialbackgroundshiny").style.display = "none";
    document.getElementById("pokemon-list-locationbackgroundshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-imperfectshinyshadow").style.display = "none";
    document.getElementById("pokemon-list-gigantamaxperfectshiny").style.display = "none";
    document.getElementById("pokemon-list-perfectlucky").style.display = "none";
    document.getElementById("Bulbasaur-container").style.display = "none";
    document.getElementById("mega-container").style.display = "none";
    document.getElementById("main-container").style.display = "block";
    document.getElementById("attackers-container").style.display = "none";
    document.getElementById("nav2buttons-1").style.borderBottomColor = "#333";
    document.getElementById("nav2buttons-2").style.borderBottomColor = "#333";
    document.getElementById("nav2buttons-3").style.borderBottomColor = "#333";
    document.getElementById("Bot-container").style.display = "none";
}

function Bulbasaur() {
    document.getElementById("pokemon-list").style.display = "none";
    document.getElementById("pokemon-list-perfect").style.display = "none";
    document.getElementById("pokemon-list-shadow").style.display = "none";
    document.getElementById("pokemon-list-dynamax").style.display = "none";
    document.getElementById("pokemon-list-lucky").style.display = "none";
    document.getElementById("pokemon-list-shiny").style.display = "none";
    document.getElementById("big-pokemoncount-container").style.display = "flex";
    document.getElementById("title-container").style.display = "block";
    document.getElementById("pokemon-list-shinylucky").style.display = "none";
    document.getElementById("pokemon-list-shinyluckyperfect").style.display = "none";
    document.getElementById("pokemon-list-costumeshiny").style.display = "none";
    document.getElementById("pokemon-list-purifiedshiny").style.display = "none";
    document.getElementById("pokemon-list-gigantamax").style.display = "none";
    document.getElementById("pokemon-list-shinyperfect").style.display = "none";
    document.getElementById("pokemon-list-locationspecialbackgroundperfect").style.display = "none";
    document.getElementById("pokemon-list-locationspecialbackground").style.display = "none";
    document.getElementById("pokemon-list-locationbackgroundshiny").style.display = "none";
    document.getElementById("pokemon-list-imperfectshiny").style.display = "none";
    document.getElementById("pokemon-list-gigantamaxperfect").style.display = "none";
    document.getElementById("pokemon-list-purifiedshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-purified").style.display = "none";
    document.getElementById("pokemon-list-shinydynamaxperfect").style.display = "none";
    document.getElementById("pokemon-list-shinydynamax").style.display = "none";
    document.getElementById("pokemon-list-perfectdynamax").style.display = "none";
    document.getElementById("pokemon-list-specialbackgroundshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-locationbackgroundperfect").style.display = "none";
    document.getElementById("pokemon-list-locationbackground").style.display = "none";
    document.getElementById("pokemon-list-imperfect").style.display = "none";
    document.getElementById("pokemon-list-gigantamaxshiny").style.display = "none";
    document.getElementById("pokemon-list-purifiedperfect").style.display = "none";
    document.getElementById("pokemon-list-costumeshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-costumeperfect").style.display = "none";
    document.getElementById("pokemon-list-costume").style.display = "none";
    document.getElementById("pokemon-list-shinyshadowperfect").style.display = "none";
    document.getElementById("pokemon-list-shinyshadow").style.display = "none";
    document.getElementById("pokemon-list-perfectshadow").style.display = "none";
    document.getElementById("pokemon-list-specialbackgroundshiny").style.display = "none";
    document.getElementById("pokemon-list-locationbackgroundshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-imperfectshinyshadow").style.display = "none";
    document.getElementById("pokemon-list-gigantamaxperfectshiny").style.display = "none";
    document.getElementById("pokemon-list-perfectlucky").style.display = "none";
    document.getElementById("Bulbasaur-container").style.display = "block";
    document.getElementById("mega-container").style.display = "none";
    document.getElementById("attackers-container").style.display = "none";
    document.getElementById("main-container").style.display = "none";
    document.getElementById("Bot-container").style.display = "none";
}

function openLeekduck1() {
    window.open('https://www.google.com/search?q=Pokemon+Go+Holiday+Part+1+-+2024&rlz=1C1GEWG_nlNL977NL977&oq=Pokemon+Go+Holiday+Part+1+-+2024&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQABjvBTIHCAIQABjvBTIHCAMQABjvBTIHCAQQABjvBTIGCAUQRRhAMgYIBhBFGDzSAQkyMDA5MGowajeoAgCwAgA&sourceid=chrome&ie=UTF-8', '_blank');
}

function openLeekduck2() {
    window.open('https://www.google.com/search?q=Pokemon+Go+Holiday+Part+2+-+2024&sca_esv=934eef27a8238b0c&rlz=1C1GEWG_nlNL977NL977&sxsrf=ADLYWIKhnN10oYlxIQN54x4zkXqeytxwyw%3A1734298531234&ei=o0tfZ7_5DZe1i-gPsKDv0A0&ved=0ahUKEwj_1o2_3aqKAxWX2gIHHTDQG9oQ4dUDCBA&uact=5&oq=Pokemon+Go+Holiday+Part+2+-+2024&gs_lp=Egxnd3Mtd2l6LXNlcnAiIFBva2Vtb24gR28gSG9saWRheSBQYXJ0IDIgLSAyMDI0MgUQABjvBTIFEAAY7wUyCBAAGIAEGKIESLoJUO4EWIYGcAF4AZABAJgBU6ABkAGqAQEyuAEDyAEA-AEBmAIDoAKXAcICChAAGLADGNYEGEeYAwCIBgGQBgiSBwEzoAfpBA&sclient=gws-wiz-serp', '_blank');
}

function openLeekduck3() {
    window.open('https://www.google.com/search?q=Pokemon+Go+Unova+Tour+-+2025&sca_esv=934eef27a8238b0c&rlz=1C1GEWG_nlNL977NL977&sxsrf=ADLYWIKKQsiifiuwcSl3LeDsl_byacO-3g%3A1734298590879&ei=3ktfZ6epNfuui-gPm5qX6AY&ved=0ahUKEwinkMbb3aqKAxV71wIHHRvNBW0Q4dUDCBA&uact=5&oq=Pokemon+Go+Unova+Tour+-+2025&gs_lp=Egxnd3Mtd2l6LXNlcnAiHFBva2Vtb24gR28gVW5vdmEgVG91ciAtIDIwMjUyBhAAGBYYHjIFEAAY7wUyBRAAGO8FMggQABiABBiiBDIFEAAY7wVIrQtQ6QVYggdwAXgBkAEAmAE-oAF6qgEBMrgBA8gBAPgBAZgCA6ACgQHCAgoQABiwAxjWBBhHmAMAiAYBkAYIkgcBM6AHvgc&sclient=gws-wiz-serp', '_blank');
}

function openLeekduck4() {
    window.open('https://www.google.com/search?q=Pokemon+Go+December+Community+Day+-+2024&sca_esv=934eef27a8238b0c&rlz=1C1GEWG_nlNL977NL977&sxsrf=ADLYWIIsh1or7owuBGcKaXEhLFUGvGY-KA%3A1734298610315&ei=8ktfZ-_3EpCOi-gPtZyO6AU&ved=0ahUKEwjvuOjk3aqKAxUQxwIHHTWOA10Q4dUDCBA&uact=5&oq=Pokemon+Go+December+Community+Day+-+2024&gs_lp=Egxnd3Mtd2l6LXNlcnAiKFBva2Vtb24gR28gRGVjZW1iZXIgQ29tbXVuaXR5IERheSAtIDIwMjQyBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yBRAAGO8FMgUQABjvBTIIEAAYgAQYogRImVZQzANYo1NwA3gBkAEAmAFaoAGTDaoBAjI4uAEDyAEA-AEBmAIfoALCDcICChAAGLADGNYEGEfCAgYQABgHGB7CAggQABgHGAoYHsICCBAAGAcYCBgewgIGEAAYChgewgIIECEYoAEYwwTCAgoQIRigARjDBBgKwgIFECEYoAHCAggQABgWGAoYHpgDAIgGAZAGCJIHAjMxoAefZA&sclient=gws-wiz-serp', '_blank');
}

function checklist() {
    document.getElementById("nav2buttons-1").style.borderBottomColor = "white";
    document.getElementById("nav2buttons-2").style.borderBottomColor = "#333";
    document.getElementById("nav2buttons-3").style.borderBottomColor = "#333";
    document.getElementById("pokemon-list").style.display = "none";
    document.getElementById("pokemon-list-perfect").style.display = "none";
    document.getElementById("pokemon-list-shadow").style.display = "none";
    document.getElementById("pokemon-list-dynamax").style.display = "none";
    document.getElementById("pokemon-list-lucky").style.display = "none";
    document.getElementById("pokemon-list-shiny").style.display = "none";
    document.getElementById("big-pokemoncount-container").style.display = "flex";
    document.getElementById("title-container").style.display = "block";
    document.getElementById("pokemon-list-shinylucky").style.display = "none";
    document.getElementById("pokemon-list-shinyluckyperfect").style.display = "none";
    document.getElementById("pokemon-list-costumeshiny").style.display = "none";
    document.getElementById("pokemon-list-purifiedshiny").style.display = "none";
    document.getElementById("pokemon-list-gigantamax").style.display = "none";
    document.getElementById("pokemon-list-shinyperfect").style.display = "none";
    document.getElementById("pokemon-list-locationspecialbackgroundperfect").style.display = "none";
    document.getElementById("pokemon-list-locationspecialbackground").style.display = "none";
    document.getElementById("pokemon-list-locationbackgroundshiny").style.display = "none";
    document.getElementById("pokemon-list-imperfectshiny").style.display = "none";
    document.getElementById("pokemon-list-gigantamaxperfect").style.display = "none";
    document.getElementById("pokemon-list-purifiedshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-purified").style.display = "none";
    document.getElementById("pokemon-list-shinydynamaxperfect").style.display = "none";
    document.getElementById("pokemon-list-shinydynamax").style.display = "none";
    document.getElementById("pokemon-list-perfectdynamax").style.display = "none";
    document.getElementById("pokemon-list-specialbackgroundshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-locationbackgroundperfect").style.display = "none";
    document.getElementById("pokemon-list-locationbackground").style.display = "none";
    document.getElementById("pokemon-list-imperfect").style.display = "none";
    document.getElementById("pokemon-list-gigantamaxshiny").style.display = "none";
    document.getElementById("pokemon-list-purifiedperfect").style.display = "none";
    document.getElementById("pokemon-list-costumeshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-costumeperfect").style.display = "none";
    document.getElementById("pokemon-list-costume").style.display = "none";
    document.getElementById("pokemon-list-shinyshadowperfect").style.display = "none";
    document.getElementById("pokemon-list-shinyshadow").style.display = "none";
    document.getElementById("pokemon-list-perfectshadow").style.display = "none";
    document.getElementById("pokemon-list-specialbackgroundshiny").style.display = "none";
    document.getElementById("pokemon-list-locationbackgroundshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-imperfectshinyshadow").style.display = "none";
    document.getElementById("pokemon-list-gigantamaxperfectshiny").style.display = "none";
    document.getElementById("pokemon-list-perfectlucky").style.display = "none";
    document.getElementById("Bulbasaur-container").style.display = "none";
    document.getElementById("mega-container").style.display = "block";
    document.getElementById("main-container").style.display = "none";
    document.getElementById("attackers-container").style.display = "none";
    document.getElementById("Bot-container").style.display = "none";
}

function attackers() {
    document.getElementById("nav2buttons-1").style.borderBottomColor = "#333";
    document.getElementById("nav2buttons-2").style.borderBottomColor = "white";
    document.getElementById("nav2buttons-3").style.borderBottomColor = "#333";
    document.getElementById("pokemon-list").style.display = "none";
    document.getElementById("pokemon-list-perfect").style.display = "none";
    document.getElementById("pokemon-list-shadow").style.display = "none";
    document.getElementById("pokemon-list-dynamax").style.display = "none";
    document.getElementById("pokemon-list-lucky").style.display = "none";
    document.getElementById("pokemon-list-shiny").style.display = "none";
    document.getElementById("big-pokemoncount-container").style.display = "flex";
    document.getElementById("title-container").style.display = "block";
    document.getElementById("pokemon-list-shinylucky").style.display = "none";
    document.getElementById("pokemon-list-shinyluckyperfect").style.display = "none";
    document.getElementById("pokemon-list-costumeshiny").style.display = "none";
    document.getElementById("pokemon-list-purifiedshiny").style.display = "none";
    document.getElementById("pokemon-list-gigantamax").style.display = "none";
    document.getElementById("pokemon-list-shinyperfect").style.display = "none";
    document.getElementById("pokemon-list-locationspecialbackgroundperfect").style.display = "none";
    document.getElementById("pokemon-list-locationspecialbackground").style.display = "none";
    document.getElementById("pokemon-list-locationbackgroundshiny").style.display = "none";
    document.getElementById("pokemon-list-imperfectshiny").style.display = "none";
    document.getElementById("pokemon-list-gigantamaxperfect").style.display = "none";
    document.getElementById("pokemon-list-purifiedshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-purified").style.display = "none";
    document.getElementById("pokemon-list-shinydynamaxperfect").style.display = "none";
    document.getElementById("pokemon-list-shinydynamax").style.display = "none";
    document.getElementById("pokemon-list-perfectdynamax").style.display = "none";
    document.getElementById("pokemon-list-specialbackgroundshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-locationbackgroundperfect").style.display = "none";
    document.getElementById("pokemon-list-locationbackground").style.display = "none";
    document.getElementById("pokemon-list-imperfect").style.display = "none";
    document.getElementById("pokemon-list-gigantamaxshiny").style.display = "none";
    document.getElementById("pokemon-list-purifiedperfect").style.display = "none";
    document.getElementById("pokemon-list-costumeshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-costumeperfect").style.display = "none";
    document.getElementById("pokemon-list-costume").style.display = "none";
    document.getElementById("pokemon-list-shinyshadowperfect").style.display = "none";
    document.getElementById("pokemon-list-shinyshadow").style.display = "none";
    document.getElementById("pokemon-list-perfectshadow").style.display = "none";
    document.getElementById("pokemon-list-specialbackgroundshiny").style.display = "none";
    document.getElementById("pokemon-list-locationbackgroundshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-imperfectshinyshadow").style.display = "none";
    document.getElementById("pokemon-list-gigantamaxperfectshiny").style.display = "none";
    document.getElementById("pokemon-list-perfectlucky").style.display = "none";
    document.getElementById("Bulbasaur-container").style.display = "none";
    document.getElementById("mega-container").style.display = "none";
    document.getElementById("main-container").style.display = "none";
    document.getElementById("attackers-container").style.display = "block";
    document.getElementById("Bot-container").style.display = "none";
}

function bot() {
    document.getElementById("nav2buttons-1").style.borderBottomColor = "#333";
    document.getElementById("nav2buttons-2").style.borderBottomColor = "#333";
    document.getElementById("nav2buttons-3").style.borderBottomColor = "white";
    document.getElementById("pokemon-list").style.display = "none";
    document.getElementById("pokemon-list-perfect").style.display = "none";
    document.getElementById("pokemon-list-shadow").style.display = "none";
    document.getElementById("pokemon-list-dynamax").style.display = "none";
    document.getElementById("pokemon-list-lucky").style.display = "none";
    document.getElementById("pokemon-list-shiny").style.display = "none";
    document.getElementById("big-pokemoncount-container").style.display = "flex";
    document.getElementById("title-container").style.display = "block";
    document.getElementById("pokemon-list-shinylucky").style.display = "none";
    document.getElementById("pokemon-list-shinyluckyperfect").style.display = "none";
    document.getElementById("pokemon-list-costumeshiny").style.display = "none";
    document.getElementById("pokemon-list-purifiedshiny").style.display = "none";
    document.getElementById("pokemon-list-gigantamax").style.display = "none";
    document.getElementById("pokemon-list-shinyperfect").style.display = "none";
    document.getElementById("pokemon-list-locationspecialbackgroundperfect").style.display = "none";
    document.getElementById("pokemon-list-locationspecialbackground").style.display = "none";
    document.getElementById("pokemon-list-locationbackgroundshiny").style.display = "none";
    document.getElementById("pokemon-list-imperfectshiny").style.display = "none";
    document.getElementById("pokemon-list-gigantamaxperfect").style.display = "none";
    document.getElementById("pokemon-list-purifiedshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-purified").style.display = "none";
    document.getElementById("pokemon-list-shinydynamaxperfect").style.display = "none";
    document.getElementById("pokemon-list-shinydynamax").style.display = "none";
    document.getElementById("pokemon-list-perfectdynamax").style.display = "none";
    document.getElementById("pokemon-list-specialbackgroundshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-locationbackgroundperfect").style.display = "none";
    document.getElementById("pokemon-list-locationbackground").style.display = "none";
    document.getElementById("pokemon-list-imperfect").style.display = "none";
    document.getElementById("pokemon-list-gigantamaxshiny").style.display = "none";
    document.getElementById("pokemon-list-purifiedperfect").style.display = "none";
    document.getElementById("pokemon-list-costumeshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-costumeperfect").style.display = "none";
    document.getElementById("pokemon-list-costume").style.display = "none";
    document.getElementById("pokemon-list-shinyshadowperfect").style.display = "none";
    document.getElementById("pokemon-list-shinyshadow").style.display = "none";
    document.getElementById("pokemon-list-perfectshadow").style.display = "none";
    document.getElementById("pokemon-list-specialbackgroundshiny").style.display = "none";
    document.getElementById("pokemon-list-locationbackgroundshinyperfect").style.display = "none";
    document.getElementById("pokemon-list-imperfectshinyshadow").style.display = "none";
    document.getElementById("pokemon-list-gigantamaxperfectshiny").style.display = "none";
    document.getElementById("pokemon-list-perfectlucky").style.display = "none";
    document.getElementById("Bulbasaur-container").style.display = "none";
    document.getElementById("mega-container").style.display = "none";
    document.getElementById("main-container").style.display = "none";
    document.getElementById("attackers-container").style.display = "none";
    document.getElementById("Bot-container").style.display = "flex";
}

document.getElementById('ask-button').addEventListener('click', function() {
    const userInput = document.getElementById('user-input').value.toLowerCase();
    let answer = "I'm sorry, I don't have an answer for that.";

    if (userInput.includes('best pokemon')) {
        answer = "There is no pokemon justified as the best but the most recommended pokemon to have is Mewtwo.";
    } else if (userInput.includes('find pokemon')) {
        answer = "Locations are mostly based on events and spawns but you can always check community sites for tips and tricks.";
    } else if (userInput.includes('find a pokemon')) {
        answer = "Locations are mostly based on events and spawns but you can always check community sites for tips and tricks.";
    }

    document.getElementById('response').innerText = answer;
    document.getElementById('user-input').value = '';
});