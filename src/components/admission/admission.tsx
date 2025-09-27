import React from 'react';

const TeamDetails = () => {
  return (
    <>
      <div className="it-team-details__area pt-120">
        <div className="container">
          {/* Image section */}
          <div className="it-team-details__bg">
            <div className="row">
              <div className="col-xl-7 col-lg-7">
                <div className="it-team-details__item p-relative text-end">
                  <div className="it-team-details__thumb">
                    <img src="assets/img/slider/slider3.jpg" alt="rk-theme" />
                  </div>
                </div>
              </div>
              <div className="col-xl-5 col-lg-5">
                <div className="it-team-details__right-box">
                  <div className="it-team-details__section-box">
                    <h5 className="it-team-details__title">Contact for admission</h5>
                  </div>
                  <div className="it-team-details__content">
                    <span><strong>Department: </strong>Dept.of Al-Manar</span>
                    <span>
                      <strong>Phone: </strong>
                      <a href="tel:+919895413809">9895413809</a>
                    </span>
                     <span>
                      <strong>Phone: </strong>
                      <a href="tel:+919567871424">9567871424, 7593078368</a>
                    </span>
                    <span>
                      <strong>Email: </strong>
                      <a href="mailto:info@mvmrhss.com">info@mvmrhss.com</a>
                    </span>
                    
                  </div>
                  <div className="it-team-details__social">
                    <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                    <a href="#"><i className="fa-brands fa-instagram instagram"></i></a>
                    <a href="#"><i className="fa-brands fa-linkedin-in linkedin"></i></a>
                    <a href="#"><i className="fa-brands fa-twitter twitter"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Admission content section */}
          <div className="row">
            <div className="col-xl-12">
              <div className="it-team-details__text-box pb-30">
                <h4 className="postbox__details-title">Admission Guidelines</h4>
                <ul>
                  <li>All admission are strictly based on admission test except K.G admission.</li>
                  <li>Pupil should produce their T.C at the time of admission.</li>
                  <li>K.G and first standard pupil should produce their birth certificate at the time of admission.</li>
                  <li>All admissions are provisional but principal has a right to cancel any admission at any time.</li>
                  <li>Higher secondary admission will start only after publishing SSLC result as per government notification.</li>
                </ul>
                <p>കുട്ടികൾ സ്വയം പര്യാപ്തരായി വെല്ലുവിളികളെ അതിജീവിച്ചു വളരാൻ നൂതന കാലത്തിന്റെ വിദ്യാഭ്യാസം ഇനി സ്കൂൾ ഒന്നിച്ച് നിങ്ങളുടെ പഠന മുറിയിലേക്ക്.</p>

                <h4 className="postbox__details-title">Special Features</h4>
                <ul>
                  <li>📝 കേം ബ്രിഡ്ജ് ഇംഗ്ളീഷ് പരിശീലന പരിപാടി.</li>
                  <li>💡 Special Coaching for NTSC & ISRO Young Scientist Program</li>
                  <li>🦾 റോബോട്ടിക്‌സ് പാഠ്യ പദ്ധതി.</li>
                  <li>🧮 ഇ-ക്യാമ്പസ്, ഐഡിയ ഫാക്ടറി തുടങ്ങിയ അന്താരാഷ്ട്ര സംവിധാനങ്ങൾ.</li>
                  <li>🔖 ധാർമികതയിൽ അധിഷ്ഠിതമായ റസിഡൻഷ്യൽ ക്യാമ്പസ്.</li>
                  <li>💸 NO DONATION</li>
                  <li>💡 MVM EMBEDDED EDU APP</li>
                  <li>🎈 IAS Orientation</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Optional skills/progress section can remain if needed */}
        </div>
      </div>
    </>
  );
};

export default TeamDetails;
