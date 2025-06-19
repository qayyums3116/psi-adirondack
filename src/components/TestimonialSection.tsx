import { Quote, Star, Award, Users, TrendingUp } from "lucide-react";

const TestimonialSection = () => {
  const testimonials = [
    {
      quote: "PsiAdirondack reduced our content outreach overhead by 75% and elevated our product's visibility in AI search results.",
      author: "Jane Smith",
      position: "SEO Director",
      company: "Major Retail Brand",
      avatar: "JS",
      rating: 5,
      metric: "75% Reduction",
      metricLabel: "Overhead"
    },
    {
      quote: "The automated content seeding is incredible. We're now visible across Wikipedia, Quora, and Stack Overflow without manual effort.",
      author: "Michael Chen",
      position: "Marketing VP",
      company: "Tech Startup",
      avatar: "MC",
      rating: 5,
      metric: "300% Increase",
      metricLabel: "Visibility"
    },
    {
      quote: "Our SEO results improved dramatically while reducing our team's workload. This platform is a game-changer.",
      author: "Sarah Johnson",
      position: "Content Manager",
      company: "E-commerce Platform",
      avatar: "SJ",
      rating: 5,
      metric: "250% Growth",
      metricLabel: "SEO Traffic"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-psi-dark to-gray-900 relative overflow-hidden">
      {/* Geometric Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-psi-green transform rotate-45 animate-spin" style={{animationDuration: '20s'}}></div>
        <div className="absolute top-1/2 right-20 w-24 h-24 border-2 border-psi-purple transform rotate-12 animate-spin" style={{animationDuration: '15s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-20 h-20 border-2 border-psi-green transform -rotate-12 animate-spin" style={{animationDuration: '25s'}}></div>
        
        {/* Floating Dots */}
        <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-psi-green rounded-full animate-bounce"></div>
        <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-psi-purple rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-1/3 left-1/5 w-2 h-2 bg-psi-green rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-psi-green/30 to-psi-purple/30 rounded-full flex items-center justify-center mr-4">
              <Quote className="w-6 h-6 text-psi-green" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-psi-text">
              Success Stories
            </h2>
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-psi-green via-psi-purple to-psi-green mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            See how industry leaders are transforming their content strategy
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative p-8 bg-gradient-to-br from-gray-800/60 to-gray-900/80 rounded-3xl border border-gray-700/50 hover:border-psi-green/50 transition-all duration-500 group backdrop-blur-sm"
              style={{
                animation: `fade-in 0.6s ease-out ${index * 0.2}s both`
              }}
            >
              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-8 h-8 border-2 border-psi-purple/20 rounded-full"></div>
              <div className="absolute bottom-4 left-4 w-6 h-6 border-2 border-psi-green/20 rounded-full"></div>
              
              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-gray-300 mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>

              {/* Metric Highlight */}
              <div className="mb-6 p-4 bg-gradient-to-r from-psi-green/10 to-psi-purple/10 rounded-xl border border-psi-green/20">
                <div className="text-2xl font-bold text-psi-green mb-1">{testimonial.metric}</div>
                <div className="text-sm text-gray-400">{testimonial.metricLabel}</div>
              </div>

              {/* Author Info */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-psi-green/30 to-psi-purple/30 rounded-full flex items-center justify-center mr-4">
                  <span className="text-psi-text font-semibold text-sm">{testimonial.avatar}</span>
                </div>
                <div>
                  <p className="font-semibold text-psi-text">{testimonial.author}</p>
                  <p className="text-sm text-gray-400">{testimonial.position}</p>
                  <p className="text-sm text-psi-purple">{testimonial.company}</p>
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-psi-green/5 to-psi-purple/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-gradient-to-br from-gray-800/40 to-gray-900/60 rounded-2xl border border-gray-700/30 backdrop-blur-sm">
            <Users className="w-8 h-8 text-psi-green mx-auto mb-3" />
            <div className="text-2xl font-bold text-psi-text">500+</div>
            <div className="text-sm text-gray-400">Happy Clients</div>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-br from-gray-800/40 to-gray-900/60 rounded-2xl border border-gray-700/30 backdrop-blur-sm">
            <Award className="w-8 h-8 text-psi-purple mx-auto mb-3" />
            <div className="text-2xl font-bold text-psi-text">99%</div>
            <div className="text-sm text-gray-400">Success Rate</div>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-br from-gray-800/40 to-gray-900/60 rounded-2xl border border-gray-700/30 backdrop-blur-sm">
            <TrendingUp className="w-8 h-8 text-psi-green mx-auto mb-3" />
            <div className="text-2xl font-bold text-psi-text">300%</div>
            <div className="text-sm text-gray-400">Avg ROI Increase</div>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-br from-gray-800/40 to-gray-900/60 rounded-2xl border border-gray-700/30 backdrop-blur-sm">
            <Star className="w-8 h-8 text-psi-purple mx-auto mb-3" />
            <div className="text-2xl font-bold text-psi-text">4.9/5</div>
            <div className="text-sm text-gray-400">Client Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
