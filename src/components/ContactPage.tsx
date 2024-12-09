import React, { useState, useEffect } from 'react';
import '../styles/ContactPage.css';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', message: '' });
  const [userTimeZone, setUserTimeZone] = useState<string | null>(null);
  const [timeDifference, setTimeDifference] = useState<number | null>(null);
  const [error, setError] = useState<string>('');

  const localTimeZone = 'America/Chicago';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('Thank you for your message!');
    setFormData({ name: '', email: '', message: '' });
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        () => {
          try {
            const userZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
            setUserTimeZone(userZone);
            const localDate = new Date().toLocaleString('en-US', { timeZone: localTimeZone });
            const visitorDate = new Date().toLocaleString('en-US', { timeZone: userZone });
            const timeDiffInMs = Date.parse(visitorDate) - Date.parse(localDate);
            const timeDiffInHours = timeDiffInMs / (1000 * 60 * 60);
            setTimeDifference(timeDiffInHours);
          } catch (error) {
            setError('Unable to calculate time zone difference.');
          }
        },
        () => setError('Unable to retrieve your location.')
      );
    } else {
      setError('Geolocation is not supported by your browser.');
    }
  }, [localTimeZone]);

  return (
    <div className="contact-page">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
      <div className="time-zone-info">
        <h3>Time Zone Information</h3>
        {userTimeZone ? (
          <>
            <p>Your time zone: {userTimeZone}</p>
            <p>
              {timeDifference === 0
                ? 'You are in the same time zone as me!'
                : `You are ${Math.abs(timeDifference!)} hour(s) ${
                    timeDifference! > 0 ? 'ahead of' : 'behind'
                  } me.`}
            </p>
          </>
        ) : (
          <p>{error || 'Determining your time zone...'}</p>
        )}
      </div>
    </div>
  );
};

export default ContactPage;
