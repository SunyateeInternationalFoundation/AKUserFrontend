import React, { useState } from "react";

const Feedback = () => {
  const reviews = [
    {
      id: 1,
      service: "Pediatric Care",
      rating: 5,
      author: "Dr. Emily Chen",
      date: "July 11, 2024 11:38 am",
      content:
        "As a pediatrician at Sunshine Children's Clinic, I've had the opportunity to provide comprehensive care for children of all ages. Our clinic's focus on preventive care and early intervention has led to significant improvements in child health outcomes. We've successfully implemented vaccination programs, nutrition counseling, and regular health check-ups that have reduced the incidence of common childhood illnesses. The collaborative approach with parents and other healthcare providers ensures that each child receives personalized care tailored to their unique needs. It's rewarding to see the positive impact we're making on children's health and development.",
      image:
        "https://media.istockphoto.com/id/1400106238/photo/child-psychotherapy.jpg?s=2048x2048&w=is&k=20&c=XFjU03KUzAkuJxHIVxaTtVeOki6LsmZXnL5zDL_j-vI=",
      authorImage:
        "https://media.istockphoto.com/id/1388648617/photo/confident-caucasian-young-man-in-casual-denim-clothes-with-arms-crossed-looking-at-camera.jpg?s=1024x1024&w=is&k=20&c=3prfHYuD78OntE0-LpsVxQarrwouSPF1eUNA_AtMcDQ=",
    },
    {
      id: 2,
      service: "Child Nutrition",
      rating: 5,
      author: "Sarah Thompson, RD",
      date: "July 18, 2024 04:30 pm",
      content:
        "Working as a pediatric dietitian at Healthy Kids Nutrition Center has been incredibly fulfilling. We've developed and implemented nutrition programs that have significantly improved the eating habits and overall health of our young patients. Our approach combines evidence-based nutritional science with practical, family-friendly meal planning. We've seen remarkable improvements in children with various health conditions, from obesity to food allergies. The center's emphasis on educating both children and parents about healthy eating has created lasting positive changes in many families' lifestyles. It's gratifying to play a role in setting the foundation for lifelong health through proper nutrition.",
      image:
        "https://media.istockphoto.com/id/1400106238/photo/child-psychotherapy.jpg?s=2048x2048&w=is&k=20&c=XFjU03KUzAkuJxHIVxaTtVeOki6LsmZXnL5zDL_j-vI=",
      authorImage:
        "https://media.istockphoto.com/id/1388648617/photo/confident-caucasian-young-man-in-casual-denim-clothes-with-arms-crossed-looking-at-camera.jpg?s=1024x1024&w=is&k=20&c=3prfHYuD78OntE0-LpsVxQarrwouSPF1eUNA_AtMcDQ=",
    },
    {
      id: 3,
      service: "Child Mental Health",
      rating: 5,
      author: "Dr. Michael Johnson",
      date: "July 28, 2024 02:15 pm",
      content:
        "As a child psychologist at Bright Minds Children's Mental Health Center, I've witnessed the transformative power of early intervention in children's mental health. Our center's holistic approach, combining therapy, family counseling, and collaboration with schools, has yielded impressive results. We've successfully helped children overcome anxiety, depression, and behavioral issues, leading to improved academic performance and social relationships. The center's commitment to destigmatizing mental health issues and promoting emotional wellness has created a supportive environment where children feel safe to express themselves. It's incredibly rewarding to see our young patients develop resilience and emotional intelligence that will serve them well throughout their lives.",
      image:
        "https://media.istockphoto.com/id/1400106238/photo/child-psychotherapy.jpg?s=2048x2048&w=is&k=20&c=XFjU03KUzAkuJxHIVxaTtVeOki6LsmZXnL5zDL_j-vI=",
      authorImage:
        "https://media.istockphoto.com/id/1388648617/photo/confident-caucasian-young-man-in-casual-denim-clothes-with-arms-crossed-looking-at-camera.jpg?s=1024x1024&w=is&k=20&c=3prfHYuD78OntE0-LpsVxQarrwouSPF1eUNA_AtMcDQ=",
    },
  ];
  const [sortBy, setSortBy] = useState("helpful");

  return (
    <div className="flex-1 p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-semibold">Reviews</h1>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-500">Sort</span>
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-white border rounded-md px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-pink-500"
            >
              <option value="helpful">Most helpful</option>
              <option value="recent">Most recent</option>
              <option value="rating">Highest rating</option>
            </select>
            <svg
              className="w-5 h-5 text-gray-400 absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        {reviews.map((review) => (
          <div key={review.id} className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-start gap-4">
              <img
                src={review.image}
                alt={review.service}
                className="w-20 h-20 object-cover rounded-lg"
              />
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold">{review.service}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="flex">
                        {[...Array(review.rating)].map((_, i) => (
                          <svg
                            key={i}
                            className="w-5 h-5 text-yellow-400 fill-current"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="p-2 text-gray-500 hover:text-gray-700">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                        />
                      </svg>
                    </button>
                    <button className="p-2 text-gray-500 hover:text-gray-700">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <div className="w-6 h-6 rounded-full overflow-hidden">
                    <img
                      src={review.authorImage}
                      alt={review.author}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="font-medium">{review.author},</span>
                  <span className="text-gray-500 text-sm">{review.date}</span>
                </div>
                <p className="mt-3 text-gray-600">{review.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feedback;
