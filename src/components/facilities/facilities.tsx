"use client";

import React from "react";
const activities = [
  
  {
    title: "ACTIVITIES",
    description: `Admissions are granted in classes VI, VII, VIII & IX through an all
    India level entrance examination. Admission to class XI is based on
    the availability of seats. The selection criteria include class 10
    Board Examination result and performance in the school's internal
    admission procedure. The applicant should not have completed
    eleven/twelve/thirteen/fourteen/sixteen years on 1st January of the
    year in which admission is sought for these classes. The boys are
    not permitted to remain in the School after completion of their 18th
    year, nor after failure in any class for two consecutive years. The
    boys are also not permitted to remain in the School on failing a
    public examination class.`,
    image: "/assets/img/facilities/activitiesimg.jpg",
  },
  {
    title: "COMPUTER LAB / SMART ROOM",
    description: `Well equipped computer lab provide the necessary aid in learning various subject.computer lab facilities are available to all students 
    from 3rd standard to 12th standard.in high school section IT classes are functioning based on programme scheduled by “IT @ school”.`,
    image: "/assets/img/facilities/comlabImg.jpg",
  },
  {
    title: "LIBRARY",
    description: `The school maintains a well stocked library with over 5000 books.
     The library subscribes various periodical and news papers`,
    image: "/assets/img/facilities/libraryimg.jpg",
  },
  {
    title: "PRAYER HALL / MASJID",
    description: `A well furnished Prayer hall/Masjid is functioning in the campus to provide training in Islamic subject. Eminent scholars give moral classes for the students.`,
    image: "/assets/img/facilities/prayerimg.jpg",
  },
  {
    title: "TRANSPORTATIONS",
    description: `The school provides bus service facilities to pick up and drop students at designated location. The bus routes are already specified, therefore the parent
     for whom the route are inconvenient are advised to bring and collect their children.`,
    image: "/assets/img/facilities/transportimg.jpg",
  },
  {
    title: "CLUB ACTIVITIES",
    description: `Various educational clubs such as social club, mathematics club, science club language cluband Natural Club are smoothly functioning in our school.`,
    image: "/assets/img/facilities/clubimg.jpg",
  },
  {
    title: "HOSTEL",
    description: `Separate hostel for both boys and girls are functioning in the campus. Special coaching programme arranged for hostel student for physical, cultural and moral development of the pupil. The hostel mess is non vegetarian, in no case outside food is allowed in the hostel. Parents are allowed to visit their ward in the hostel only on holidays.
    HOSTEL ADMISSION
    ‣ Those who want hostel admission must submit an application in the prescribed form at our school office.
    ‣ If any pupil violates the rules and regulations of school, that pupil's admission may be cancelled at any time.
    ‣ Hostel admission is available from 5th standard onwards.`,
    image: "/assets/img/facilities/hostelimg.jpg",
  },
  {
    title: "UNIFORM",
    description: `Admissions are granted in classes VI, VII, VIII & IX through an all India level entrance examination. Admission to 
    class XI is based on the availability of seats. The selection criteria include class 10 Board Examination result and
    performance in the school's internal admission procedure. The applicant should not have completed 
    eleven/ twelve/ thirteen/fourteen/sixteen years on 1st January of the year in which admission is sought for these classes. 
    The boys are not permitted to remain in the School after completion of their 18th year, nor after failure in any class for two 
    consecutive years. The boys are also not permitted to remain in the School on failing a public examination class`,
    image: "/assets/img/facilities/uniformimg.jpg",
  },
  {
    title: "SCHOOL STORE",
    description: `The school maintains a full fledged store for our student. The school store provides all text books, notebooks, uniform materials and other stationary items.`,
    image: "/assets/img/facilities/schoolstoreimg.jpg",
  },
  {
    title: "SCIENCE LABOROTORIES",
    description: `Various well equipped Physics, Chemistry, Biology and Mathematics laboratories also provide aid for learning.`,
    image: "/assets/img/facilities/sciencelabimg.jpg",
  },
  {
    title: "SPORTS / PLAY GROUNDS",
    description: `M.V.M.R.H.S.S provides a spacious play ground for our student to engage in sports and game.`,
    image: "/assets/img/facilities/sportsimg.jpg",
  },
];

const BlogDetails = () => {
  return (
    <div className="postbox__area pt-100 pb-20">
      <div className="container">
        {activities.map((activity, index) => (
          <div
            className="row align-items-center mb-80"
            key={index}
            style={{ maxWidth: "1200px", margin: "0 auto" }}
          >
            {/* Text Column */}
            <div
              className={`col-lg-6 col-md-12 ${
                index % 2 !== 0 ? "order-md-2 order-lg-1" : ""
              }`}
            >
              <div className="postbox__details-wrapper">
                <article>
                  <div
                    className="postbox__details-title-box pb-30 wow tpfadeUp"
                    data-wow-duration=".9s"
                    data-wow-delay=".7s"
                  >
                    <h4 className="postbox__details-title mb-20">
                      {activity.title}
                    </h4>
                    <p style={{ maxWidth: "600px", lineHeight: "1.7" }}>
                      {activity.description}
                    </p>
                  </div>
                </article>
              </div>
            </div>

            {/* Image Column */}
            <div
              className={`col-lg-6 col-md-12 ${
                index % 2 !== 0 ? "order-md-1 order-lg-2" : ""
              }`}
            >
              <div
                className="postbox__thumb mb-20 wow tpfadeUp"
                data-wow-duration=".9s"
                data-wow-delay=".5s"
              >
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="w-100 rounded"
                  style={{
                    height: "320px",
                    objectFit: "cover",
                    borderRadius: "12px",
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogDetails;
