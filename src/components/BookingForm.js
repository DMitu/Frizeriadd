import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ro } from 'date-fns/locale';

const BookingForm = () => {
  const history = useNavigate();

  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [service, setService] = useState('');
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState('');
  const [loading, setLoading] = useState(false);
  const [bookings, setBookings] = useState([]);
  const [availableTimes, setAvailableTimes] = useState([]);

  const allTimes = useMemo(() => [    '10:00',    '10:45',    '11:30',    '12:15',    '13:00',    '13:45',    '14:30',    '15:15',    '16:00',    '16:45',    '17:30',    '18:15',  ], []);

  useEffect(() => {
    fetchBookings();
  }, []);

  useEffect(() => {
    const filterAvailableTimes = () => {
      const now = new Date();
      const isToday = date.toDateString() === now.toDateString();
      const isSaturday = date.getDay() === 6;
      const bookedTimes = bookings
        .filter(
          (booking) =>
            new Date(booking.date).toLocaleDateString() ===
            date.toLocaleDateString()
        )
        .map((booking) => booking.time);
    
      const newAvailableTimes = allTimes.filter(
        (time) => !bookedTimes.includes(time)
      );
    
      if (isToday) {
        const currentHour = now.getHours();
        const availableToday = newAvailableTimes.filter((time) => parseInt(time, 10) > currentHour);
        setAvailableTimes(availableToday);
      } else if (isSaturday) {
        const saturdayTimes = newAvailableTimes.filter((time) => parseInt(time, 10) < 13);
        setAvailableTimes(saturdayTimes);
      } else {
        setAvailableTimes(newAvailableTimes);
      }
    };

    filterAvailableTimes();
  }, [date, bookings, allTimes]);

  const fetchBookings = async () => {
    try {
      const response = await axios.get('${API_URL}/booking/');
      console.log(response)
      setBookings(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const bookingData = {
      customerName,
      customerPhone,
      service,
      date,
      time,
      status: 'Pending',
    };

    setLoading(true);

    axios
  .post('${API_URL}/booking/add', bookingData)
  .then((res) => {
    console.log(res.status)
    if (res.status == 200 || res.status == 201) {
      
      console.log('Booking created successfully!');
      toast.info('Programare realizata cu succes!', {autoClose: 3000});
      history.push('/');
    } else {
      toast.error('Programarea nu s-a putut realiza. Verifica daca toate campurile sunt completate.');
    }
  })
  .catch((err) => {
    console.log(err);
    // toast.error('Programarea nu s-a putut realiza. Verifica daca toate campurile sunt completate.');
  })
  .finally(() => {
  setLoading(false);
  });

  };

  return (
    <div className="container">
      <h3>Crează o programare nouă</h3>
      {loading && <div className="loading">Loading...</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="customerName">Nume:</label>
          <input
            type="text"
            id="customerName"
            required
            className="form-control"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="customerPhone">Nr. de telefon (adaugă +40 înainte) :</label>
          <input
            type="tel"        id="customerPhone"
            required
            className="form-control"
            value={customerPhone}
            onChange={(e) => setCustomerPhone(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="service">Serviciu:</label>
          <select
            id="service"
            className="form-control"
            required
            value={service}
            onChange={(e) => setService(e.target.value)}
          >
            <option value="">-- Selectează un serciviu--</option>
            <option value="Tuns">Tuns</option>
            <option value="Tuns + barbă">Tuns + barbă</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="datePicker">Data:</label>
          <br />
          <DatePicker
          id="datePicker"
          selected={date}
          onChange={(date) => setDate(date)}
          filterDate={(date) => {
          const day = date.getDay();
          return day !== 0 && day !== 1;
        }}
          locale={ro}
          
        />
        </div>
        <div className="form-group">
          <label htmlFor="time">Ore Disponibile:</label>
          <select
            id="time"
            className="form-control"
            required
            value={time}
            onChange={(e) => setTime(e.target.value)}
          >
            <option value="">-- Alege ora --</option>
            {availableTimes.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
          <br />
        </div>
        <div className='buttondiv'>
        <button type="submit" className="btn btn-primary">
          Crează Programarea
        </button>
        </div>
      </form>
    </div>
  );
  };
  
  export default BookingForm;
                
