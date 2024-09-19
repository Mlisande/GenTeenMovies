// API Routes movies

import { NextRequest, NextResponse } from 'next/server';
import { MovieService } from '../../../services/moviesService';

// Gestion de la méthode GET
export async function GET(req: NextRequest) {
  try {
    console.log('Handling GET request:', req.url);
    const url = new URL(req.url); //pour creer une instance de l'URL de la requête
    const id = url.searchParams.get('id'); // Récupère le paramètre 'id' de l'URL

    if (id) {
      // Si l'ID est présent dans l'URL
      console.log('Fetching movie with ID:', id);
      const movieId = parseInt(id); // conversion de l'ID en nombre
      if (isNaN(movieId)) {
        //si movieId n'est n'est un nombre
        return NextResponse.json({ message: 'Invalid ID' }, { status: 400 });
      }
      const movie = await MovieService.getMovieById(movieId); // appel du service MovieService
      if (movie) {
        return NextResponse.json(movie, { status: 200 }); // retourne le film avec succès
      } else {
        return NextResponse.json(
          { message: 'Movie not found' },
          { status: 404 }
        ); // sinon film non trouvé
      }
    } else {
      // Si aucun ID n'est fourni, récupère tous les films
      console.log('Fetching all movies');
      const movies = await MovieService.getAllMovies();
      return NextResponse.json(movies, { status: 200 });
    }
  } catch (error) {
    console.error('Error fetching movies:', error);
    return NextResponse.json(
      { message: 'Failed to fetch movies' },
      { status: 500 }
    );
  }
}

// Gestion de la méthode POST
export async function POST(req: NextRequest) {
  try {
    console.log('Handling POST request:', req.url);
    const data = await req.json(); // Récupérer les données du corps de la requête
    console.log('Creating movie with data:', data);
    const newMovie = await MovieService.createMovie(data); // Appel au Movie Service
    return NextResponse.json(newMovie, { status: 201 }); // Ajout d'un film réussi !
  } catch (error) {
    console.error('Error creating movie:', error);
    return NextResponse.json(
      { message: 'Could not create movie' },
      { status: 500 }
    ); // impossibilité de créer un film
  }
}

// Gestion de la function DELETE
export async function DELETE(req: NextRequest) {
  try {
    console.log('Handling DELETE request:', req.url);
    const url = new URL(req.url); //pour creer une instance de l'URL de la requête
    const id = url.searchParams.get('id'); // Récupère le paramètre 'id' de l'URL
    if (id) {
      // Si l'ID est présent dans l'URL
      console.log('Deleting movie with ID:', id);
      const movieId = parseInt(id); // conversion de l'ID en nombre
      if (isNaN(movieId)) {
        //si movieId n'est n'est un nombre
        return NextResponse.json({ message: 'Invalid ID' }, { status: 400 });
      }
      const deletedMovie = await MovieService.deleteMovie(movieId);
      return NextResponse.json(deletedMovie, { status: 200 });
    } else {
      return NextResponse.json({ message: 'ID is required' }, { status: 400 });
    }
  } catch (error) {
    console.error('Error creating movie:', error);
    return NextResponse.json(
      { message: 'Could not delete movie' },
      { status: 500 }
    ); // impossibilité de supprimer un film
  }
}

// Gestion de la function UPDATE
export async function PUT(req: NextRequest) {
  try {
    console.log('Handling PUT request:', req.url);
    const url = new URL(req.url); //pour creer une instance de l'URL de la requête
    const id = url.searchParams.get('id'); // Récupère le paramètre 'id' de l'URL
    if (id) {
      // Si l'ID est présent dans l'URL
      const movieId = parseInt(id); // conversion de l'ID en nombre
      if (isNaN(movieId)) {
        //si movieId n'est n'est un nombre
        return NextResponse.json({ message: 'Invalid ID' }, { status: 400 });
      }
      const data = await req.json(); // Récupérer les données de la requête
      console.log('Updating movie with data:', data);
      const updateMovie = await MovieService.updateMovie(movieId, data);
      return NextResponse.json(updateMovie, { status: 200 });
    } else {
      return NextResponse.json({ message: 'ID id required' }, { status: 400 });
    }
  } catch (error) {
    console.error('Error creating movie:', error);
    return NextResponse.json(
      { message: 'Could not delete movie' },
      { status: 500 }
    ); // impossibilité de supprimer un film
  }
}
