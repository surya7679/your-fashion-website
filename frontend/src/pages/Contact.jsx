import React, { useState } from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Send,
  MessageCircle,
  Navigation
} from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import { shopInfo, faqs } from '../data/mock';
import { toast } from 'sonner';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // In real app, this would send to backend
    // For now, redirect to WhatsApp with the message
    const message = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage: ${formData.message}`
    );
    
    toast.success('Redirecting to WhatsApp...');
    
    setTimeout(() => {
      window.open(`https://wa.me/${shopInfo.whatsapp}?text=${message}`, '_blank');
    }, 1000);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      value: shopInfo.phone,
      link: `tel:${shopInfo.phone}`,
      action: 'Call Now'
    },
    {
      icon: Mail,
      title: 'Email',
      value: shopInfo.email,
      link: `mailto:${shopInfo.email}`,
      action: 'Send Email'
    },
    {
      icon: MapPin,
      title: 'Address',
      value: shopInfo.address,
      link: `https://maps.google.com/?q=${encodeURIComponent(shopInfo.address)}`,
      action: 'Get Directions'
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 bg-slate-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Get In Touch
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Info Cards */}
          {contactInfo.map((info, index) => (
            <Card
              key={index}
              className="border-slate-200 hover:shadow-lg transition-all duration-300 group"
            >
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-100 group-hover:scale-110 transition-all duration-300">
                  <info.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {info.title}
                </h3>
                <p className="text-sm text-slate-600 mb-4 break-words">
                  {info.value}
                </p>
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="border-slate-300 hover:border-blue-600 hover:text-blue-600 transition-colors duration-300"
                >
                  <a href={info.link} target="_blank" rel="noopener noreferrer">
                    {info.action}
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Contact Form */}
          <Card className="border-slate-200 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-blue-600 rounded-full"></div>
                <h2 className="text-2xl font-bold text-slate-900">Send Us a Message</h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                    Your Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                    className="border-slate-300 focus:border-blue-600 focus:ring-blue-600"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                    className="border-slate-300 focus:border-blue-600 focus:ring-blue-600"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                    Phone Number *
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX"
                    required
                    className="border-slate-300 focus:border-blue-600 focus:ring-blue-600"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    Your Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us how we can help you..."
                    rows={5}
                    required
                    className="border-slate-300 focus:border-blue-600 focus:ring-blue-600 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                  size="lg"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>

              <div className="mt-6 pt-6 border-t border-slate-200">
                <p className="text-sm text-slate-600 text-center mb-4">
                  Or reach us directly on WhatsApp
                </p>
                <Button
                  onClick={() => {
                    window.open(`https://wa.me/${shopInfo.whatsapp}?text=${encodeURIComponent('Hi! I want to get in touch.')}`, '_blank');
                  }}
                  variant="outline"
                  className="w-full border-green-500 text-green-600 hover:bg-green-50 transition-colors duration-300"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Chat on WhatsApp
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Opening Hours & Map */}
          <div className="space-y-6">
            {/* Opening Hours */}
            <Card className="border-slate-200 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Clock className="w-6 h-6 text-blue-600" />
                  <h2 className="text-2xl font-bold text-slate-900">Opening Hours</h2>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-3 border-b border-slate-200">
                    <span className="text-slate-700 font-medium">Monday - Saturday</span>
                    <span className="text-blue-600 font-semibold">10:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-700 font-medium">Sunday</span>
                    <span className="text-blue-600 font-semibold">11:00 AM - 6:00 PM</span>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-900">
                    <strong>Note:</strong> Timings may vary during festivals and special occasions. Call us to confirm.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Map */}
            <Card className="border-slate-200 shadow-lg overflow-hidden">
              <div className="relative h-64 bg-slate-200">
                <iframe
                  src={shopInfo.googleMapsEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Store Location"
                ></iframe>
              </div>
              <CardContent className="p-4">
                <Button
                  asChild
                  className="w-full bg-slate-900 hover:bg-blue-600 text-white transition-colors duration-300"
                >
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(shopInfo.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <Navigation className="w-4 h-4" />
                    Get Directions
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <Card className="border-slate-200 shadow-lg">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-slate-600">
                Find quick answers to common questions
              </p>
            </div>

            <Accordion type="single" collapsible className="max-w-3xl mx-auto">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-slate-900 hover:text-blue-600 transition-colors duration-300">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
