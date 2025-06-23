import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import team8 from '../assets/images/team8.jpg';

export default function MedicalDetails() {
  const [activeTab, setActiveTab] = useState('personal');

  const tabStyle = (tab) =>
    `nav-link px-4 py-2 fw-semibold rounded-pill ${
      activeTab === tab ? 'bg-warning text-dark' : 'text-white border border-light'
    }`;

  return (
    <div className="container-fluid my-5">
      <div className="container text-center bg-dark py-5 px-3 rounded-4 shadow-lg">
        <h6 className="text-warning fw-semibold mb-2">MEDICAL DETAILS</h6>
        <h2 className="fw-bold text-light mb-4">YOUR HEALTH, OUR PRIORITY</h2>

        {/* Tabs */}
        <ul className="nav justify-content-center gap-2 mb-4 flex-wrap">
          {['personal', 'education', 'languages', 'interest'].map((tab) => (
            <li className="nav-item" key={tab}>
              <button className={tabStyle(tab)} onClick={() => setActiveTab(tab)}>
                {{
                  personal: 'Patient Info',
                  education: 'Medical History',
                  languages: 'Medications',
                  interest: 'Lifestyle',
                }[tab]}
              </button>
            </li>
          ))}
        </ul>

        {/* Tab Content */}
        <div className="p-3 text-white text-start bg-dark rounded">
          {activeTab === 'personal' && (
            <div className="row">
              <div className="col-12 col-md-6 mb-4">
                <h4>Patient Information</h4>
                <p><strong>Name:</strong> Johnathan Doe</p>
                <p><strong>DOB:</strong> Jan 1, 2000</p>
                <p><strong>Gender:</strong> Male</p>
                <p><strong>Blood Type:</strong> O+</p>
                <p><strong>Contact:</strong> +94 77 123 4567</p>
                <p><strong>Email:</strong> johndoe@email.com</p>
                <p><strong>Address:</strong> 123 Main Street, Kilinochchi</p>
                <p><strong>Emergency Contact:</strong> Jane Doe – +94 77 765 4321</p>
              </div>
              <div className="col-12 col-md-6 text-center">
                <img src={team8} alt="Profile" className="img-fluid mb-2" style={{ maxHeight: '250px', maxWidth: '250px' }} />
                <p className="text-secondary">Patient ID: #P12345678</p>
              </div>
            </div>
          )}

          {activeTab === 'education' && (
            <div className="row">
              <div className="col-12 col-md-6 mb-4">
                <h4 className="text-warning">Medical History</h4>
                <ul className="list-unstyled lh-lg">
                  <li><strong>Asthma:</strong> Diagnosed 2012</li>
                  <li><strong>Appendectomy:</strong> Surgery in 2018</li>
                  <li><strong>Penicillin Allergy:</strong> Rash/swelling</li>
                  <li><strong>Chickenpox:</strong> 2007, mild case</li>
                  <li><strong>COVID-19:</strong> Recovered in 2021</li>
                </ul>
                <h5 className="text-warning mt-4">Chronic Conditions</h5>
                <ul className="list-unstyled lh-lg">
                  <li><strong>Hypertension:</strong> Controlled</li>
                  <li><strong>Seasonal Allergies:</strong> Mild symptoms</li>
                </ul>
              </div>
              <div className="col-12 col-md-6">
                <div className="bg-secondary rounded p-3 text-dark">
                  <h6 className="fw-bold">Diagnosis Summary</h6>
                  <p><strong>Surgeries:</strong> 1</p>
                  <p><strong>Chronic Illnesses:</strong> 2</p>
                  <p><strong>Allergies:</strong> Penicillin</p>
                  <p><strong>Vaccinations Up-to-date:</strong> Yes</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'languages' && (
            <div className="row">
              <div className="col-12">
                <h4 className="text-light mb-3 text-center">Current Medications</h4>
                <div className="table-responsive">
                  <table className="table table-dark table-bordered table-sm">
                    <thead>
                      <tr>
                        <th>Medication</th>
                        <th>Dosage</th>
                        <th>Frequency</th>
                        <th>Purpose</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Salbutamol Inhaler</td>
                        <td>2 puffs</td>
                        <td>As needed</td>
                        <td>Asthma</td>
                      </tr>
                      <tr>
                        <td>Lisinopril</td>
                        <td>10 mg</td>
                        <td>Once daily</td>
                        <td>Blood pressure</td>
                      </tr>
                      <tr>
                        <td>Vitamin D</td>
                        <td>2000 IU</td>
                        <td>Once daily</td>
                        <td>Bone health</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'interest' && (
            <div className="row">
              <div className="col-12 col-md-6 mb-4">
                <h4 className="text-light mb-3">Lifestyle & Wellness Habits</h4>
                <ul className="list-unstyled lh-lg">
                  <li><strong>Smoking:</strong> Never smoked</li>
                  <li><strong>Alcohol:</strong> Occasionally</li>
                  <li><strong>Exercise:</strong> 3–4 times/week</li>
                  <li><strong>Diet:</strong> Mostly vegetarian</li>
                  <li><strong>Hydration:</strong> ~2.5L water/day</li>
                  <li><strong>Sleep:</strong> 7–8 hrs/night</li>
                  <li><strong>Stress Management:</strong> Daily meditation</li>
                  <li><strong>Preventive Care:</strong> Annual checkups</li>
                </ul>
              </div>
              <div className="col-12 col-md-6">
                <h6 className="text-light">Weekly Activity Goal</h6>
                <div className="progress mb-3" style={{ height: '20px' }}>
                  <div className="progress-bar bg-success" style={{ width: '75%' }}>
                    75%
                  </div>
                </div>
                <blockquote className="blockquote text-muted">
                  <p>“Take care of your body. It’s the only place you have to live.”</p>
                </blockquote>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
