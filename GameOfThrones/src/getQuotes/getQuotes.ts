import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { getConnection, getManager } from "typeorm";
import { Quotes } from "../database/entities/quotes.entity";
import { Iquote } from "./interface/quote.interface";

export class getQuotesFromApi{
    private axiosConfiguracion: AxiosRequestConfig = {
        method:'GET',
        url:'https://game-of-thrones-quotes.herokuapp.com/v1/random/72',
    }; 
    public async requestData(): Promise<void>{
        let listaQuotes: Iquote[] = [];

        let responseAxios: AxiosResponse<Iquote[]> = await axios(
            this.axiosConfiguracion
        );

        listaQuotes = responseAxios.data.map((quote)=>({
            sentence: quote.sentence, 
            name: quote.name, 
            slug: quote.slug,
            house_name: quote.house_name,
            house_slug: quote.house_slug
        }));
        
        this.saveQuote(listaQuotes);
    }

    public async saveQuote(listaQuotes:Iquote[]){
        try{
           await getConnection()
           .createQueryBuilder()
           .insert()
           .into(Quotes)
           .values(listaQuotes)
           .execute();
        }catch(error){
          console.log(error)  
        }
       
    }

    public async getQuotesByAuthor(author: string){
        try{
        let quotesByAuthor = await getManager()
            .getRepository(Quotes)
            .createQueryBuilder("quotes")
            .where("quotes.author=:author",{
                author: author
            }).execute();

        }catch(error){
            console.log(`error en getQuotesByAuthorgetQuotesByAuthor ${error}`);
        }
    }
}


