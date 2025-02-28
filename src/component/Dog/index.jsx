import dog from "./Funny_Dog_S.webp";
export function Dog() {
  return (
    <div>
      <p>Web</p>
      <img
        src="https://cdn.outsideonline.com/wp-content/uploads/2023/03/Funny_Dog_S.jpg"
        alt="dog"
      />
      <p>Public</p>
      <img src="/Funny_Dog_S.webp" alt="dog" />
      <p>Local Dog</p>
      <img src={dog} alt="dog" />
    </div>
  );
}
