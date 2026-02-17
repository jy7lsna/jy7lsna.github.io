import { useState } from 'react';
import './MeetingCalendar.css';

export default function MeetingCalendar() {
    const today = new Date();
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);
    const [isBooked, setIsBooked] = useState(false);
    const [currentMonth, setCurrentMonth] = useState(today.getMonth());
    const [currentYear, setCurrentYear] = useState(today.getFullYear());

    const handleBookNow = () => {
        setIsBooked(true);
        window.open('https://calendly.com/jyolsnajoemon', '_blank');
        setTimeout(() => {
            setIsBooked(false);
            setSelectedDate(null);
            setSelectedTime(null);
        }, 3000);
    };

    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const timeSlots = ["10:00 AM", "11:30 AM", "1:00 PM", "2:30 PM", "4:00 PM"];

    const daysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = (month, year) => new Date(year, month, 1).getDay();

    const renderHeader = () => {
        return (
            <div className="calendar__header">
                <h3 className="calendar__month-name handwritten">
                    {monthNames[currentMonth]} {currentYear}
                </h3>
            </div>
        );
    };

    const renderDays = () => {
        const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        return (
            <div className="calendar__days-header">
                {days.map((day, i) => (
                    <div key={i} className="calendar__day-name handwritten">{day}</div>
                ))}
            </div>
        );
    };

    const renderCells = () => {
        const totalDays = daysInMonth(currentMonth, currentYear);
        const firstDay = firstDayOfMonth(currentMonth, currentYear);
        const rows = [];
        let cells = [];

        for (let i = 0; i < firstDay; i++) {
            cells.push(<div key={`empty-${i}`} className="calendar__cell calendar__cell--empty"></div>);
        }

        for (let day = 1; day <= totalDays; day++) {
            const isToday = day === today.getDate() && currentMonth === today.getMonth() && currentYear === today.getFullYear();
            const isSelected = selectedDate === day;
            const isAvailable = (day + currentMonth) % 3 === 0;

            cells.push(
                <div
                    key={day}
                    className={`calendar__cell ${isToday ? 'calendar__cell--today' : ''} ${isSelected ? 'calendar__cell--selected' : ''} ${isAvailable ? 'calendar__cell--available' : ''}`}
                    onClick={() => {
                        if (isAvailable) {
                            setSelectedDate(day);
                            setSelectedTime(null); // Reset time selection when date changes
                        }
                    }}
                >
                    <span className="calendar__date-number handwritten">{day}</span>
                    {isAvailable && !isSelected && <div className="calendar__busy-dot" />}
                </div>
            );

            if ((day + firstDay) % 7 === 0 || day === totalDays) {
                rows.push(<div key={`row-${day}`} className="calendar__row">{cells}</div>);
                cells = [];
            }
        }

        return <div className="calendar__body">{rows}</div>;
    };

    return (
        <div className="meeting-calendar">
            <h3 className="meeting-calendar__title">schedule a 1:1</h3>

            <div className="calendar-container">
                <div className="calendar-paper">
                    <div className="calendar-washi" />
                    <div className="calendar-paper__grid-overlay" />
                    {renderHeader()}
                    {renderDays()}
                    {renderCells()}
                </div>

                <div className="calendar-selection">
                    {!selectedDate ? (
                        <p className="calendar-info handwritten">
                            Pick a date for a quick chat, <br />coffee, or collaboration!
                        </p>
                    ) : (
                        <div className="booking-stepper">
                            <div className="time-selector">
                                <p className="time-selector__label handwritten">Available Times for {monthNames[currentMonth]} {selectedDate}:</p>
                                <div className="time-slots-grid">
                                    {timeSlots.map((slot, idx) => (
                                        <button
                                            key={idx}
                                            className={`time-slot-btn handwritten ${selectedTime === slot ? 'time-slot-btn--selected' : ''}`}
                                            onClick={() => setSelectedTime(slot)}
                                        >
                                            {slot}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {selectedTime && (
                                <div className="confirm-booking">
                                    <p className="confirm-booking__text handwritten">
                                        {isBooked ? "Booking confirmed for:" : "Confirming:"} <span>{selectedDate} {monthNames[currentMonth]} @ {selectedTime}</span>
                                    </p>
                                    <button
                                        className={`calendar-booking__btn ${isBooked ? 'calendar-booking__btn--sent' : ''}`}
                                        onClick={handleBookNow}
                                        disabled={isBooked}
                                    >
                                        {isBooked ? '✓ Request Sent!' : 'Confirm & Book ✨'}
                                    </button>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>

            {/* Decorative Stickers */}
            <div className="calendar-sticker calendar-sticker--coffee" style={{ bottom: '10%', right: '5%' }}>
                <svg viewBox="0 0 24 24" width="24" height="24" fill="#C4A67A">
                    <path d="M2 21h18v-2H2v2zm2-4h14l1.3-2H2.7L4 17zm16-8h-2V7H4v2H2c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h2c1.15 1.16 2.74 2 4.5 2h5c1.76 0 3.35-.84 4.5-2h2c1.1 0 2-.9 2-2v-2c0-1.1-.9-2-2-2zm0 4h-2c0-.55-.12-1.07-.31-1.56l-.19-.44H2v-2h18v4z" />
                </svg>
            </div>
            <div className="calendar-sticker calendar-sticker--marker" style={{ top: '15%', left: '2%' }}>
                <div className="marker-line" style={{ width: '40px', height: '8px', background: '#FFD70060', transform: 'rotate(-2deg)', borderRadius: '4px' }} />
            </div>
        </div>
    );
}
