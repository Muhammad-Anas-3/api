import Hotel from "../models/hotel_model.js";
import Room from "../models/room_model.js";

const createHotel = async (req, res, next) => {
  req.body.city = req.body.city.toLowerCase();
  const newHotel = new Hotel(req.body);
  try {
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
  } catch (error) {
    next(error);
  }
};
const updateHotel = async (req, res, next) => {
  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedHotel);
  } catch (error) {
    next(error);
  }
};
const deleteHotel = async (req, res, next) => {
  try {
    await Hotel.findByIdAndDelete(req.params.id);
    res.status(200).json("Hotel has been deleted.");
  } catch (error) {
    next(error);
  }
};
const getHotel = async (req, res, next) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    res.status(200).json(hotel);
  } catch (error) {
    next(error);
  }
};
const getHotels = async (req, res, next) => {
  const { min, max, limit, price, ...others } = req.query;
  try {
    let hotels = await Hotel.find({
      ...others,
      cheapestPrice: { $gte: min || 1, $lte: max || 999 },
    }).limit(limit);

    res.status(200).json(hotels);
  } catch (error) {
    next(error);
  }
};

const getHotelRooms = async (req, res, next) => {
  const hotelId = req.params.hotelid;
  try {
    const hotel = await Hotel.findById(hotelId);
    if (!hotel) {
      return res.status(404).send("Hotel not found");
    }
    const list = await Promise.all(
      hotel.rooms.map((room) => {
        return Room.findById(room);
      })
    );
    res.status(200).json(list);
  } catch (err) {
    next(err);
  }
};

export {
  createHotel,
  updateHotel,
  deleteHotel,
  getHotel,
  getHotels,
  getHotelRooms,
};
