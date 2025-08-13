import Logo from '../assets/Logo.png';

const Footer = () => {
  return (
    <footer className="bg-[#90EE90] py-8 mt-4">
      <div className="container mx-auto px-4 flex flex-col items-center justify-center text-center">
        
        <img
          src={Logo}
          alt="Veli Logo"
          className="w-[150px] cursor-pointer"
        />

        <p className="text-2xl font-bold text-black cursor-pointer">
          "ადგილი სადაც მუდამ გელიან"
        </p>
      </div>
    </footer>
  );
};

export default Footer;