import './index.css';
import React from 'react';
import heroImg from '../public/img/NT/NT_T_simple.png';


const propertiesDestacadas = [
  { id: 1, titulo: 'Casa moderna', subtitulo: '3 ambientes · Jardín · USD 120.000', img: 'casa.jpeg', enlace: '#tasacion' },
  { id: 2, titulo: 'Departamento', subtitulo: '2 ambientes · Balcón · USD 85.000', img: 'departamento centrico.jpeg', enlace: '#tasacion' },
  { id: 3, titulo: 'Oficina comercial', subtitulo: '30 m² · Microcentro · Alquiler', img: 'oficina.jpeg', enlace: '#tasacion' },
  { id: 4, titulo: 'Casa con pileta', subtitulo: '5 ambientes · Pileta · USD 210.000', img: 'casa_con_pileta.jpeg', enlace: '#tasacion' },
  { id: 5, titulo: 'Departamento premium', subtitulo: '3 ambientes · Balcón · USD 145.000', img: 'depto_premium.jpeg', enlace: '#tasacion' },
  { id: 6, titulo: 'Oficina ejecutiva', subtitulo: '80 m² · Puerto Madero · Venta', img: 'oficina_ejecutiva.jpeg', enlace: '#tasacion' },
];


const propiedadesAlquiler = [
  { id: 1, img: 'casa_jardin.png', titulo: 'Casa con jardín - 4 Ambientes - Palermo', subtitulo: 'Alquiler' },
  { id: 2, img: 'dpto.png', titulo: 'Departamento céntrico - 2 Ambientes - Retiro', subtitulo: 'Alquiler' },
  { id: 3, img: 'oficina.png', titulo: 'Oficina comercial - 40 m² - Microcentro', subtitulo: 'Alquiler' },
  { id: 4, img: 'casa-moderna-con-jardin.jpg', titulo: 'Casa moderna - 4 Ambientes - Palermo', subtitulo: 'Alquiler' },
  { id: 5, img: 'depto_moderno.png', titulo: 'Departamento moderno - 2 Ambientes - Retiro', subtitulo: 'Alquiler' },
  { id: 6, img: 'oficina_grande.png', titulo: 'Oficina grande - 45 m² - Subsuelo - Microcentro', subtitulo: 'Alquiler' },
];


const propiedadesVenta = [
  { id: 1, img: 'casa.png', titulo: 'Casa en venta - 4 Ambientes - San Isidro', subtitulo: 'Venta' },
  { id: 2, img: 'dto.jpg', titulo: 'Departamento en venta - 2 Ambientes - Olivos', subtitulo: 'Venta' },
  { id: 3, img: 'oficina.png', titulo: 'Oficina en venta - 25 m² - Microcentro', subtitulo: 'Venta' },
  { id: 4, img: 'casa_moderna.png', titulo: 'Casa moderna - 4 Ambientes - Zona Roja - Palermo', subtitulo: 'Venta' },
  { id: 5, img: 'depto_lujoso.png', titulo: 'Departamento premium - 2 Ambientes - Puerto Madero', subtitulo: 'Venta' },
  { id: 6, img: 'oficina_comercial.png', titulo: 'Oficina comercial - 20 m² - Microcentro', subtitulo: 'Venta' },
];


export default function App() {
  const [menuAbierto, setMenuAbierto] = React.useState(false);


  return (
    <div className="app">
      <header>
        <a href="#home" className="logo">
          <img src={heroImg} alt="Logo Nuevo Techo" />
        </a>
        <button className="menu-toggle" onClick={() => setMenuAbierto(!menuAbierto)}>☰</button>
        <nav id="menu" className={menuAbierto ? 'activo' : ''}>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#propiedades">Destacadas</a></li>
            <li><a href="#alquiler">Alquiler</a></li>
            <li><a href="#venta">Venta</a></li>
            <li><a href="#tasacion">Tasación</a></li>
          </ul>
        </nav>
      </header>


      <main>
        <section id="home">
          <img
            src={heroImg}
            alt="Casa principal"
            className="home-hero"
          />
          <div className="contenido-home">
            <h2>Encontrá tu próxima propiedad</h2>
            <p>
              Casas, departamentos y oficinas en alquiler o venta. Te ayudamos a
              encontrar el lugar ideal.
            </p>
            <a href="#propiedades">Ver propiedades</a>
          </div>
        </section>


        <section className="eslogan">
          <div>
            <p>CONVERTIMOS EN REALIDAD TUS SUEÑOS</p>
          </div>
        </section>
    <section id="propiedades">
      <h2>Propiedades destacadas</h2>
      <div className="contenedor-cards">
        {propertiesDestacadas.map((prop) => (
          <article key={prop.id} className="card">
            <img
              src={`/img/destacadas/${prop.img}`}
              alt={prop.titulo}
            />
            <h3>{prop.titulo}</h3>
            <p>{prop.subtitulo}</p>
            <a href={prop.enlace}>Ver más</a>
          </article>
        ))}
      </div>
    </section>


    <section id="alquiler">
      <h2>Propiedades en alquiler</h2>
      <div className="contenedor-galeria">
        {propiedadesAlquiler.map((prop) => (
          <div key={prop.id} className="item-galeria">
            <img
              src={`/img/alquiler/${prop.img}`}
              alt={prop.titulo}
            />
            <p>{prop.subtitulo}</p>
          </div>
        ))}
      </div>
    </section>


    <section className="beneficios">
      <div className="beneficio">
        <i className="bi bi-house-check" />
        <h3>Propiedades verificadas</h3>
        <p>Revisamos cada inmueble antes de publicarlo.</p>
      </div>


      <div className="beneficio">
        <i className="bi bi-cash-coin" />
        <h3>Precios competitivos</h3>
        <p>Encontrá opciones para distintos presupuestos.</p>
      </div>


      <div className="beneficio">
        <i className="bi bi-geo-alt" />
        <h3>Mejores zonas</h3>
        <p>Casas, departamentos y oficinas en ubicaciones clave.</p>
      </div>
    </section>


    <section id="venta">
      <h2>Propiedades en venta</h2>
      <div className="contenedor-galeria">
        {propiedadesVenta.map((prop) => (
          <div key={prop.id} className="item-galeria">
            <img
              src={`/img/venta/${prop.img}`}
              alt={prop.titulo}
            />
            <p>{prop.subtitulo}</p>
          </div>
        ))}
      </div>
    </section>


    <section className="frase-final">
      <h2>¿Buscás tu próximo hogar o querés vender?</h2>
      <p>Contactanos y te ayudamos a encontrar la mejor opción.</p>
    </section>


    <section id="tasacion">
      <h2>Contacto - Tasaciónes</h2>
      <form>
        <label htmlFor="nombre">Nombre</label>
        <input type="text" id="nombre" name="nombre" required />


        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />


        <label htmlFor="telefono">Teléfono</label>
        <input type="tel" id="telefono" name="telefono" />


        <label htmlFor="tipo">Tipo de propiedad</label>
        <select id="tipo" name="tipo">
          <option>Casa</option>
          <option>Departamento</option>
          <option>Oficina</option>
          <option>Otro</option>
        </select>


        <label htmlFor="zona">Zona</label>
        <input type="text" id="zona" name="zona" />


        <label htmlFor="metros">Metros cuadrados</label>
        <input type="number" id="metros" name="metros" />


        <div className="checkbox">
          <input type="checkbox" id="acepta" />
          <label htmlFor="acepta">Quiero recibir novedades y promociones</label>
        </div>


        <label htmlFor="mensaje">Comentario</label>
        <textarea id="mensaje" name="mensaje"></textarea>


        <div className="botones-formulario">
          <button type="submit">Enviar</button>
          <button type="reset">Borrar</button>
        </div>
      </form>
    </section>
  </main>


  <footer>
    <div className="info-footer">
      <p>
        <a href="tel:+541112345678">
          <i className="bi bi-telephone-fill" />
          +54 11 1234-5678
        </a>
      </p>
      <p>
        <a href="mailto:contacto@nuevotecho.com">
          <i className="bi bi-envelope-fill" />
          contacto@nuevotecho.com
        </a>
      </p>
    </div>


    <div className="redes-sociales">
      <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
        <i className="bi bi-facebook" />
      </a>
      <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
        <i className="bi bi-instagram" />
      </a>
      <a href="https://www.whatsapp.com/?lang=es" target="_blank" rel="noreferrer">
        <i className="bi bi-whatsapp" />
      </a>
    </div>


    <p className="copyright">© 2026 Nuevo Techo Propiedades y Hogar</p>
  </footer>
</div>
);
}