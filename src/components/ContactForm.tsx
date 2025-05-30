
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

interface ContactFormProps {
  onSubmit?: (data: ContactFormData) => void;
}

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  // Input sanitization function
  const sanitizeInput = (input: string): string => {
    return input
      .trim()
      .replace(/[<>]/g, '') // Remove potential HTML tags
      .slice(0, 1000); // Limit length
  };

  // Email validation
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email) && email.length <= 254;
  };

  // Form validation
  const validateForm = (): boolean => {
    if (!formData.name || formData.name.length < 2 || formData.name.length > 100) {
      toast({
        title: "Invalid Name",
        description: "Name must be between 2 and 100 characters.",
        variant: "destructive"
      });
      return false;
    }

    if (!validateEmail(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return false;
    }

    if (!formData.subject || formData.subject.length < 5 || formData.subject.length > 200) {
      toast({
        title: "Invalid Subject",
        description: "Subject must be between 5 and 200 characters.",
        variant: "destructive"
      });
      return false;
    }

    if (!formData.message || formData.message.length < 10 || formData.message.length > 2000) {
      toast({
        title: "Invalid Message",
        description: "Message must be between 10 and 2000 characters.",
        variant: "destructive"
      });
      return false;
    }

    return true;
  };

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    const sanitizedValue = sanitizeInput(value);
    setFormData(prev => ({
      ...prev,
      [field]: sanitizedValue
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Additional security: create sanitized data for email
      const sanitizedData = {
        name: sanitizeInput(formData.name),
        email: sanitizeInput(formData.email),
        subject: sanitizeInput(formData.subject),
        message: sanitizeInput(formData.message)
      };

      // Rate limiting check (basic client-side)
      const lastSubmission = localStorage.getItem('lastContactSubmission');
      const now = Date.now();
      if (lastSubmission && now - parseInt(lastSubmission) < 60000) { // 1 minute cooldown
        toast({
          title: "Too Many Requests",
          description: "Please wait a minute before submitting another message.",
          variant: "destructive"
        });
        setIsSubmitting(false);
        return;
      }

      localStorage.setItem('lastContactSubmission', now.toString());

      if (onSubmit) {
        onSubmit(sanitizedData);
      } else {
        // Default behavior: create mailto link with sanitized data
        const mailtoLink = `mailto:cpic.singapore@gmail.com?subject=${encodeURIComponent(`CPIC 2025: ${sanitizedData.subject}`)}&body=${encodeURIComponent(`${sanitizedData.message}\n\nRegards,\n${sanitizedData.name}\nEmail: ${sanitizedData.email}`)}`;
        window.location.href = mailtoLink;
      }

      toast({
        title: "Message Sent",
        description: "Your message has been prepared. Your email client should open shortly.",
      });

      // Reset form after successful submission
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error processing your request. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit} noValidate>
      <div>
        <Input 
          placeholder="Your Name" 
          className="bg-black/40 border-white/10 text-white" 
          value={formData.name}
          onChange={(e) => handleInputChange('name', e.target.value)}
          required
          maxLength={100}
          disabled={isSubmitting}
          aria-label="Your Name"
        />
      </div>
      <div>
        <Input 
          type="email" 
          placeholder="Your Email" 
          className="bg-black/40 border-white/10 text-white" 
          value={formData.email}
          onChange={(e) => handleInputChange('email', e.target.value)}
          required
          maxLength={254}
          disabled={isSubmitting}
          aria-label="Your Email"
        />
      </div>
      <div>
        <Input 
          placeholder="Subject" 
          className="bg-black/40 border-white/10 text-white" 
          value={formData.subject}
          onChange={(e) => handleInputChange('subject', e.target.value)}
          required
          maxLength={200}
          disabled={isSubmitting}
          aria-label="Subject"
        />
      </div>
      <div>
        <Textarea 
          placeholder="Your Message" 
          className="min-h-32 bg-black/40 border-white/10 text-white" 
          value={formData.message}
          onChange={(e) => handleInputChange('message', e.target.value)}
          required
          maxLength={2000}
          disabled={isSubmitting}
          aria-label="Your Message"
        />
      </div>
      <Button 
        type="submit" 
        className="bg-neon-cyan text-black hover:bg-neon-cyan/80"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  );
};

export default ContactForm;
