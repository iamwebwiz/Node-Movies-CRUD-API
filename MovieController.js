/**
 * Get all movies in the database
 *
 * @param req
 * @param res
 */
export const getMovies = (req, res) => {
  res.json(movies);
};
