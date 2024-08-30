import React, { useState } from 'https://esm.sh/react@18.2.0';
import ReactDOM from 'https://esm.sh/react-dom@18.2.0';

const colors = {
  softPeach: '#FFE5E5',
  paleLavender: '#E5E0FF',
  mintCream: '#E0FFE5',
  babyBlue: '#E0F2FF',
  lightPink: '#FFE0FB',
  paleYellow: '#FFFDE0'
};

const PricingCalculator = () => {
  const [duration, setDuration] = useState(5);
  const [style, setStyle] = useState('cinematic');
  const [platform, setPlatform] = useState('youtube');

  const calculatePrice = () => {
    let basePrice = duration * 50; // $50 per minute
    if (style === 'cinematic') basePrice *= 1.5;
    if (platform === 'instagram') basePrice *= 1.2;
    return basePrice.toFixed(2);
  };

  return (
    <div className="p-6 rounded-lg" style={{ backgroundColor: colors.mintCream }}>
      <h3 className="text-2xl font-bold mb-4">Pricing Calculator</h3>
      <div className="mb-4">
        <label className="block mb-2">Duration (minutes)</label>
        <input
          type="number"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          className="w-full p-2 rounded"
          min="1"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Style</label>
        <select
          value={style}
          onChange={(e) => setStyle(e.target.value)}
          className="w-full p-2 rounded"
        >
          <option value="cinematic">Cinematic</option>
          <option value="modern">Modern</option>
          <option value="vintage">Vintage</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-2">Platform</label>
        <select
          value={platform}
          onChange={(e) => setPlatform(e.target.value)}
          className="w-full p-2 rounded"
        >
          <option value="youtube">YouTube</option>
          <option value="instagram">Instagram</option>
          <option value="vimeo">Vimeo</option>
        </select>
      </div>
      <div className="text-xl font-bold">
        Estimated Price: ${calculatePrice()}
      </div>
    </div>
  );
};

const WeddingVideoEditorWireframe = () => {
  return (
    <div className="flex flex-col min-h-screen" style={{ backgroundColor: colors.softPeach }}>
      {/* Header */}
      <header className="p-4 flex justify-between items-center" style={{ backgroundColor: colors.paleLavender }}>
        <div className="text-2xl font-bold">Weddit</div>
        <nav>
          <ul className="flex space-x-4">
            <li>Home</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>Pricing</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="p-12 text-center" style={{ backgroundColor: colors.babyBlue }}>
        <h1 className="text-4xl font-bold mb-4">Crafting Your Perfect Wedding Video</h1>
        <p className="text-xl mb-8">Turn your special moments into timeless memories</p>
        <button className="px-6 py-2 rounded" style={{ backgroundColor: colors.lightPink }}>Explore Our Work</button>
      </section>

      {/* Services */}
      <section className="p-8" style={{ backgroundColor: colors.mintCream }}>
        <h2 className="text-3xl font-bold mb-6 text-center">Our Services</h2>
        <div className="flex justify-around">
          <div className="text-center p-4 rounded" style={{ backgroundColor: colors.softPeach }}>Cinematic Edits</div>
          <div className="text-center p-4 rounded" style={{ backgroundColor: colors.softPeach }}>Highlight Reels</div>
          <div className="text-center p-4 rounded" style={{ backgroundColor: colors.softPeach }}>Social Media Cuts</div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="p-8" style={{ backgroundColor: colors.paleYellow }}>
        <h2 className="text-3xl font-bold mb-6 text-center">Our Portfolio</h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="h-40 bg-gray-200">Wedding Video 1</div>
          <div className="h-40 bg-gray-200">Wedding Video 2</div>
          <div className="h-40 bg-gray-200">Wedding Video 3</div>
        </div>
      </section>

      {/* Pricing Calculator */}
      <section className="p-8" style={{ backgroundColor: colors.lightPink }}>
        <h2 className="text-3xl font-bold mb-6 text-center">Get a Quote</h2>
        <PricingCalculator />
      </section>

      {/* Testimonials */}
      <section className="p-8" style={{ backgroundColor: colors.babyBlue }}>
        <h2 className="text-3xl font-bold mb-6 text-center">Client Love</h2>
        <div className="flex justify-around">
          <div className="text-center p-4 rounded" style={{ backgroundColor: colors.softPeach }}>
            "Absolutely stunning work! They captured our day perfectly." - Sarah & John
          </div>
          <div className="text-center p-4 rounded" style={{ backgroundColor: colors.softPeach }}>
            "Professional, creative, and a joy to work with!" - Emma & David
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="p-8" style={{ backgroundColor: colors.paleLavender }}>
        <h2 className="text-3xl font-bold mb-6 text-center">Get in Touch</h2>
        <form className="max-w-md mx-auto">
          <input className="w-full mb-4 p-2 rounded" type="text" placeholder="Your Name" />
          <input className="w-full mb-4 p-2 rounded" type="email" placeholder="Your Email" />
          <textarea className="w-full mb-4 p-2 rounded" placeholder="Your Message"></textarea>
          <button className="px-6 py-2 rounded" style={{ backgroundColor: colors.lightPink }}>Send Message</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="p-4 text-center" style={{ backgroundColor: colors.mintCream }}>
        <p>&copy; 2024 Weddit Video Editing. Crafting memories with love.</p>
      </footer>
    </div>
  );
};

ReactDOM.render(<WeddingVideoEditorWireframe />, document.getElementById('root'));
