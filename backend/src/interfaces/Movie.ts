// Interface pour le modèle Movie, basée sur Prisma
export interface Movie {
    id: number;
    title: string;
    description?: string;
    director?: string;
    release_year?: number;
  }