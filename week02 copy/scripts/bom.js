        const input = document.querySelector('#favchap');
        const button = document.querySelector('button');
        const list = document.querySelector('#list');
        let chaptersArray = getChapterList() | [];



button.addEventListener('click', function () {
    if (input.value.trim() !== "") {
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value = ""
        input.focus();

    };
});


// function getChapterList() {}



chaptersArray.forEach(chapter => {
    displayList(chapter);
}) 

function displayList(item) {
    const deleteButton = document.createElement('button');
    deleteButton.textContent = '❌';

    const li = document.createElement('li');
    li.textContent = item;
    deleteButton.classList.add('delete');
    li.append(deleteButton);
    list.append(li)

    deleteButton.addEventListener('click', function () {
        list.removeChild(li);
        input.focus();
    })
}

function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList')) 
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
    setChapterList();

}



