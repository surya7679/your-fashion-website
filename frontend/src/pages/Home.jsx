import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { 
  ArrowRight, 
  Star, 
  ShoppingBag,
  Sparkles,
  TrendingUp,
  Award
} from 'lucide-react';
import { shopInfo, products, testimonials, features } from '../data/mock';
import * as LucideIcons from 'lucide-react';

export const Home = () => {
  const featuredProducts = products.slice(0, 6);
  const featuredTestimonials = testimonials.slice(0, 3);

  const getIcon = (iconName) => {
    const Icon = LucideIcons[iconName];
    return Icon ? <Icon className="w-6 h-6" /> : null;
  };

  const handleInquiry = (productName) => {
    const message = encodeURIComponent(
      `Hi! I'm interested in ${productName}. Can you provide more details?`
    );
    window.open(`https://wa.me/${shopInfo.whatsapp}?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-blue-100 rounded-full filter blur-3xl opacity-30 -z-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-100 rounded-full filter blur-3xl opacity-40 -z-10"></div>

        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 animate-in slide-in-from-left duration-700">
              <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full">
                <Sparkles className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-medium text-blue-900">{shopInfo.experience} of Excellence</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight">
                {shopInfo.tagline}
              </h1>
              
              <p className="text-lg text-slate-600 leading-relaxed">
                Discover the latest fashion trends at {shopInfo.name}. From traditional ethnic wear to modern casual styles - we have everything to make you look stunning.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <Link to="/products" className="flex items-center gap-2">
                    <ShoppingBag className="w-5 h-5" />
                    Browse Collection
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
                
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white transition-all duration-300"
                >
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-blue-600" />
                  <span className="text-sm font-medium text-slate-700">Quality Assured</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-blue-600" />
                  <span className="text-sm font-medium text-slate-700">Latest Trends</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  <span className="text-sm font-medium text-slate-700">5.0 Rating</span>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative animate-in slide-in-from-right duration-700">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1558769132-cb1aea1f5677?w=800&q=80"
                  alt="Fashion Collection"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
                
                {/* Floating Badge */}
                <div className="absolute top-6 left-6 bg-white px-4 py-2 rounded-full shadow-lg backdrop-blur-sm">
                  <p className="text-sm font-semibold text-slate-900">New Arrivals Weekly</p>
                </div>
              </div>

              {/* Decorative Element */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-600 rounded-full filter blur-2xl opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-slate-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg group"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-100 transition-colors duration-300">
                    <span className="text-blue-600">
                      {getIcon(feature.icon)}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-slate-600">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Featured Collection
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Explore our handpicked selection of trending styles and timeless classics
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {featuredProducts.map((product) => (
              <Card
                key={product.id}
                className="group overflow-hidden border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {product.badge && (
                    <Badge className="absolute top-3 left-3 bg-blue-600 hover:bg-blue-700">
                      {product.badge}
                    </Badge>
                  )}
                </div>
                <CardContent className="p-5">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-sm text-slate-600 mb-3 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-baseline gap-2">
                      <span className="text-xl font-bold text-slate-900">
                        {product.price}
                      </span>
                      <span className="text-sm text-slate-400 line-through">
                        {product.originalPrice}
                      </span>
                    </div>
                  </div>
                  <Button
                    onClick={() => handleInquiry(product.name)}
                    className="w-full bg-slate-900 hover:bg-blue-600 text-white transition-colors duration-300"
                  >
                    Inquire Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white transition-all duration-300"
            >
              <Link to="/products" className="flex items-center gap-2">
                View All Products
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-slate-600">
              Don't just take our word for it - hear from our happy customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredTestimonials.map((testimonial) => (
              <Card
                key={testimonial.id}
                className="border-slate-200 hover:shadow-lg transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-yellow-500 fill-yellow-500"
                      />
                    ))}
                  </div>
                  <p className="text-slate-700 mb-4 italic">
                    "{testimonial.comment}"
                  </p>
                  <div className="flex items-center gap-3">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <p className="font-semibold text-slate-900">
                        {testimonial.name}
                      </p>
                      <p className="text-xs text-slate-500">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Upgrade Your Wardrobe?
          </h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Visit our store or contact us today to explore our exclusive collection
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <a
                href={`https://wa.me/${shopInfo.whatsapp}?text=${encodeURIComponent('Hi! I want to know more about your products.')}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Chat on WhatsApp
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-slate-900 transition-all duration-300"
            >
              <Link to="/contact">Get Directions</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
