// Interface pour le modèle Movie, basée sur Prisma
export default interface Movie {
  id: number;
  title: string;
  description?: string;
  director?: string;
  release_year?: number;
};
