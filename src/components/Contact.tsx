import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // You can move these to .env.local as VITE_EMAILJS_* if you want
  const SERVICE_ID = "service_zw7sjrc";
  const TEMPLATE_ID = "template_u6e2c1a"; // your admin template ID
  const PUBLIC_KEY = "e086xXd_WaAgYARRN";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const templateParams = {
        user_name: formData.name,   // matches your admin template variables
        user_email: formData.email,
        message: formData.message,
      };

      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);

      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon!",
      });

      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
      toast({
        title: "Failed to send",
        description: "There was an issue sending your message. Try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-24 px-6 bg-gradient-to-b from-[#F8FAFF] to-white relative overflow-hidden">
      {/* Background Decorative Blob */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-electric opacity-10 blur-3xl rounded-full" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-gradient-electric opacity-10 blur-3xl rounded-full" />

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-slide-up" style={{ animationDelay: "0.1s", opacity: 0 }}>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Let's Build Something <span className="text-gradient-electric">Amazing Together</span>
          </h2>
          <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto">
            Interested in collaborating or just want to say hi? Drop me a message!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Contact Form */}
          <div className="animate-fade-slide-up" style={{ animationDelay: "0.2s", opacity: 0 }}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-body font-medium mb-2">
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className="w-full h-12 rounded-xl border-border/50 focus:border-primary"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-body font-medium mb-2">
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className="w-full h-12 rounded-xl border-border/50 focus:border-primary"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-body font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or just say hello..."
                  className="w-full min-h-[160px] rounded-xl border-border/50 focus:border-primary resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full bg-gradient-electric text-white shadow-strong hover:shadow-strong hover:scale-104 transition-all font-body font-semibold rounded-full"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send className="ml-2 w-5 h-5" />
              </Button>
            </form>
          </div>

          {/* Right: Contact Details */}
          <div className="space-y-8 animate-fade-slide-up" style={{ animationDelay: "0.3s", opacity: 0 }}>
            <div>
              <h3 className="text-2xl font-heading font-bold mb-6">Get in Touch</h3>
              <p className="text-foreground/70 font-body leading-relaxed mb-8">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. 
                Feel free to reach out through any of these channels.
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              <div className="bg-white rounded-2xl p-6 shadow-soft hover:shadow-strong transition-all group">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-electric p-3 rounded-xl">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold mb-1">Email</h4>
                    <a
                      href="mailto:chandravanshisaurabh25@gmail.com"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors font-body"
                    >
                      chandravanshisaurabh25@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-soft hover:shadow-strong transition-all group">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-electric p-3 rounded-xl">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold mb-1">Phone</h4>
                    <a
                      href="tel:+917906242843"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors font-body"
                    >
                      +91 79062 42843
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-soft hover:shadow-strong transition-all group">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-electric p-3 rounded-xl">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold mb-1">Location</h4>
                    <p className="text-sm text-muted-foreground font-body">
                      Delhi NCR, India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Availability Badge */}
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-6 border border-border/50">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <h4 className="font-heading font-semibold">Available for Work</h4>
              </div>
              <p className="text-sm text-muted-foreground font-body">
                Currently accepting new projects and collaborations. Let's create something amazing together!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
