export interface Imagen {
  id: number;
  src: string;
  descripcion: string;
}

const imagenes: Imagen[] = [
  {
    id: 1,
    src: 'https://example.com/image1.jpg',
    descripcion: 'Imagen 1',
  },
  {
    id: 2,
    src: 'https://example.com/image2.jpg',
    descripcion: 'Imagen 2',
  },
  // Add more objects here...
];

export default imagenes;
