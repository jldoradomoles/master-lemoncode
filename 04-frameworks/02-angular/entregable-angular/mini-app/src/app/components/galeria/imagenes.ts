export interface Imagen {
  id: number;
  src: string;
  title: string;
}

const Imagenes: Imagen[] = [
  {
    id: 0,
    src: '/assets/imagenes/deku.jpg',
    title: 'Deku',
  },
  {
    id: 1,
    src: '/assets/imagenes/gojo.jpg',
    title: 'Gojo',
  },
  {
    id: 2,
    src: '/assets/imagenes/ichigo.jpg',
    title: 'Ichigo',
  },
  {
    id: 3,
    src: '/assets/imagenes/naruto.jpg',
    title: 'Naruto',
  },
  {
    id: 4,
    src: '/assets/imagenes/spike.jpg',
    title: 'Spike',
  },
  {
    id: 5,
    src: '/assets/imagenes/tanjiro.jpg',
    title: 'Tanjiro',
  },
  {
    id: 6,
    src: '/assets/imagenes/vash.jpg',
    title: 'Vash',
  },
  {
    id: 7,
    src: '/assets/imagenes/gabimaru.jpg',
    title: 'Gabimaru',
  },
  {
    id: 8,
    src: '/assets/imagenes/gatsu.jpg',
    title: 'Gatsu',
  },
];

export default Imagenes;
