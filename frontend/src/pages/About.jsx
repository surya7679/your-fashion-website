import React from 'react';
import { Card, CardContent } from '../components/ui/card';
import { 
  Store, 
  Award, 
  Users, 
  Heart,
  Target,
  TrendingUp
} from 'lucide-react';
import { shopInfo } from '../data/mock';

export const About = () => {
  const values = [
    {
      icon: Award,
      title: 'Quality First',
      description: 'We believe in providing only the best quality products that stand the test of time'
    },
    {
      icon: Users,
      title: 'Customer Focused',
      description: 'Your satisfaction is our priority. We go the extra mile to ensure you love what you wear'
    },
    {
      icon: Heart,
      title: 'Passion for Fashion',
      description: 'Fashion is not just business for us, it\'s our passion and we love what we do'
    },
    {
      icon: Target,
      title: 'Trendsetter',
      description: 'We stay ahead of trends to bring you the latest styles before anyone else'
    }
  ];

  const milestones = [
    { number: '10+', label: 'Years in Business' },
    { number: '50K+', label: 'Happy Customers' },
    { number: '1000+', label: 'Products Sold' },
    { number: '4.9', label: 'Customer Rating' }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full mb-6">
              <Store className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-900">Established in 2014</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              About {shopInfo.name}
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              Your trusted fashion partner in Bihar, bringing you the perfect blend of traditional elegance and modern style for over a decade.
            </p>
          </div>

          {/* Milestones */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {milestones.map((milestone, index) => (
              <Card key={index} className="text-center border-slate-200 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                    {milestone.number}
                  </div>
                  <div className="text-sm text-slate-600">{milestone.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-1 h-12 bg-blue-600 rounded-full"></div>
                <h2 className="text-3xl font-bold text-slate-900">Our Story</h2>
              </div>
              <p className="text-slate-600 leading-relaxed">
                Founded in 2014, {shopInfo.name} started as a small boutique with a simple vision: to make quality fashion accessible to everyone in Bihar. What began as a passion project has now grown into one of the most trusted names in local fashion retail.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Over the years, we've served thousands of happy customers, from daily wear to special occasions. Our commitment to quality, affordability, and exceptional service has made us the go-to destination for fashion enthusiasts across the region.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Today, we continue to evolve with changing trends while staying true to our roots – providing personalized service, authentic products, and styles that make our customers feel confident and beautiful.
              </p>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80"
                  alt="Our Store"
                  className="w-full h-96 object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white p-6 rounded-xl shadow-xl max-w-xs">
                <TrendingUp className="w-8 h-8 mb-2" />
                <p className="font-semibold">Growing Strong Since 2014</p>
                <p className="text-sm text-blue-100 mt-1">Serving Bihar with Pride</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our Values
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card
                key={index}
                className="text-center border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-100 group-hover:scale-110 transition-all duration-300">
                    <value.icon className="w-7 h-7 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-slate-300 leading-relaxed mb-8">
              To empower individuals through fashion by providing high-quality, affordable clothing that helps them express their unique style and personality. We strive to be Bihar's most trusted fashion destination, where quality meets affordability and tradition meets modernity.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div>
                <div className="text-4xl font-bold text-blue-400 mb-2">Quality</div>
                <p className="text-slate-300 text-sm">Only the finest materials and craftsmanship</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-400 mb-2">Service</div>
                <p className="text-slate-300 text-sm">Personalized attention to every customer</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-400 mb-2">Style</div>
                <p className="text-slate-300 text-sm">Latest trends at your doorstep</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team/Owner Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-slate-200 overflow-hidden">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-1">
                  <img
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=Owner&backgroundColor=b6e3f4"
                    alt="Owner"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="md:col-span-2 p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    Meet The Team
                  </h3>
                  <p className="text-blue-600 font-medium mb-4">Founders & Fashion Enthusiasts</p>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    Behind {shopInfo.name} is a dedicated team of fashion enthusiasts who live and breathe style. With years of experience in the fashion industry and a deep understanding of local preferences, we curate collections that resonate with our community.
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    Our team personally selects each piece, ensuring it meets our high standards of quality and style. We believe in building lasting relationships with our customers, treating each one like family.
                  </p>
                </CardContent>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};
