import avatar from "../img/perfil.png";
import Resume from "./cv/ncoderlk-resume.pdf";
const Header = () => {
  let time = new Date().getHours();
  if (time > 8 && time < 18) {
    document.body.classList.remove("dark-theme");
  } else {
    document.body.classList.add("dark-theme");
  }
  console.log(time);
  return (
    <header className="profile container">
      <i
        className="ri-moon-line change-theme"
        id="change-theme"
        onClick={() => {
          let btn = document.getElementById("change-theme");
          btn.addEventListener("click", () => {
            document.body.classList.toggle("dark-theme");
            if (document.body.classList.contains("dark-theme")) {
              btn.classList.remove("ri-moon-line");
              btn.classList.add("ri-sun-line");
            } else {
              btn.classList.add("ri-moon-line");
              btn.classList.remove("ri-sun-line");
            }
          });
        }}
      ></i>
      <div className="profile-container grid">
        <div className="profile-data">
          <div className="profile-border">
            <div className="profile-perfil">
              <img src={avatar} />
            </div>
          </div>
          <h2 className="profile-name">Sithika Dangampala</h2>
          <h3 className="profile-profession">Programmer</h3>

          <ul className="profile-social">
            <a
              href="https://open.spotify.com/user/31aethfo2ehulchqwxwhgubk5yhaz"
              target={"_blank"}
              className="profile-social-link"
            >
              <i className="ri-spotify-line"></i>
            </a>
            <a href="" target={"_blank"} className="profile-social-link">
              <i className="ri-linkedin-box-line"></i>
            </a>
            <a
              href="https://github.com/ncoderlk"
              target={"_blank"}
              className="profile-social-link"
            >
              <i className="ri-github-line"></i>
            </a>
          </ul>
        </div>
        <div className="profile-info grid">
          <div className="profile-info-group">
            <h3 className="profile-info-number">
              {new Date().getFullYear() - 2021}
            </h3>
            <p className="profile-info-description">
              Years of <br></br> work
            </p>
          </div>
          <div className="profile-info-group">
            <h3 className="profile-info-number">+28</h3>
            <p className="profile-info-description">
              Completed <br></br> projects
            </p>
          </div>
          <div className="profile-info-group">
            <h3 className="profile-info-number">3</h3>
            <p className="profile-info-description">
              Satisfied <br></br> customers
            </p>
          </div>
        </div>
        <div className="profile-buttons">
          <a className="button" href={Resume} download>
            Download CV <i className="ri-download-line"></i>
          </a>
          <div className="profile-buttons-small">
            <a
              href="https://twitter.com/ncoderlk"
              target={"_blank"}
              className="button button-small button-gray"
            >
              <i className="ri-twitter-line"></i>
            </a>
            <a
              href="https://discordapp.com/users/985250430512681072"
              target={"_blank"}
              className="button button-small button-gray"
            >
              <i className="fa-brands fa-discord"></i>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
