import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FiMail, FiUser, FiMessageSquare, FiSend, FiPhone } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    phone: '',
    message: ''
  });
  
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  // Auto-hide status message after 3 seconds
  useEffect(() => {
    if (status.message) {
      const timer = setTimeout(() => {
        setStatus({ type: '', message: '' });
      }, 3000);
      
      return () => clearTimeout(timer);
    }
  }, [status.message]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    // Allow only numbers, +, -, spaces, and parentheses
    const phoneRegex = /^[0-9+\-\s()]*$/;
    if (phoneRegex.test(value)) {
      setFormData({
        ...formData,
        phone: value
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      
      setStatus({
        type: 'success',
        message: 'Message sent successfully! I\'ll get back to you soon.'
      });
      
      setFormData({
        from_name: '',
        from_email: '',
        phone: '',
        message: ''
      });
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Failed to send message. Please try again.'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative h-screen overflow-hidden flex items-center justify-center py-8" style={{ backgroundColor: 'var(--bg-primary)' }}>
      {/* Radial gradient background effect */}
      <div className="absolute top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[600px] bg-[rgba(var(--theme-primary-rgb),0.2)] rounded-full blur-[120px]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="text-center mb-6">
          <h2 className="text-3xl min-[500px]:text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-[var(--theme-primary)]">Touch</span>
          </h2>
          <div className="w-20 min-[500px]:w-24 h-1 bg-[var(--theme-primary)] mx-auto mb-3"></div>
          <p className="text-sm min-[500px]:text-base" style={{ color: 'var(--text-secondary)' }}>
            Have a question or want to work together? Feel free to reach out!
          </p>
        </div>

        <div className="flex justify-center">
          <motion.form
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            onSubmit={handleSubmit}
            className="max-w-md min-[500px]:max-w-lg w-full p-4 min-[500px]:p-6 md:p-7 rounded-2xl border transition-all duration-500"
            style={{ backgroundColor: 'var(--bg-card-dark)' }}
          >
          {/* Name Input */}
          <div className="mb-4">
            <label htmlFor="from_name" className="block mb-1.5 font-medium text-sm" style={{ color: 'var(--text-primary)' }}>
              <FiUser className="inline mr-2 text-[var(--theme-primary)]" />
              Name
            </label>
            <input
              type="text"
              id="from_name"
              name="from_name"
              value={formData.from_name}
              onChange={handleChange}
              required
              className="contact-input w-full px-3 py-2.5 min-[500px]:px-4 min-[500px]:py-3 rounded-lg border border-transparent focus:outline-none focus:border-[var(--theme-primary)] focus:ring-2 focus:ring-[rgba(var(--theme-primary-rgb),0.2)] transition-all duration-300"
              style={{ backgroundColor: 'var(--bg-card)', color: 'var(--text-primary)' }}
              placeholder="Name"
            />
          </div>

          {/* Email Input */}
          <div className="mb-4">
            <label htmlFor="from_email" className="block mb-1.5 font-medium text-sm" style={{ color: 'var(--text-primary)' }}>
              <FiMail className="inline mr-2 text-[var(--theme-primary)]" />
              Email
            </label>
            <input
              type="email"
              id="from_email"
              name="from_email"
              value={formData.from_email}
              onChange={handleChange}
              required
              className="contact-input w-full px-3 py-2.5 rounded-lg border border-transparent focus:outline-none focus:border-[var(--theme-primary)] focus:ring-2 focus:ring-[rgba(var(--theme-primary-rgb),0.2)] transition-all duration-300 text-sm"
              style={{ backgroundColor: 'var(--bg-card)', color: 'var(--text-primary)' }}
              placeholder="Email"
            />
          </div>

          {/* Phone Input */}
          <div className="mb-4">
            <label htmlFor="phone" className="block mb-1.5 font-medium text-sm" style={{ color: 'var(--text-primary)' }}>
              <FiPhone className="inline mr-2 text-[var(--theme-primary)]" />
              Phone (Optional)
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handlePhoneChange}
              inputMode="tel"
              className="contact-input w-full px-3 py-2.5 rounded-lg border border-transparent focus:outline-none focus:border-[var(--theme-primary)] focus:ring-2 focus:ring-[rgba(var(--theme-primary-rgb),0.2)] transition-all duration-300 text-sm"
              style={{ backgroundColor: 'var(--bg-card)', color: 'var(--text-primary)' }}
              placeholder="+91"
            />
          </div>

          {/* Message Textarea */}
          <div className="mb-4">
            <label htmlFor="message" className="block mb-1.5 font-medium text-sm" style={{ color: 'var(--text-primary)' }}>
              <FiMessageSquare className="inline mr-2 text-[var(--theme-primary)]" />
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="contact-input w-full px-3 py-2.5 rounded-lg border border-transparent focus:outline-none focus:border-[var(--theme-primary)] focus:ring-2 focus:ring-[rgba(var(--theme-primary-rgb),0.2)] transition-all duration-300 resize-none text-sm"
              style={{ backgroundColor: 'var(--bg-card)', color: 'var(--text-primary)' }}
              placeholder="Your message.."
            />
          </div>

          {/* Status Message */}
          {status.message && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`mb-4 p-3 rounded-lg border-2 text-sm ${
                status.type === 'success'
                  ? 'bg-[rgba(var(--theme-primary-rgb),0.1)] border-[var(--theme-primary)] text-[var(--theme-primary)]'
                  : 'bg-red-500/10 border-red-500 text-red-400'
              }`}
            >
              {status.message}
            </motion.div>
          )}

          {/* Submit Button */}
          <motion.button
            type="submit"
            disabled={loading}
            whileHover={{ scale: loading ? 1 : 1.02 }}
            whileTap={{ scale: loading ? 1 : 0.98 }}
            className={`w-full py-3 px-5 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 text-sm ${
              loading
                ? 'bg-gray-600 cursor-not-allowed opacity-60'
                : 'bg-[var(--theme-primary)] hover:bg-[var(--theme-light)] text-gray-900 shadow-[0_0_30px_rgba(var(--theme-primary-rgb),0.35)] hover:shadow-[0_0_40px_rgba(var(--theme-primary-rgb),0.5)]'
            }`}
          >
            {loading ? (
              <>
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Sending...
              </>
            ) : (
              <>
                <FiSend />
                Send Message
              </>
            )}
          </motion.button>
        </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;