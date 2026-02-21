import React, { useState } from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { products, categories, shopInfo } from '../data/mock';
import * as LucideIcons from 'lucide-react';

export const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProducts =
    selectedCategory === 'all'
      ? products
      : products.filter((p) => p.category === selectedCategory);

  const handleInquiry = (productName) => {
    const message = encodeURIComponent(
      `Hi! I'm interested in ${productName}. Can you provide more details?`
    );
    window.open(`https://wa.me/${shopInfo.whatsapp}?text=${message}`, '_blank');
  };

  const getIcon = (iconName) => {
    const Icon = LucideIcons[iconName];
    return Icon ? <Icon className="w-4 h-4" /> : null;
  };

  return (
    <div className="min-h-screen pt-24 pb-16 bg-slate-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Our Collection
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Browse through our carefully curated selection of premium clothing and accessories
          </p>
        </div>

        {/* Category Tabs */}
        <Tabs
          defaultValue="all"
          className="mb-12"
          onValueChange={setSelectedCategory}
        >
          <TabsList className="w-full flex flex-wrap justify-center gap-2 bg-transparent h-auto p-0">
            {categories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="data-[state=active]:bg-blue-600 data-[state=active]:text-white bg-white text-slate-700 border border-slate-200 hover:border-blue-300 transition-all duration-300 px-6 py-2.5 rounded-lg flex items-center gap-2"
              >
                {getIcon(category.icon)}
                <span className="font-medium">{category.name}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value={selectedCategory} className="mt-8">
            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                  <Card
                    key={product.id}
                    className="group overflow-hidden border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white"
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      {product.badge && (
                        <Badge className="absolute top-3 left-3 bg-blue-600 hover:bg-blue-700 shadow-lg">
                          {product.badge}
                        </Badge>
                      )}
                      
                      {/* Discount Badge */}
                      <div className="absolute top-3 right-3 bg-green-500 text-white px-2 py-1 rounded-lg text-xs font-bold shadow-lg">
                        SAVE {Math.round(((parseInt(product.originalPrice.replace(/[₹,]/g, '')) - parseInt(product.price.replace(/[₹,]/g, ''))) / parseInt(product.originalPrice.replace(/[₹,]/g, ''))) * 100)}%
                      </div>
                    </div>

                    <CardContent className="p-5">
                      <h3 className="text-lg font-semibold text-slate-900 mb-2 line-clamp-1">
                        {product.name}
                      </h3>
                      <p className="text-sm text-slate-600 mb-4 line-clamp-2 leading-relaxed">
                        {product.description}
                      </p>

                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-baseline gap-2">
                          <span className="text-2xl font-bold text-slate-900">
                            {product.price}
                          </span>
                          <span className="text-sm text-slate-400 line-through">
                            {product.originalPrice}
                          </span>
                        </div>
                      </div>

                      <Button
                        onClick={() => handleInquiry(product.name)}
                        className="w-full bg-slate-900 hover:bg-blue-600 text-white transition-all duration-300 hover:shadow-lg"
                      >
                        Inquire Now
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-slate-500 text-lg">
                  No products found in this category.
                </p>
              </div>
            )}
          </TabsContent>
        </Tabs>

        {/* Call to Action */}
        <Card className="bg-slate-900 text-white border-0 mt-12">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              Contact us directly on WhatsApp and our team will help you find the perfect outfit
            </p>
            <Button
              onClick={() => {
                const message = encodeURIComponent(
                  `Hi ${shopInfo.name}! I'm looking for something specific. Can you help me?`
                );
                window.open(`https://wa.me/${shopInfo.whatsapp}?text=${message}`, '_blank');
              }}
              size="lg"
              className="bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Chat on WhatsApp
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
