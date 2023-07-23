import imagen from '../../public/img/nosotros.jpg'
import styles from '~/styles/nosotros.css'

export function meta() {
  return [
    { title: 'GuitarLA - Sobre Nosotros' },
    { description: 'Venta de guitarras, blog de música' }
  ]
}
export function links() {
  return [
    {
      rel: 'stylesheet',
      href: styles
    },
    {
      rel: 'preload',
      href: imagen,
      as: 'image'
    }
  ]
}
function Nosotros() {
  return (
    <main className='contenedor nosotros'>
      <h2 className='heading'>Nosotros</h2>
      <div className='contenido'>
        <img
          src={imagen}
          alt='Imagen sobre nosotros'
        />

        <div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed
            sapiente rem, iste, architecto expedita sequi a nisi ipsa
            exercitationem eius maxime maiores voluptate minus aliquid illum ut.
            Ipsam, molestias deserunt.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed
            sapiente rem, iste, architecto expedita sequi a nisi ipsa
            exercitationem eius maxime maiores voluptate minus aliquid illum ut.
            Ipsam, molestias deserunt.
          </p>
        </div>
      </div>
    </main>
  )
}

export default Nosotros
