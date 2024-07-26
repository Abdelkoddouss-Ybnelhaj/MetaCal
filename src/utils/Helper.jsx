
export const redirect = (path)=>{
    window.location.href = `/${path}`;
}

export const validIntInput = (input)=>{
    let x = Number(input);
    if(input === null || input === '' || !Number.isInteger(x)){
        return false;
    }
    return true;
}
export const validStringInput = (input)=>{
    if(input === null || input === ''){
        return false;
    }
    return true;
}