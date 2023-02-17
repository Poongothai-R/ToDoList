import ModalForm from "../components/ModalForm";
import HeroImage from "../assets/hero.jpg";

export default function WelcomeScreen({ setModal, list, setList }) {
  return (
    <section className="welcome_screen" >
      <img src={HeroImage} alt="hero-img" className="hero-media" />
      <h1>Welcome to EIKA!</h1>
      <p>
        Keep track of your shoopping list with the app. Get started by adding a
        item to your list. You can then sort your shoopping list by name or price
        and mark items as acquired.
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
