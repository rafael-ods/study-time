export interface ICardTask {
    id: string // por mais que o ID é um numero, mais a chamada da funçao do uuid é uma string
    task: string,
    time: string,
    selected: boolean,
    completed: boolean,
}