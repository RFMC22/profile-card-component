import { images } from "../assets/Images.js";
import { users } from "../data/Users"
import  "./Card.css"
const Card = () => {
  const [user] = users;
  return (
    <div data-cy='card' className="bg-white card overflow-hidden">
      <header data-cy='header' className="w-full header flex items-center flex-col text-center">
        <img data-cy='imgTop' src={images.bgCard} alt="card top" />
        <div data-cy='logo' className="logo">
          <img src={images.imgVictor} alt="Victor Crest" />
        </div>
        <div className="info w-1/2 m-auto">
          <h1 data-cy='name'>{user.name} <span data-cy='age'>{user.age}</span></h1>
          <p data-cy='city'>{user.city}</p>
        </div>
      </header>
      <footer data-cy='footer' className="footer flex items-center text-center tracking-widest">
        <div className="likes w-1/3">
          <h2 data-cy='number'>{user.followers}</h2>
          <p data-cy='text'>{user.text1}</p>
        </div>
        <div className="likes w-1/3">
          <h2 data-cy='number'>{user.likes}</h2>
          <p data-cy='text'>{user.text2}</p>
        </div>
        <div className="likes w-1/3">
          <h2 data-cy='number'>{user.photos}</h2>
          <p data-cy='text'>{user.text3}</p>
        </div>
      </footer>
    </div>
  )
}

export default Card