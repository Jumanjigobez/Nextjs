import Image from "next/image";


const Home = () => {
  return (
    <>
    <div className="title">
      <h1 className="text-red-300 text-4xl text-center">Hello Dunder Mifflin</h1>
    </div>
    
    <div className="img_part">
      <Image 
        src={"https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZHl0OWQxdnkzcHdwcWJ4dHl3NHkxamRuZTBmNHJyemo2ZnI5enkxMiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/i79P9wUfnmPyo/100.webp"}
        alt="Dunder Mifflin office"
        width={500}
        height={500}
        unoptimized //coz it's animated #gif
       />
    </div>

    </>
  );
}

export default Home;
