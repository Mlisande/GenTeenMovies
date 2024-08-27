//Services pour interagir avec la base de données
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class MovieService {
   static async getAllMovies() {
        try {
            console.log('Fetching all movies...');
            return await prisma.movie.findMany();
            console.log('requete GET OK')
        } catch (error) {
            console.error('Error fetching movies', error);
            throw  new Error ('Could not fetch movies');
        }
   }
    static async createMovie(data: { title: string, description: string, director: string, releaseYear: number }) {
        try {
            console.log('Creating movie with data:', data);
            return await prisma.movie.create({ data });
        } catch (error) {
            console.error('Error creating movie', error);
            throw new Error('Could not create movie');
        }
    }

    static async getMovieById(id:number){
        try {
            return await prisma.movie.findUnique({where : {id}});
        }catch (error) {
            console.error('Errir fetching movie by id');
            throw new Error ('Could not fetch movie')
        }
    }

    static async deleteMovie(id:number){
        try{
            return await prisma.movie.delete({where:{id}});
        } catch (error){
            console.error('Errir fetching movie by id');
            throw new Error ('Could not delte movie');
        }

    }
        
};







