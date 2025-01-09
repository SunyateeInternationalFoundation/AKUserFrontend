import {
  Activity,
  Award,
  Brain,
  Heart,
  HelpCircle,
  MessageSquare,
  School,
  Sparkles,
  Star,
  Users,
} from "lucide-react";
import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
const LandingPage = () => {
  const navigate = useNavigate();
  const services = [
    {
      title: "Autism Therapy",
      icon: Brain,
      count: "15+ Specialists",
    },
    {
      title: "Speech Therapy",
      icon: MessageSquare,
      count: "20+ Therapists",
    },
    {
      title: "Occupational Therapy",
      icon: Activity,
      count: "12+ Experts",
    },
    {
      title: "Behavior Therapy",
      icon: Sparkles,
      count: "18+ Professionals",
    },
    {
      title: "Special Education",
      icon: School,
      count: "25+ Educators",
    },
    {
      title: "Psychological Counselling",
      icon: Heart,
      count: "10+ Counsellors",
    },
  ];

  const stats = [
    { icon: Users, value: "50+", label: "Expert Therapists" },
    { icon: Heart, value: "1000+", label: "Happy Clients" },
    { icon: Award, value: "6+", label: "Specialized Services" },
    { icon: Star, value: "4.9★", label: "Client Rating" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-white">
      <nav className="bg-pink-500 text-white">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="text-xl font-bold">Ausum Kids</div>
            <div className="hidden md:flex space-x-6">
              <a href="#services" className="text-sm hover:text-pink-200">
                Our Services
              </a>
              <a href="#about" className="text-sm hover:text-pink-200">
                About Us
              </a>
              <a href="#testimonials" className="text-sm hover:text-pink-200">
                Testimonials
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <span className="text-sm">English, INR</span>
              <span className="text-xs">▼</span>
            </div>
            <button className="p-2 hover:text-pink-200">
              <HelpCircle className="w-5 h-5" />
            </button>
            <button
              className="px-4 py-1.5 rounded-full border border-white text-sm hover:bg-white hover:text-pink-500 transition-colors"
              onClick={() => {
                navigate("/signin");
              }}
            >
              Log In
            </button>
          </div>
        </div>
      </nav>

      <section id="home" className="container mx-auto px-4 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Empowering lives through specialized therapy
            </h1>
            <p className="text-xl text-gray-600">
              Expert care and support for your journey to wellness
            </p>
            <button
              className="flex items-center bg-pink-600 text-white px-10 py-2 rounded-lg text-lg font-semibold hover:bg-pink-700 transition-colors"
              onClick={() => {
                navigate("/signin");
              }}
            >
              Login{" "}
              <FaArrowRightLong className="text-white text-center mt-1 ml-2" />
            </button>
          </div>
          <div className="relative">
            <img
              src="https://img.freepik.com/free-photo/young-woman-doing-speech-therapy-with-kids_23-2149110279.jpg?t=st=1736406817~exp=1736410417~hmac=e26c1cd1b27d5e15c50a4189741a19f8ad93d022ddfb5b5609a5ee22cc65d40d&w=1380"
              alt="Therapy Services"
              className="rounded-lg shadow-xl"
              width={800}
              height={400}
            />
          </div>
        </div>
      </section>

      <section className="bg-pink-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="mb-4">
                  <stat.icon className="w-8 h-8 text-pink-500" />
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 text-center">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-pink-100 rounded-lg">
                  <service.icon className="w-6 h-6 text-pink-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <p className="text-gray-600 mt-1">{service.count}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
