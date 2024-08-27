// API Routes movies

import { NextRequest, NextResponse } from 'next/server';
import { MovieService } from '../../../services/moviesService';



// Gestion de la méthode GET
export async function GET(req: NextRequest) {
    try {
        const movies = await MovieService.getAllMovies();
        return NextResponse.json(movies, { status: 200 });
    } catch (error) {
        console.error('Error fetching movies:', error);
        return NextResponse.json({ message: 'Failed to fetch movies' }, { status: 500 });
    }
}

// Gestion de la méthode POST
export async function POST(req: NextRequest) {
    try {
        const data = await req.json(); // Récupérer les données du corps de la requête
        const newMovie = await MovieService.createMovie(data);
        return NextResponse.json(newMovie, { status: 201 });
    } catch (error) {
        console.error('Error creating movie:', error);
        return NextResponse.json({ message: 'Could not create movie' }, { status: 500 });
    }
}