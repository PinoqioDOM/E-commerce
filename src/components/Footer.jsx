import Logo from '../assets/Logo.png';

const Footer = () => {
  return (
    <footer className="bg-[#90EE90] py-8 mt-8">
      <div className="container mx-auto px-4 flex flex-col items-center justify-center text-center">
        
        <img
          src={Logo}
          alt="Veli Logo"
          className="w-[150px] mb-4"
        />

        <p className="text-xl font-semibold text-gray-800">
          ადგილი სადაც მუდამ გელიან
        </p>
      </div>
    </footer>
  );
};

export default Footer;