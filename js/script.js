adder = (() =>{
    let counter = 3
    return () => {
        return counter++
    }
})()

//Görev tamamlanıdığı zaman arka plan rengini değiştirmeye yarayan fonksiyon 
function checkFunction(elem) {
    let parentLabel = document.querySelector(`label[data-index="${elem.dataset.index}"]`)
    if (elem.checked == true){
        elem.parentElement.parentElement.style.background= "gray";
    }else {
        elem.parentElement.parentElement.style.background= "#ffc107";
    }
}

// Yeni görev eklemeye yarayan fonksiyon

function addFunction(){
    let task= document.querySelector('#newTask')
    if(task.value.length == 0){
        alert("Please Enter a Task")
    }
    else{
        index = adder()
        const tasks = document.querySelector("#tasks")
        let newTask= `
            <label class="myLabel" data-index=${index}>
                <div class="line">
                    <div class="right">
                        <input type="checkbox" class="myCheck" onclick="checkFunction(this)" data-index=${index}>
                        <span class="text">${task.value}</span>
                    </div>
                    <button class="myButton" onclick="removeTask(this.dataset.index)" data-index=${index}>   
                        <i class="material-icons">delete</i></button>
                </div>
            </label>
        `;
        tasks.insertAdjacentHTML("beforeend", newTask);


        task.value= ""
    }
} 

//Görevi silmeye yarayan fonksiyon
function removeTask(index) {
    let parentLabel = document.querySelector(`label[data-index="${index}"]`);
    parentLabel.remove()
}