import { Result } from "./result.model";

export interface PeliculasPopulares {

    page: number,
    results: Result[],
    total_pages: number,
    total_results: number

}

