import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { IConcertPoster, IConcertPosterFormErrors } from '../../interfaces';
import './AddPost.css';

const AddPost = () => {
  const [errors, setErrors] = useState<IConcertPosterFormErrors>({});
  const { authorising, checkingAuth, checkAuthStatus } = useAuth();
  const [posters, setPosters] = useState<IConcertPoster[]>([]);
  const [selectedPosterId, setSelectedPosterId] = useState<number | null>(null);

  const [formData, setFormData] = useState<IConcertPoster>({
    id: 0,
    eventName: '',
    description: '',
    date: '',
    location: '',
    artists: '',
    ticketPrice: '',
    availableTickets: '',
    eventType: '',
    organizer: '',
    mediaFiles: null
  });

  useEffect(() => {
    checkAuthStatus();
  }, [checkAuthStatus]);

  const validate = (): IConcertPosterFormErrors => {
    const newErrors: IConcertPosterFormErrors = {};
    // Add validation logic here (similar to previous code)
    if (!formData.eventName) {
      newErrors.eventName = 'Поле eventName обязательно';
    }
    if (!formData.description) {
      newErrors.description = 'Поле description обязательно';
    }
    if (!formData.date) {
      newErrors.date = 'Поле date обязательно';
    }
    if (!formData.location) {
      newErrors.location = 'Поле location обязательно';
    }
    if (!formData.artists) {
      newErrors.artists = 'Поле artists обязательно';
    }
    if (!formData.ticketPrice || parseFloat(formData.ticketPrice) < 0) {
      newErrors.ticketPrice = 'Поле ticketPrice должно быть числом больше или равно 0';
    }
    if (!formData.availableTickets || parseInt(formData.availableTickets) < 0) {
      newErrors.availableTickets = 'Поле availableTickets должно быть целым числом больше или равно 0';
    }
    if (!formData.eventType) {
      newErrors.eventType = 'Поле eventType обязательно';
    }
    if (!formData.organizer) {
      newErrors.organizer = 'Поле organizer обязательно';
    }
    return newErrors;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      if (selectedPosterId !== null) {
        // Update the existing poster
        setPosters(posters.map((poster) => (poster.id === selectedPosterId ? formData : poster)));
      } else {
        // Add a new poster
        setPosters([...posters, { ...formData, id: posters.length + 1 }]);
      }
      // Reset form
      setFormData({
        id: 0,
        eventName: '',
        description: '',
        date: '',
        location: '',
        artists: '',
        ticketPrice: '',
        availableTickets: '',
        eventType: '',
        organizer: '',
        mediaFiles: null
      });
      setSelectedPosterId(null); // Reset selected poster
    } else {
      setErrors(validationErrors);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      mediaFiles: e.target.files
    });
  };

  const handleEditPoster = (poster: IConcertPoster) => {
    setFormData(poster);
    setSelectedPosterId(poster.id);
  };

  return (
    <>
      {authorising || checkingAuth ? (
        <p className="preloader">Authorising...</p>
      ) : (
        <div className="posters_editor">
          <form className="editor_column" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="mediaFiles">Upload Media Files (up to 10):</label>
              <input
                type="file"
                id="mediaFiles"
                name="mediaFiles"
                accept="image/*, video/*"
                multiple
                onChange={handleFileChange}
                required
              />
              {errors.mediaFiles && <p>{errors.mediaFiles}</p>}
            </div>

            <div>
              <label htmlFor="eventName">Event Name:</label>
              <input
                type="text"
                id="eventName"
                name="eventName"
                value={formData.eventName}
                onChange={handleInputChange}
                required
              />
              {errors.eventName && <p>{errors.eventName}</p>}
            </div>

            <div>
              <label htmlFor="description">Description:</label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                required
              ></textarea>
              {errors.description && <p>{errors.description}</p>}
            </div>

            <div>
              <label htmlFor="date">Date:</label>
              <input type="date" id="date" name="date" value={formData.date} onChange={handleInputChange} required />
              {errors.date && <p>{errors.date}</p>}
            </div>

            <div>
              <label htmlFor="location">Location:</label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                required
              />
              {errors.location && <p>{errors.location}</p>}
            </div>

            <div>
              <label htmlFor="artists">Artists:</label>
              <input
                type="text"
                id="artists"
                name="artists"
                placeholder="Enter artists as a comma-separated list"
                value={formData.artists}
                onChange={handleInputChange}
                required
              />
              {errors.artists && <p>{errors.artists}</p>}
            </div>

            <div>
              <label htmlFor="ticketPrice">Ticket Price:</label>
              <input
                type="number"
                id="ticketPrice"
                name="ticketPrice"
                min="0"
                step="0.01"
                value={formData.ticketPrice}
                onChange={handleInputChange}
                required
              />
              {errors.ticketPrice && <p>{errors.ticketPrice}</p>}
            </div>

            <div>
              <label htmlFor="availableTickets">Available Tickets:</label>
              <input
                type="number"
                id="availableTickets"
                name="availableTickets"
                min="0"
                value={formData.availableTickets}
                onChange={handleInputChange}
                required
              />
              {errors.availableTickets && <p>{errors.availableTickets}</p>}
            </div>

            <div>
              <label htmlFor="eventType">Event Type:</label>
              <input
                type="text"
                id="eventType"
                name="eventType"
                value={formData.eventType}
                onChange={handleInputChange}
                required
              />
              {errors.eventType && <p>{errors.eventType}</p>}
            </div>

            <div>
              <label htmlFor="organizer">Organizer:</label>
              <input
                type="text"
                id="organizer"
                name="organizer"
                value={formData.organizer}
                onChange={handleInputChange}
                required
              />
              {errors.organizer && <p>{errors.organizer}</p>}
            </div>

            <button type="submit">Save</button>
            <button type="button">Delete</button>
          </form>
          <div className="editor_column">
            {posters.length > 0 ? (
              <ul>
                {posters.map((poster) => (
                  <li key={poster.id} onClick={() => handleEditPoster(poster)}>
                    {poster.eventName}
                  </li>
                ))}
              </ul>
            ) : (
              <p>No posters available.</p>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default AddPost;
