// let $type = document.createElement('div');
// $type.className = 'info-item';
// $type.id = 'type';
// let $typeText = document.createTextNode('말티즈');
// let $animalInfo = document.querySelector('div.animal-info');
// $animalInfo.appendChild($type);
// $type.appendChild($typeText);

// console.log($type);
// console.log($typeText);

// 1. 버튼 요소를 만드세요
let $button = document.createElement('button');

// 2. id를 'new-button'으로 지정하세요
$button.id = 'new-button';

// 3. class를 'new-button'으로 추가하세요
$button.classList.add('new-button');

// 4. 버튼에 보여줄 텍스트를 '버튼'으로 지정하세요
$button.textContent = '버튼';

// 5. class가 'animal-info'인 div를 선택하세요
let $animalInfo = document.querySelector('div.animal-info');

// 6. 완성된 버튼을 animal-info 안에 추가하세요
$animalInfo.appendChild($button);

console.log($animalInfo);