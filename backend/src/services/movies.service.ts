import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getMovies() {
    try {
        const movies = await prisma.movies.findMany(); // Remplace "movie" par le nom exact de ton modèle dans le schema.prisma
        return movies;
    } catch (error) {
        console.error('Error fetching movies:', error);
        throw error;
    } finally {
        await prisma.$disconnect();
    }
}
