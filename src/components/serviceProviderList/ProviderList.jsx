import { FaArrowRightLong } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUserLogout } from "../../store/UserSlice";
const ProviderList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const providers = [
    {
      id: 1,
      name: "Tristan H.",

      activeStudents: 9,

      languages: ["English", "Tamil (Native)"],
      services: ["Autism Therapy", "Speech Therapy"],
      experience:
        "Licensed Clinical Therapist - 11 Years Experience in Autism & Speech Therapy",
      description:
        "Specialized in providing comprehensive therapy services for children with autism and speech delays. Certified in Applied Behavior Analysis (ABA) and Speech-Language Pathology.",
      price: "₹2,500",
      duration: "50-min session",
      image:
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      name: "Sarah M.",

      activeStudents: 12,

      languages: ["English", "Telugu (Native)"],
      services: ["Special Education", "Behavior Therapy"],
      experience: "Certified Special Education Therapist - 8 Years Experience",
      description:
        "Expert in behavioral intervention strategies and special needs education. Specialized in working with children who have developmental challenges and learning differences.",
      price: "₹2,200",
      duration: "50-min session",
      image:
        "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 3,
      name: "Michael P.",

      activeStudents: 7,

      languages: ["English", "Hindi (Native)"],
      services: ["Occupational Therapy", "Psychological Counselling"],
      experience:
        "Licensed Occupational Therapist & Counselor - 6 Years Experience",
      description:
        "Dual-certified in occupational therapy and psychological counseling. Specializing in sensory integration and emotional regulation for children with special needs.",
      price: "₹2,800",
      duration: "50-min session",
      image:
        "https://images.pexels.com/photos/12413562/pexels-photo-12413562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];
  const handleLogout = () => {
    dispatch(setUserLogout());
    window.location.href = "/";
  };
  return (
    <div className="min-h-screen">
      <nav className="bg-pink-500 text-white">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="text-xl font-bold">Ausum Kids</div>
            <div className="hidden md:flex space-x-6">
              {/* <a href="#services" className="text-sm hover:text-pink-200">
                Our Services
              </a>
              <a href="#about" className="text-sm hover:text-pink-200">
                About Us
              </a>
              <a href="#testimonials" className="text-sm hover:text-pink-200">
                Testimonials
              </a> */}
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              {/* <span className="text-sm">English, INR</span>
          <span className="text-xs">▼</span> */}
            </div>
            <button className="p-2 hover:text-pink-200">
              {/* <HelpCircle className="w-5 h-5" /> */}
              Child Profile
            </button>
            {user.isLogin ? (
              <button
                className="px-4 py-1.5 rounded-full border border-white text-sm hover:bg-white hover:text-pink-500 transition-colors"
                onClick={handleLogout}
              >
                Log Out
              </button>
            ) : (
              <button
                className="px-4 py-1.5 rounded-full border border-white text-sm hover:bg-white hover:text-pink-500 transition-colors"
                onClick={() => {
                  navigate("/signin");
                }}
              >
                Log In
              </button>
            )}
          </div>
        </div>
      </nav>
      {/* hero section*/}
      <section id="home" className="container mx-auto px-4 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900">
              Empowering Lives Through Specialized Therapy
            </h1>
            <p className="text-xl text-gray-600">
              Providing expert care and support to help children achieve their
              full potential.
            </p>
            {user.isLogin ? (
              <button
                className="flex items-center bg-pink-600 text-white px-10 py-2 rounded-lg text-lg font-semibold hover:bg-pink-700 transition-colors"
                onClick={() => navigate("/providers")}
              >
                Get Started
                <FaArrowRightLong className="text-white ml-2" />
              </button>
            ) : (
              <button
                className="flex items-center bg-pink-600 text-white px-10 py-2 rounded-lg text-lg font-semibold hover:bg-pink-700 transition-colors"
                onClick={() => navigate("/signin")}
              >
                Login
                <FaArrowRightLong className="text-white ml-2" />
              </button>
            )}
          </div>
          <div className="relative overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500">
            <img
              src="https://img.freepik.com/free-photo/children-playing-grass_1098-504.jpg"
              alt="Therapy Services"
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
              <p className="text-white text-lg font-semibold">
                Join us to make a difference in your child's life.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto p-6 max-w-5xl">
        <h1 className="text-3xl font-bold mb-6">
          {providers.length} Speech Therapy Service Providers Available
        </h1>
        <div className="grid gap-4">
          {providers.map((provider) => (
            <div
              key={provider.id}
              className="bg-white rounded-lg p-6 border border-gray-200 hover:border-gray-700"
            >
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <img
                    src={provider.image}
                    alt=""
                    className="w-24 h-24 rounded-lg object-cover"
                  />
                </div>
                <div className="flex-grow">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <h2 className="text-xl font-semibold">{provider.name}</h2>
                    </div>
                    <div className="flex items-center">
                      <div className="text-right">
                        <div className="text-xl font-semibold">
                          {provider.price}
                        </div>
                        <div className="text-sm text-gray-600">
                          {provider.duration}
                        </div>
                      </div>
                      {/* <button className="text-gray-400 hover:text-gray-600">
                      <Heart className="w-6 h-6" />
                    </button> */}
                    </div>
                  </div>
                  <div className="grid gap-2 mb-4">
                    <div className="flex items-center gap-1 text-sm text-gray-600">
                      <span>{provider.activeStudents} active clients</span>
                    </div>
                    <div className="text-sm">
                      Speaks {provider.languages.join(", ")}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {provider.services.map((service) => (
                        <span
                          key={service}
                          className="px-2 py-1 text-sm font-medium bg-gray-100 rounded-full"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                    <p className="font-medium">{provider.experience}</p>
                    <p className="text-sm text-gray-600">
                      {provider.description}
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <button
                      className="px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 font-medium"
                      onClick={() => {
                        if (user.isLogin) {
                          navigate(`/booking/${provider.id}`);
                        } else {
                          alert("Please log in to book a trial session.");
                        }
                      }}
                    >
                      Book trial session
                    </button>
                    <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 font-medium">
                      Send message
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProviderList;
