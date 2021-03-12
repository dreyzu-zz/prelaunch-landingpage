import "./App.css";

function App() {
  return (
    <div className="bg-very-dark-blue w-screen h-screen flex flex-col items-center">
      <header className="">
        <img
          src="assets/logo.svg"
          alt="logo"
          className="w-32	h-9 m-auto mt-10"
        />
        <img
          src="assets/illustration-hero-mobile.png"
          alt="header illustration"
          className="w-96 h-56 mt-16 mb-5 relative"
        />
      </header>
      <div className="flex flex-col items-center font-body mt-5">
        <h1 className="text-cool-white text-3xl text-center">
          Get paid for the <br /> work you{" "}
          <span className="text-clear-blue">love</span>
        </h1>
        <h1 className="text-cool-white text-3xl text-center">to do</h1>
        <p className="mt-4 text-sm text-cool-grey text-center">
          The 9-5 grind is so last century. We believe <br />
          in living life on your own terms. Whether you’re <br />
          looking to escape the rat race or set up a side
          <br /> hustle, we’ve got you covered.
        </p>
        <img
          src="assets/icon-scroll.svg"
          alt="scrolling icon"
          className="w-6 h-10 mt-8"
        />
      </div>
      <div className="flex flex-col items-center mt-36">
        <div className="flex flex-col items-center pl-2.5 justify-center mt-14 w-28 h-32 mb-8 bg-dark-blue rounded-large">
          <img
            src="assets/illustration-passions.svg"
            alt="painting logo"
            className="w-16	h-20"
          />
        </div>
        <h2 className="text-cool-white text-lg">Indulge your passions</h2>
        <p className="text-cool-grey text-center mt-2.5 text-base">
          Your passion shouldn't be just for the weekend.
          <br /> Earn a living doing what you love.
        </p>
        <div className="flex flex-col items-center justify-center mt-14 w-28 h-32 mb-8 bg-dark-blue rounded-large">
          <img
            src="assets/illustration-financial-freedom.svg"
            alt="money logo"
            className="w-14	h-16"
          />
        </div>
        <h2 className="text-cool-white text-lg">Gain financial freedom</h2>
        <p className="text-cool-grey text-center mt-2.5 text-base">
          Start making money work for you. There’s
          <br /> nothing quite like earning while you sleep.
        </p>
        <div className="flex flex-col items-center justify-center mt-14 w-28 h-32 mb-8 bg-dark-blue rounded-large">
          <img
            src="assets/illustration-lifestyle.svg"
            alt="cocktail logo"
            className="w-14	h-16"
          />
        </div>
        <h2 className="text-cool-white text-lg">Choose your lifestyle</h2>
        <p className="text-cool-grey text-center mt-2.5 text-base">
          Own your daily schedule. Fancy a lie-in? Go for
          <br /> it! Take charge of your week.
        </p>
        <div className="flex flex-col items-center justify-center mt-14 w-28 h-32 mb-8 bg-dark-blue rounded-large">
          <img
            src="assets/illustration-work-anywhere.svg"
            alt="car logo"
            className="w-20	h-14"
          />
        </div>
        <h2 className="text-cool-white text-lg">Work from anywhere</h2>
        <p className="text-cool-grey text-center mt-2.5 text-base">
          Selling online means not being pinned down.
          <br /> Want to work AND travel? Go for it!
        </p>
      </div>
      <div className="flex flex-col items-center mt-36">
        <div className="flex flex-col items-center">
          <h2 className="text-2xl text-cool-white">Our pricing plan</h2>
          <p className="text-cool-grey text-center mt-7 w-80 text-sm">
            We only make money when our creators make money. Our plans are
            always affordable, and it’s completely free to get started.
          </p>
        </div>
        <div className="flex flex-col w-80 h-436px bg-dark-blue rounded-lg mt-20 ">
          <img
            src="assets/icon-free.svg"
            alt="icon"
            className="w-11 h-11 ml-7 -mt-6"
          />
          <h3 className="text-cool-white text-left ml-7 mt-12 mb-4 text-lg font-bold">
            Dip your toe
          </h3>
          <p className="text-cool-grey text-left ml-7">
            Just getting started? No problem at all!
            <br /> Our free plan will take you a long way.
          </p>
          <div className="flex flex-col font-body">
            <h2 className="text-cool-white ml-7 mt-12 text-4xl mb-5 font-body font-extrabold">
              Free
            </h2>
            <div className="flex flex-row justify-start mb-3">
              <img
                src="assets/icon-check-clear.svg"
                alt="check icon"
                className="ml-8 mt-1.5 w-2.5	h-2"
              />
              <p className="text-cool-white ml-4 text-sm">Unlimited products</p>
            </div>
            <div className="flex flex-row mb-3">
              <img
                src="assets/icon-check-clear.svg"
                alt="check icon"
                className="ml-8 mt-1.5 w-2.5	h-2"
              />
              <p className="text-cool-white ml-4 text-sm">Basic analytics</p>
            </div>
            <div className="flex flex-row mb-3">
              <img
                src="assets/icon-check-clear.svg"
                alt="check icon"
                className="ml-8 mt-1.5 w-2.5	h-2"
              />
              <p className="text-cool-white ml-4 text-sm">
                Limited marketplace exposure
              </p>
            </div>
            <div className="flex flex-row mb-3">
              <img
                src="assets/icon-check-clear.svg"
                alt="check icon"
                className="ml-8 mt-1.5 w-2.5	h-2"
              />
              <p className="text-cool-white ml-4 mb-8 text-sm">
                10% fee per transaction
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-80 h-436px bg-clear-blue rounded-lg mt-20 ">
          <img
            src="assets/icon-paid.svg"
            alt="icon"
            className="w-12 h-16 ml-7 -mt-8"
          />
          <h3 className="text-dark-blue text-left ml-7 mt-12 text-lg font-bold mb-4">
            Dive right in
          </h3>
          <p className="text-very-dark-blue text-left ml-7">
            Ready for the big time? Our paid plan will help you take your
            business to the next level.
          </p>
          <div className="flex flex-col font-body">
            <h2 className="text-very-dark-blue ml-7 mt-12 text-4xl mb-5 font-body font-extrabold">
              $25.00{" "}
              <span className="text-sm text-very-dark-blue font-extralight">
                /month
              </span>
            </h2>
            <div className="flex flex-row justify-start mb-3">
              <img
                src="assets/icon-check.svg"
                alt="check icon"
                className="ml-8 mt-1.5 w-2.5	h-2"
              />
              <p className="text-very-dark-blue ml-5 text-sm">Custom domain</p>
            </div>
            <div className="flex flex-row mb-3">
              <img
                src="assets/icon-check.svg"
                alt="check icon"
                className="ml-8 mt-1.5 w-2.5	h-2"
              />
              <p className="text-very-dark-blue ml-5 text-sm">
                Advanced analytics and reports
              </p>
            </div>
            <div className="flex flex-row mb-3">
              <img
                src="assets/icon-check.svg"
                alt="check icon"
                className="ml-8 mt-1.5 w-2.5	h-2"
              />
              <p className="text-very-dark-blue ml-5 text-sm">
                Limited marketplace visibility
              </p>
            </div>
            <div className="flex flex-row mb-3">
              <img
                src="assets/icon-check.svg"
                alt="check icon"
                className="ml-8 mt-1.5 w-2.5	h-2"
              />
              <p className="text-very-dark-blue ml-5 text-sm mb-8">
                5% fee per transaction
              </p>
            </div>
          </div>
        </div>
      </div>
      <footer className="flex flex-col align-center items-center justify-center mt-36">
        <img
          src="assets/bg-footer-squiggle.svg"
          alt=""
          className="w-584px h-20 -mb-20"
        />
        <h1 className="font-body text-cool-white font-bold text-2xl	text-center">
          Get notified when
          <br /> we launch
        </h1>
        <div className="mt-8	">
          <form method="POST" className="">
            <input
              type="email"
              id="email"
              placeholder="Email address"
              required
              className="focus:outline-none focus:ring focus:border-clear-blue rounded-large w-80  h-12 p-4 font-bold font-body bg-dark-blue"
            />
          </form>
          <button className="active:text-cool-white active:bg-very-dark-blue focus:outline-none focus:ring focus:border-clear-blue rounded-large w-80 h-12 mt-6 pb-0.5 mb-40 bg-clear-blue font-bold font-body text-dark-blue">
            Get notified
          </button>
        </div>
      </footer>
    </div>
  );
}

export default App;
