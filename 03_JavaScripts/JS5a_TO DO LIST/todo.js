let input = prompt("Appoiments what would you like to do?")

const todo = ['7 Thala for the reason','One Love'];

while (input !== 'quit' && input !== 'q') {
    if (input === 'list') {
        console.log('**********')
        for (let i = 0; i < todo.length; i++) {
            console.log(`${i}:  ${todo[i]}`);
        }
        console.log('**********')

    } else if (input === 'new') {
        const newTodo = prompt('Ok, what do you want to add new?');
        todo.push(newTodo);
        console.log(`${newTodo} added to the list!`)
        
    } else if (input === 'delete') {
        const index = parseInt(prompt('Ok, enter the index you want to delete!'));
        if (!Number.isNaN(index)) {
            const deleted = todo.splice(index, 1);
            console.log(`OK,${deleted[0]} is deleted`);
        } else {
            console.log('Unknown index!!! enter valid index')
        }
    }
    input = prompt("what would you like to do?")
}
console.log("OK QUIT THE APP!")