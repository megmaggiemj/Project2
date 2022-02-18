function Home() {
  const burgerGif = `https://i.gifer.com/1SX6.gif`;
  return (
    <div>
      <div className="gif">
        <img src={burgerGif} />
        {/* <img src={bouncyBurger} /> */}
      </div>
    </div>
  );
}

export default Home;
