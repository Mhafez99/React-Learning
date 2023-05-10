
// Function Return Object => Vactory Fuction
// Immediately Invoked Function Experssion IIFE ()()


// Module Pattern
// IIFE  Inside It Vactory Function





// Group of functions Executed To Build App(Todo List)
// To Prevent Spaghetti code and  Avoid Global Scope From Window
// We Can Do this with object and PUT functions as property
// Here I Can Access The Functions with dot notation of Object
// To Prevent This I Create a function and return this object
// To Encapsulate Code With Functions
// I Want To private Some Function TO hide them from User
// I will put them inside function and return object with property functions i want to public them
// No becaouse i will up and down from public func and private func
// i will put all functions up and all functions i want to show i will return object with keys this fuunctions
// i want to IIFE
// i can pass parameter in function(e) {}({id:2, title:"Hell"})

// To Separate Creation From Registeration
// Called Controller Global Module Access
(function($) {
    // Creation
    const todoApp = (function() {
        let todos = [];
        // Private Functions Cant Access From Outside Of Function
        function todosCount() {
            return todos.length;
        }
        function makeTodoLowerCase() {
            todos = todos.map(el => el.toLowerCase());
        }
        function logMyTodos() {
            console.log("Todos :" + todos.join(" | "));
        }
        function addTodo(todo) {
            todos.push(todo);
            makeTodoLowerCase();
            logMyTodos();
            console.log(`You Have ${todosCount()} Todo`);
        }
        function deleteTodo(todo) {
            todos = todos.filter(el => el != todo);
            logMyTodos();
        }
        return {
            addTodo: addTodo,
            deleteTodo: deleteTodo
        };
    })();

    const myCustomModule = (function() {
        function changeCSS(selector, cssProps) {
            $(selector).css(cssProps);
        }
        return {
            css: changeCSS
        };
    })();

    // Registration
    if (!window.todoApp) {
        window.todoAPI = todoApp;
    }
    if (!window.myCustomModule) {
        window.CSSAPI = myCustomModule;
    }
})($);