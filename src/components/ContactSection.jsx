'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, CheckCircle, AlertCircle, Loader2, Send } from 'lucide-react';
import { z } from 'zod';
import emailjs from '@emailjs/browser';

// Zod validation schema
const contactSchema = z.object({
  fullname: z.string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must be less than 50 characters')
    .regex(/^[a-zA-Z\s]+$/, 'Name can only contain letters and spaces'),
  email: z.string()
    .email('Please enter a valid email address')
    .min(5, 'Email is required'),
  phone: z.string()
    .min(10, 'Phone number must be at least 10 digits')
    .max(15, 'Phone number must be less than 15 digits')
    .regex(/^[\+]?[0-9\s\-\(\)]+$/, 'Please enter a valid phone number'),
  message: z.string()
    .min(10, 'Message must be at least 10 characters')
    .max(1000, 'Message must be less than 1000 characters')
});

const InputField = ({ label, name, type = 'text', textarea = false, value, onChange, onFocus, onBlur, error, isFocused, ...props }) => {
  const hasError = error;
  const hasValue = value && value.length > 0;
  const shouldFloatLabel = isFocused || hasValue;

  return (
    <div className="relative group">
      {textarea ? (
        <textarea
          name={name}
          value={value || ''}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          className={`w-full bg-gray-800/50 border-2 ${
            hasError 
              ? 'border-red-400 focus:border-red-400' 
              : 'border-gray-600 focus:border-green-400'
          } rounded-xl px-4 pt-6 pb-3 text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-400/20 backdrop-blur-sm resize-none min-h-[120px]`}
          {...props}
        />
      ) : (
        <input
          type={type}
          name={name}
          value={value || ''}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          className={`w-full bg-gray-800/50 border-2 ${
            hasError 
              ? 'border-red-400 focus:border-red-400' 
              : 'border-gray-600 focus:border-green-400'
          } rounded-xl px-4 pt-6 pb-3 text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-400/20 backdrop-blur-sm`}
          {...props}
        />
      )}
      <label
        className={`absolute left-4 transition-all duration-300 pointer-events-none ${
          shouldFloatLabel
            ? `${textarea ? 'top-2' : 'top-2'} text-xs ${isFocused ? 'text-green-400' : 'text-gray-400'}`
            : `${textarea ? 'top-6' : 'top-1/2 -translate-y-1/2'} text-gray-400`
        }`}
      >
        {label}
      </label>
      {hasError && (
        <div className="flex items-center gap-1 mt-2 text-red-400 text-sm">
          <AlertCircle size={16} />
          <span>{hasError}</span>
        </div>
      )}
    </div>
  );
};

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    phone: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [focusedField, setFocusedField] = useState('');

  const contactInfo = [
    { icon: Mail, title: 'Email', data: 'maxwelletinosa@gmail.com', link: 'mailto:maxwelletinosa@gmail.com', color: 'text-blue-400' },
    { icon: Phone, title: 'Phone', data: '+234 (0) 703 330 3881', link: 'tel:+2347033303551', color: 'text-green-400' },
    { icon: MapPin, title: 'Location', data: 'Benin City, Edo State, Nigeria', link: '#', color: 'text-purple-400' },
    { icon: Clock, title: 'Response Time', data: 'Within 24 hours', link: '#', color: 'text-orange-400' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleFocus = (e) => setFocusedField(e.target.name);
  const handleBlur = () => setFocusedField('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});
    setSubmitStatus(null);

    try {
      const validatedData = contactSchema.parse(formData);

      // 🔹 Send with EmailJS
      await emailjs.send(
        "service_1hlsmyj",
        "template_s21tpry",
        {
          from_name: validatedData.fullname,
          from_email: validatedData.email,
          phone_number: validatedData.phone,
          message: validatedData.message,
        },
        "9Eyrq7t88FRsHht_X"
      );

      setSubmitStatus('success');
      setFormData({ fullname: '', email: '', phone: '', message: '' });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors = {};
        error.errors.forEach((err) => {
          fieldErrors[err.path[0]] = err.message;
        });
        setErrors(fieldErrors);
      } else {
        console.error(error);
        setSubmitStatus('error');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section py-20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-green-500/5 rounded-full blur-2xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-500/5 rounded-full blur-2xl"></div>
      
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-white">Get in</span>{' '}
            <span className="text-green-500">Touch</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your project and create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-white mb-8">Let's Connect</h3>
              <div className="grid gap-6">
                {contactInfo.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <a key={index} href={item.link} className="group bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 p-6 rounded-2xl hover:border-green-500/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-green-500/10">
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-xl bg-gray-700/50 group-hover:bg-gray-600/50 transition-all duration-300">
                          <IconComponent className={`w-6 h-6 ${item.color}`} />
                        </div>
                        <div>
                          <h4 className="font-semibold text-white group-hover:text-green-400 transition-colors duration-300">
                            {item.title}
                          </h4>
                          <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                            {item.data}
                          </p>
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 p-8 rounded-3xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <InputField label="Full Name" name="fullname" type="text" value={formData.fullname} onChange={handleInputChange} onFocus={handleFocus} onBlur={handleBlur} error={errors.fullname} isFocused={focusedField === 'fullname'} required />
                <InputField label="Email Address" name="email" type="email" value={formData.email} onChange={handleInputChange} onFocus={handleFocus} onBlur={handleBlur} error={errors.email} isFocused={focusedField === 'email'} required />
              </div>
              <InputField label="Phone Number" name="phone" type="tel" value={formData.phone} onChange={handleInputChange} onFocus={handleFocus} onBlur={handleBlur} error={errors.phone} isFocused={focusedField === 'phone'} required />
              <InputField label="Your Message" name="message" textarea value={formData.message} onChange={handleInputChange} onFocus={handleFocus} onBlur={handleBlur} error={errors.message} isFocused={focusedField === 'message'} required />

              {/* Status */}
              {submitStatus ===  'success' && (
                <div className="flex items-center gap-2 text-green-400 bg-green-400/10 border border-green-400/20 p-4 rounded-xl animate-in slide-in-from-top-2 duration-300">
                  <CheckCircle className="w-5 h-5" />
                  <span>Message sent successfully! I'll get back to you soon.</span>
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="flex items-center gap-2 text-red-400 bg-red-400/10 border border-red-400/20 p-4 rounded-xl animate-in slide-in-from-top-2 duration-300">
                  <AlertCircle className="w-5 h-5" />
                  <span>Failed to send message. Please try again.</span>
                </div>
              )}

              <button
                
                type="submit"
                disabled={isSubmitting}
                className="w-full  bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-3 group"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending Message...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
