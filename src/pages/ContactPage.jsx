import { useState } from 'react';
import './ContactPage.css';

export default function ContactPage({ isActive }) {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
    };

    return (
        <div className="contact-page">
            <div className="contact-page__header">
                <div className="contact-page__tape-label">Get In Touch</div>
            </div>
            <div className="contact-page__paper">
                <div className="contact-page__margin-line" />
                <form className="contact-page__form" onSubmit={handleSubmit}>
                    <div className="contact-page__field">
                        <label className="contact-page__label handwritten" htmlFor="contact-name">Name:</label>
                        <input id="contact-name" type="text" name="name" value={formData.name} onChange={handleChange} className="contact-page__input handwritten" placeholder="Your name..." required />
                    </div>
                    <div className="contact-page__field">
                        <label className="contact-page__label handwritten" htmlFor="contact-email">Email:</label>
                        <input id="contact-email" type="email" name="email" value={formData.email} onChange={handleChange} className="contact-page__input handwritten" placeholder="your@email.com" required />
                    </div>
                    <div className="contact-page__field">
                        <label className="contact-page__label handwritten" htmlFor="contact-message">Message:</label>
                        <textarea id="contact-message" name="message" value={formData.message} onChange={handleChange} className="contact-page__textarea handwritten" placeholder="Write something nice..." rows="5" required />
                    </div>
                    <button type="submit" className={`contact-page__submit ${submitted ? 'contact-page__submit--sent' : ''}`}>
                        {submitted ? '✓ Sent!' : 'Send Message ✉'}
                    </button>
                </form>
            </div>
            <div className="contact-page__socials">
                <a href="https://github.com/jy7lsna" target="_blank" rel="noopener noreferrer" className="contact-page__social" aria-label="GitHub">
                    <div className="contact-page__social-icon">
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836a9.59 9.59 0 012.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" /></svg>
                    </div>
                </a>
                <a href="https://www.linkedin.com/in/jyolsna-joemon/" target="_blank" rel="noopener noreferrer" className="contact-page__social" aria-label="LinkedIn">
                    <div className="contact-page__social-icon">
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                    </div>
                </a>
                <a href="mailto:jyolsnajoemon@gmail.com" className="contact-page__social" aria-label="Email">
                    <div className="contact-page__social-icon">
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" /></svg>
                    </div>
                </a>
                <a href="https://jy7ls-portfolio.vercel.app" target="_blank" rel="noopener noreferrer" className="contact-page__social" aria-label="Website">
                    <div className="contact-page__social-icon">
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" /></svg>
                    </div>
                </a>
                <a href="https://www.behance.net/jyolsnajoemon" target="_blank" rel="noopener noreferrer" className="contact-page__social" aria-label="Behance">
                    <div className="contact-page__social-icon">
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M8.228 15.01h-2.203v-2.013h2.203c.609 0 1.077.13 1.404.39.327.26.49.62.49 1.016 0 .396-.163.742-.49 1.016-.327.26-.795.391-1.404.391zm-.437-3.722h-1.766v-1.733h1.766c.551 0 .973.116 1.267.348.294.232.441.52.441.865 0 .33-.141.606-.421.826-.281.22-.68.33-1.198.33h-.09zm15.151 1.764h-5.264c.057.945.41 1.393 1.058 1.393.396 0 .765-.119 1.107-.358l.783 1.343c-.636.566-1.43.849-2.38.849-1.045 0-1.85-.306-2.413-.918-.564-.612-.845-1.503-.845-2.673 0-1.127.288-2.022.863-2.686.574-.663 1.341-.995 2.301-.995.918 0 1.637.288 2.155.865.519.577.778 1.41.778 2.5zm-5.207-1.157h3.313c-.042-.69-.297-1.034-.764-1.034-.511 0-.825.344-.94 1.034h-1.609zm-10.02 5.115h-4.329v-7.01h4.329c1.082 0 1.933.243 2.553.729.62.486.93 1.161.93 2.023 0 .54-.127.994-.38 1.362-.254.368-.614.653-1.08.855.594.208 1.049.526 1.366.953.317.427.476.956.476 1.586 0 .92-.321 1.644-.963 2.17-.643.526-1.611.789-2.902.789zm4.286-10.375h5.5v1.275h-5.5v-1.275z" /></svg>
                    </div>
                </a>
                <a href="https://drive.google.com/file/d/1ZgnKKMLQRFEuUDvKkkgVQdTmfloMwUG1/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="contact-page__resume-btn">
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" /></svg>
                    Download CV
                </a>
            </div>
            <div className="contact-page__sticker handwritten">Let's work<br />together! 🤝</div>
        </div>
    );
}
