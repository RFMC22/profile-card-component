import { images } from "../assets/Images.js";
import { users } from "../data/Users"
import  "./Card.css"
const Card = () => {
  const [user] = users;
  return (
    <div className="bg-white card overflow-hidden">
      <div className="w-full header flex items-center flex-col text-center">
        <img src={images.bgCard} alt="card top" />
        <div className="logo">
          <img src={images.imgVictor} alt="Victor Crest" />
        </div>
        <div className="info w-1/2 m-auto">
          <h1>{user.name} <span>{user.age}</span></h1>
          <p>{user.city}</p>
        </div>
      </div>
      <div className="footer flex items-center text-center tracking-widest">
        <div className="likes w-1/3">
          <h2>{user.followers}</h2>
          <p>{user.text1}</p>
        </div>
        <div className="likes w-1/3">
          <h2>{user.likes}</h2>
          <p>{user.text2}</p>
        </div>
        <div className="likes w-1/3">
          <h2>{user.photos}</h2>
          <p>{user.text3}</p>
        </div>
      </div>
    </div>
  )
}

export default Card