

export default function Home() {
  return (
    <>
      <div className="title">
        <h1 className="text-4xl text-blue-500 font-bold">Pro Jokes</h1>
      </div>

      <div className="flex flex-col gap-7 text-2xl">
        <div className="flex flex-col gap-3 pt-2 pb-2 border-t-2 border-b-2 ">
          <p>Q: {" "}What do you call a fake noodle?</p>
          <p>A: {" "}An impasta.</p>
        </div>

        <div className="flex flex-col gap-3 pb-2 border-b-2">
          <p>Q: {" "}Why did the scarecrow get promoted?</p>
          <p>A: {" "}He was outstanding in his field.</p>
        </div>

        <div className="flex flex-col gap-3 pb-2 border-b-2">
          <p>Q: {" "}Why do bees have sticky hair?</p>
          <p>A: {" "}Because they use a honeycomb.</p>
        </div>
      </div>
    </>
   
  );
}
