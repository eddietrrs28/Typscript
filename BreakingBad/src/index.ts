import 'reflect-metadata';
import { initConection } from './database/entities';
import { getQuotesFromApi } from './getQuotes/getQuotes';
//import {getQuotesFromApi} from "./getQuotes/getQuotes";


const init = async () => {
    await initConection();
    executegetQuotes();
};


const executegetQuotes=()=>{
    //Instanciamos la clase getQuotesFromApi y se guarda en la instancia en getQuotes.
    const getQuotes = new getQuotesFromApi();

    getQuotes.getQuotesByAuthor('Jesse Pinkman')
};

init();

/*const getQuoteInstance = new getQuotesFromApi();

getQuoteInstance.saveQuote();*/