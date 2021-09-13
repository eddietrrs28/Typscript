import 'reflect-metadata';
import { initConection } from './database/entities';
import { getQuotesFromApi } from './getQuotes/getQuotes';
//import {getQuotesFromApi} from "./getQuotes/getQuotes";


const init = async () => {
    await initConection();
    executegetQuotes();
};

init();

const executegetQuotes=()=>{
    //Instanciamos la clase getQuotesFromApi y se guarda en la instancia en getQuotes.
    const getQuotes = new getQuotesFromApi();

    getQuotes.requestData();
};
