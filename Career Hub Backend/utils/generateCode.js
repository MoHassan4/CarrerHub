const generateCode = (codelength = 4)=>{
    try{

    let code = "";
    const digits = "0123456789";

    for (let i = 0 ; i< codelength ; i++){
        const randomNumber = Math.floor(Math.random() * digits.length);
         code  += digits[ randomNumber];
    }

    return code;
    }catch(error){
        throw new Error(`Code Generation Failed , ${error.message}`);
    }
}

module.exports = generateCode;