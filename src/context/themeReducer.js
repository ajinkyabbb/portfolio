

export const themeReducer =(state,{type})=>{
    switch(type){
        case "TOGGLE_THEME":
            return {
                theme: state.theme === "dark" ? "light" : "dark",
            };
            default: 
            throw new Error(`Undefined action type: ${type}`)
    }
}