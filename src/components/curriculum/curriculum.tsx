

import Link from 'next/link';
import React from 'react';

const BlogHomeOne = () => {
  return (
    <>
      <div className="it-blog__area pt-120 pb-85 fix">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-6">
              <div className="it-blog__section-title">
                <span className="it-section-subtitle">Curriculum Overview</span>
                <h4 className="it-section-title">Building strong foundations for <br /> a brighter future</h4>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 d-none d-lg-block">
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-6 wow itfadeUp" data-wow-duration=".9s" data-wow-delay=".3s">
              <div className="it-blog__item">
                <div className="it-blog__thumb p-relative">
                  <img className="w-100" src="assets/img/curriculum/lkg.jpg" alt="rk-theme" />
                    <div className="it-blog__icon">
                      <Link href="#"><i
                        className="flaticon-up-right-arrow"></i></Link>
                    </div>
                </div>
                <div className="it-blog__content">
                  <div className="it-blog__meta">
                    <span>Curriculum</span>
                  </div>
                  <h4 className="it-blog__title">K.G Section</h4>
                  <p>K.G section has two levels, the L.K.G and U.K.G. children are usually admitted in the L.K.G. K.G section conducts various activities separately for K.G students.</p>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-lg-4 col-md-6 wow itfadeUp" data-wow-duration=".9s" data-wow-delay=".5s">
              <div className="it-blog__item">
                <div className="it-blog__thumb p-relative">
                  <img className="w-100" src="assets/img/curriculum/lp.jpg" alt="rk-theme" />
                    <div className="it-blog__icon">
                      <Link href="#"><i className="flaticon-up-right-arrow"></i></Link>
                    </div>
                </div>
                <div className="it-blog__content">
                  <div className="it-blog__meta">
                    <span>Curriculum</span>
                  </div>
                  <h4 className="it-blog__title">Primary Section (1- 4) L.P</h4>
                 <p>English, Arabic, Malayalam, Hindi, Mathematics, Environmental studies, Computer science, Physical education, Arts education and Moral Studies.</p>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-lg-4 col-md-6 wow itfadeUp" data-wow-duration=".9s" data-wow-delay=".7s">
              <div className="it-blog__item">
                <div className="it-blog__thumb p-relative">
                  <img className="w-100" src="assets/img/curriculum/up.jpg" alt="rk-theme" />
                    <div className="it-blog__icon">
                      <Link href="#"><i className="flaticon-up-right-arrow"></i></Link>
                    </div>
                </div>
                <div className="it-blog__content">
                  <div className="it-blog__meta">
                    <span>Curriculum</span>
                  </div>
                  <h4 className="it-blog__title">Upper Primary (5-7) (UP)</h4>
                  <p>English, Arabic, Malayalam, Hindi, Mathematics, General Science, Social Science, Computer Science, Physical Education, Art education and moral education.</p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 wow itfadeUp" data-wow-duration=".9s" data-wow-delay=".7s">
              <div className="it-blog__item">
                <div className="it-blog__thumb p-relative">
                  <img className="w-100" src="assets/img/curriculum/highSchool.jpg" alt="rk-theme" />
                    <div className="it-blog__icon">
                      <Link href="#"><i className="flaticon-up-right-arrow"></i></Link>
                    </div>
                </div>
                <div className="it-blog__content">
                  <div className="it-blog__meta">
                    <span>Curriculum</span>
                  </div>
                  <h4 className="it-blog__title">High School Section</h4>
                  <p>English, Arabic, Hindi, Malayalam, Mathematics, Science, Social Science (Computer Science (IT), Physical Education, Art education, Moral education.</p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 wow itfadeUp" data-wow-duration=".9s" data-wow-delay=".7s">
              <div className="it-blog__item">
                <div className="it-blog__thumb p-relative">
                  <img className="w-100" src="assets/img/curriculum/highSection.jpg" alt="rk-theme" />
                    <div className="it-blog__icon">
                      <Link href="#"><i className="flaticon-up-right-arrow"></i></Link>
                    </div>
                </div>
                <div className="it-blog__content">
                  <div className="it-blog__meta">
                    <span>Curriculum</span>
                  </div>
                  <h4 className="it-blog__title">Higher Secondary Section</h4>
                  <p>Under Higher Secondary section course offered two stream.</p>
                  <p>Science stream:<br></br>
                    English, Arabic, Malayalam, Hindi, Physics, Chemistry, Biology, Mathematics.</p>
                    <p>Commerce stream: English, Malayalam, Arabic, Hindi, Business Studies, Economics, Accountancy with Tally, Computer application.</p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 wow itfadeUp" data-wow-duration=".9s" data-wow-delay=".7s">
              <div className="it-blog__item">
                <div className="it-blog__thumb p-relative">
                  <img className="w-100" src="assets/img/curriculum/moralEdu.jpg" alt="rk-theme" />
                    <div className="it-blog__icon">
                      <Link href="#"><i className="flaticon-up-right-arrow"></i></Link>
                    </div>
                </div>
                <div className="it-blog__content">
                  <div className="it-blog__meta">
                    <span>Curriculum</span>
                  </div>
                  <h4 className="it-blog__title">Moral Education / Islamic Education</h4>
                 <p>M.V.M.R.H.S.S provide Islamic education (Madrassa) along with school education under the supervision and guidance of eminent scholars</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default BlogHomeOne;