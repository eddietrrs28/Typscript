import { createConnection, getManager } from "typeorm";

export async function initConection(){
    try{
        await createConnection();
        console.log("Conexion Creada");
        
    }catch(error){
        console.log("Conexion no establecida debido a: ", error);
        process.exit(0);
    }
}