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
      description:
        "Specialized support for individuals with autism spectrum disorders.",
      image:
        "https://www.indiaautismcenter.org/wp-content/uploads/woman-doing-speech-therapy-with-little-blonde-boy-1-1024x683.jpg",
    },
    {
      title: "Speech Therapy",
      icon: MessageSquare,
      description: "Improving communication skills and language development.",
      image:
        "https://media.istockphoto.com/id/1387959076/photo/speech-training-for-kids-professional-woman-training-with-little-boy-at-cabinet-teaching.jpg?s=1024x1024&w=is&k=20&c=4DgGR9XzczbdU8Qtn4kIjnPujDVptlFzUdnbgDk-zcA=",
    },
    {
      title: "Occupational Therapy",
      icon: Activity,
      description: "Enhancing daily living and motor skills for independence.",
      image:
        "https://media.istockphoto.com/id/1356562169/photo/physical-therapist-showing-a-woman-an-exercise-for-her-recovery.jpg?s=1024x1024&w=is&k=20&c=RKFpqAZyCP0EKdf51SiFz5e6Zl385nGK9Yc-x_PPTac=",
    },
    {
      title: "Behavior Therapy",
      icon: Sparkles,
      description: "Addressing and modifying challenging behaviors.",
      image:
        "https://breezerehabcentre.com/wp-content/uploads/2022/08/little-boy-having-occupational-therapy-session-with-psychologist-1024x683.jpg",
    },
    {
      title: "Special Education",
      icon: School,
      description: "Tailored educational programs for diverse learning needs.",
      image:
        "https://media.istockphoto.com/id/911625672/photo/watching-a-video-together.jpg?s=1024x1024&w=is&k=20&c=8cdvDWDZjQcgRwVAITif5cyY8b62cY1A2cL2-_yE-Io=",
    },
    {
      title: "Psychological Counselling",
      icon: Heart,
      description: "Supporting mental health and emotional well-being.",
      image:
        "https://www.firststepspecialkidsschool.in/wp-content/uploads/2024/10/Psychological-Counselling.jpg",
    },
  ];

  const stats = [
    { icon: Users, value: "50+", label: "Expert Therapists" },
    { icon: Heart, value: "1000+", label: "Happy Clients" },
    { icon: Award, value: "6+", label: "Specialized Services" },
    { icon: Star, value: "4.9★", label: "Client Rating" },
  ];

  return (
    <>
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

        <section id="services" className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Specialized Therapy Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="relative bg-white rounded-lg shadow-md overflow-hidden group h-64"
              >
                <div className="p-6 h-full flex flex-col">
                  <div>
                    <div className="flex items-center justify-center w-16 h-16 bg-pink-100 rounded-full mb-4 mx-auto">
                      <service.icon className="w-8 h-8 text-pink-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-center mb-4">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 text-center">
                    {service.description}
                  </p>
                </div>
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white bg-opacity-75 flex items-center justify-center"
                  aria-hidden="true"
                >
                  <img
                    src={service.image}
                    alt={`${service.title} illustration`}
                    className="absolute inset-0 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-pink-500 bg-opacity-75 flex items-center justify-center p-6">
                    <div className="h-full flex flex-col">
                      <div>
                        <div className="flex items-center justify-center w-16 h-16 bg-pink-100 rounded-full mb-4 mx-auto">
                          <service.icon className="w-8 h-8 text-pink-600" />
                        </div>
                        <h3 className="text-xl font-semibold text-center mb-4">
                          {service.title}
                        </h3>
                      </div>
                      <p className="text-white text-center">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default LandingPage;
