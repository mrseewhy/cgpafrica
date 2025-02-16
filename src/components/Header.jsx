const Header = ({ headline }) => {
    return (
      <header className="bg-yellow-600 py-28 mt-16">
        <div className="container mx-auto text-center">
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold font-sans">{headline}</h1>
        </div>
      </header>
    );
  };
  
  export default Header;
  