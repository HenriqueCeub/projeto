import { CiSearch } from "react-icons/ci";
import dummyTreinos from "../dummy_treinos";
import { Link } from "react-router-dom";
import { BsPlusLg } from "react-icons/bs";

import NoteItem from "../components/NoteItem";

const Treinos = () => {
  return (
    <section>
      <header className="notes__header">
        <h2>Meus Treinos</h2>
        {/*<input type="text" autoFocus placeholder='Pesquise' />
         */}
        <button className="btn">
          <CiSearch />
        </button>
      </header>
      <div className="notes__container">
        {dummyTreinos.map((note) => (
          <NoteItem key={note.id} note={note} />
        ))}
      </div>
      <Link className="btn add__btn">
        <BsPlusLg />
      </Link>
    </section>
  );
};

export default Treinos;
