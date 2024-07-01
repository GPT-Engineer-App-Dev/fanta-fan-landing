import { Button } from "@/components/ui/button";

function Index() {
  return (
    <div className="w-full max-w-7xl mx-auto">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center h-screen bg-orange-300 text-white text-center p-4">
        <h1 className="text-5xl font-bold mb-4">Experience the Flavor Explosion!</h1>
        <p className="text-xl mb-8">Discover the refreshing taste of Fanta.</p>
        <Button variant="primary" size="lg">Learn More</Button>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-white text-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">About Fanta</h2>
          <p className="text-lg mb-8">Fanta is a brand of fruit-flavored carbonated drinks created by Coca-Cola Deutschland under the leadership of German businessman Max Keith. There are more than 100 flavors worldwide.</p>
          <img src="/images/fanta-history.jpg" alt="Fanta History" className="w-full h-auto rounded-lg shadow-lg" />
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 px-4 bg-orange-100 text-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Our Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <img src="/images/fanta-orange.jpg" alt="Fanta Orange" className="w-full h-auto mb-4 rounded-lg" />
              <h3 className="text-xl font-bold mb-2">Fanta Orange</h3>
              <p className="text-gray-600">The original and most popular flavor.</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <img src="/images/fanta-grape.jpg" alt="Fanta Grape" className="w-full h-auto mb-4 rounded-lg" />
              <h3 className="text-xl font-bold mb-2">Fanta Grape</h3>
              <p className="text-gray-600">A delicious grape-flavored soda.</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <img src="/images/fanta-pineapple.jpg" alt="Fanta Pineapple" className="w-full h-auto mb-4 rounded-lg" />
              <h3 className="text-xl font-bold mb-2">Fanta Pineapple</h3>
              <p className="text-gray-600">A tropical pineapple-flavored soda.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 px-4 bg-white text-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">What Our Fans Say</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="bg-orange-100 p-4 rounded-lg shadow-lg">
              <img src="/images/fan1.jpg" alt="Fan 1" className="w-16 h-16 rounded-full mx-auto mb-4" />
              <p className="text-lg italic">"Fanta is my go-to drink for any occasion. The flavors are amazing!"</p>
              <p className="mt-2 font-bold">- John Doe</p>
            </div>
            <div className="bg-orange-100 p-4 rounded-lg shadow-lg">
              <img src="/images/fan2.jpg" alt="Fan 2" className="w-16 h-16 rounded-full mx-auto mb-4" />
              <p className="text-lg italic">"I love the variety of flavors that Fanta offers. There's something for everyone!"</p>
              <p className="mt-2 font-bold">- Jane Smith</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-orange-100 text-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-left">Name</label>
              <input type="text" id="name" className="w-full p-2 border border-gray-300 rounded-lg" />
            </div>
            <div>
              <label htmlFor="email" className="block text-left">Email</label>
              <input type="email" id="email" className="w-full p-2 border border-gray-300 rounded-lg" />
            </div>
            <div>
              <label htmlFor="message" className="block text-left">Message</label>
              <textarea id="message" className="w-full p-2 border border-gray-300 rounded-lg"></textarea>
            </div>
            <Button variant="primary" size="lg">Send Message</Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-orange-500 text-white text-center">
        <div className="space-y-4">
          <div className="flex justify-center space-x-4">
            <a href="#" className="hover:text-gray-200">Facebook</a>
            <a href="#" className="hover:text-gray-200">Twitter</a>
            <a href="#" className="hover:text-gray-200">Instagram</a>
          </div>
          <form className="space-y-2">
            <label htmlFor="newsletter" className="block">Subscribe to our newsletter</label>
            <div className="flex justify-center">
              <input type="email" id="newsletter" className="p-2 border border-gray-300 rounded-l-lg" placeholder="Enter your email" />
              <Button variant="primary" size="lg" className="rounded-r-lg">Subscribe</Button>
            </div>
          </form>
          <p>&copy; 2023 Fanta Fans. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Index;