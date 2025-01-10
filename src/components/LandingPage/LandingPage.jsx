import {
  Activity,
  Award,
  Brain,
  Facebook,
  Heart,
  Instagram,
  Linkedin,
  MessageSquare,
  School,
  Sparkles,
  Star,
  Twitter,
  Users,
} from "lucide-react";
import { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setUserLogout } from "../../store/UserSlice";
const LandingPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  console.log(user);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Norman David",

      image:
        "https://media.istockphoto.com/id/1388648617/photo/confident-caucasian-young-man-in-casual-denim-clothes-with-arms-crossed-looking-at-camera.jpg?s=1024x1024&w=is&k=20&c=3prfHYuD78OntE0-LpsVxQarrwouSPF1eUNA_AtMcDQ=",
      rating: 5,
      text: "Excels in providing a quick and easy way to find help for everyday tasks and home repairs. The platform is straightforward, allowing users to post tasks and receive from local",
    },
    {
      name: "Adrian Janet",

      image:
        "https://media.istockphoto.com/id/1388648617/photo/confident-caucasian-young-man-in-casual-denim-clothes-with-arms-crossed-looking-at-camera.jpg?s=1024x1024&w=is&k=20&c=3prfHYuD78OntE0-LpsVxQarrwouSPF1eUNA_AtMcDQ=",
      rating: 5,
      text: "Offers a comprehensive marketplace for finding local service professionals across a wide range of categories, including home improvement, events, and personal services. The platform is user-friendly.",
    },
    {
      name: "Adrian Janet",

      image:
        "https://media.istockphoto.com/id/1388648617/photo/confident-caucasian-young-man-in-casual-denim-clothes-with-arms-crossed-looking-at-camera.jpg?s=1024x1024&w=is&k=20&c=3prfHYuD78OntE0-LpsVxQarrwouSPF1eUNA_AtMcDQ=",
      rating: 5,
      text: "Offers a comprehensive marketplace for finding local service professionals across a wide range of categories, including home improvement, events, and personal services. The platform is user-friendly.",
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };
  const services = [
    {
      id: 1,
      title: "Autism Therapy",
      icon: Brain,
      description:
        "Specialized support for individuals with autism spectrum disorders.",
      image:
        "https://www.indiaautismcenter.org/wp-content/uploads/woman-doing-speech-therapy-with-little-blonde-boy-1-1024x683.jpg",
    },
    {
      id: 2,
      title: "Speech Therapy",
      icon: MessageSquare,
      description: "Improving communication skills and language development.",
      image:
        "https://media.istockphoto.com/id/1387959076/photo/speech-training-for-kids-professional-woman-training-with-little-boy-at-cabinet-teaching.jpg?s=1024x1024&w=is&k=20&c=4DgGR9XzczbdU8Qtn4kIjnPujDVptlFzUdnbgDk-zcA=",
    },
    {
      id: 3,
      title: "Occupational Therapy",
      icon: Activity,
      description: "Enhancing daily living and motor skills for independence.",
      image:
        "https://media.istockphoto.com/id/1356562169/photo/physical-therapist-showing-a-woman-an-exercise-for-her-recovery.jpg?s=1024x1024&w=is&k=20&c=RKFpqAZyCP0EKdf51SiFz5e6Zl385nGK9Yc-x_PPTac=",
    },
    {
      id: 4,
      title: "Behavior Therapy",
      icon: Sparkles,
      description: "Addressing and modifying challenging behaviors.",
      image:
        "https://breezerehabcentre.com/wp-content/uploads/2022/08/little-boy-having-occupational-therapy-session-with-psychologist-1024x683.jpg",
    },
    {
      id: 5,
      title: "Special Education",
      icon: School,
      description: "Tailored educational programs for diverse learning needs.",
      image:
        "https://media.istockphoto.com/id/911625672/photo/watching-a-video-together.jpg?s=1024x1024&w=is&k=20&c=8cdvDWDZjQcgRwVAITif5cyY8b62cY1A2cL2-_yE-Io=",
    },
    {
      id: 6,
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
  console.log("service", services);
  const handleLogout = () => {
    dispatch(setUserLogout());
    window.location.href = "/";
  };
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
              {/* <div className="flex items-center space-x-2 cursor-pointer">
                Child Profile
              </div> */}
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

        <section id="home" className="container mx-auto px-4 pt-24 pb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                Empowering lives through specialized therapy
              </h1>
              <p className="text-xl text-gray-600">
                Expert care and support for your journey to wellness
              </p>
              {user.isLogin ? (
                <button
                  className="flex items-center bg-pink-600 text-white px-10 py-2 rounded-lg text-lg font-semibold hover:bg-pink-700 transition-colors"
                  // onClick={() => {
                  //   navigate("/signin");
                  // }}
                >
                  Get Started
                  <FaArrowRightLong className="text-white text-center mt-1 ml-2" />
                </button>
              ) : (
                <button
                  className="flex items-center bg-pink-600 text-white px-10 py-2 rounded-lg text-lg font-semibold hover:bg-pink-700 transition-colors"
                  onClick={() => {
                    navigate("/signin");
                  }}
                >
                  Login{" "}
                  <FaArrowRightLong className="text-white text-center mt-1 ml-2" />
                </button>
              )}
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500">
              <img
                src="https://img.freepik.com/free-photo/young-woman-doing-speech-therapy-with-kids_23-2149110279.jpg?t=st=1736406817~exp=1736410417~hmac=e26c1cd1b27d5e15c50a4189741a19f8ad93d022ddfb5b5609a5ee22cc65d40d&w=1380"
                alt="Therapy Services"
                className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <p className="text-white text-lg font-semibold">
                  Empowering lives through specialized therapy
                </p>
              </div>
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

        <section id="services" className="container mx-auto px-4 py-16 mb-10">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Specialized Therapy Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="relative bg-white rounded-lg shadow-md overflow-hidden group h-64"
                onClick={() => {
                  navigate(`/service-providerlist/${service.id}`);
                }}
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
                    className="absolute inset-0 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-1000 ease-in-out"
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
        <section id="testimonials" className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What our clients say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Real stories from families and professionals who have experienced
              the transformative power of our specialized therapy services.
            </p>
          </div>

          <div className="relative max-w-6xl mx-auto">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${currentTestimonial * 100}%)`,
                }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className="bg-white rounded-lg shadow-lg p-8">
                      <div className="flex flex-col items-center">
                        <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex gap-1 mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-5 h-5 text-yellow-400 fill-yellow-400"
                            />
                          ))}
                        </div>
                        <p className="text-gray-600 text-center mb-6 text-lg">
                          {testimonial.text}
                        </p>
                        <div className="text-center">
                          <h4 className="font-semibold text-xl mb-1">
                            {testimonial.name}
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
              aria-label="Previous testimonial"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
              aria-label="Next testimonial"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            <div className="flex justify-center mt-8 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    currentTestimonial === index ? "bg-pink-500" : "bg-gray-300"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </section>
        <footer className="bg-background py-12 border-t">
          <div className="container px-4 mx-auto">
            <div className="mb-8">
              <h2 className="text-xl font-bold">Ausum Kids</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Company Information */}
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Company</h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/about"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      About us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/terms"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      Terms & conditions
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/privacy"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      Privacy policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/careers"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/impact"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      Our Impact
                    </Link>
                  </li>
                </ul>
              </div>

              {/* For Clients */}
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">For Clients</h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/reviews"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      Client Reviews
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      Our Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      Contact us
                    </Link>
                  </li>
                </ul>
              </div>

              {/* For Therapists */}
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">For Therapists</h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/register-therapist"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      Register as a therapist
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/therapist-resources"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      Resources
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/therapist-support"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      Support
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Social Links */}
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Connect with us</h3>
                <div className="flex space-x-4">
                  <Link
                    href="#"
                    className="h-10 w-10 flex justify-center items-center text-center text-muted-foreground hover:text-foreground rounded-full border border-gray-200"
                  >
                    <Twitter className="h-5 w-5" />
                    <span className="sr-only">Twitter</span>
                  </Link>
                  <Link
                    href="#"
                    className="h-10 w-10 flex justify-center items-center text-center text-muted-foreground hover:text-foreground rounded-full border border-gray-200"
                  >
                    <Facebook className="h-5 w-5" />
                    <span className="sr-only">Facebook</span>
                  </Link>
                  <Link
                    href="#"
                    className="h-10 w-10 flex justify-center items-center text-center text-muted-foreground hover:text-foreground rounded-full border border-gray-200"
                  >
                    <Instagram className="h-5 w-5" />
                    <span className="sr-only">Instagram</span>
                  </Link>
                  <Link
                    href="#"
                    className="h-10 w-10 flex justify-center items-center text-center text-muted-foreground hover:text-foreground rounded-full border border-gray-200"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                </div>
                <div className="flex flex-col space-y-2">
                  <Link href="#" className="inline-block">
                    <img
                      src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_108,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1648463870745-38fece.png"
                      alt="Download on the App Store"
                      width={108}
                      height={36}
                    />
                  </Link>
                  <Link href="#" className="inline-block">
                    <img
                      src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_108,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1696419732772-28cd3d.jpeg"
                      alt="Get it on Google Play"
                      width={108}
                      height={36}
                    />
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t text-sm text-muted-foreground">
              <p>
                © Copyright {new Date().getFullYear()} Ausum Kids. All rights
                reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default LandingPage;
