export interface Imagen {
  id: number;
  src: string;
  title: string;
}

const Imagenes: Imagen[] = [
  {
    id: 1,
    src: '/assets/imagenes/deku.jpg',
    title: 'Imagen 1',
  },
  {
    id: 2,
    src: '/assets/imagenes/gojo.jpg',
    title: 'Imagen 2',
  },
  {
    id: 3,
    src: '/assets/imagenes/ichigo.jpg',
    title: 'Imagen 3',
  },
  {
    id: 4,
    src: '/assets/imagenes/naruto.jpg',
    title: 'Imagen 4',
  },
  {
    id: 5,
    src: '/assets/imagenes/spike.jpg',
    title: 'Imagen 5',
  },
  {
    id: 6,
    src: '/assets/imagenes/tanjiro.jpg',
    title: 'Imagen 6',
  },
  {
    id: 7,
    src: '/assets/imagenes/vash.jpg',
    title: 'Imagen 7',
  },
  {
    id: 8,
    src: '/assets/imagenes/gabimaru.jpg',
    title: 'Imagen 8',
  },
];

export default Imagenes;
