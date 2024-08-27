//Services pour interagir avec la base de données, ici pour récupérer les films
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class MovieService {
   static async getAllMovies() {
        try {
            return await prisma.movie.findMany();
        } catch (error) {
            console.error('Error fetching movies', error);
            throw  new Error ('Could not fetch movies');
        }
   }
    static async createMovie(data: { title: string, description: string, director: string, releaseYear: number }) {
        try {
            return await prisma.movie.create({ data });
        } catch (error) {
            console.error('Error creating movie', error);
            throw new Error('Could not create movie');
        }
    }
        
};







