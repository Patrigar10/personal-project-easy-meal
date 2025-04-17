import landingLogo from "../images/landing-logo-transparent.png";
import pasta from "../images/pasta.jpg";
import salad from "../images/salad.webp";
import lentejas from "../images/lentejas.jpeg";
import { Link } from "react-router-dom";
import MealCard from "./MealCard";

const Start = ({ meals }) => {
  return (
    <>
      <header className="header">
        <nav className="header_nav">
          <div className="header_nav_img">
            <Link to="/">
              <img src={landingLogo} alt="logo EasyMeal" />
            </Link>
          </div>

          <ul className="header_nav_list">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Ideas de recetas</a>
            </li>
            <li>
              <a href="">Iniciar sesión</a>
            </li>
          </ul>
        </nav>
      </header>

      <main className="main">
        <aside className="aside">
          <h3 className="aside_title">Seleccionados</h3>
          <ul className="aside_list">
            <li className="selected_title">Lunes</li>
            <li>
              <article className="selected">
                <div className="selected_img">
                  <img
                    className="selected_img_src"
                    src={pasta}
                    alt="foto de plato de pasta"
                  />
                </div>
                <h3 className="selected_title">Pasta</h3>
                <i
                  className="fa-solid fa-circle-xmark favs_movie_icon"
                  style={{ color: `#ff954aaf` }}
                ></i>
              </article>
            </li>
            <li className="selected_title">Martes</li>
            <li>
              <article className="selected">
                <div className="selected_img">
                  <img
                    className="selected_img_src"
                    src={salad}
                    alt="foto de plato de ensalada"
                  />
                </div>
                <h3 className="selected_title">Ensalada</h3>
                <i
                  className="fa-solid fa-circle-xmark favs_movie_icon"
                  style={{ color: `#ff954aaf` }}
                ></i>
              </article>
            </li>
            <li className="selected_title">Miércoles</li>
            <li>
              <article className="selected">
                <div className="selected_img">
                  <img
                    className="selected_img_src"
                    src={lentejas}
                    alt="foto de plato de lentejas"
                  />
                </div>
                <h3 className="selected_title">Lentejas</h3>
                <i
                  className="fa-solid fa-circle-xmark favs_movie_icon"
                  style={{ color: `#ff954aaf` }}
                ></i>
              </article>
            </li>
          </ul>
        </aside>

        <section className="search">
          <ul className="search_days">
            <li className="search_days_unselected">
              Lunes<span className="check"> ✓</span>
            </li>
            <li className="search_days_unselected">
              Martes <span className="check"> ✓</span>
            </li>
            <li className="search_days_unselected">
              Miércoles <span className="check"> ✓</span>
            </li>
            <li className="search_days_selected">Jueves</li>
            <li className="search_days_unselected">Viernes</li>
          </ul>
          <form className="search_form" action="">
            <select className="search_form_select" name="options" id="options">
              <option value="search">Buscar por...</option>
              <option value="menu">Menús completos</option>
              <option value="ingredient">Tipo de ingredientes</option>
              <option value="favourites">Favoritos</option>
            </select>
          </form>

          <ul className="search_list">
            {meals.map((meal) => {
              return <MealCard meal={meal} />;
            })}
          </ul>
        </section>
      </main>
    </>
  );
};

export default Start;
