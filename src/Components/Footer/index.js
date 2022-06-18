const Footer = () => {
  return (
    <div className="flex justify-center items-center bg-gradient-to-br from-orange-300 to-orange-400 p-6">
      <div className="grid grid-cols-2">
        <div>
          <div>Tech Stack</div>
          <div>
            <ul>
              <li>Express</li>
              <li>React</li>
              <li>Mongo</li>
              <li>Cloudinary</li>
            </ul>
          </div>
        </div>
        <div>
          <div>My Social Media</div>
          <div>
            <ul>
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Twitter</li>
              <li>Github</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
