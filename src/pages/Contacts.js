const Contacts = () => {
  return (
    <main className="section">
      <div className="conteiner">
        <h1 className="title-1">Contacts</h1>
        <ul className="content-list">
          <li className="content-list__item">
            <h2 className="title-2">Location</h2>
            <p>Gdansk, Poland</p>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">Telegram</h2>
            <a href="tel:+(48) 516-589-963">+(48) 516-589-963</a>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">Email</h2>
            <a href="mailto: nikitakuza1999@gmail.com">
              nikitakuza1999@gmail.com
            </a>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default Contacts;
