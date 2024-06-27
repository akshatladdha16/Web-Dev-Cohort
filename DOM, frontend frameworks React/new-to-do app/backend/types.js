const zod=require("zod");

const createTodo=zod.object({
    title:zod.string(),
    description:zod.string()
})

const updateTodo=zod.object({
    id:zod.string()
})

//exporting our written code so we can use it someowhere else (good swe practise)
module.exports={
    createTodo:createTodo,
    updateTodo:updateTodo
}