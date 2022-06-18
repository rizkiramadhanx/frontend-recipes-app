const Header = () => {
  return (
    <nav className="flex items-center justify-between bg-gradient-to-br from-orange-300 to-orange-400 p-6 border-black border-b-2">
      <div className="hidden sm:flex sm:items-center">
        <img
          className="h-8"
          src={
            "https://img.icons8.com/color/96/undefined/sunny-side-up-eggs.png"
          }
          alt="Logo web"
        />

        <button className="pl-1 text-2xl font-bold">Recipes App</button>
      </div>
      <div className="flex font-bolder">
        <button className="hover:font-extrabold hover:text-lg">Home</button>
        <button className="pl-5 hover:font-extrabold hover:text-lg">
          Recipes
        </button>
        <button className="pl-5 hover:font-extrabold hover:text-lg">
          Favorites
        </button>
        <button className="pl-5 hover:font-extrabold hover:text-lg">
          About
        </button>
      </div>
      <div>
        <button className="py-1 px-2 border-gray-800 border-2 rounded">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Header;
