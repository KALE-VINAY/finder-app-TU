import React ,{useEffect} from 'react';
import { Phone } from 'lucide-react';

const ProductCard = ({ title, price, description, imagePlaceholder, phNumber }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300">
    <div className="aspect-square w-full bg-gray-100">
      <img
        src={`${imagePlaceholder}`}
        alt={title}
        className="w-full h-full object-cover"
      />
    </div>
    <div className="p-4">
      <h4 className="font-semibold text-lg mb-2">{title}</h4>
      <p className="text-gray-600 text-sm mb-2">{description}</p>
      {/* <p className="text-yellow-800 font-bold">${price}</p> */}
      <button className="mt-3 w-full bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600 transition-colors flex items-center justify-center gap-2">
        {/* <ShoppingCart size={16} /> */}
       <a href={`tel:${phNumber}`} className="flex items-center text-red-600 hover:text-red-800">
                        <Phone className="w-4 h-4 mr-2" />
                        {/* {phNumber} */} Call Now
                      </a>

      </button>
    </div>
  </div>
);

const SportsJersey = () => {

   // Add this useEffect to scroll to top when component mounts or id changes
   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const categories = [
    {
      title: "Sports Jerseys",
      items: [
        {
          title: "NB Sports Jersey",
          price: "49.99",
          description: "Premium quality sports jerseys for all teams and athletes, delivering excellence in every stitch - call now to place your order.",
          imagePlaceholder: "https://tse2.mm.bing.net/th?id=OIP.uL1o9UiXA3E8JSMhxAAmLgHaIj&pid=Api&P=0&h=180",
          phNumber:'9435119142',
        },
        {
          title: "SD Sports Jersey",
          price: "54.99",
          description: "Top-tier custom sports jerseys crafted with premium materials, perfect for teams seeking professional-grade uniforms and apparel.",
          imagePlaceholder: "https://tse1.mm.bing.net/th?id=OIP.amxWuPg3tjksQ8MttjF6KwHaHa&pid=Api&P=0&h=180",
          phNumber:'9864070455',
        },
        {
          title: "Champion Sports",
          price: "54.99",
          description: "Complete range of premium sportswear including track suits, team jerseys, t-shirts, shorts, training bottoms, and performance gear for athletes and teams.",
          imagePlaceholder: "https://www.thechampioninternational.com/wp-content/uploads/2023/11/Untitled-design-2023-11-06T094527.268-300x300.jpg",
          phNumber:'7988428729',
        }
      ]
    },
    {
      title: "Department T-Shirts",
      items: [
        {
          title: "Engineering Dept",
          price: "24.99",
          description: "Computer Science department special edition",
          imagePlaceholder: "https://tse2.mm.bing.net/th?id=OIP.Emyz1F6OlL_1XRGF0bkAdQHaHa&pid=Api&P=0&h=180"
        },
        {
          title: "Business School",
          price: "24.99",
          description: "Business administration department t-shirt",
          imagePlaceholder: "https://tse4.mm.bing.net/th?id=OIP.YpGZOXxgwZSfXUEMC5G6dAHaHa&pid=Api&P=0&h=180"
        }
      ]
    },
    // {
    //   title: "University Apparel",
    //   items: [
    //     {
    //       title: "Classic Hoodie",
    //       price: "39.99",
    //       description: "Comfortable university logo hoodie",
    //       imagePlaceholder: "400/400"
    //     },
    //     {
    //       title: "Campus T-Shirt",
    //       price: "19.99",
    //       description: "Classic university logo t-shirt",
    //       imagePlaceholder: "400/400"
    //     }
    //   ]
    // }
  ];

  return (
    <div className="min-h-screen bg-yellow-50">
      {/* Header */}
      <header className="bg-yellow-500 text-white py-6 px-4 shadow-md">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">University Store</h1>
          <p className="text-yellow-100">Your one-stop shop for university apparel and sports gear</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto py-8 px-4">
        {/* Categories */}
        {categories.map((category, index) => (
          <section key={index} className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-yellow-900 border-b-2 border-yellow-200 pb-2">
              {category.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.items.map((item, itemIndex) => (
                <ProductCard key={itemIndex} {...item} />
              ))}
            </div>
          </section>
        ))}

        {/* Contact Information
        <section className="bg-white rounded-lg shadow-md p-6 mt-8">
          <h2 className="text-2xl font-semibold mb-6 text-yellow-900 border-b-2 border-yellow-200 pb-2">
            Contact Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-center gap-3">
              <Phone className="text-yellow-500" />
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p className="text-gray-600">(555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="text-yellow-500" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-gray-600">store@university.edu</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="text-yellow-500" />
              <div>
                <h3 className="font-semibold">Location</h3>
                <p className="text-gray-600">Student Center, Room 101</p>
              </div>
            </div>
          </div>
          <div className="mt-6 text-gray-600">
            <p className="mb-2">Store Hours:</p>
            <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
            <p>Saturday: 10:00 AM - 4:00 PM</p>
            <p>Sunday: Closed</p>
          </div>
        </section> */}
      </main>

      {/* Footer */}
      {/* <footer className="bg-yellow-800 text-yellow-100 py-6 px-4 mt-12">
        <div className="max-w-6xl mx-auto text-center">
          <p>© 2024 University Store. All rights reserved.</p>
          <p className="mt-2 text-sm">
            Questions? Contact our support team for assistance.
          </p>
        </div>
      </footer> */}
    </div>
  );
};

export default SportsJersey;