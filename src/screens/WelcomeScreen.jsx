import ModalForm from "../components/ModalForm";
import HeroImage from "../assets/hero.jpg";

export default function WelcomeScreen({ setModal, list, setList }) {
  return (
    <section className="welcome_screen" >
      <img src={HeroImage} alt="hero-img" className="hero-media" />
      <h1>Welcome to EIKA!</h1>
      <p>
          Welcome to EIKA’s shopping list. Here you will be able to create a todo list with for the furniture you want to buy.
      </p>
      <p>
          To get started press the Add new item button and a popup will ask you the name and the price of the item you want to add.
          You can also and an image after the item is added by touching the camera icon.
      </p>
      <p>Thank you for shopping with us ...</p>
      <button
        className="button_primary"
        onClick={() => 
          setModal(
            <ModalForm setModal={setModal} list={list} setList={setList} />
          )
        }
      >
        Add Item
      </button>
    </section>
  );
}
