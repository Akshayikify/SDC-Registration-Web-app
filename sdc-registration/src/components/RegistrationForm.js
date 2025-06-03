import React, { useState } from 'react';

export default function RegistrationForm() {
  const [name, setName] = useState('');
  const [usn, setUsn] = useState('');
  const [college, setCollege] = useState('');
  const [year, setYear] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name,
      usn,
      college,
      year,
      mobile,
      email,
    };

    try {
      const res = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      alert(result.message); // Show backend message
    } catch (err) {
      console.error('Error:', err);
      alert('Failed to register. Try again.');
    }
  };

  const handleReset = () => {
    setName('');
    setUsn('');
    setCollege('');
    setYear('');
    setMobile('');
    setEmail('');
  };

  return (
    <section id="registration-section">
      <div className="registration-container">
        <form onSubmit={handleSubmit} id="registrationform">
          <h3>Register Here</h3>

          <label>
            Name:
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>

          <label>
            USN:
            <input
              type="text"
              placeholder="Enter your USN"
              value={usn}
              onChange={(e) => setUsn(e.target.value)}
              required
            />
          </label>

          <label>
            College:
            <input
              type="text"
              placeholder="Enter your college"
              value={college}
              onChange={(e) => setCollege(e.target.value)}
              required
            />
          </label>

          <label>
            Year:
            <input
              type="text"
              placeholder="Enter year"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              required
            />
          </label>

          <label>
            Mob Number:
            <input
              type="text"
              placeholder="Enter mobile number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              required
            />
          </label>

          <label>
            Email:
            <input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>

          <div className="btncontainer">
            <button type="submit" id="Registerbtn">Register</button>
            <button type="button" onClick={handleReset}>Reset</button>
          </div>
        </form>
      </div>
    </section>
  );
}


